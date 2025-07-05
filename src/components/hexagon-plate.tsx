import React from "react";
import "@/my-css.css";
import { useTheme } from "./theme-provider";

interface HexagonPlateProps {
    children?: React.ReactNode;
    className?: string;
}

const HexagonPlate = ({ children, className }: HexagonPlateProps) => {
    const { theme } = useTheme();

    return (
        <div className={"flex justify-center items-center w-full h-full rotate-30 ".concat(className || "")}>
            <div className="hexagon-wrapper w-[21vw] sm:w-[17vw] md:w-[15vw] lg:w-[10vw] aspect-[1.1547] flex justify-center items-center hover:scale-105">
                <div className={`hexagon-inner w-full h-full ${theme == 'dark' ? "bg-blue-950" : 'bg-blue-800'} flex justify-center items-center transition-transform duration-200`}>
                    <div className={`hexagon-content w-[90%] h-[90%] ${theme == 'dark' ? "bg-purple-900" : "bg-blue-400"} flex justify-center items-center text-center`}>
                        <div className="w-[80%] h-[60%] -rotate-30 pointer-events-none">{children}</div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default HexagonPlate;
