import Authenticated from '@/components/Authenticated'
import Header from '@/components/Header'
import FormProgression from '@/features/ai/components/FormProgression'
import Image from 'next/image'
import React from 'react'

const page = () => {

    return (
        <Authenticated>
            <div className='relative h-screen flex w-full'>
                <div className='relative lg:w-[70%] w-full h-full overflow-y-auto  backdrop-blur-md bg-gradient-to-tr from-rose-300 via-white to-rose-300 dark:from-[#000] dark:via-black dark:to-[#000] scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-primary dark:scrollbar-track-black primary-foreground scrollbar-track-white'>
                    <div className='lg:py-16 py-8 xl:px-32 md:px-16 px-8'>
                        <div>
                            <Header />
                        </div>
                        <div className='mt-8 w-full'>
                            <div>
                                <h1 className='dark:text-white text-4xl font-bold'>
                                    Diagnose your disease with AI
                                </h1>
                                {/* <p className='dark:text-white mt-4'>
                                Describe about your symptoms
                            </p> */}
                            </div>
                            <div>
                                <FormProgression />
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
