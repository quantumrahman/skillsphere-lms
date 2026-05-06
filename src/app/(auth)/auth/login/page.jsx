import LoginForm from "@/components/ui/Form/LoginForm/LoginForm";
import FormLogo from "@/components/ui/Logos/FormLogo/FormLogo";
import Link from "next/link";

const LoginPage = () => {

    return (
        <div className="w-full min-h-screen flex items-center justify-center px-5">
            <div className="w-full max-w-[350px]">
                <FormLogo />
                <div className="w-full mt-[30px]">
                    <LoginForm />
                </div>
                <div className="w-full h-[22px] flex items-center justify-center gap-3 mt-5">
                    <span className="text-sm font-normal text-[#6C706F]">Forget Password?</span>
                    <div className="w-px h-full bg-[#6C706F]"></div>
                    <Link 
                        href={"/auth/register"}
                        className="text-sm font-normal text-[#6C706F]"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
