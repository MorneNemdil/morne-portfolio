import { Check, X } from "lucide-react"
import { Card } from "../ui/card"
import { Separator } from "../ui/separator"
import { Button } from "../ui/button"
import { useTheme } from "../theme-provider"
import { Link } from "react-scroll"

const PricingCard1 = () => {
    const { theme } = useTheme();

    return (
        <div className="flex justify-center scale-on-hover">
            <Card className="p-7 md:w-xs">
                <div className="flex flex-col gap-1">
                    <div className="text-3xl font-semibold">Landing Page</div>
                    <div className="text-xl">£150 - £199</div>
                </div>
                <Separator />
                <div className="flex gap-3">
                    <Check className={`border rounded-full ${theme == 'light' ? 'border-blue-400' : 'border-purple-400'} p-1 scale-110`} />
                    <div>Mobile friendly</div>
                </div>
                <div className="flex gap-3">
                    <Check className={`border rounded-full ${theme == 'light' ? 'border-blue-400' : 'border-purple-400'} p-1 scale-110`} />
                    <div>Single page</div>
                </div>
                <div className="gap-3 text-gray-400 hidden md:flex">
                    <X className="border rounded-full border-gray-400 p-1 scale-110" />
                    <div>Upgrade up to 3 pages</div>
                </div>
                <div className="gap-3 text-gray-400 hidden md:flex">
                    <X className="border rounded-full border-gray-400 p-1 scale-110" />
                    <div>Upgrade up to 5 pages</div>
                </div>
                <div className="gap-3 text-gray-400 hidden md:flex">
                    <X className="border rounded-full border-gray-400 p-1 scale-110" />
                    <div>Light animations</div>
                </div>
                <div className="hidden md:flex gap-3 text-gray-400">
                    <X className="border rounded-full border-gray-400 p-1 scale-110" />
                    <div>Backend</div>
                </div>
                <div className="hidden md:flex gap-3 text-gray-400">
                    <X className="border rounded-full border-gray-400 p-1 scale-110" />
                    <div>Authentication</div>
                </div>
                <Link className="w-full flex justify-center" to="contact" smooth={true} duration={500}>
                    <Button className="w-full">Get Started</Button>
                </Link>
            </Card>
        </div>
    )
}

export default PricingCard1