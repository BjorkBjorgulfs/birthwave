import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-custom-white h-[160px] px-10">
            <Link href="/">
                <Image src="/logoWithText.svg" alt="Logo" width={110} height={124.4} />
            </Link>
            <nav>
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/">
                            <h2 className='text-xl cursor-pointer'>Home</h2>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <h2 className='text-xl cursor-pointer'>About me</h2>
                        </Link>
                    </li>
                    <li>
                        <Link href="/service">
                            <h2 className='text-xl cursor-pointer'>My service</h2>
                        </Link>
                    </li>
                    <li>
                        <Link href="/info">
                            <h2 className='text-xl cursor-pointer'>What is doula</h2>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <h2 className='text-xl cursor-pointer'>Contact</h2>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};