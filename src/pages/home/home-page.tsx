import Header from "@/components/header";
import LucideButton from "@/components/lucide-button";
import { StarBackground } from "@/components/star-background";
import { useTheme } from "@/components/theme-provider"
import TypewriterText, { type TypeWriterSegmentProps } from "@/components/typewriter-text";
import { Button } from "@/components/ui/button"
import { House } from "lucide-react";
import { useEffect, useState } from "react";

const HomePage = () => {
    const { theme, setTheme } = useTheme();

    const typewriterText = "I'm a ";
    const typewriterSegments: TypeWriterSegmentProps[] = [
        { text: "Developer", colourClass: "text-blue-500" },
        { text: "Team Leader", colourClass: "text-blue-500" },
        { text: "Designer", colourClass: "text-blue-500" },
        { text: "Solver", colourClass: "text-blue-500" },
    ];

    return (
        <div>
            {theme == 'dark' && <StarBackground />}
            <Header />
            {/* <LucideButton Icon={House} /> */}
            <section id="hero" className="flex flex-col items-center justify-center h-screen mt-10">
                <div className="text-start w-95 sm:w-130 md:w-170 lg:w-220 xl:w-270 flex flex-col gap-5">
                    <div>
                        <div className="flex text-3xl sm:text-5xl md:text-7xl font-extrabold">
                            <div>Hi,&nbsp;</div><div className="text-purple-500">I'm Morné&nbsp;</div><span className="waving-hand">👋</span>
                        </div>
                    </div>
                    <div>
                        <TypewriterText staticText={typewriterText} textSegments={typewriterSegments} className="ml-1 text-2xl sm:text-4xl md:text-5xl" />
                        <div className="text-2xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-wide">
                            Welcome to my Portfolio, feel free to have a look around and get in touch with me for more info!
                        </div>
                    </div>
                </div>
            </section>
            <section className="h-screen"></section>
        </div>
    )
}

export default HomePage