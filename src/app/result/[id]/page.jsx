import Authenticated from '@/components/Authenticated'
import Header from '@/components/Header'
import Results from '@/features/ai/components/Results'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { parse } from 'postcss'
import React from 'react'
import { get } from 'react-hook-form'

async function fetchResult(id) {
    try {
        const url = `${process.env.NEXT_PUBLIC_ROOT}/api/ai/` + id;
        console.log(url)
        const response = await axios.get(url);
        if (response.status == 200) {
            return response.data;
        } else {
            return redirect("/not-found");
        }
    } catch (error) {
        console.log(error)
        return redirect("/error");
    }
}

const page = async ({ params }) => {
    const { id } = params;
    const result = await fetchResult(id);
    const data = JSON.parse(result.response);
    // console.log(res)

    return (
        <Authenticated>
            <div className='relative h-screen flex w-full'>
                <div className='relative lg:w-[70%] w-full h-full overflow-y-auto  backdrop-blur-md bg-primary-foreground/90 dark:bg-black/90 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-primary dark:scrollbar-track-black primary-foreground scrollbar-track-white'>
                    <div className='lg:py-16 py-8 xl:px-32 md:px-16 px-8'>
                        <div>
                            <Header />
                        </div>
                        <div className='mt-8 w-full'>
                            <div>
                                <h1 className='dark:text-white text-4xl font-bold'>
                                    Diagnosis Results
                                </h1>
                                <p className='dark:text-white mt-4'>
                                    The following possible diseases has been found according to your symptoms.
                                </p>
                            </div>
                            <div className='mt-8'>
                                <Results data={data} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative w-[30%] h-full lg:block hidden bg-primary-foreground/75 dark:bg-black/75'>
                    <Image src="/user-details-banner.jpg" fill className="object-center object-cover h-full w-full" />
                    <div className="relative w-full h-full">

                    </div>
                </div>
            </div>
        </Authenticated>
    )
}

export default page
