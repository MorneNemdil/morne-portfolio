import Header from "@/components/header";
import { StarBackground } from "@/components/star-background";
import { useTheme } from "@/components/theme-provider"
import TypewriterText, { type TypeWriterSegmentProps } from "@/components/typewriter-text";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, type JSX } from "react";
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
import PricingCard1 from "@/components/pricing-cards/pricing-card-1";
import PricingCard2 from "@/components/pricing-cards/pricing-card-2";
import PricingCard3 from "@/components/pricing-cards/pricing-card-3";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Portrait from "@/assets/portrait-Photoroom.jpg";
import { Link } from "react-scroll";
import { cn, isNullOrEmpty } from "@/lib/utils";
import { CloudBackground } from "@/components/cloud-background";
import BarberScreenshot from "@/assets/barber-screenshot.png";
import PelmeniScreenshot from "@/assets/pelmeni-screenshot.png";

const HomePage = () => {
    const { theme, setTheme } = useTheme();
    const breakpoint = useBreakpoint();
    useEffect(() => setTheme('dark'), []);

    const typewriterText = "I'm a ";
    const typewriterSegments: TypeWriterSegmentProps[] = [
        { text: "Developer", colourClass: theme == 'light' ? "text-indigo-500" : "text-blue-500" },
        { text: "Team Leader", colourClass: theme == 'light' ? "text-blue-400" : "text-blue-500" },
        { text: "Designer", colourClass: theme == 'light' ? "text-indigo-500" : "text-blue-500" },
        { text: "Solver", colourClass: theme == 'light' ? "text-blue-400" : "text-blue-500" },
    ];

    const heroTitleSize = "text-3xl sm:text-5xl md:text-6xl";
    const heroDescriptionSize = "text-xl sm:text-2xl md:text-3xl";

    const HeroSection = () => {
        return (<section id="hero" className="main-section mt-[200px]">
            <div className="text-start w-95 sm:w-130 md:w-170 lg:w-220 xl:w-270 flex flex-col gap-5">
                <div data-aos="fade-up" data-aos-duration={600}>
                    <div className={`${heroTitleSize} flex font-extrabold`}>
                        <div>Hi,&nbsp;</div><div className={`${theme == 'light' ? "text-blue-500" : "text-purple-500"}`}>I'm Morné&nbsp;</div><span className="waving-hand">👋</span>
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
            <Link to={"about"} smooth={true} duration={600}>
                <ArrowDown className={`mt-[10vh] border ${theme == 'dark' ? "border-purple-300" : "border-blue-200"} border-2 rounded-full p-1.5 animate-bounce hover:cursor-pointer`} size={48} />
            </Link>
        </section>)
    }

    const AboutSection = () => {
        return (<section id="about" className="main-section mt-60 lg:mt-0">
            <div data-aos="fade-up" className="section-title">About Me 💭</div>
            <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-10 w-[80vw]">
                <div className="flex flex-col h-[80%] justify-between gap-10">
                    <div data-aos="fade-right" className="h-5/6 flex justify-center items-center">
                        <img className={`rounded-full min-h-40 min-w-40 max-h-60 max-w-60 ${theme == 'dark' ? "border-gray-700 border-4" : "border-blue-500 border-2"}`} src={Portrait} />
                    </div>
                    <div data-aos="fade-right" className="h-1/6 flex justify-center">
                        <Link to="contact" smooth={true} duration={1200}>
                            <Button>Contact me</Button>
                        </Link>
                    </div>
                </div>
                <Card data-aos="fade-left" className="font-semibold md:font-normal transition-all">
                    <div data-aos="fade-left" data-aos-delay={250} className={`grow flex flex-col gap-3 text-lg sm:text-xl md:text-2xl`}>
                        <div>I create landing page sites with integrated booking systems for restaurants and barbers. With a solid understanding of XML, CSS, Typescript, and many other tools, I specialise in creating responsive and user-friendly websites that balance form and function.</div>
                        <div>I'm a passionate web developer who's constantly learning and enjoy keeping up with the latest web trends and technologies. Whether it's working independently or with a team, I bring innovative problem-solving skills and attention to detail to each project I take on, whilst ensuring clean, maintainable code.</div>
                        <div className="flex flex-wrap items-baseline">
                            <Link
                                className={`font-bold ${breakpoint == 'lg' || breakpoint == 'xl' || breakpoint == 'md' ? `text-gray-500 hover:cursor-pointer transition-all duration-700 ${theme == 'dark' ? "hover:text-pink-500" : "hover:text-blue-400"} hover:-rotate-2 hover:text-[26px]` : `${theme == 'dark' ? "text-pink-500" : "text-blue-500"}`} inline-block`}
                                to="work"
                                smooth={true}
                                duration={870}
                                offset={-100}
                            >
                                Check out some of my work&nbsp;
                            </Link>
                            <span className="inline">to explore the clean, responsive, and functional websites I’ve created for businesses like yours.</span>
                        </div>
                    </div>
                </Card>
            </div>
        </section>)
    }

    const EducationSection = () => {
        return (<section id="education" className="main-section my-70 2xl:my-0">
            <div className="section-title" data-aos="fade-up">Education 🎓</div>
            <div className="flex flex-col 2xl:flex-row w-full 2xl:w-[60vw] justify-center items-center gap-10 text-lg font-semibold md:font-normal sm:text-xl md:text-2xl">
                <Card data-aos="fade-right" className={cn("flex flex-col items-center w-[75%] 2xl:w-1/2 gap-5 h-full transition-all")}>
                    <div className={"text-3xl md:text-4xl".concat(theme == 'dark' ? ' text-purple-400' : ' text-blue-400')}>College</div>
                    <div className="px-5">
                        College is where I chose to go all in on a computer-related career. I started taking my studies a lot more seriously in order to be able to do my desired course at University. College is where I built the work ethic to be able to go on to do a university career, and my course in Computer Science helped me build the fundamentals of programing and related concepts.
                    </div>
                </Card>
                <Card data-aos="fade-left" data-aos-delay={200} className="flex flex-col items-center w-[75%] 2xl:w-1/2 gap-5 h-full transition-all">
                    <div className={"text-3xl md:text-4xl".concat(theme == 'dark' ? ' text-purple-400' : ' text-blue-400')}>University</div>
                    <div className="px-5">
                        I'm currently in my 4th year of my undergraduate degree in Computer Science at the University of Sussex, on track to achieve a grade 1st. In my third year, I worked as a web developer for RSM UK which is where I really honed in on web development as a career. This is where I became a much more confident in my skills.
                    </div>
                </Card>
            </div>
        </section>)
    }

    const TechnologiesSection = () => {
        const isMobile = breakpoint == 'sm' || breakpoint == 'md';

        const desktopHexagonsContent = [
            <img src={ReactLogo} className="scale-[80%] -translate-y-[10%]" />,
            <img src={TsLogo} className="scale-[70%] -translate-y-[17%]" />,
            <img src={JsLogo} className="scale-[70%] -translate-y-[17%] rounded-2xl" />,
            <img src={ShadcnLogo} className="scale-[70%] -translate-y-[17%] rounded-2xl" />,
            <img src={AppwriteLogo} className="scale-[70%] -translate-y-[17%]" />,
            <img src={CsharpLogo} className="scale-[70%] -translate-y-[17%]" />,
            <img src={EfCoreLogo} className="scale-[100%] rounded-2xl" />,
            <img src={GitLogo} className="scale-[70%] -translate-y-[17%]" />,
            <img src={ForkLogo} className="scale-[70%] -translate-y-[17%]" />,
            <img src={JavaLogo} className="scale-[75%] -translate-y-[17%] rounded-full bg-white p-5" />,
            <img src={MssmsLogo} />,
            <div></div>,
        ];

        const desktopHexagonsContent2 = [
            <img src={PostgreSqlLogo} className="scale-[70%] -translate-y-[12%]" />,
            <img src={SqlLogo} className="scale-[70%] -translate-y-[12%]" />,
            <img src={VsCodeLogo} className="-translate-y-[14%] scale-[60%]" />,
            <img src={TailwindLogo} className="-translate-y-[15%]" />,
            <img src={CssLogo} className="scale-[80%] -translate-y-[15%]" />,
            <img src={VsLogo} className="-translate-y-[12%] rounded-full bg-white scale-[75%] p-6" />,
            <img src={ViteLogo} className="scale-[70%] -translate-y-[12%]" />,
            <img src={VercelLogo} className="scale-[70%] -translate-y-[17%] bg-white rounded-full p-1" />,
            <img src={GitHubLogo} className="scale-[70%] -translate-y-[17%] bg-white rounded-full p-1 pt-0.5 pb-1.5" />,
            <img src={NodeJsLogo} className="scale-[70%] -translate-y-[17%] rounded-2xl" />,
            <div></div>,
            <div></div>,
        ];

        const mobileHexagonsContent = [
            [
                <img src={ReactLogo} className="scale-[80%] -translate-y-[10%]" />,
                <img src={TsLogo} className="scale-[70%] -translate-y-[17%]" />,
                <img src={JsLogo} className="scale-[70%] -translate-y-[17%] rounded-2xl" />,
                <img src={ShadcnLogo} className="scale-[70%] -translate-y-[17%] rounded-2xl" />,
                <img src={AppwriteLogo} className="scale-[70%] -translate-y-[17%]" />,
                <img src={CsharpLogo} className="scale-[70%] -translate-y-[17%]" />,
            ],
            [
                <img src={PostgreSqlLogo} className="scale-[70%] -translate-y-[12%]" />,
                <img src={SqlLogo} className="scale-[70%] -translate-y-[12%]" />,
                <img src={VsCodeLogo} className="-translate-y-[14%] scale-[60%]" />,
                <img src={TailwindLogo} className="-translate-y-[15%]" />,
                <img src={CssLogo} className="scale-[80%] -translate-y-[15%]" />,
                <img src={VsLogo} className="-translate-y-[12%] rounded-full bg-white scale-[75%] p-6" />,
            ],
            [
                <img src={ViteLogo} className="scale-[70%] -translate-y-[12%]" />,
                <img src={VercelLogo} className="scale-[70%] -translate-y-[17%] bg-white rounded-full p-1" />,
                <img src={GitHubLogo} className="scale-[70%] -translate-y-[17%] bg-white rounded-full p-1 pt-0.5 pb-1.5" />,
                <img src={NodeJsLogo} className="scale-[70%] -translate-y-[17%] rounded-2xl" />,
                <img src={EfCoreLogo} className="scale-[100%] rounded-2xl" />,
                <img src={GitLogo} className="scale-[70%] -translate-y-[17%]" />,
            ],
            [
                <img src={ForkLogo} className="scale-[70%] -translate-y-[17%]" />,
                <img src={JavaLogo} className="scale-[75%] -translate-y-[17%] rounded-full bg-white p-5" />,
                <img src={MssmsLogo} />,
                <div></div>,
                <div></div>,
                <div></div>,
            ],
        ];

        return (
            <section id="technologies" className="main-section my-55">
                <div className="section-title" data-aos="fade-up">Technologies 🤖</div>
                <div className="flex flex-col items-center -translate-x-[2%] mr-4">
                    {!isMobile
                        ? <>
                            <div className="w-full flex justify-center items-center">
                                {desktopHexagonsContent.map((x, i) => renderHexagon(i, x, desktopHexagonsContent))}
                            </div>
                            <div className="w-full flex justify-center items-center">
                                {desktopHexagonsContent2.map((x, i) => renderHexagon(i, x, desktopHexagonsContent2))}
                            </div>
                        </>
                        : mobileHexagonsContent.map((row, idx) => (
                            <div key={idx} className="w-full flex justify-center items-center">
                                {row.map((x, i) => renderHexagon(i, x, row))}
                            </div>
                        ))
                    }
                </div>
            </section>
        );
    };

    const renderHexagon = (i: number, thisContent: JSX.Element, contentsArray: JSX.Element[]) => {
        // Only process even indices to form pairs
        if (i % 2 !== 0) return null; // Skip odd indices as they'll be handled by the even index before them

        var nextItem = contentsArray[i + 1];

        if (nextItem) {
            // Render two hexagons side-by-side
            return (
                <div key={i} className="w-min">
                    <div data-aos="flip-right" data-aos-delay={i * 100}>
                        <HexagonPlate className="scale-on-hover">{thisContent}</HexagonPlate>
                    </div>
                    <div data-aos="flip-left" data-aos-delay={i * 100}>
                        <HexagonPlate className="scale-on-hover translate-x-[50%]">{nextItem}</HexagonPlate>
                    </div>
                </div>
            );
        } else {
            // If there's an odd number of items, render the last one alone
            return (
                <div data-aos="fade-right">
                    <div key={i} className="w-min -translate-y-[50%]">
                        <HexagonPlate className="scale-on-hover">{thisContent}</HexagonPlate>
                    </div>
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
                    title="Barber with Booking"
                    description="This is a demo barber website created to showcase web design skills. It features a modern barbershop layout with example services, pricing, and a booking system."
                    image={BarberScreenshot}
                    siteLink="https://barber-with-booking.vercel.app"
                />
            }, {
                index: 1,
                content: <WorkSectionCard
                    title="Pelmeni Handmade Brighton"
                    description="Discover handmade Pelmeni and authentic Russian dishes in Brighton. Enjoy classic Russian cuisine in a cosy setting. Vegan options available."
                    image={PelmeniScreenshot}
                    siteLink="https://www.pelmenihandmade.co.uk/"
                />
            }, {
                index: 2,
                content: <WorkSectionCard
                    title="My portfolio website"
                    description="A clean and responsive portfolio showing off my UI capabilities. Visit this page to learn more about me and get in touch with me!"
                    image={PortfolioImage}
                    siteLink="https://www.mornenemdil.com"
                />
            },
        ]

        const EMPTY_SLIDES = [{
            index: 3,
            content: <WorkSectionCard
                title="Sanaz Art and Fashion"
                description="An art and fashion website for a designer based in Bournemouth."
                image={SanazImage}
                siteLink="https://www.sanazartandfashion.com"
            />
        }, {
            index: 4,
            content: <WorkSectionCard
                title="Coming soon!"
                description="Stay tuned ..."
            />
        }]

        return (<section id="work" className="main-section mt-60 lg:my-80">
            <div className="section-title" data-aos="fade-up">Work 💻</div>
            {breakpoint == 'xl'
                ? <EmblaCarousel slides={SLIDES.concat(EMPTY_SLIDES)} options={OPTIONS} />
                : <WorkCarouselMobile slides={SLIDES} />}
        </section>)
    }

    const PricingSection = () => {
        return <section id="pricing" className="main-section mt-60 lg:mt-0" >
            <div className="section-title" data-aos="fade-up">Pricing 🏷️</div>
            {breakpoint == 'md'
                ? <div className={`flex gap-15 flex-col md:flex-row`}>
                    <div data-aos="fade-right" data-aos-delay={100}><PricingCard1 /></div>
                    <div data-aos="fade-left" data-aos-delay={100}><PricingCard2 /></div>
                    <div data-aos="fade-right" data-aos-delay={100}><PricingCard3 /></div>
                </div>
                : <div className={`flex gap-15 flex-col md:flex-row`}>
                    <div data-aos="fade-up"><PricingCard1 /></div>
                    <div data-aos="fade-up" data-aos-delay={200}><PricingCard2 /></div>
                    <div data-aos="fade-up" data-aos-delay={400}><PricingCard3 /></div>
                </div>}
            <div className={`${theme == 'light' ? "text-gray-700 " : "text-gray-300"} text-center`}>Paying in installments is also available upon discussion 😊</div>
        </section>
    }

    const ContactSection = () => {
        const onSendEmail = async (event: any) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            const formDataObject = Object.fromEntries(formData.entries());

            for (const key in formDataObject) {
                const value = formDataObject[key];
                if (typeof value == 'string' && key !== 'phoneNumber' && isNullOrEmpty(value)) {
                    toast.error("All required fields must be completed")
                    return;
                }
            }

            const sendEmailPromise = new Promise(async (resolve, reject) => {
                try {
                    const response = await fetch('/api/send-email', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(formDataObject),
                    });

                    const data = await response.json();

                    if (response.ok && data.message) {
                        console.log('Successfully sent email', data.message);
                        event.target.reset();
                        resolve('success');
                    } else {
                        console.error('Error sending email:', data);
                        reject();
                    }
                } catch (error) {
                    console.error('Error sending email:', error);
                    reject();
                }
            });

            toast.promise(sendEmailPromise, {
                loading: 'Sending ...',
                success: () => 'Email sent successfully!',
                error: () => 'A problem occured while sending the email. If this persists, please contact me via email or instagram.'
            });
        }

        return <section id="contact" className="main-section !mt-60 lg:!mt-40">
            <div className="section-title" data-aos="fade-up">Contact 🤝</div>
            <div className="flex justify-center items-center">
                <Card data-aos="flip-left" data-aos-duration="1000">
                    <form className="flex flex-col gap-6 h-min" onSubmit={onSendEmail}>
                        <div
                            className="flex flex-wrap gap-4
                                max-sm:flex-col
                                min-md:flex-row min-md:h-auto"
                        >
                            <input type="hidden" name="access_key" value="7c5bce80-6a0c-470b-b5ca-4895f04e1ef1"></input>
                            <div className="flex flex-col justify-between gap-3">
                                <div className="flex flex-col gap-2 min-md:w-[18vw] max-sm:w-full" data-aos="fade-right" data-aos-delay="300">
                                    <Label className="ml-1">Full Name</Label>
                                    <Input type="text" placeholder="Full Name" name="fullName" />
                                </div>
                                <div className="flex flex-col gap-2 min-md:w-[18vw] max-sm:w-full" data-aos="fade-right" data-aos-delay="400">
                                    <Label className="ml-1">Email</Label>
                                    <Input type="email" placeholder="Email" name="email" />
                                </div>
                                <div className="flex flex-col gap-2 min-md:w-[18vw] max-sm:w-full" data-aos="fade-right" data-aos-delay="500">
                                    <Label className="ml-1">Phone Number (optional)</Label>
                                    <Input type="tel" placeholder="Phone Number" name="phoneNumber" />
                                </div>
                            </div>
                            <div className="!flex flex-col gap-2 min-md:w-[30vw] max-sm:w-full" data-aos="fade-left" data-aos-delay="400">
                                <Label className="ml-1">Message</Label>
                                <Textarea
                                    placeholder="Message"
                                    className="!h-[90%] overflow-y-auto resize-none"
                                    name="message"
                                />
                            </div>
                        </div>
                        <div className="mt-1" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
                            <Button type="submit" className="w-full hover:cursor-pointer motion-preset-expand">Send Email</Button>
                        </div>
                    </form>
                </Card>
            </div>
        </section>
    }

    return (
        <div className="">
            {theme == 'dark' ? <StarBackground /> : <CloudBackground />}
            <Header />
            <HeroSection />
            <AboutSection />
            <EducationSection />
            <TechnologiesSection />
            <WorkSection />
            <PricingSection />
            <ContactSection />
            <div className="h-40 md:h-10" />
        </div>
    )
}

export default HomePage