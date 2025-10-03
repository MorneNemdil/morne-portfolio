import { type LucideProps } from 'lucide-react';
import React from 'react'
import { useTheme } from './theme-provider';

const LucideButton = ({ Icon, onClick }: {
    Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>,
    onClick?: (props?: any) => any
}) => {
    const { theme } = useTheme()

    return (
        <div className={`p-1 pb-1.5 shadow-xl border rounded-full hover:shadow hover:shadow-gray-700 hover:cursor-pointer w-min 
            ${theme == 'dark' && "bg-white text-black"}`}
            onClick={onClick}
        >
            <Icon className='mt-0.5 mx-0.5' />
        </div>
    )
}

export default LucideButton