// ------- this is a page only for workshop purposes --------
// I am fetching data from the database and displaying it on the page
// This is a client component so I can use useEffect and useState to fetch the data
// I am fetching the data from the api route
// The data will not be detected by SEO
// You will not see the data in devtools -> network -> doc -> about
'use client';
import { AboutMe } from "@prisma/client";
import { useEffect, useState } from "react";
import Image from 'next/image';

export default function Page() {
    const [aboutData, setAboutData] = useState<AboutMe[] | null>(null); //useState to store the data

    //useEffect to fetch the data
    useEffect(() => {
        //async function to fetch the data
        async function getAboutMe() { 
            try {
                //fetching the data from the api route
                const response = await fetch('../api/about');
                //checking if the response is ok
                if (!response.ok) {
                    console.error('Error fetching about me data:', response.statusText);
                    throw new Error('Failed to fetch about me');
                }
                //converting the response to json
                const data = await response.json();
                //setting the data to the state
                setAboutData(data);
                //catching any errors
            } catch (error) {
                console.error('Error fetching about me:', error);
            }
        }
        //calling the function
        getAboutMe();
    }, []);

    //if there is no data found
    if (!aboutData || aboutData.length === 0) {
        return <div>No data found</div>
    };

    return (
        <main>
            <div className="w-full h-[600px] relative overflow-hidden">
                <Image src="/womanWithDoula.jpg" alt="Pregnant Woman With Doula" layout="fill" objectFit="cover" objectPosition="center 85%"  sizes= 'width: "auto"'/>
            </div>
            {/*here I am using the map function to iterate over the data and display it on the page*/}
            {aboutData.map((person) => (
                <div className='flex w-full h-screen justify-center items-center gap-8'>
                    <div key={person.id} className="w-[700px] h-3/4 max-h-[500px] bg-custom-pink rounded-2xl p-10 overflow-auto">
                        <p className="text-lg leading-8 overflow-ellipsis">{person.info}</p>
                    </div>
                    <div className='flex flex-col justify-end relative h-3/4 max-h-[500px]'>
                        <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-custom-pink rounded-full overflow-hidden"></div>
                        <div key={person.id} className="w-[350px] h-2/5 max-h-[250px] bg-custom-yellow rounded-2xl p-6 overflow-hidden gap-8">
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