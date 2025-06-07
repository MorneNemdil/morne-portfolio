import LucideButton from "@/components/lucide-button";
import { useTheme } from "@/components/theme-provider"
import TypewriterText, { type TypeWriterSegment } from "@/components/typewriter-text";
import { Button } from "@/components/ui/button"
import { House } from "lucide-react";

const HomePage = () => {
    const { theme, setTheme } = useTheme();

    const typewriterText = "I'm a ";
    const typewriterSegments: TypeWriterSegment[] = [
        { text: "Developer", colourClass: "text-blue-400" },
        { text: "Team Leader", colourClass: "text-purple-400" },
        { text: "Designer", colourClass: "text-green-400" },
        { text: "Solver", colourClass: "text-red-400" },
    ];

    return (
        <div>
            <Button onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}>Toggle Theme</Button>
            <TypewriterText staticText={typewriterText} textSegments={typewriterSegments} />
            <LucideButton Icon={House} />
        </div>
    )
}

export default HomePage