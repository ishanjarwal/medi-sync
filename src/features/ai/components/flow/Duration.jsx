import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ThemeContext } from "@/contexts/ThemeContext"
import clsx from "clsx";
import React, { useContext } from 'react'


const timePeriods = [
    { label: "Few Days", value: "few-days" },
    { label: "1 Week", value: "one-week" },
    { label: "Few Weeks", value: "few-weeks" },
    { label: "1 Month", value: "one-month" },
    { label: "Few Months", value: "few-months" },
    { label: "1 Year", value: "one-year" },
    { label: "Few Years", value: "few-years" }
];

const Duration = ({ formData, setFormData }) => {

    const { theme } = useContext(ThemeContext);

    return (
        <div>
            <div className='flex flex-col gap-4'>
                <label className='dark:text-white' >How long have you been suffering from these symptoms.</label>
                <div>
                    <Select
                        value={formData.frequency}
                        onValueChange={(v) => {
                            setFormData(prev => ({ ...prev, frequency: v }))
                        }}>
                        <SelectTrigger
                            className="dark:text-white py-6 px-4 rounded-xl dark:bg-black">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent className={clsx(
                            "border-input",
                            { "text-white bg-black": theme == "dark" },
                            { "text-black bg-white": theme != "dark" },
                        )}>
                            {timePeriods.map((option, idx) => (
                                <SelectItem value={option.value}>{option.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    )
}

export default Duration
