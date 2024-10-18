"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { z } from 'zod'
import { Form as ShadcnForm } from "@/components/ui/form"
import CustomFormField from '@/components/CustomFormField'
import { Button } from '@/components/ui/button'
import { resetSchedulable } from '../slice'


const formSchema = z.object({
    username: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
})

const ScheduleModal = () => {

    const schedulable = useSelector(state => state.admin.schedulable);
    const dispatch = useDispatch();

    const form = useForm({
        // resolver: zodResolver(formSchema),
        defaultValues: {

        }
    })
    function onSubmit(values) {
        console.log(values)
    }


    return (
        <>
            {schedulable ? (
                <div className='flex justify-center items-center bg-white/25 backdrop-blur-sm dark:bg-white/5 min-h-screen w-full fixed top-0 left-0 z-10' >
                    <div className='max-w-lg w-full shadow-xl rounded-xl bg-primary-foreground dark:bg-black p-8'>
                        <div>
                            <h1 className='dark:text-white text-xl font-bold'>Schedule an Appointment</h1>
                            <p className='dark:text-white/50 mt-2'>Fill the details below to fix the appointment.</p>
                        </div>
                        <div>
                            <ShadcnForm {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)}>
                                    <div className='mt-4'>
                                        <CustomFormField
                                            name={"time_slot"}
                                            fieldType={"select"}
                                            label={"Time for appointment"}
                                            control={form.control}
                                            placeholder={"Select a Time Slot"}
                                            options={[
                                                "10:00AM - 11:00AM",
                                                "11:00AM - 12:00PM",
                                                "12:00PM - 1:00PM",
                                                "1:00PM - 2:00PM",
                                                "2:00PM - 3:00PM",
                                                "3:00PM - 4:00PM",
                                                "4:00PM - 5:00PM",
                                                "5:00PM - 6:00PM"
                                            ]}
                                        />
                                    </div>
                                    <div className='mt-4'>
                                        <CustomFormField
                                            name={"notes"}
                                            fieldType={"textarea"}
                                            label={"Notes (optional)"}
                                            control={form.control}
                                        />
                                    </div>
                                    <div className='mt-8 flex flex-col'>
                                        <Button className="bg-green-500 hover:bg-green-600">
                                            Schedule Appointment
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                dispatch(resetSchedulable())
                                            }}
                                            variant="outline" className="mt-2 text-white">
                                            Cancel
                                        </Button>
                                    </div>
                                </form>
                            </ShadcnForm>
                        </div>
                    </div>
                </div >
            ) : (
                null
            )}
        </>
    )
}

export default ScheduleModal
