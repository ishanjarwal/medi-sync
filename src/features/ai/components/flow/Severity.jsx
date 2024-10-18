import { Slider } from '@/components/ui/slider'
import clsx from 'clsx'
import React from 'react'

const options = [
    "Low",
    "Mild",
    "Moderate",
    "Severe",
    "Critical"
]

const Severity = ({ formData, setFormData }) => {
    return (
        <div>
            <div className='flex flex-col gap-4'>
                <label className='dark:text-white' >How would you rate the severity of the symptoms</label>
                <div className='relative w-full'>
                    {options.map((item, idx) => (
                        <span
                            key={"severityOption" + idx}
                            className={clsx(
                                'absolute -translate-x-1/2  text-center text-sm dark:text-white/50 text-black/50',
                                { 'left-[0%] translate-x-0': idx == 0 },
                                { 'left-[25%]': idx == 1 },
                                { 'left-[50%]': idx == 2 },
                                { 'left-[75%]': idx == 3 },
                                { 'left-[100%] -translate-x-full': idx == 4 },
                            )}>
                            {item}
                        </span>
                    ))}
                </div>
                <div className='py-4'>
                    <Slider
                        defaultValue={[50]}
                        max={100}
                        step={25}
                        value={formData.severity}
                        onValueChange={(v) => {
                            console.log(v)
                            setFormData(prev => ({ ...prev, severity: v }))
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Severity
