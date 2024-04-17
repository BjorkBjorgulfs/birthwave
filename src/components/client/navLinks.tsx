'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = () => {
    const pathname = usePathname(); // Using usePathname to determine if the link is active

    const links = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About me" },
        { href: "/service", label: "My service" },
        { href: "/info", label: "What is doula" },
        { href: "/contact", label: "Contact" },
    ];

    const isActive = (href: string) => 
        pathname === href;

    return (
        <nav>
            <ul className="flex space-x-8">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href}>
                            <h2 className={`text-xl cursor-pointer link border-b-2 pb-0.5 
                                ${isActive(link.href) ? 'border-custom-footer' : 'border-custom-black border-opacity-0'}
                                hover:border-custom-footer hover:border-opacity-100 transition-all duration-500 ease-in-out`}>
                                {link.label}
                            </h2>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavLink;
