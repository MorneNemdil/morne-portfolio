import Header from "@/components/header";
import { StarBackground } from "@/components/star-background";
import { useTheme } from "@/components/theme-provider"
import TypewriterText, { type TypeWriterSegmentProps } from "@/components/typewriter-text";
import TempImage from "@/assets/bluePic.avif";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn, scrollToSectionMiddle } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import { type JSX } from "react";
import EmblaCarousel from "@/components/embla-ui/embla-carousel";
import type { EmblaOptionsType } from 'embla-carousel'
import '@/embla.css';
import useBreakpoint from "@/lib/use-breakpoint";
import WorkCarouselMobile from "@/components/work-carousel-mobile";
import WorkSectionCard from "@/components/work-section-card";
import PortfolioImage from "@/assets/portfolio-screenshot.jpg";
import SanazImage from "@/assets/sanaz-image.png";
import HexagonPlate from "@/components/hexagon-plate";
import "@/my-css.css";
import ReactLogo from "@/assets/tech-logos/reactLogo.png";
import TsLogo from "@/assets/tech-logos/typescript.png";
import JsLogo from "@/assets/tech-logos/js.png";
import ShadcnLogo from "@/assets/tech-logos/shadcn.png";
import AppwriteLogo from "@/assets/tech-logos/appwrite.png";
import CsharpLogo from "@/assets/tech-logos/c-sharp.png";
import EfCoreLogo from "@/assets/tech-logos/ef-core.png";
import GitLogo from "@/assets/tech-logos/git.png";
import ForkLogo from "@/assets/tech-logos/fork.png";
import JavaLogo from "@/assets/tech-logos/java.png";
import MssmsLogo from "@/assets/tech-logos/mssms.png";
import NodeJsLogo from "@/assets/tech-logos/nodejs.png"
import PostgreSqlLogo from "@/assets/tech-logos/postgresql.png";
import SqlLogo from "@/assets/tech-logos/sql.png"
import TailwindLogo from "@/assets/tech-logos/tailwind.png"
import CssLogo from "@/assets/tech-logos/css.png";
import VsLogo from "@/assets/tech-logos/visualstudio.png";
import ViteLogo from "@/assets/tech-logos/vite.png";
import VsCodeLogo from "@/assets/tech-logos/vscode.png";
import VercelLogo from "@/assets/tech-logos/vercel.png";
import GitHubLogo from "@/assets/tech-logos/github.png";


