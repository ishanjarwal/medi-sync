import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <div className='flex w-min justify-between items-center gap-x-2'>
            <div className='relative w-12 h-12 shadow-lg rounded-lg overflow-hidden border border-black/25'>
                <Image src={"/logo.png"} fill className='object-center object-cover h-full w-full' />
            </div>
            <h1 className='text-2xl font-bold dark:text-white'>MediSync</h1>
        </div>
    )
}

export default Logo
