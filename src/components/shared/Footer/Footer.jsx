import { 
    FaFacebookF, 
    FaInstagram, 
    FaTwitter 
} from "react-icons/fa";

import Link from "next/link";
import Logo from "@/components/ui/Logos/Logo/Logo";

const Footer = () => {

    const footerData = [
        {
            id: 1,
            heading: "Explore Learning",
            links: [
            { label: "All Courses", url: "/courses" },
            { label: "Learning Paths", url: "/paths" },
            { label: "Free Resources", url: "/resources" },
            { label: "Skill Assessments", url: "/assessments" }
            ]
        },
        {
            id: 2,
            heading: "Popular Categories",
            links: [
            { label: "Development", url: "/category/development" },
            { label: "Data Science", url: "/category/data-science" },
            { label: "Business & Marketing", url: "/category/marketing" },
            { label: "Design & Creative", url: "/category/design" }
            ]
        },
        {
            id: 3,
            heading: "Student Support",
            links: [
            { label: "Help Center & FAQ", url: "/help" },
            { label: "Verify Certificate", url: "/verify" },
            { label: "Community Forum", url: "/community" },
            { label: "Contact Support", url: "/contact" }
            ]
        },
        {
            id: 4,
            heading: "Company Profile",
            links: [
            { label: "About SkillSphere", url: "/about" },
            { label: "Become an Instructor", url: "/teach" },
            { label: "Success Stories", url: "/stories" },
            { label: "Careers", url: "/careers" }
            ]
        },
        {
            id: 5,
            heading: "Legal & Policies",
            links: [
            { label: "Terms of Service", url: "/terms" },
            { label: "Privacy Policy", url: "/privacy" },
            { label: "Refund Policy", url: "/refund" },
            { label: "Cookie Settings", url: "/cookies" }
            ]
        }
    ];

    return (
        <div className="w-full px-5 bg-white">
            <div className="w-full max-w-[1600px] mx-auto">
                <div className="w-full pt-[50px] border-t border-[#E0E5EB] md:pt-[60] lg:pt-[100px]">
                    <footer className="w-full">
                        <div className="grid grid-cols-1 gap-7 sm:grid-cols-3 md:grid-cols-4 lg:place-items-center lg:grid-cols-5">
                            {footerData.map((item) => (    
                                <div 
                                    key={item.id}
                                    className="w-fit space-y-5 md:space-y-8 lg:space-y-10"
                                >
                                    <h3 className="text-lg font-medium text-[#162726]">{item.heading}</h3>
                                    <div className="w-full flex flex-col gap-[15px]">
                                        {item.links.map((link, idx) => (
                                            <Link 
                                                key={idx}
                                                href={"/"} 
                                                className="w-fit text-sm font-normal text-[#6C706F] md:text-base hover:text-[#4CCD99] hover:translate-x-0.5 transition-all duration-300 ease-out"
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="w-full pt-[50px] flex items-center flex-col gap-[30px] md:pt-[80px] lg:pt-[100px]">
                            <Logo />
                            <div className="w-fit">
                                <span className="text-base font-normal text-[#162726]">&copy; {new Date().getFullYear()} SkillSphere. All rights reserved.</span>
                                <div className="w-full flex items-center justify-center gap-4 mt-5">
                                    <Link 
                                        href={"/"}
                                        className="p-3 rounded-full border border-[#E0E5EB] transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <FaFacebookF size={16} color="#6C706F"/>
                                    </Link>
                                    <Link 
                                        href={"/"}
                                        className="p-3 rounded-full border border-[#E0E5EB] transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <FaInstagram size={16} color="#6C706F"/>
                                    </Link>
                                    <Link 
                                        href={"/"}
                                        className="p-3 rounded-full border border-[#E0E5EB] transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <FaTwitter size={16} color="#6C706F"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full border-t border-[#E0E5EB] py-5 flex items-center justify-between mt-10 flex-wrap gap-1">
                            <div className="w-full text-center sm:w-fit">
                                <span className="block text-sm font-normal text-[#6C706F]">Developed by Rakibul Rahman</span>
                            </div>
                            <div className="w-full flex items-center justify-center gap-2 sm:w-fit">
                                <Link 
                                    href={"https://www.linkedin.com/in/rakibulrahman"}
                                    className="w-fit text-sm font-normal text-[#6C706F] hover:text-[#162726]"
                                >
                                    Linkedin
                                </Link>
                                <div className="w-1 h-1 rounded-full bg-[#6C706F]"></div>
                                <Link 
                                    href={"https://github.com/quantumrahman"}
                                    className="w-fit text-sm font-normal text-[#6C706F] hover:text-[#162726]"
                                >
                                    GitHub
                                </Link>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Footer;
