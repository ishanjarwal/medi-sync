"use client"
import CustomFormField from '@/components/CustomFormField'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Form as ShadcnForm } from "@/components/ui/form"
import { z } from 'zod'
import { FaRegUser } from 'react-icons/fa6'
import { IoCallOutline, IoDocumentTextOutline, IoMailOutline } from "react-icons/io5";
import { PiIdentificationCardLight } from "react-icons/pi";
import { IoMdFingerPrint } from "react-icons/io"
import { Button } from '@/components/ui/button'

// for validation
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
        <div className="mt-8">
            <ShadcnForm {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div>
                        <h1 className='text-3xl font-bold dark:text-white'>Personal Details</h1>
                        <div>
                            <div className="mt-4">
                                <CustomFormField
                                    name={"full_name"}
                                    fieldType={"text"}
                                    label={"Full Name"}
                                    icon={<FaRegUser />}
                                    control={form.control}
                                    placeholder={"Your Full Name"}
                                />
                            </div>
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
                                <CustomFormField
                                    name={"email"}
                                    fieldType={"text"}
                                    label={"Email"}
                                    icon={<IoMailOutline />}
                                    control={form.control}
                                    placeholder={"Your Email"}
                                />
                                <CustomFormField
                                    name={"phone"}
                                    fieldType={"phone"}
                                    label={"Phone"}
                                    icon={<IoCallOutline />}
                                    control={form.control}
                                    placeholder={"Your Phone Number"}
                                />
                            </div>
                            <div className="mt-4">
                                <CustomFormField
                                    name={"address"}
                                    fieldType={"textarea"}
                                    label={"Address"}
                                    icon={<FaRegUser />}
                                    control={form.control}
                                    placeholder={"Your Address"}
                                />
                            </div>
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
                                <CustomFormField
                                    name={"dob"}
                                    fieldType={"date"}
                                    label={"Date of Birth"}
                                    // icon={<IoMailOutline />}
                                    control={form.control}
                                // placeholder={""}
                                />
                                <CustomFormField
                                    name={"gender"}
                                    fieldType={"radio"}
                                    label={"Gender"}
                                    // icon={<IoCallOutline />}
                                    control={form.control}
                                    options={[{ value: "male", label: "Male" }, { value: "female", label: "Female" }, { value: "other", label: "Other" }]}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <h1 className='text-3xl font-bold dark:text-white'>Medical Information</h1>
                        <div className="mt-4">
                            <CustomFormField
                                name={"current_doctor"}
                                fieldType={"select"}
                                label={"Current Doctor"}
                                icon={<FaRegUser />}
                                control={form.control}
                                placeholder={"Your Current Doctor"}
                                options={['Dr. Emily Carter (Cardiology)', "Dr. Raj Patel (Orthopedics)", "Dr. Lucas Chen (Pediatrics)"]}
                            />
                        </div>
                        <div>
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
                                <CustomFormField
                                    name={"allergies"}
                                    fieldType={"textarea"}
                                    label={"Allergies"}
                                    control={form.control}
                                    placeholder={"Allergies (if any)"}
                                />
                                <CustomFormField
                                    name={"current_medication"}
                                    fieldType={"textarea"}
                                    label={"Current Medication"}
                                    icon={<IoCallOutline />}
                                    control={form.control}
                                    placeholder={"Current Medication (if any)"}
                                />
                            </div>
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
                                <CustomFormField
                                    name={"genetic_diseases"}
                                    fieldType={"textarea"}
                                    label={"Genetic Disease(s)"}
                                    control={form.control}
                                    placeholder={"Genetic Disease(s) (if any)"}
                                />
                                <CustomFormField
                                    name={"past_medical_history"}
                                    fieldType={"textarea"}
                                    label={"Past Medical History"}
                                    icon={<IoCallOutline />}
                                    control={form.control}
                                    placeholder={"Past Medical History (if any)"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <h1 className='text-3xl font-bold dark:text-white'>Identification</h1>
                        <div>
                            <div className='mt-4'>
                                <CustomFormField
                                    name={"identification_type"}
                                    fieldType={"select"}
                                    label={"Identification Document Type"}
                                    icon={<PiIdentificationCardLight />}
                                    control={form.control}
                                    placeholder={"Select Identification Type"}
                                    options={['Adhaar Card', "PAN Card", "Driving License", "Passport", "Voter ID Card"]}
                                />
                            </div>
                            <div className='mt-4'>
                                <CustomFormField
                                    name={"identification_number"}
                                    fieldType={"text"}
                                    label={"Identification Number"}
                                    icon={<IoMdFingerPrint />}
                                    control={form.control}
                                    placeholder={"Your Identification Number"}
                                />
                            </div>
                            <div className='mt-4'>
                                <CustomFormField
                                    name={"identification_document"}
                                    fieldType={"file"}
                                    label={"Identification Document"}
                                    icon={<IoDocumentTextOutline />}
                                    control={form.control}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <h1 className='text-3xl font-bold dark:text-white'>Consent</h1>
                        <div>
                            <div className='mt-4'>
                                <CustomFormField
                                    name={"consent_1"}
                                    fieldType={"checkbox"}
                                    label={"I consent to the use and disclosure of my health information for my treatment purposes"}
                                    control={form.control}
                                />
                            </div>
                            <div className='mt-4'>
                                <CustomFormField
                                    name={"consent"}
                                    fieldType={"checkbox"}
                                    label={"The above information is true to the best of my knowledge"}
                                    control={form.control}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='mt-8 pt-8 border-t border-input'>
                        <Button type="submit" className="w-full">
                            Submit and Continue
                        </Button>
                    </div>
                </form>
            </ShadcnForm>
        </div>
    )
}

export default Form
