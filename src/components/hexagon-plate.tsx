import React from "react";
import "@/my-css.css";

interface HexagonPlateProps {
    children?: React.ReactNode;
    className?: string;
}

const HexagonPlate = ({ children, className }: HexagonPlateProps) => {
    return (
        <div className={"flex justify-center items-center w-full h-full rotate-30 ".concat(className || "")}>
            <div className="hexagon-wrapper w-[10vw] aspect-[1.1547] flex justify-center items-center hover:scale-105">
                <div className="hexagon-inner w-full h-full bg-blue-950 flex justify-center items-center transition-transform duration-200">
                    <div className="hexagon-content w-[90%] h-[90%] bg-purple-900 flex justify-center items-center text-center rota">
                        <div className="w-[80%] h-[60%] -rotate-30 pointer-events-none">{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HexagonPlate;
