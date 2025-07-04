import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { useEffect, useState } from "react";
import { scrollToSectionMiddle, scrollToSectionTop } from "@/lib/utils";
import useBreakpoint from "@/lib/use-breakpoint";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

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

    const navlinks = [
        { name: 'home', displayName: "Home", scrollFunc: breakpoint == 'sm' ? scrollToSectionTop : scrollToSectionMiddle },
        { name: 'about', displayName: "About", scrollFunc: breakpoint == 'sm' ? scrollToSectionTop : scrollToSectionMiddle },
        { name: 'education', displayName: "Education", scrollFunc: breakpoint == 'sm' ? scrollToSectionTop : scrollToSectionMiddle },
        { name: 'technologies', displayName: "Technologies", scrollFunc: scrollToSectionMiddle },
        { name: 'work', displayName: "Work", scrollFunc: scrollToSectionMiddle },
        { name: 'pricing', displayName: "Pricing", scrollFunc: scrollToSectionMiddle },
        { name: 'contact', displayName: "Contact", scrollFunc: scrollToSectionMiddle },
    ];

    const DesktopHeader = () => {
        return <Card className="bg-white m-3 text-gray-500 p-5 w-full">
            <div className="flex justify-between">
                <div
                    className="flex items-center ml-2 header-link"
                    onClick={async () => {
                        scrollToSectionMiddle("hero");
                        await setTimeout(() => setIsVisible(false), 900);
                    }}
                >
                    Logo
                </div>
                <div className="flex gap-3 items-center">
                    <div className="flex gap-3 items-center font-semibold text-l">
                        {navlinks.filter(x => x.name !== 'home')
                            .map((navlink, i) =>
                                <div
                                    key={i}
                                    onClick={async () => {
                                        navlink.scrollFunc(navlink.name);
                                        await setTimeout(() => setIsVisible(false), 900);
                                    }}
                                    className="header-link"
                                >
                                    {navlink.displayName}
                                </div>
                            )}
                    </div>
                    <Button onClick={() => setTheme(theme == "light" ? "dark" : "light")}>
                        {theme == "light" ? <Moon /> : <Sun />}
                    </Button>
                </div>
            </div>
        </Card>
    }

    const MobileHeader = () => {
        return <div>
            <Card className="bg-white m-3 text-gray-500 p-1.5 w-min flex !rounded-full border-solid border-gray-400">
                <Sheet>
                    <SheetTrigger asChild>
                        <Menu />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Morne's Portfolio</SheetTitle>
                            <SheetDescription>
                                Navigate to different sections here!
                            </SheetDescription>
                            <div className="flex flex-col gap-5 py-3">
                                {navlinks.map(section => (
                                    <SheetClose asChild key={section.name}>
                                        <div onClick={() => scroll} className={`text-lg font-semibold underline cursor-pointer`}>
                                            {section.displayName}
                                        </div>
                                    </SheetClose>
                                ))}
                            </div>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </Card>
        </div>
    }


    return (
        <div className={`fixed top-0 left-0 w-full z-10 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
            }`}>
            <div className="md:hidden">
                <MobileHeader />
            </div>
            <div className="hidden md:flex flex-grow justify-end">
                <DesktopHeader />
            </div>
        </div>
    );

}

export default Header