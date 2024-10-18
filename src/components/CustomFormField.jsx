"use client"
import { FaRegCalendar, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { useCallback, useContext, useEffect, useState } from "react";
import { Textarea } from "./ui/textarea";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { ThemeContext } from "@/contexts/ThemeContext";
import clsx from "clsx";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
// import ReactDatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { IoDocumentTextOutline } from "react-icons/io5";
import { useDropzone } from "react-dropzone";
import { map } from "zod";
import { Checkbox } from "./ui/checkbox";
import Image from "next/image";

const RenderInput = ({ field, props }) => {
    const { fieldType } = props;
    switch (fieldType) {
        case "text":
            return (
                <div className="bg-white border-2 border-input rounded-lg flex items-center ring-ring focus-within:ring-2 py-1 dark:bg-black">
                    {props.icon && (
                        <span className="ms-3 dark:text-white">
                            {props.icon}
                        </span>
                    )}
                    <FormControl>
                        <Input
                            placeholder={props.placeholder}
                            {...field}
                            className="shad-input border-0 dark:text-white/50 mt-0"
                        />
                    </FormControl>
                </div>
            );
        case "password":
            return <PasswordInput field={field} props={props} />
        case "textarea":
            return (
                <FormControl>
                    <div className="bg-white border-2 border-input rounded-lg ring-ring focus-within:ring-2 py-1 dark:bg-black">
                        <Textarea
                            placeholder={props.placeholder}
                            {...field}
                            className="shad-input resize-none border-0 dark:text-white/50 mt-0"
                        />
                    </div>
                </FormControl>
            )
        case "phone":
            return (
                <FormControl>
                    <PhoneInput
                        defaultCountry="IN"
                        placeholder={props.placeholder}
                        international
                        withCountryCallingCode
                        value={field.value}
                        onChange={field.onChange}
                        className="input-phone"
                    />
                </FormControl>
            )
        case "date":
            return <DateInput field={field} props={props} />
        case "select":
            return <SelectInput field={field} props={props} />
        case "radio":
            return <RadioInput field={field} props={props} />
        case "file":
            return <FileInput field={field} props={props} />
        case "checkbox":
            return (
                <FormControl>
                    <div className="flex items-center gap-4">
                        <Checkbox
                            id={props.name}
                            checked={field.value}
                            onCheckedChange={field.onChange}
                        />
                        <label htmlFor={props.name} className="dark:text-white">
                            {props.label}
                        </label>
                    </div>
                </FormControl>
            )
    }
}

const PasswordInput = ({ field, props }) => {

    const [visible, setVisible] = useState(false);

    return (
        <div className="bg-white border-2 border-input rounded-lg flex items-center ring-ring focus-within:ring-2 py-1 dark:bg-black">
            {props.icon && (
                <span className="ms-3 dark:text-white">
                    {props.icon}
                </span>
            )}
            <FormControl>
                <Input
                    placeholder={props.placeholder}
                    {...field}
                    type={visible ? "text" : "password"}
                    className="shad-input border-0 dark:text-white/50"
                />
            </FormControl>
            {field.value && (
                <span
                    onClick={() => { setVisible(!visible) }}
                    className="me-3 cursor-pointer dark:text-white">
                    {visible ? <FaRegEyeSlash /> : <FaRegEye />}
                </span>
            )}
        </div>
    )
}

const SelectInput = ({ field, props }) => {

    const { theme } = useContext(ThemeContext);

    return (
        <Select onValueChange={field.onChange} defaultValue={field.value} >
            <FormControl>
                <SelectTrigger className="flex justify-between items-center gap-x-4 dark:bg-black dark:text-white py-6 rounded-lg">
                    <div className="flex justify-start items-center gap-x-4">
                        {props.icon && (
                            <span className="ms-3 dark:text-white">
                                {props.icon}
                            </span>
                        )}
                        <SelectValue placeholder={props.placeholder} />
                    </div>
                </SelectTrigger>
            </FormControl>
            <SelectContent className={clsx(
                "border-input",
                { "text-white bg-black": theme == "dark" },
                { "text-black bg-white": theme != "dark" },
            )}>
                {props.options.map((option, idx) => (
                    <SelectItem className="dark:text-white" value={option}>{option}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

const RadioInput = ({ field, props }) => {
    return (
        <FormControl>
            <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex gap-x-2 flex-wrap"
            >
                {props.options.map((option, idx) => (
                    <FormItem className="flex items-center space-x-3 space-y-0 ">
                        <FormLabel className="flex justify-center items-center  gap-x-2 cursor-pointer bg-white dark:bg-white/10 dark:text-white rounded-md  py-3 px-3 whitespace-nowrap">
                            <FormControl>
                                <RadioGroupItem value={option.value} />
                            </FormControl>
                            <span>{option.label}</span>
                        </FormLabel>
                    </FormItem>
                ))}
            </RadioGroup >
        </FormControl>
    )
}

const DateInput = ({ field, props }) => {
    return (
        <div className="flex items-center px-4 rounded-lg border border-input bg-white dark:bg-black py-2">
            <span className="dark:text-white text-xl">
                <FaRegCalendar />
            </span>
            <FormControl>
                <DatePicker
                    onChange={field.onChange}
                    value={field.value}
                    calendarIcon={false}
                    clearIcon={false}
                    className="outline-none border-none"
                />
                {/* <ReactDatePicker
                    showTimeSelect={props.showTimeSelect ?? false}
                    selected={field.value}
                    onChange={(date) => field.onChange(date)}
                    timeInputLabel="Time:"
                    dateFormat={props.dateFormat ?? "MM/dd/yyyy"}
                    wrapperClassName="date-picker"
                    showMonthYearPicker
                /> */}
            </FormControl>
        </div>
    )
}

const FileInput = ({ field, props }) => {

    const onDrop = useCallback((acceptedFiles) => {
        field.onChange(acceptedFiles);
        console.log(acceptedFiles)
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'image/*', // Accept only image files
        multiple: false
    });

    return (
        <div
            className="cursor-pointer outline-none focus:ring-2 ring-primary rounded-xl border-2 border-dashed border-input overflow-hidden"
            {...getRootProps()}
        >
            <input {...getInputProps()} />
            {field.value ?
                (
                    <div className="flex flex-col justify-center items-center dark:bg-black py-8">
                        <Image
                            className="max-w-sm"
                            width={400}
                            height={300}
                            src={field.value[0] && URL.createObjectURL(field.value[0])}
                        />
                        <p className="dark:text-white/75 text-center max-w-sm px-4">
                            {field.value[0].name}
                        </p>
                    </div>
                )
                : (
                    <div
                        className="flex flex-col justify-center items-center gap-2 dark:bg-black bg-white py-8 cursor-pointer"
                    >
                        <span className="aspect-square rounded-full bg-primary-foreground dark:bg-white/10 px-4 py-1 flex justify-center items-center">
                            <IoDocumentTextOutline className="text-primary text-4xl" />
                        </span>
                        <p className="text-sm dark:text-white/50 text-black">
                            <span className="text-primary">Click&nbsp;</span>
                            to upload or Drag and Drop files
                        </p>
                        <p className="text-sm dark:text-white/50 text-black">JPEG or PNG supported</p>
                    </div>
                )}
        </div>
    )
}


const CustomFormField = (props) => {
    return (
        <FormField
            control={props.control}
            name={props.name}
            render={({ field }) => (
                <FormItem className="flex-1">
                    {props.label && (props.fieldType != "checkbox") && (
                        <FormLabel className="shad-input-label dark:text-white">{props.label}</FormLabel>
                    )}
                    <RenderInput field={field} props={props} />
                    <FormMessage className="shad-error" />
                </FormItem>
            )}
        />
    );
};

export default CustomFormField;