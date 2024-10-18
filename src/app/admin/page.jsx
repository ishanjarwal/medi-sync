import Header from '@/components/Header'
import React from 'react'
import { LiaCalendarTimes } from "react-icons/lia";
import { LuCalendarClock } from "react-icons/lu";
import { AiOutlineSchedule } from "react-icons/ai";
import AdminStatCard from '@/features/admin/components/StatCard';
import { AppointmentDataTable } from '@/features/admin/components/AppointmentDataTable';
import StatCardList from '@/features/admin/components/StatCardList';
import CancelModel from '@/features/admin/components/CancelModel';
import ScheduleModal from '@/features/admin/components/ScheduleModal';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Admin from '@/components/Admin';

const page = () => {
    return (
        <Admin>
            <div className="min-h-screen bg-card dark:bg-black/95 lg:p-16 md:p-8 p-4" >
                <Header />
                <CancelModel />
                <ScheduleModal />
                <div className='mt-8'>
                    <div className='p-8 bg-primary-foreground dark:bg-black rounded-xl flex items-center lg:flex-row flex-col lg:gap-8 gap-4'>
                        <div>
                            <Avatar className="h-24 w-24">
                                <AvatarImage src="https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=600" className="object-cover" />
                                <AvatarFallback>RP</AvatarFallback>
                            </Avatar>
                        </div>
                        <div>
                            <h1 className='dark:text-white font-bold text-3xl  lg:text-start text-center'>Welcome, Dr. Raj Patel</h1>
                            <p className='dark:text-white/50 lg:text-start text-center'>Manage your appointments and patients here</p>
                        </div>
                    </div>
                </div>
                <StatCardList />
                <div className='mt-8'>
                    <AppointmentDataTable />
                </div>
            </div>
        </Admin>
    )
}

export default page
