import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { useEffect, useState } from "react";
import { scrollToSectionMiddle, scrollToSectionTop } from "@/lib/utils";
import useBreakpoint from "@/lib/use-breakpoint";

const Header = () => {
    const { theme, setTheme } = useTheme();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const breakpoint = useBreakpoint();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <div className={`fixed top-0 left-0 w-full z-10 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
            }`}>
            <Card className="bg-white m-3 text-gray-500 p-5">
                <div className="flex justify-between">
                    <div className="flex items-center ml-2 header-link" onClick={() => scrollToSectionMiddle("hero")}>Logo</div>
                    <div className="flex gap-3 items-center">
                        <div className="flex gap-3 items-center font-semibold text-l">
                            <div onClick={() => breakpoint == 'sm' ? scrollToSectionTop("about") : scrollToSectionMiddle("about")} className="header-link">About</div>
                            <div onClick={() => breakpoint == 'sm' ? scrollToSectionTop("education") : scrollToSectionMiddle("education")} className="header-link">Education</div>
                            <div onClick={() => scrollToSectionMiddle("work")} className="header-link">Work</div>
                            <div className="header-link">Technologies</div>
                            <div className="header-link">Contact</div>
                        </div>
                        <Button onClick={() => setTheme(theme == "light" ? "dark" : "light")}>
                            {theme == "light" ? <Moon /> : <Sun />}
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );

}

export default Header