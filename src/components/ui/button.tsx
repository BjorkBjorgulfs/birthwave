'use client'
// This component is a client component because it uses the useState hook
import Link from 'next/link';
import { useState } from 'react';

// Interface for the props expected by the Button component
interface ButtonProps {
    text: string;
    color?: 'dark' | 'light';
    onClick?: () => void;
    href?: string; // href for linking to another page
    type?: 'submit' | 'button'; // Type of the button
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, color = 'dark', onClick, href, type = 'button', className }) => {
    const [isHovered, setIsHovered] = useState(false);

    // handlers for the mouse enter and leave events
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    // color classes for the button
    const colorClasses = color === 'dark'
        ? 'bg-custom-button-pink text-custom-black hover:bg-custom-button-hover' // dark theme
        : 'bg-custom-gray text-custom-black hover:bg-custom-button-pink'; // light theme

        // If the href prop is provided, the button will be a link
    if (href) {
        return (
            <Link href={href} passHref> {/* passHref is used to pass the href prop to the Link component */}
                <button
                    className={`${colorClasses} ${className} flex items-center justify-center rounded-2xl h-10 min-w-[178px] border-none px-7 text-lg cursor-pointer transition-colors duration-300`} 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={onClick}
                >
                    {text}
                </button>
            </Link>
        );
    } else {
        return (
            <button
                className={`${colorClasses} ${className} flex items-center justify-center rounded-2xl h-10 min-w-[178px] border-none px-2.5 cursor-pointer transition-colors duration-300`} 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={onClick}
                type={type}
            >
                {text}
            </button>
        )
    }
};

export default Button;