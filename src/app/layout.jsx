import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit"
});

export const metadata = {
    title: "SkillSphere",
    description: "Learning Managament System."
};

const RootLayout = ({ children }) => {
    return (
        <html
            lang="en"
            className={`${outfit.variable} h-full antialiased`}
        >
            <body className="w-full min-h-full bg-white">
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
