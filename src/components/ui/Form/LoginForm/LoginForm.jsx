"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import FormInput from "../../Inputs/FormInput/FormInput";

const LoginForm = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    
    const handleOnChange = (e) => {
        const {name, value} = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: ""
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        let errors = {};

        const email = formData.email;
        const password = formData.password;

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email) {
            errors.email = "Please enter your email.";
        } else if (!emailRegex.test(email)) {
            errors.email = "Please enter a valid email.";
        };

        const passwordLength = 8;
        if (!password) {
            errors.password = "Please enter your password";
        } else if (password.length < passwordLength) {
            errors.password = "Password must be at least 8 characters.";
        };

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        };

        console.log(formData);
    };

    return (
        <div className="space-y-5">
            <div className="w-full flex items-center justify-center gap-2">
                <div className="w-full h-px bg-[#E0E5EB]"></div>
                <button
                    type="button"
                    className="p-[13px] border-x border-[#E0E5EB] rounded-full cursor-pointer flex justify-center"
                >
                    <FcGoogle size={20} color="#6C706F" />
                </button>
                <div className="w-full h-px bg-[#E0E5EB]"></div>
            </div>
            <form onSubmit={handleFormSubmit}>
                <div className="w-full">
                    <FormInput 
                        type="text" 
                        name="email" 
                        placeholder="Email" 
                        onChange={handleOnChange}
                        error={errors.email}
                        value={formData.email}
                    />
                    <div className="w-full h-5 flex items-center">
                        <span className="text-sm font-normal text-red-500">{errors.email}</span>
                    </div>
                </div>
                <div className="w-full">
                    <FormInput 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        onChange={handleOnChange}
                        error={errors.password}
                        value={formData.password}
                    />
                    <div className="w-full h-5 flex items-center">
                        <span className="text-sm font-normal text-red-500">{errors.password}</span>
                    </div>
                </div>
                <div className="w-full mt-[0.5px]">
                    <button
                        type="submit"
                        className="w-full py-[17px] px-[40px] bg-[#4CCD99] rounded-full cursor-pointer"
                    >
                        <span className="text-base font-semibold text-white">Login</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
