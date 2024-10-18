"use client"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { date } from "zod";
import React from 'react'
import { Button } from "../../../components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AiOutlineSchedule } from 'react-icons/ai'
import { LiaCalendarTimes } from 'react-icons/lia'
import { LuCalendarClock } from 'react-icons/lu'
import { useDispatch } from "react-redux";
import { setCancellable, setSchedulable } from "../slice";

const data = [
    {
        id: 1,
        patient: 'Ishan Jarwal',
        date: '2024-10-25',
        time: '1:00 PM',
        status: 'scheduled'
    },
    {
        id: 2,
        patient: 'Jane Smith',
        date: '2024-10-13',
        time: '11:30 AM',
        status: 'pending'
    },
    {
        id: 3,
        patient: 'Robert Brown',
        date: '2024-10-14',
        time: '1:00 PM',
        status: 'cancelled'
    },
    {
        id: 4,
        patient: 'Emily Davis',
        date: '2024-10-15',
        time: '9:00 AM',
        status: 'scheduled'
    },
    {
        id: 5,
        patient: 'Michael Johnson',
        date: '2024-10-16',
        time: '3:00 PM',
        status: 'pending'
    },
    {
        id: 6,
        patient: 'Sarah Williams',
        date: '2024-10-17',
        time: '4:30 PM',
        status: 'cancelled'
    }
];

export function AppointmentDataTable() {

    const dispatch = useDispatch();

    return (
        <Table className="dark:bg-black bg-primary-foreground rounded-xl overflow-hidden dark:text-white">
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader>
                <TableRow className="bg-red-300 dark:bg-red-500/10">
                    <TableHead className="w-[100px]">S.No</TableHead>
                    <TableHead>Patient</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((item) => (
                    <TableRow key={item.id} className="hover:bg-red-100 dark:hover:bg-red-500/10">
                        <TableCell className="font-medium">{item.id}</TableCell>
                        <TableCell>
                            {item.patient}
                        </TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>{item.time}</TableCell>
                        <TableCell>
                            {renderBadge(item.status)}
                        </TableCell>
                        <TableCell className="float-end">
                            <div className="flex items-center gap-x-2">
                                <Button
                                    onClick={() => {
                                        dispatch(setSchedulable("1"));
                                    }}
                                    className="bg-green-600 hover:bg-green-600/75" >Schedule</Button>
                                <Button
                                    variant="secondary"
                                    className="bg-rose-600 hover:bg-rose-600/75 text-white"
                                    onClick={() => {
                                        dispatch(setCancellable("1"));
                                    }}
                                >Cancel</Button>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            {/* <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
            </TableFooter> */}
        </Table>
    )
}


const renderBadge = (status) => {
    switch (status) {
        case 'pending':
            return (
                <Badge className="bg-yellow-400 dark:bg-yellow-400/20 dark:text-yellow-300 flex justify-center items-center w-max dark:hover:bg-greyellowen-400/20">
                    <span className="me-1"><LuCalendarClock /></span>
                    <span className="capitalize"> {status}</span>
                </Badge>
            )
        case 'scheduled':
            return (
                <Badge className="bg-green-400 dark:bg-green-400/20 dark:text-green-300 flex justify-center items-center w-max dark:hover:bg-green-400/20">
                    <span className="me-1"><AiOutlineSchedule /></span>
                    <span className="capitalize"> {status}</span>
                </Badge>
            )
        case 'cancelled':
            return (
                <Badge className="bg-red-400 dark:bg-red-400/20 dark:text-red-300 flex justify-center items-center w-max dark:hover:bg-red-400/20">
                    <span className="me-1"><LiaCalendarTimes /></span>
                    <span className="capitalize"> {status}</span>
                </Badge>
            )
    }
}