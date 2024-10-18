"use client"
import React, { useState } from 'react'
import 'swiper/css';
import Description from './flow/Description'
import Duration from './flow/Duration'
import Additional from './flow/Additional'
import Severity from './flow/Severity'
import { Button } from '@/components/ui/button'
import { PiMagicWand } from "react-icons/pi";
import axios from 'axios';
import { useRouter } from 'next/navigation';


const flow = [
    <Description />, <Duration />, <Severity />, <Additional />
]


const FormProgression = () => {

    const [formData, setFormData] = useState({
        description: "",
        severity: [50],
        frequency: "",
        notes: ""
    })
    const router = useRouter();

    async function sendData() {
        try {
            // console.log(formData)
            const response = await axios.post(`${process.env.NEXT_PUBLIC_ROOT}/api/ai`, formData, { withCredentials: true });
            console.log(response.data)
            if (response.status != 200) {
                router.push("/not-found");
            } else {
                router.push("/result/" + response.data.id);
            }
        } catch (error) {
            router.push("/error");
        }
    }

    return (
        <div className='mt-8'>
            <div className='flex flex-col gap-8'>
                {flow.map((item, idx) => (
                    <div key={"flow" + idx}>
                        {React.cloneElement(item, { formData, setFormData })}
                    </div>
                ))}
            </div>
            <div className='mt-8 pt-8 border-t border-input'>
                <Button
                    onClick={() => {
                        sendData()
                    }}
                    className="w-full py-8 rounded-xl">
                    <span className='me-2 text-xl'><PiMagicWand /></span>
                    <span>Diagnose with AI</span>
                </Button>
            </div>
        </div>
    )
}

export default FormProgression
