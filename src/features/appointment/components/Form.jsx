"use client"
import CustomFormField from '@/components/CustomFormField'
import React from 'react'
import { z } from 'zod'
import { Form as ShadcnForm } from "@/components/ui/form"
import { useForm } from 'react-hook-form'
import { FaRegUser } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'

const doctors = ['Dr. Emily Carter (Cardiology)', "Dr. Raj Patel (Orthopedics)", "Dr. Lucas Chen (Pediatrics)"]


const formSchema = z.object({
    username: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
})
const Form = () => {

    const form = useForm({
        // resolver: zodResolver(formSchema),
        defaultValues: {

        }
    })
    function onSubmit(values) {
        console.log(values)
    }

    return (
        <div className='mt-16'>
            <ShadcnForm {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className='mt-4'>
                        <CustomFormField
                            name={"doctor"}
                            fieldType={"select"}
                            label={"Preferred Doctor"}
                            icon={<FaRegUser />}
                            control={form.control}
                            placeholder={"Your preferred doctor"}
                            options={doctors}
                        />
                    </div>
                    <div className='mt-4 grid lg:grid-cols-2 gap-4'>
                        <CustomFormField
                            name={"reason"}
                            fieldType={"textarea"}
                            label={"Explain your problem in detail"}
                            control={form.control}
                            placeholder={"Describe here"}
                        />
                        <CustomFormField
                            name={"notes"}
                            fieldType={"textarea"}
                            label={"Additional notes for the doctor (optional)"}
                            control={form.control}
                            placeholder={"Describe here"}
                        />
                    </div>
                    <div className='mt-4 grid lg:grid-cols-2 gap-4'>
                        <CustomFormField
                            name={"date"}
                            fieldType={"date"}
                            label={"Date"}
                            control={form.control}
                        />
                        <CustomFormField
                            name={"time"}
                            fieldType={"select"}
                            label={"Time slot"}
                            control={form.control}
                            placeholder={"Select one"}
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
                    <div className='mt-8 pt-8 border-t border-input'>
                        <Button className="bg-primary w-full">
                            Submit Request
                        </Button>
                    </div>
                </form>
            </ShadcnForm>
        </div>
    )
}

export default Form
