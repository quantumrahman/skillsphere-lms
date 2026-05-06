import { Outfit } from "next/font/google";
import "../globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit"
});

export const metadata = {
    title: "SkillSphere - Online Learning Platform",
    description: "Learn your skill."
};

const MainLayout = ({ children }) => {
    return (
        <div className={`${outfit.variable} w-full min-h-screen antialiased`}>
            { children }
        </div>
    );
};

export default MainLayout;
