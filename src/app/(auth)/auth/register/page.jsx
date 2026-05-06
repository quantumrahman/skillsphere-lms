import RegisterForm from "@/components/ui/Form/RegisterForm/RegisterForm";
import FormLogo from "@/components/ui/Logos/FormLogo/FormLogo";
import Link from "next/link";

const RegisterPage = () => {

    return (
        <div className="w-full min-h-screen flex items-center justify-center">
            <div className="w-full max-w-[350px]">
                <FormLogo />
                <div className="w-full mt-[30px]">
                    <RegisterForm />
                </div>
                <div className="w-full h-[22px] mt-5 text-center">
                    <span className="text-sm font-normal text-[#6C706F]">
                        Already got an account?
                        <Link 
                            href={"/auth/login"}
                            className="w-fit text-sm font-normal text-[#6C706F] ml-1 underline"
                        >
                            Login
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
