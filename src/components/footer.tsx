import {FaFacebook} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import Image from 'next/image';

export const Footer = () => {
    return (
        <footer className="flex justify-between items-center bg-custom-footer h-[160px] px-10">
            <div>
                <Image src="/logoDark.svg" alt="Logo" width={77} height={88} />
            </div>
            <section className="flex flex-col space-y-4">
                <div className='flex gap-4'>
                    <FaFacebook size={40} className="text-custom-black cursor-pointer" />
                    <FaInstagram size={40} className="text-custom-black cursor-pointer" />
                </div>
                <div>
                    <a href='email'>doulumattur@gmail.com</a>
                </div>
            </section>
        </footer>
    );
};