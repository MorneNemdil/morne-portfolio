import { useEffect, useState } from "react";
import "@/my-css.css";

export const CloudBackground = () => {
    const [clouds, setClouds] = useState<any[]>([]);

    useEffect(() => {
        generateClouds();

        const handleResize = () => {
            generateClouds();
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const generateClouds = () => {
        const numberOfClouds = Math.floor(window.innerWidth / 150);
        const newClouds = [];

        for (let i = 0; i < numberOfClouds; i++) {
            newClouds.push({
                id: i,
                size: Math.random() * 100 + 100, // width: 100px–200px
                top: Math.random() * 80, // top position in %
                left: Math.random() * 100, // initial left position in %
                animationDuration: Math.random() * 40 + 20, // 20s–60s
                opacity: Math.random() * 0.3 + 0.7,
            });
        }

        setClouds(newClouds);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-10]">
            {clouds.map((cloud: any) => (
                <div
                    key={cloud.id}
                    className="cloud animate-cloud"
                    style={{
                        width: cloud.size + "px",
                        height: cloud.size * 0.6 + "px",
                        top: cloud.top + "%",
                        left: cloud.left + "%",
                        opacity: cloud.opacity,
                        animationDuration: cloud.animationDuration + "s",
                    }}
                />
            ))}
        </div>
    );
};