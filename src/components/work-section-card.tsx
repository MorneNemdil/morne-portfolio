import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";
import { scrollToSectionMiddle } from "@/lib/utils";

interface WorkSectionCardProps {
    title: string;
    description: string;
    image?: any;
    siteLink?: string;
}

const WorkSectionCard = ({ title, description, image, siteLink }: WorkSectionCardProps) => {
    const { theme } = useTheme();

    return (
        <div className="flex flex-col justify-between h-full items-center">
            <div className="flex flex-col items-center gap-3">
                <div className={"text-2xl text-center".concat(theme == 'dark' ? ' text-purple-400' : ' text-blue-400')}>{title}</div>
                <div className="text-center">{description}</div>
            </div>
            {image
                ? <img src={image} />
                : <div className={`${theme == 'light' ? 'bg-gray-500' : 'bg-blue-950'} h-[40%] w-full border rounded-md flex justify-center items-center text-lg`}>
                    ...
                </div>}
            <div className="flex gap-3">
                <Button onClick={() => { if (Boolean(siteLink)) { window.open(siteLink, '_blank') } }}>Live Demo</Button>
                <Button onClick={() => scrollToSectionMiddle("contact")} className="bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-gray-200">Make your own</Button>
            </div>
        </div >
    )
}

export default WorkSectionCard