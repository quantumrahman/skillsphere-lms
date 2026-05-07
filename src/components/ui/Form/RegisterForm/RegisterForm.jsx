"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import FormInput from "../../Inputs/FormInput/FormInput";
import { authClient } from "@/lib/auth-client";

const RegisterForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        photo: "",
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

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        let errors = {};

        const name = formData.name;
        const email = formData.email;
        const photo = formData.photo;
        const password = formData.password;

        if (!name) {
            errors.name = "Please enter your name.";
        };

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email) {
            errors.email = "Please enter your email.";
        } else if (!emailRegex.test(email)) {
            errors.email = "Please enter a valid email.";
        };

        const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
        if (!photo) {
            errors.photo = "Please enter photo url.";
        } else if (!urlRegex.test(photo)) {
            errors.photo = "Please enter a valid url.";
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

        const { data, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photo
        });

        if (data) {
            console.log("Registation successfull!", data);

            setFormData({
                name: "",
                email: "",
                photo: "",
                password: ""
            });

            setErrors({});
        };

        // console.log(data);
        console.log(error);
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
                <div className="w-full flex items-center justify-center gap-2">
                    <div className="w-full">
                        <FormInput 
                            type="text" 
                            name="name" 
                            placeholder="Your name" 
                            onChange={handleOnChange}
                            value={formData.name}
                            error={errors.name}
                        />
                        <div className="w-full h-5 flex items-center">
                            <span className="text-sm font-normal text-red-500">{errors.name}</span>
                        </div>
                    </div>
                    <div className="w-full">
                        <FormInput 
                            type="text" 
                            name="photo" 
                            placeholder="Photo Url" 
                            onChange={handleOnChange}
                            error={errors.photo}
                            value={formData.photo}
                        />
                        <div className="w-full h-5 flex items-center">
                            <span className="text-sm font-normal text-red-500">{errors.photo}</span>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <FormInput 
                        type="text" 
                        name="email" 
                        placeholder="Email address" 
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
                        <span className="text-base font-semibold text-white">Register</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
