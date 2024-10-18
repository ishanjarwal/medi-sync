import prisma from '@/config/prismaClient';
import { NextResponse } from 'next/server';

export const GET = async (req, { params }) => {
    try {
        const { id } = params;
        const result = await prisma.results.findUnique({ where: { id } })
        if (!result) {
            return NextResponse.json({ status: "failed", message: "result not found" }, { status: 400 })
        }
        return NextResponse.json(result, { status: 200 })
    } catch (error) {
        console.log(err);
        return new NextResponse(JSON.stringify({ message: "Something went wrong", err }), { status: 500 })
    }
}