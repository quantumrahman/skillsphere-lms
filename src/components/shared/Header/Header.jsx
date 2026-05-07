"use client";

import { FaBars } from "react-icons/fa6";
import { CgClose } from "react-icons/cg";
import { PiSignOutBold } from "react-icons/pi";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useUser } from "@/hooks/useUser";
import { authClient } from "@/lib/auth-client";
import { getInitials } from "@/utils/getInitials";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/ui/Logos/Logo/Logo";

const Header = () => {
    const router = useRouter();
    const { user } = useUser();

    const [toggleMenu, setToggleMenu] = useState(false);

    const links = [
        {
            id: 1,
            path: "/",
            link: "Home"
        },
        {
            id: 2,
            path: "/courses",
            link: "Courses"
        },
        {
            id: 3,
            path: "/profile",
            link: "Profile"
        },
    ];

    const handleToggleMenu = () => {
        setToggleMenu((prev) => !prev);
    };

    const handleLogin = () => {
        router.push("/auth/login");
    };

    const handleRegister = () => {
        router.push("/auth/register");
    };

    const handleLogout = async () => {
        await authClient.signOut();
    };

    return (
        <div className="relative">
            <div className="w-full bg-white/20 backdrop-blur-lg px-5 fixed top-0 left-0 z-10">
                <div className="w-full border-b border-[#E0E5EB] py-[14px] md:py-5 lg:py-6">
                    <div className="w-full max-w-[1600px] mx-auto">
                        <header className="w-full flex items-center justify-between">
                            <div className="w-fit flex items-center justify-center gap-[50px]">
                                <Logo />
                                <div className="hidden items-center gap-[26px] md:flex">
                                    {links.map((link) => (
                                        <Link 
                                            key={link.id} 
                                            href={link.path}
                                            className="text-base font-medium text-[#162726] hover:text-[#4CCD99] lg:text-lg"
                                        >
                                            {link.link}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="w-fit gap-5 hidden items-center justify-center md:flex">
                                {user 
                                    ? 
                                    <>
                                        <div className="size-[44] bg-[#4CCD99] rounded-full relative border-2 border-[#4CCD99] lg:size-[54] flex items-center justify-center">
                                            {user?.image 
                                                ? 
                                                <Image 
                                                    src={user?.image}
                                                    alt="profile image"
                                                    fill={true}
                                                    className="object-cover rounded-full"
                                                    sizes="80px"
                                                    quality={90}
                                                />
                                                : 
                                                <span 
                                                    className="text-base font-bold text-white lg:text-lg"
                                                >
                                                    {getInitials(user?.name)}
                                                </span>
                                            }
                                        </div>
                                        <button 
                                            type="button"
                                            aria-label="button"
                                            onClick={handleLogout}
                                            className="h-[44px] px-10 rounded-full bg-[#4CCD99] cursor-pointer lg:rounded-full lg:h-[54px] flex items-center justify-center"
                                        >
                                            <span className="text-base font-bold text-white leading-0 lg:text-lg">Logout</span>
                                        </button>
                                    </>
                                    : 
                                    <>
                                        <Link 
                                        href={"/auth/register"} 
                                        className="text-base font-medium text-[#162726] hover:underline lg:text-lg"
                                        >
                                            Register
                                        </Link>
                                        <button 
                                            type="button"
                                            aria-label="button"
                                            onClick={handleLogin}
                                            className="h-[44px] px-10 rounded-full bg-[#4CCD99] cursor-pointer lg:rounded-full lg:h-[54px] flex items-center justify-center"
                                        >
                                            <span className="text-base font-bold text-white leading-0 lg:text-lg">Login</span>
                                        </button>
                                    </>
                                }
                            </div>
                            <div className="w-fit flex items-center md:hidden">
                                <button 
                                    type="button" 
                                    aria-label="button" 
                                    onClick={handleToggleMenu}
                                    className="cursor-pointer"
                                >
                                    <FaBars size={25} color="#162726"/>
                                </button>
                            </div>
                        </header>
                    </div>
                </div>
            </div>
            <div className={`w-full min-h-screen bg-white/70 fixed top-0 lg:hidden backdrop-blur-lg z-50
                ${toggleMenu 
                    ? "right-[0%]" 
                    : "-right-[100%]"
                }
            `}>
                <div className="w-full px-5">
                    <div className="w-full border-b border-[#E0E5EB] py-[14px] md:py-5">
                        <div className="w-full flex items-center justify-between">
                            <div className="w-fit">
                                <Logo />
                            </div>
                            <div className="w-fit flex items-center">
                                <button 
                                    type="button" 
                                    aria-label="button" 
                                    onClick={handleToggleMenu}
                                    className="cursor-pointer"
                                >
                                    <CgClose size={28} color="#162726"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-between gap-2 mt-5">
                        {user 
                            ? 
                            <>
                                <div className="flex items-center gap-3">
                                    <div className="size-[45] bg-[#4CCD99] rounded-full relative border-2 border-[#4CCD99]">
                                        {user?.image 
                                            ? 
                                            <Image 
                                                src={user?.image}
                                                alt="profile image"
                                                fill={true}
                                                className="object-cover rounded-full"
                                                sizes="80px"
                                                quality={90}
                                            />
                                            : 
                                            <span 
                                                className="text-base font-bold text-white"
                                            >
                                                {getInitials(user?.name)}
                                            </span>
                                        }
                                    </div>
                                    <div className="w-fit flex flex-col gap-5">
                                        <h4 className="text-base font-medium text-[#162726] leading-0">{user?.name}</h4>
                                        <span className="text-xs font-light text-[#6C706F] leading-0">{user?.email}</span>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    aria-label="button"
                                    onClick={handleLogout}
                                    className="cursor-pointer"
                                >
                                    <PiSignOutBold size={20} color="#162726" />
                                </button>
                            </>
                            : 
                            <>
                                <button 
                                    type="button"
                                    onClick={handleRegister}
                                    className="w-full py-2 border border-[#E0E5EB] rounded-md flex items-center justify-center cursor-pointer"
                                >
                                    <span className="text-base font-medium text-[#162726]">Register</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={handleLogin}
                                    className="w-full py-2 border border-[#4CCD99] bg-[#4CCD99] rounded-md flex items-center justify-center cursor-pointer"
                                >
                                    <span className="text-base font-medium text-white">Login</span>
                                </button>
                            </>
                        }
                    </div>
                    <div className="w-full mt-5">
                        {links.map((link) => (
                            <Link 
                                key={link.id}
                                href={link.path} 
                                className={`w-full inline-block py-2 rounded-md text-base font-normal text-[#162726] hover:bg-[#4CCD99] hover:pl-3 hover:text-white transition-all duration-300 ease-in-out`}
                            >
                                {link.link}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
