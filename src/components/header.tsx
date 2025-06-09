import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider"
import { Button } from "./ui/button"
import { Card } from "./ui/card"

const Header = () => {
    const { theme, setTheme } = useTheme();
    return (
        <div className="sticky top-3 z-10">
            <Card className="bg-white m-3">
                <div className="text-black">
                    <Button onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}>{theme == 'light' ? <Moon /> : <Sun />}</Button>
                </div>
            </Card>
        </div>
    )
}

export default Header