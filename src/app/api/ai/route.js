// import prisma from "@/utils/connect";
import prisma from '@/config/prismaClient';
import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai';
import { NextResponse } from "next/server";
import { nullable } from 'zod';


export const POST = async (req) => {
    // const { searchParams } = new URL(req.url);
    const body = await req.json();
    const { description, severity, frequency, notes } = body;

    const responseSchema = {
        description: "List of diseases",
        type: SchemaType.ARRAY,
        items: {
            type: SchemaType.OBJECT,
            properties: {
                name: {
                    type: SchemaType.STRING,
                    description: "Name of the disease",
                },
                description: {
                    type: SchemaType.STRING,
                    description: "Short description of the disease",
                },
                chance: {
                    type: SchemaType.NUMBER,
                    description: "Percentage chances of having this disease",
                },
                diet: {
                    type: SchemaType.ARRAY,
                    items: {
                        type: SchemaType.STRING
                    },
                    description: "List of beneficial diet options",
                },
                exercises: {
                    type: SchemaType.ARRAY,
                    items: {
                        type: SchemaType.STRING
                    },
                    description: "List of beneficial exercise options",
                },
            },
        },
    };

    // Combine this line with any other imports you have from @google/generative-ai
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    let model = genAI.getGenerativeModel({
        model: "gemini-1.5-pro",
        generationConfig: {
            responseMimeType: "application/json",
            responseSchema,
        }
    });



    // generate the main prompt
    const prompt = `According to the given description, predict 5 possible diseases that the someone can be suffering from. Description of the symptoms as given by the person is : ${description}. The serverity is ${severity} and the I have been facing these issues from ${frequency}.
    `;

    console.log(prompt)

    try {
        let result = await model.generateContent(prompt);
        const modelResponse = result.response.text();
        // Save response to DB
        const newResult = await prisma.results.create({ data: { response: modelResponse } })

        // return NextResponse.json({ id: newTrip.id }, { status: 200 })
        return NextResponse.json({ id: newResult.id }, { status: 200 });
    } catch (err) {
        console.log(err);
        return new NextResponse(JSON.stringify({ message: "Something went wrong", err }), { status: 500 })
    }
}

