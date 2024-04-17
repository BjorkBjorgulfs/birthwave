import Image from "next/image";

export default function ContactPage () {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="w-full h-[600px] relative overflow-hidden">
          <Image src="/womanWithDoula.jpg" alt="Pregnant Woman With Doula" layout="fill" objectFit="cover" objectPosition="center 85%"  sizes= 'width: "auto"'/>
        </div>
            <div>
                <h1>Contact Page</h1>
                {/* Add your contact form or other content here */}
            </div>
        </main>
    );
};
