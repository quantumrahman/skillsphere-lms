import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";

import video from "@/assets/images/video.jpg";
import Image from "next/image";

const HeroSection = () => {

    return (
        <div className="w-full max-w-[1600px] mx-auto">
            <div className="w-full flex items-center justify-center pt-[69px] md:pt-[85px] lg:pt-[103px] flex-col gap-[30px] md:gap-[100px]">
                <div className="mt-[50px] md:mt-[80px] lg:mt-[100px] flex items-center justify-center flex-col text-center">
                    <div className="w-fit mb-4 p-4 md:py-3 md:px-3 lg:py-[14px] lg:px-5 lg:mb-5 border border-[#E0E5EB] rounded-lg lg:rounded-[11px] flex items-center justify-center gap-[10px]">
                        <div className="w-[48px] h-[48px] lg:w-[62px] lg:h-[62px] flex items-center justify-center bg-[#4CCD99]/30 rounded-md">
                            <BsFillLightningChargeFill className="text-2xl lg:text-[34px]" />
                        </div>
                        <h1 className="text-base font-semibold text-[#162726] md:text-4xl lg:text-5xl">
                            <span className="text-[#4CCD99]">Empower</span> Your Digital Journey
                        </h1>
                    </div>
                    <h3 className="text-2xl font-medium text-[#162726] md:text-[28px] lg:text-[38px] mb-[6px] lg:mb-[10px]">Master Design & Tech with SkillSphere.</h3>
                    <p className="text-sm font-normal text-[#162726] md:text-base lg:text-lg">Learn from the best in the industry and build a career you love.</p>
                    <div className="w-full flex items-center justify-center gap-3 mt-[50px] lg:mt-[60px]">
                        <button className="py-[14px] px-[20px] bg-[#4CCD99] rounded-md lg:rounded-lg text-base font-bold text-white lg:text-lg cursor-pointer md:py-[17px] md:px-[40px]">
                            Start Learning
                        </button>
                        <button className="py-[14px] px-[20px] bg-white border border-[#E0E5EB] rounded-md lg:rounded-lg text-base font-bold text-[#162726] lg:text-lg cursor-pointer md:py-[17px] md:px-[40px]">
                            View Pricing
                        </button>
                    </div>
                </div>
                <div className="w-full relative">
                    <div className="w-full h-[247px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[790px] rounded-[10px] lg:rounded-[12px] relative">
                        <Image 
                            src={video} 
                            alt="video thumbnail" 
                            fill={true} 
                            className="w-full h-full object-cover rounded-[10px]"
                        />
                        <div className="absolute inset-0 bg-black/20 rounded-[10px]"></div>
                    </div>
                    <div className="w-[54px] h-[54px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/20 border-4 border-white/30 rounded-full flex items-center justify-center md:w-[72px] md:h-[72px]">
                        <FaPlay  
                            color="#ffffff"
                            className="text-2xl lg:text-[30px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