const HomePage = () => {
    const { theme } = useTheme();
    const breakpoint = useBreakpoint();

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
        return (<section id="hero" className="main-section lg:mt-[20vh]">
            <div className="text-start w-95 sm:w-130 md:w-170 lg:w-220 xl:w-270 flex flex-col gap-5">
                <div data-aos="fade-up" data-aos-duration={600}>
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
            <ArrowDown className="mt-[10vh] border border-purple-300 rounded-full p-1.5 animate-bounce hover:cursor-pointer" onClick={() => scrollToSectionMiddle("about")} size={48} />
        </section>)
    }

    const AboutSection = () => {
        return (<section id="about" className="main-section lg:mt-[20vh] xl:mt-0">
            <div data-aos="fade-up" className="section-title">About Me 💭</div>
            <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-10 w-[80vw]">
                <div className="flex flex-col h-[80%] justify-between gap-10">
                    <div data-aos="fade-right" className="h-5/6 flex justify-center items-center">
                        <img className="rounded-full min-h-40 min-w-40 max-h-60 max-w-60" src={TempImage} />
                    </div>
                    <div data-aos="fade-right" className="h-1/6 flex justify-center"><Button onClick={() => scrollToSectionMiddle("contact")}>Contact me</Button></div>
                </div>
                <Card data-aos="fade-left" className="font-semibold md:font-normal transition-all">
                    <div data-aos="fade-left" data-aos-delay={250} className={`grow flex flex-col gap-3 text-lg sm:text-xl md:text-2xl`}>
                        <div>I'm a passionate web developer based in Brighton, UK, and have a love for turning your ideas into well-crafted digital experiences. With a solid understanding of XML, CSS, Typescript, and many other tools, I specialise in creating responsive and user-friendly websites that balance form and function.</div>
                        <div>I’m constantly learning and enjoy keeping up with the latest web trends and technologies. Whether collaborating with a team or working independently, I bring attention to detail, problem-solving skills, and a drive for clean, maintainable code to every project I take on.</div>
                        <div className="flex flex-wrap items-baseline">
                            <div
                                className={`font-bold ${breakpoint == 'md' ? 'text-gray-500 hover:cursor-pointer transition-all duration-700 hover:text-pink-500 hover:shadow-2xl hover:-rotate-2 hover:text-[26px]' : 'text-pink-500'} inline-block`}
                                onClick={() => scrollToSectionMiddle("contact")}>
                                Get in touch&nbsp;
                            </div>
                            <span className="inline">if you're ready to take your business to the next level with a clean, responsive and functional website.</span>
                        </div>
                    </div>
                </Card>
            </div>
        </section>)
    }

    const EducationSection = () => {
        return (<section id="education" className="main-section mt-[40vh] lg:mt-[20vh] xl:mt-[10vh]">
            <div className="section-title" data-aos="fade-up">Education 🎓</div>
            <div className="flex flex-col 2xl:flex-row w-full 2xl:w-[60vw] justify-center items-center gap-10 text-lg font-semibold md:font-normal sm:text-xl md:text-2xl">
                <Card data-aos="fade-right" className={cn("flex flex-col items-center w-[75%] 2xl:w-1/2 gap-5 h-full transition-all")}>
                    <div className={"text-3xl md:text-4xl".concat(theme == 'dark' ? ' text-purple-400' : ' text-blue-400')}>College</div>
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
                <Card data-aos="fade-left" data-aos-delay={200} className="flex flex-col items-center w-[75%] 2xl:w-1/2 gap-5 h-full transition-all">
                    <div className={"text-3xl md:text-4xl".concat(theme == 'dark' ? ' text-purple-400' : ' text-blue-400')}>University</div>
                    <div className="px-5">
                        I'm currently in my 4th year of my undergraduate degree in Computer Science at the University of Sussex, on track to achieve a grade 1st. In my third year, I worked as a web developer for RSM UK which is where I really honed in on web development as a career. More about my work with RSM below.
                    </div>
                </Card>
            </div>
        </section>)
    }

    const TechnologiesSection = () => {
        const hexagonsContent = [
            <img src={ReactLogo} className="scale-[80%] -translate-y-[10%]" />,
            <img src={TsLogo} className="scale-[70%] -translate-y-[17%]" />,
            <img src={JsLogo} className="scale-[70%] -translate-y-[17%] rounded-2xl" />,
            <img src={ShadcnLogo} className="scale-[70%] -translate-y-[17%] rounded-2xl" />,
            <img src={AppwriteLogo} className="scale-[70%] -translate-y-[17%]" />,
            <img src={CsharpLogo} className="scale-[70%] -translate-y-[17%]" />,
            <img src={EfCoreLogo} className="scale-[100%] rounded-2xl " />,
            <img src={GitLogo} className="scale-[70%] -translate-y-[17%]" />,
            <img src={ForkLogo} className="scale-[70%] -translate-y-[17%]" />,
            <img src={JavaLogo} className="scale-[75%] -translate-y-[17%] rounded-full bg-white p-5" />,
            <img src={MssmsLogo} />,
            <div></div>,
        ]

        const hexagonsContent2 = [
            <img src={PostgreSqlLogo} className="scale-[70%] -translate-y-[12%]" />,
            <img src={SqlLogo} className="scale-[70%] -translate-y-[12%]" />,
            <img src={VsCodeLogo} className="-translate-y-[14%] scale-[60%]" />,
            <img src={TailwindLogo} className="-translate-y-[15%]" />,
            <img src={CssLogo} className="scale-[80%] -translate-y-[15%]" />,
            <img src={VsLogo} className="-translate-y-[12%] rounded-full bg-white scale-[75%] p-6" />,
            <img src={ViteLogo} className="scale-[70%] -translate-y-[12%]" />,
            <img src={VercelLogo} className="scale-[70%] -translate-y-[17%] bg-white rounded-full p-1" />,
            <img src={GitHubLogo} className="scale-[70%] -translate-y-[17%]  bg-white rounded-full p-1 pt-0.5 pb-1.5" />,
            <img src={NodeJsLogo} className="scale-[70%] -translate-y-[17%] rounded-2xl" />,
            <div>dd</div>,
            <div></div>,
        ]

        return <section id="technologies" className="main-section mt-[30vh]">
            <div className="section-title" data-aos="fade-up">Technologies 💻</div>
            <div className="flex flex-col items-center w-full -translate-x-[2%]">
                <div className="w-350 flex justify-center items-center">
                    {hexagonsContent.map((x, i) => renderHexagon(i, x, hexagonsContent))}
                </div>
                <div className="w-350 flex justify-center items-center">
                    {hexagonsContent2.map((x, i) => renderHexagon(i, x, hexagonsContent2))}
                </div>
            </div>
        </section>
    }

    const renderHexagon = (i: number, thisContent: JSX.Element, contentsArray: JSX.Element[]) => {
        // Only process even indices to form pairs
        if (i % 2 !== 0) return null; // Skip odd indices as they'll be handled by the even index before them

        var nextItem = contentsArray[i + 1];

        if (nextItem) {
            // Render two hexagons side-by-side
            return (
                <div key={i} className="w-min">
                    <HexagonPlate>{thisContent}</HexagonPlate>
                    <HexagonPlate className="translate-x-[50%]">{nextItem}</HexagonPlate>
                </div>
            );
        } else {
            // If there's an odd number of items, render the last one alone
            return (
                <div key={i} className="w-min -translate-y-[50%]">
                    <HexagonPlate>{thisContent}</HexagonPlate>
                </div>
            );
        }
    }

    const WorkSection = () => {
        const breakpoint = useBreakpoint();
        const OPTIONS: EmblaOptionsType = { loop: true }
        const SLIDES: { index: number, content: JSX.Element }[] = [
            {
                index: 0,
                content: <WorkSectionCard
                    title="Sanaz Art and Fashion"
                    description="An art and fashion website for a designer based in Bournemouth."
                    image={SanazImage}
                    siteLink="https://www.sanazartandfashion.com"
                />
            }, {
                index: 1,
                content: <WorkSectionCard
                    title="My portfolio website"
                    description="A clean and responsive portfolio showing off my UI capabilities. Visit this page to learn more about me and get in touch with me!"
                    image={PortfolioImage}
                    siteLink="https://www.mornenemdil.com"
                />
            },
        ]

        const EMPTY_SLIDES = [{
            index: 2,
            content: <WorkSectionCard
                title="Coming soon!"
                description="Stay tuned ..."
            />
        }, {
            index: 3,
            content: <WorkSectionCard
                title="Coming soon!"
                description="Stay tuned ..."
            />
        }, {
            index: 4,
            content: <WorkSectionCard
                title="Coming soon!"
                description="Stay tuned ..."
            />
        }]

        return (<section id="work" className="main-section lg:mt-[20vh] xl:mt-[30vh]" data-aos="fade-up">
            <div className="section-title" data-aos="fade-up">Work 💻</div>
            {breakpoint == 'xl'
                ? <EmblaCarousel slides={SLIDES.concat(EMPTY_SLIDES)} options={OPTIONS} />
                : <WorkCarouselMobile slides={SLIDES} />}
        </section>)
    }

    return (
        <div>
            {theme == 'dark' && <StarBackground />}
            <Header />
            <HeroSection />
            <AboutSection />
            <EducationSection />
            <TechnologiesSection />
            <WorkSection />
            <section className="h-screen"></section>
        </div>
    )
}

export default HomePage