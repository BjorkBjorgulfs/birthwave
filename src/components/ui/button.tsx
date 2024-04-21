'use client'
import Link from 'next/link';
import React from 'react';

interface ButtonProps {
    text: string;
    color?: 'dark' | 'light';
    onClick?: () => void;
    href?: string; // Link to another page
    type?: 'submit' | 'button'; // Type of the button
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, color = 'dark', onClick, href, type = 'button', className }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const colorClasses = color === 'dark'
        ? 'bg-custom-button-pink text-custom-black hover:bg-custom-button-hover' // dark theme
        : 'bg-custom-gray text-custom-black hover:bg-custom-button-pink'; // light theme

    if (href) {

        return (
            <Link href={href} passHref>
            <button
                className={`${colorClasses} ${className} flex items-center justify-center rounded-2xl h-10 min-w-32 border-none px-9 text-xl cursor-pointer transition-colors duration-300`} 
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
                className={`${colorClasses} ${className} flex items-center justify-center rounded-2xl h-10 min-w-32 border-none px-2.5 cursor-pointer transition-colors duration-300`} 
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