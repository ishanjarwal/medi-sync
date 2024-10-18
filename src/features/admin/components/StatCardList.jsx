"use client"
import React from 'react'
import { AiOutlineSchedule } from 'react-icons/ai'
import { LiaCalendarTimes } from 'react-icons/lia'
import { LuCalendarClock } from 'react-icons/lu'
import { FaRegListAlt } from "react-icons/fa";
import StatCard from './StatCard'

const StatCardList = () => {


    return (
        <div className='mt-8 flex md:flex-row flex-col justify-between items-center gap-4' >
            <StatCard
                idx={0}
                type={"all"}
                color={"blue"}
                num={100}
                icon={<FaRegListAlt />}
            />
            <StatCard
                idx={1}
                type={"scheduled"}
                color={"green"}
                num={32}
                icon={<AiOutlineSchedule />}
            />
            <StatCard
                idx={2}
                type={"pending"}
                color={"yellow"}
                num={12}
                icon={<LuCalendarClock />}
            />
            <StatCard
                idx={3}
                type={"cancelled"}
                color={"red"}
                num={3}
                icon={<LiaCalendarTimes />}
            />
        </div>
    )
}

export default StatCardList
