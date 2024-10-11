"use client"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { useState } from "react";



const RenderInput = ({ field, props }) => {
    const { fieldType } = props;
    switch (fieldType) {
        case "text":
            return (
                <div className="bg-white border-2 border-input rounded-md flex items-center ring-ring focus-within:ring-2 py-1 dark:bg-black">
                    {props.icon && (
                        <span className="ms-3 dark:text-white">
                            {props.icon}
                        </span>
                    )}
                    <FormControl>
                        <Input
                            placeholder={props.placeholder}
                            {...field}
                            className="shad-input border-0 dark:text-white/50"
                        />
                    </FormControl>
                </div>
            );
        case "password":
            return <PasswordInput field={field} props={props} />
    }
}

const PasswordInput = ({ field, props }) => {

    const [visible, setVisible] = useState(false);

    return (
        <div className="bg-white border-2 border-input rounded-md flex items-center ring-ring focus-within:ring-2 py-1 dark:bg-black">
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

const CustomFormField = (props) => {
    return (
        <FormField
            control={props.control}
            name={props.name}
            render={({ field }) => (
                <FormItem className="flex-1">
                    {props.label && (
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