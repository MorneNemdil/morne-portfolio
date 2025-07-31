import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { useEffect, useState } from "react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import MorneLogo from "@/assets/logos/morneLogo.png";
import "@/my-css.css";
import { Events, Link } from 'react-scroll';

const Header = () => {
    const { theme, setTheme } = useTheme();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        Events.scrollEvent.register('end', () => {
            setTimeout(() => setIsVisible(false), 200);
        });

        return () => Events.scrollEvent.remove('end');
    }, []);

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
        { name: 'home', displayName: "Home", offset: 0 },
        { name: 'about', displayName: "About", offset: -60 },
        { name: 'education', displayName: "Education", offset: -50 },
        { name: 'technologies', displayName: "Technologies", offset: -80 },
        { name: 'work', displayName: "Work", offset: -140 },
        { name: 'pricing', displayName: "Pricing", offset: -95 },
        { name: 'contact', displayName: "Contact", offset: 0 },
    ];

    const SiteLogo = () => {
        return <img className="w-[2.5vw] h-[2.3vw] rounded-full" src={MorneLogo} />
    }

    const DesktopHeader = () => {
        return <Card className="bg-white m-3 text-gray-500 p-5 w-full">
            <div className="flex justify-between">
                <Link
                    className="flex items-center ml-2 header-link gap-4"
                    to={"hero"}
                    smooth={true}
                    duration={600}
                    offset={-150}
                >
                    <SiteLogo /><div className="logo-font w-[140px]">Morne Nemdil</div>
                </Link>
                <div className="flex items-center">
                    <span className="text-3xl flex items-center h-full secret-heart" onClick={() => window.open("https://morne-heart-elma.vercel.app")}>💗</span>
                </div>
                <div className="flex gap-6 items-center">
                    <div className="flex gap-3 items-center font-semibold text-l">
                        {navlinks.filter(x => x.name !== 'home')
                            .map((navlink) =>
                                <Link
                                    key={navlink.name}
                                    to={navlink.name}
                                    offset={navlink.offset}
                                    smooth={true}
                                    duration={900}
                                    className="header-link"
                                >
                                    {navlink.displayName}
                                </Link>
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
                            <SheetTitle>
                                <Link
                                    to={"hero"}
                                    smooth={true}
                                    duration={600}
                                    offset={-200}
                                >
                                    Morne's Portfolio
                                </Link>
                                <span className="secret-heart" onClick={() => window.open("https://morne-heart-elma.vercel.app")}>💗</span>
                            </SheetTitle>
                            <SheetDescription>
                                Navigate to different sections here!
                            </SheetDescription>
                            <div className="flex flex-col gap-5 py-3">
                                {navlinks.filter(x => x.name !== 'home').map(navlink => {
                                    return (
                                        <SheetClose asChild key={navlink.name}>
                                            <Link
                                                key={navlink.name}
                                                to={navlink.name}
                                                offset={navlink.offset}
                                                smooth={true}
                                                duration={900}
                                                className="text-lg font-semibold cursor-pointer"
                                            >
                                                {navlink.displayName}
                                            </Link>
                                        </SheetClose>
                                    );
                                })}
                            </div>
                            <Button className="" onClick={() => setTheme(theme == "light" ? "dark" : "light")}>
                                {theme == "light" ? <Moon /> : <Sun />}
                            </Button>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </Card>
        </div>
    }


    return (
        <div className={`fixed top-0 left-0 w-full z-10 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : " md:opacity-0 md:-translate-y-5"
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