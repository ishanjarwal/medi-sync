"use client"

import { z } from "zod"
import { Label } from '@radix-ui/react-label'
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form as ShadcnForm,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc";
import { FaRegUser } from "react-icons/fa6";
import { GoLock } from "react-icons/go";
import CustomFormField from "@/components/CustomFormField"
import Link from "next/link"
import { signIn, useSession } from 'next-auth/react';
import { useEffect } from "react"
import { useRouter } from "next/navigation"

const formSchema = z.object({
    username: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
})

const Form = () => {

    const { status } = useSession();
    const router = useRouter();
    useEffect(() => {
        if (status == "authenticated") {
            router.push("/ai");
        }
    }, [status]);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: ""
        }
    })

    function onSubmit(values) {
        console.log(values)
    }



    return (
        <div>
            <ShadcnForm {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <CustomFormField
                        name={"username"}
                        fieldType={"text"}
                        label={"Username"}
                        icon={<FaRegUser />}
                        control={form.control}
                        placeholder={"Username"}
                    />
                    <CustomFormField
                        name={"password"}
                        fieldType={"password"}
                        label={"Password"}
                        icon={<GoLock />}
                        control={form.control}
                        placeholder={"Password"}
                    />
                    <Button className="bg-primary text-primary-foreground w-full mt-4" type="submit">Login</Button>
                </form>
            </ShadcnForm>
            <p className='dark:text-white text-center mt-4'>
                Don't have an account ? <Link className="text-primary font-bold" href={'/register'} >Register</Link>
            </p>
            <div className="mt-4 flex justify-between items-center py-4 space-x-2">
                <span className="block flex-1 w-full h-[2px] bg-black/10 dark:bg-white/10"></span>
                <span className="dark:text-white">OR</span>
                <span className="block flex-1 w-full h-[2px] bg-black/10 dark:bg-white/10"></span>
            </div>
            <div className="mt-4" >
                <Button
                    onClick={() => { signIn("google") }}
                    className="bg-background shadow-lg text-foreground w-full hover:bg-input border-2 border-primary py-6" type="submit">
                    <FcGoogle className="text-xl me-2" />
                    Login with Google
                </Button>
            </div>
        </div>
    )
}

export default Form
