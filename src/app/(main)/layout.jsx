import { Outfit } from "next/font/google";
import "../globals.css";

import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/Footer/Footer";

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
            <Header />
            { children }
            <Footer />
        </div>
    );
};

export default MainLayout;
