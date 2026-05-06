"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const FormInput = ({ 
    type = "text", 
    name = "placeholder", 
    placeholder = "Placeholder",
    value,
    onChange,
    error = ""
}) => {
    const [togglePassword, setTogglePassword] = useState(false);

    const inputType = type === "password" ? (togglePassword ? "text" : "password") : type;

    const handleTogglePassword = () => {
        setTogglePassword((prev) => !prev);
    };
    
    return (
        <div className="w-full relative">
            <input 
                type={inputType}
                name={name}
                placeholder={placeholder}
                aria-label="input"
                value={value}
                onChange={onChange}
                autoComplete="off"
                className={`w-full py-[13px] pl-5 text-base font-normal text-[#6C706F] border rounded-full caret-[#4CCD99] focus:outline-none placeholder:text-[#6C706F] ${error ? "border-red-500" : "border-[#E0E5EB] focus:border-[#4CCD99]"} ${type === "password" ? "pr-12" : "pr-5"}`}
            />
            {type === "password" && (
                <button
                    type="button"
                    className="absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer"
                    onClick={handleTogglePassword}
                >
                    {togglePassword
                        ? <FaEyeSlash size={17} color="#6C706F" />
                        : <FaEye size={16} color="#6C706F" />
                    }
                </button>
            )}
        </div>
    );
};

export default FormInput;
