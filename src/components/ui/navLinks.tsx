'use client'
// this is a client component because it uses the usePathname hook
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GrUserFemale } from "react-icons/gr";

const NavLink = () => {
    const pathname = usePathname(); // Using usePathname to determine if the link is active

    // Array of links with their href and label
    const links = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About me" },
        { href: "/service", label: "My service" },
        { href: "/info", label: "What is doula" },
        { href: "/contact", label: "Contact" },
        { href: "/sign-in", icon: <GrUserFemale size={24} className='mb-1'/> },
    ];

    // Function to determine if the link is active
    const isActive = (href: string) => 
        pathname === href;

    
    return (
        <nav>
            <ul className="flex space-x-8">
                {/* Loop through the links array and display the links */}
                {links.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href}>
                            {/* If the link is active, add the active class */}
                            <h2 className={`text-xl cursor-pointer link border-b-2 pb-0.5 
                                ${isActive(link.href) ? 'border-custom-footer text-custom-footer' : 'border-custom-black border-opacity-0'}
                                hover:border-custom-footer hover:border-opacity-100 transition-all duration-500 ease-in-out`}>
                                {link.label}
                                {link.icon }
                            </h2>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavLink;
