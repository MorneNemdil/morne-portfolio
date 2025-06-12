import Header from "@/components/header";
import { StarBackground } from "@/components/star-background";
import { useTheme } from "@/components/theme-provider"
import TypewriterText, { type TypeWriterSegmentProps } from "@/components/typewriter-text";
import TempImage from "@/assets/bluePic.avif";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
        return (<section id="hero" className="main-section">
            <div className="text-start w-95 sm:w-130 md:w-170 lg:w-220 xl:w-270 flex flex-col gap-5 mt-10">
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
        </section>)
    }

    const AboutSection = () => {
        return (<section id="about" className="main-section">
            <div className="section-title">About Me 💭</div>
            <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-10 w-[80vw]">
                <div className="flex flex-col h-[80%] justify-between gap-10">
                    <div className="h-5/6 flex justify-center items-center">
                        <img className="md:h-55 md:w-200 border rounded-full transition-shadow duration-300 shadow-lg" src={TempImage} />
                    </div>
                    <div className="h-1/6 flex justify-center"><Button className="">Contact me</Button></div>
                </div>
                <Card className="opacity-95">
                    <div className={`grow flex flex-col gap-3 text-2xl`}>
                        <p>I'm a passionate web developer with a strong foundation in front-end and back-end technologies. I specialize in building responsive, user-friendly websites and web applications that balance form and function. With a solid understanding of XML, CSS, and TypeScript, I love turning ideas into well-crafted digital experiences.</p>
                        <p>I’m constantly learning and enjoy keeping up with the latest web trends and technologies. Whether collaborating with a team or working independently, I bring attention to detail, problem-solving skills, and a drive for clean, maintainable code to every project I take on.</p>
                    </div>
                </Card>
            </div>
        </section>)
    }

    const EducationSection = () => {
        return (<section id="education" className="main-section">
            <div className="section-title">Education 🎓</div>
            <div className="flex justify-center gap-10 w-[60vw]">
                <div className="flex flex-col items-center w-1/2 gap-5">
                    <div className="text-4xl text-purple-400">College</div>
                    <div className="text-2xl px-5">
                        College is where I chose to go all in on a computer-related career. I studied hard for the grades that I achieved and I built the work ethic to go on to do a University degree.
                    </div>
                    <div className="w-full text-2xl flex justify-start px-9">
                        <ul className="list-outside list-disc">
                            <li>Computer Science: A</li>
                            <li>Physics: B</li>
                            <li>Mathematics: B</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center w-1/2 gap-5">
                    <div className="text-4xl text-purple-400">University</div>
                    <div className="text-2xl px-5">
                        I'm currently in my 4th year of my undergraduate degree in Computer Science at the University of Sussex, on track to achieve a grade 1st. In my third year, I worked as a web developer for RSM UK which is where I really honed in on web development as a career. More about my work with RSM in the work section.
                    </div>
                </div>
            </div>
        </section>)
    }

    return (
        <div>
            {theme == 'dark' && <StarBackground />}
            <Header />
            <HeroSection />
            <AboutSection />
            <EducationSection />
            <section className="h-screen"></section>
        </div>
    )
}

export default HomePage