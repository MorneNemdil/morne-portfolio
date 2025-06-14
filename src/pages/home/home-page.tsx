import Header from "@/components/header";
import { StarBackground } from "@/components/star-background";
import { useTheme } from "@/components/theme-provider"
import TypewriterText, { type TypeWriterSegmentProps } from "@/components/typewriter-text";
import TempImage from "@/assets/bluePic.avif";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { scrollToSectionMiddle } from "@/lib/utils";
import { ArrowDown } from "lucide-react";

const HomePage = () => {
    const { theme } = useTheme();

    const typewriterText = "I'm a ";
    const typewriterSegments: TypeWriterSegmentProps[] = [
        { text: "Developer", colourClass: "text-blue-500" },
        { text: "Team Leader", colourClass: "text-blue-500" },
        { text: "Designer", colourClass: "text-blue-500" },
        { text: "Solver", colourClass: "text-blue-500" },
    ];

    const heroTitleSize = "text-3xl sm:text-5xl md:text-6xl";
    const heroDescriptionSize = "text-xl sm:text-2xl md:text-3xl";

    const HeroSection = () => {
        return (<section id="hero" className="main-section mt-50">
            <div className="text-start w-95 sm:w-130 md:w-170 lg:w-220 xl:w-270 flex flex-col gap-5">
                <div data-aos="fade-right" data-aos-duration={600}>
                    <div className={`${heroTitleSize} flex font-extrabold`}>
                        <div>Hi,&nbsp;</div><div className="text-purple-500">I'm Morné&nbsp;</div><span className="waving-hand">👋</span>
                    </div>
                </div>
                <div className="ml-1">
                    <div data-aos="fade-right" data-aos-duration={600} data-aos-delay={300}>
                        <TypewriterText staticText={typewriterText} textSegments={typewriterSegments} className={`${heroDescriptionSize}`} />
                    </div>
                    <div data-aos="fade-right" data-aos-duration={600} data-aos-delay={600} className={`${heroDescriptionSize} font-semibold leading-tight tracking-wide`}>
                        Welcome to my Portfolio, feel free to have a look around and get in touch with me for more info!
                    </div>
                </div>
            </div>
            <ArrowDown className="mt-[10vh] border border-purple-300 rounded-full p-1.5 animate-bounce" size={48} />
        </section>)
    }

    const AboutSection = () => {
        return (<section id="about" className="main-section">
            <div className="section-title">About Me 💭</div>
            <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-10 w-[80vw]">
                <div className="flex flex-col h-[80%] justify-between gap-10">
                    <div className="h-5/6 flex justify-center items-center">
                        <img className="rounded-full min-h-40 min-w-40 max-h-60 max-w-60" src={TempImage} />
                    </div>
                    <div className="h-1/6 flex justify-center"><Button className="">Contact me</Button></div>
                </div>
                <Card className="opacity-95 font-semibold md:font-normal transition-all hover:custom-shadow-pink">
                    <div className={`grow flex flex-col gap-3 text-lg sm:text-xl md:text-2xl`}>
                        <div>I'm a passionate web developer based in Brighton, UK, and have a love for turning your ideas into well-crafted digital experiences. With a solid understanding of XML, CSS, Typescript, and many other tools, I specialise in creating responsive and user-friendly websites that balance form and function.</div>
                        <div>I’m constantly learning and enjoy keeping up with the latest web trends and technologies. Whether collaborating with a team or working independently, I bring attention to detail, problem-solving skills, and a drive for clean, maintainable code to every project I take on.</div>
                        <div className="flex flex-wrap items-baseline">
                            <div
                                className="font-bold text-gray-500 hover:cursor-pointer transition-all duration-700 hover:text-pink-500 hover:shadow-2xl hover:-rotate-2 hover:text-[26px] inline-block"
                                onClick={() => scrollToSectionMiddle("contact")}>
                                Shoot me a message&nbsp;
                            </div>
                            <span className="inline">if you're ready to take your business to the next level with a clean, responsive and functional website.</span>
                        </div>
                    </div>
                </Card>
            </div>
        </section>)
    }

    const EducationSection = () => {
        return (<section id="education" className="main-section mt-[70vh] xl:mt-[10vh]">
            <div className="section-title">Education 🎓</div>
            <div className="flex flex-col 2xl:flex-row w-full 2xl:w-[60vw] justify-center items-center gap-10 text-lg font-semibold md:font-normal sm:text-xl md:text-2xl">
                <Card className="flex flex-col items-center w-[75%] 2xl:w-1/2 gap-5 h-full transition-all hover:custom-shadow-pink">
                    <div className="text-4xl text-purple-400">College</div>
                    <div className="px-5">
                        College is where I chose to go all in on a computer-related career. I studied hard for the grades that I achieved and I built the work ethic to go on to do a University degree.
                    </div>
                    <div className="w-full flex justify-start px-9">
                        <ul className="list-outside list-disc">
                            <li>Computer Science: A</li>
                            <li>Physics: B</li>
                            <li>Mathematics: B</li>
                        </ul>
                    </div>
                </Card>
                <Card className="flex flex-col items-center w-[75%] 2xl:w-1/2 gap-5 h-full transition-all hover:custom-shadow-pink">
                    <div className="text-4xl text-purple-400">University</div>
                    <div className="px-5">
                        I'm currently in my 4th year of my undergraduate degree in Computer Science at the University of Sussex, on track to achieve a grade 1st. In my third year, I worked as a web developer for RSM UK which is where I really honed in on web development as a career. More about my work with RSM in the work section.
                    </div>
                </Card>
            </div>
        </section>)
    }

    const WorkSection = () => {
        return (<section id="work" className="main-section">
            <div className="section-title">Work 💻</div>
        </section>)
    }

    return (
        <div>
            {theme == 'dark' && <StarBackground />}
            <Header />
            <HeroSection />
            <AboutSection />
            <EducationSection />
            <WorkSection />
            <section className="h-screen"></section>
        </div>
    )
}

export default HomePage