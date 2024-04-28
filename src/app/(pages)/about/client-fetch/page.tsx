// ------- this is a page only for workshop purposes --------
// I am fetching data from the database and displaying it on the page
// This is a client component so I can use useEffect and useState to fetch the data
// I am fetching the data from the api route
// The data will not be detected by SEO
// You will not see the data in devtools -> network -> doc -> about
'use client';
import { AboutMe } from "@prisma/client";
import { useEffect, useState } from "react";

export default function Page() {
    const [aboutData, setAboutData] = useState<AboutMe[] | null>(null);

    useEffect(() => {
        async function getAboutMe() {
            try {
                const response = await fetch('../api/about');

                if (!response.ok) {
                    console.error('Error fetching about me data:', response.statusText);
                    throw new Error('Failed to fetch about me');
                }
                const data = await response.json();
                setAboutData(data);
            } catch (error) {
                console.error('Error fetching about me:', error);
            }
        }
        getAboutMe();
    }, []);

    if (!aboutData || aboutData.length === 0) {
        return <div>No data found</div>
    };

    return (
        <div>
            {aboutData.map((person) => (
                <div key={person.id}>
                    <h1>{person.name}</h1>
                    <p>{person.email}</p>
                    <p>{person.phone}</p>
                    <p>{person.address}</p>
                    <p>{person.info}</p>
                </div>
            ))}
        </div>
    );
};