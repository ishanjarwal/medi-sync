import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'
import { Button } from '@/components/ui/button'
import { CiCalendar } from "react-icons/ci";

const ListItem = () => {
    return (
        <div className='dark:bg-black bg-primary-foreground p-6 rounded-xl'>
            <div>
                <p className='flex items-center text-sm font-bold dark:text-white'>
                    <span className='text-2xl me-2'>
                        <CiCalendar />
                    </span>
                    <span>25st Oct 2024</span>
                    <span className='ms-2'>1:00 PM - 2:00 PM</span>
                </p>
            </div>
            <div className='mt-4 pt-4 border-t border-input'>
                <div className='flex gap-2 items-center'>
                    <Avatar className="h-12 w-12">
                        <AvatarImage src="https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=600" className="object-cover" />
                        <AvatarFallback>RP</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className='dark:text-white font-bold'>
                            Dr. Raj Patel
                        </p>
                        <p className='text-black/75 dark:text-white/75 text-sm'>Orthopedics</p>
                    </div>
                </div>
            </div>
            <div className='mt-4 pt-4 border-t border-input flex justify-end gap-4'>
                <Button className="bg-red-500 text-white">
                    Cancel
                </Button>
            </div>
        </div>
    )
}

export default ListItem
