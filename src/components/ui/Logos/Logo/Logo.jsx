import Image from "next/image";
import logo from "@/assets/images/logo.png";

const Logo = () => {

    return (
        <div className="w-10 h-10 rounded-md bg-[#4CCD99] relative md:w-[44px] md:h-[44px] md:rounded-lg lg:w-[54px] lg:h-[54px]">
            <Image 
                src={logo} 
                alt="logo" 
                fill={true} 
                className="w-full h-auto object-center" 
            />
        </div>
    );
};

export default Logo;
