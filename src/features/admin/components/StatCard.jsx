"use client"
import clsx from 'clsx'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../slice'

const StatCard = ({ icon, num, type, color, idx }) => {

    const activeTab = useSelector(state => state.admin.activeTab);
    const dispatch = useDispatch();

    const ringColors = {
        green: "ring-green-500",
        yellow: "ring-yellow-500",
        red: "ring-red-500",
        blue: "ring-blue-500"
    }
    const textColors = {
        green: "text-green-500",
        yellow: "text-yellow-500",
        red: "text-red-500",
        blue: "text-blue-500"
    }

    const gradientColors = {
        green: "from-green-500/10",
        yellow: "from-yellow-500/10",
        red: "from-red-500/10",
        blue: "from-blue-500/10"
    }

    return (
        <div
            onClick={() => dispatch(setActiveTab(idx))}
            className={clsx(
                'rounded-2xl border-2 border-input bg-white dark:bg-black p-6 h-40 w-full flex flex-col justify-between cursor-pointer duration-150 hover:scale-[105%] hover:bg-primary-foreground/75 dark:hover:bg-black/50 ring-offset-0 bg-gradient-to-tr to-white dark:to-black',
                (activeTab != idx) && 'ring-0 ring-transparent',
                (activeTab == idx) && `ring ${ringColors[color]}  bg-primary-foreground/75 dark:bg-black/50`,
                `${gradientColors[color]}`
            )
            }
        >
            <div className='flex justify-start items-center gap-x-2'>
                <span className={clsx(
                    'text-4xl',
                    `${textColors[color]}`
                )}>
                    {icon}
                </span>
                <span className='text-3xl font-bold dark:text-white'>{num}</span>
            </div>
            <p className='text-lg dark:text-white mt-4 capitalize'>{type} Appointments</p>
        </div >
    )
}

export default StatCard
