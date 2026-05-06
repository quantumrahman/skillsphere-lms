import Image from "next/image";
import Logo from "@/assets/images/logo.png";

const FormLogo = () => {

    return (
        <div className="w-full flex items-center justify-center gap-2">
            <div className="w-[35px] h-[35px] rounded-md relative bg-[#4CCD99] md:w-[40px] md:h-[40px] md:rounded-lg">
                <Image 
                    src={Logo} 
                    alt="logo" 
                    fill={true} 
                    className="w-full h-auto object-center" 
                />
            </div>
            <h2 className="text-[28px] font-semibold text-[#162726] md:text-3xl">SkillSphere</h2>
        </div>
    );
};

export default FormLogo;
