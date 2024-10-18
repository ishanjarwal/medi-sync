"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { z } from 'zod'
import { Form as ShadcnForm } from "@/components/ui/form"
import CustomFormField from '@/components/CustomFormField'
import { Button } from '@/components/ui/button'
import { resetCancellable } from '../slice'


const formSchema = z.object({
    username: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
})

const CancelModel = () => {

    const cancellable = useSelector(state => state.admin.cancellable);
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
            {cancellable ? (
                <div className='flex justify-center items-center bg-white/25 backdrop-blur-sm dark:bg-white/5 min-h-screen w-full fixed top-0 left-0 z-10' >
                    <div className='max-w-lg w-full shadow-xl rounded-xl bg-primary-foreground dark:bg-black p-8'>
                        <div>
                            <h1 className='dark:text-white text-xl font-bold'>Cancel an Appointment</h1>
                            <p className='dark:text-white/50 mt-2'>Specify the reason for cancelling the appointment.</p>
                        </div>
                        <div>
                            <ShadcnForm {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)}>
                                    <div className='mt-4'>
                                        <CustomFormField
                                            name={"reason"}
                                            fieldType={"textarea"}
                                            label={"Reason for Cancellation"}
                                            control={form.control}
                                        />
                                    </div>
                                    <div className='mt-8 flex flex-col'>
                                        <Button className="bg-red-500">
                                            Confirm
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                dispatch(resetCancellable())
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

export default CancelModel
