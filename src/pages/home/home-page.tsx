import Header from "@/components/header";
import { StarBackground } from "@/components/star-background";
import { useTheme } from "@/components/theme-provider"
import TypewriterText, { type TypeWriterSegmentProps } from "@/components/typewriter-text";
import TempImage from "@/assets/bluePic.avif";
import DotRing from "@/components/dot-ring";

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
                <div>
                    <div className={`${heroTitleSize} flex font-extrabold`}>
                        <div>Hi,&nbsp;</div><div className="text-purple-500">I'm Morné&nbsp;</div><span className="waving-hand">👋</span>
                    </div>
                </div>
                <div className="ml-1">
                    <TypewriterText staticText={typewriterText} textSegments={typewriterSegments} className={`${heroDescriptionSize}`} />
                    <div className={`${heroDescriptionSize} font-semibold leading-tight tracking-wide`}>
                        Welcome to my Portfolio, feel free to have a look around and get in touch with me for more info!
                    </div>
                </div>
            </div>
        </section>)
    }

    const AboutSection = () => {
        return (<section id="about" className="main-section">
            <div className="section-title">About Me</div>
            <div className="flex flex-col md:flex-row gap-3 h-[40vh] w-[70vw]">
                <div className="h-full w-1/3">
                    <img className="float-on-hover h-full border rounded-full transition-shadow duration-300 hover:shadow-lg" src={TempImage} />
                </div>
                <div className="w-2/3 flex flex-col gap-3 text-gray-300 text-lg">
                    <p>I'm a passionate web developer with a strong foundation in front-end and back-end technologies. I specialize in building responsive, user-friendly websites and web applications that balance form and function. With a solid understanding of XML, CSS, and TypeScript, I love turning ideas into well-crafted digital experiences.</p>
                    <p>I’m constantly learning and enjoy keeping up with the latest web trends and technologies. Whether collaborating with a team or working independently, I bring attention to detail, problem-solving skills, and a drive for clean, maintainable code to every project I take on.</p>
                </div>
            </div>
        </section>)
    }

    const EducationSection = () => {
        return (<section id="education" className="main-section">
            <div className="section-title">Education</div>
            <div>Content</div>
        </section>)
    }

    return (
        <div>
            <Header />
            <div className="cursor-none">
                {theme == 'dark' && <StarBackground />}
                <DotRing />
                <HeroSection />
                <AboutSection />
                <EducationSection />
                <section className="h-screen"></section>
            </div>
        </div>
    )
}

export default HomePage