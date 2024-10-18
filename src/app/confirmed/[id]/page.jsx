import Logo from '@/components/Logo'
import React from 'react'
import { BsPatchCheck } from "react-icons/bs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link';



const page = ({ params }) => {
    const { id } = params;
    return (
        <div className='w-full min-h-screen bg-black'>
            <div className='flex flex-col items-center justify-center h-full w-full pt-16 px-4'>
                <Logo />
                <div className=' flex flex-col justify-center items-center gap-8 mt-8'>
                    <span className='text-primary text-[128px]'>
                        <BsPatchCheck />
                    </span>
                    <h1 className='text-4xl max-w-3xl text-center text-white'>
                        Your&nbsp;
                        <span className='text-primary'>
                            appointment request
                        </span>&nbsp;
                        has been successfully submitted
                    </h1>
                    <p className='text-white/75 text-center max-w-3xl'>
                        We will get back to you after your request has been confirmed. You'll be notified via registered email.
                    </p>
                </div>

                <div className='mt-8 flex justify-center items-center max-w-3xl bg-white/10 rounded-xl p-4 w-full gap-x-8'>
                    <span className='text-white font-semibold'>Appointment Details : </span>
                    <span className='text-white flex items-center gap-x-2'>
                        <span>
                            <Avatar className="h-8 w-8">
                                <AvatarImage src="https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=600" />
                                <AvatarFallback>RP</AvatarFallback>
                            </Avatar>
                        </span>
                        <span>Dr. Raj Patel</span>
                    </span>
                    <span className='text-white'>25st Oct 2024 - 1:00 PM</span>
                </div>

                <div className='mt-8'>
                    <Link href={'/dashboard'} className='py-4 px-6 bg-primary text-white rounded-xl w-max mx-auto'>Go to Dashboard</Link>
                </div>

            </div>
        </div>
    )
}

export default page
