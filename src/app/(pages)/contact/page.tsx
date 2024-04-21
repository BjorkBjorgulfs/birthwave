import Image from "next/image";
import ContactForm from "@/components/form/contactForm";

export default function ContactPage () {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="w-full h-[600px] relative overflow-hidden">
            <Image src="/womanWithDoula.jpg" alt="Pregnant Woman With Doula" layout="fill" objectFit="cover" objectPosition="center 85%"  sizes= 'width: "auto"'/>
            </div>
            <div className="flex h-screen items-center justify-center">
                <div className="flex">
                    <div>
                        <div className="flex flex-col bg-custom-gray py-6 px-8 rounded-l-2xl gap-6">
                            <p className="text-lg">Please contact me <br/>by filling out the form.</p>
                            <p className="text-lg">You can ask me anything, <br/>look forward to hearing from you.</p>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </main>
    );
};
