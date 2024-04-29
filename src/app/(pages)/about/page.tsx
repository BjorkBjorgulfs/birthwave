// here I am fetching data from the database and displaying it on the page
// This is a server component so I can't use useEffect or useState to fetch the data
// I am using the fetch function from lib/data to get the data
// I am using the map function to iterate over the data and display it on the page
// The data will be detected by SEO
// You can see the data in devtools -> network -> doc -> about
import { fetchAboutMe } from '../../../lib/data';
import { AboutMe } from '@prisma/client';
import Image from 'next/image';

export default async function Page() {
    //fetching the data from the lib/data, not using useEffect or useState so the page remains a server component
    const about: AboutMe[] | null = await fetchAboutMe(); 
      
    // if there is no data found then return a message
    if (!about || about.length === 0) {
        return <div>No data found</div>
    };

    return (
        <main>
            <div className="w-full h-[600px] relative overflow-hidden">
                <Image src="/womanWithDoula.jpg" alt="Pregnant Woman With Doula" layout="fill" objectFit="cover" objectPosition="center 85%"  sizes= 'width: "auto"'/>
            </div>
            {/*here I am using the map function to iterate over the data and display it on the page*/}
            {about.map((person) => (
                <div className='flex w-full h-screen justify-center items-center gap-8'>
                    <div key={person.id} className="w-[700px] h-3/4 bg-custom-pink rounded-2xl p-10 overflow-hidden">
                        <p className="text-lg leading-8 overflow-ellipsis">{person.info}</p>
                    </div>
                    <div className='flex flex-col justify-end relative h-3/4 '>
                        <div className="absolute top-0 right-0 w-[180px] h-2/5 bg-custom-pink rounded-full overflow-hidden"></div>
                    <div key={person.id} className="w-[350px] h-2/5 bg-custom-yellow rounded-2xl p-6 overflow-hidden gap-8">
                            <h1 className='text-lg'>The basics</h1>
                            <p className='text-base'>{person.name}</p>
                            <p className='text-base'>Email: {person.email}</p>
                            <p className='text-base'>Phone: {person.phone}</p>
                            <p className='text-base'>Address: {person.address}</p>
                        </div>
                    </div>
                </div>
            ))}
        </main>
    );
};
