import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link';

const Results = ({ data }) => {
    return (
        <div>
            <Accordion type="single" collapsible className="w-full dark:text-white flex flex-col gap-8">
                {data.map((item, idx) => (
                    <AccordionItem value={"item-" + idx} >
                        <div className="overflow-hidden rounded-xl p-1 py-1  bg-white/10 w-full ring-green-500 ring-2">
                            <AccordionTrigger className="p-0 text-xl font-bold">
                                <div className='relative w-full p-4 rounded-xl overflow-hidden flex justify-start items-center'>
                                    <span className='absolute top-0 left-0 h-full bg-green-400/50 w-full' style={{ width: item.chance + "%" }}></span>
                                    <span className='relative'>
                                        {item.name}
                                    </span>
                                    <span className='text-2xl ms-2'>
                                        ({item.chance}%)
                                    </span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className='px-6 text-lg py-2'>
                                    {item.description}
                                </div>
                                <div className='px-4'>
                                    <Accordion type="single" collapsible className="w-full dark:text-white">
                                        <AccordionItem value={"inside-1"}>
                                            <AccordionTrigger>
                                                Suggested Diet
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <ul className='dark:text-white list-disc ms-6'>
                                                    {item.diet.map((dietItem, idx) => (
                                                        <li>{dietItem}</li>
                                                    ))}
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value={"inside-2"}>
                                            <AccordionTrigger>
                                                Suggested Exercise
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <ul className='dark:text-white list-disc ms-6'>
                                                    {item.exercises.map((exerciseItem, idx) => (
                                                        <li>{exerciseItem}</li>
                                                    ))}
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                                <div className='px-4'>
                                    <Link href={"/new-appointment/?disease=" + item.name} className='block  py-4 px-6 text-center text-white bg-primary rounded-xl w-full font-bold' >Fix an Appointment</Link>
                                </div>
                            </AccordionContent>
                        </div>
                    </AccordionItem>
                ))
                }
            </Accordion >
        </div >
    )
}

export default Results
