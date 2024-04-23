//This is a basic navbar with logo and links
import Image from 'next/image';
import Link from 'next/link';
import NavLink from './ui/navLinks'; // Importing the NavLink component, which is a client component because it uses the usePathname hook

export const Navbar = () => {
   
    return (
        <header className="flex items-center justify-between py-4 bg-custom-white h-[160px] px-20">
            <Link href="/">
                <Image src="/logoWithText.svg" alt="Logo" width={110} height={124.4}  sizes= 'width: "auto"' />
            </Link>
            <NavLink />
        </header>
    );
};