// here I am fetching data from the database and displaying it on the page
// This is a server component so I can't use useEffect or useState to fetch the data
// I am using the fetch function from lib/data to get the data
// I am using the map function to iterate over the data and display it on the page
// The data will be detected by SEO
// You can see the data in devtools -> network -> doc -> about
import { fetchAboutMe } from '../../../lib/data';
import { AboutMe } from '@prisma/client';

export default async function Page() {
    const about: AboutMe[] | null = await fetchAboutMe();
      
    if (!about || about.length === 0) {
        return <div>No data found</div>
    };

    return (
        <div>
            {/*here I am using the map function to iterate over the data and display it on the page*/}
            {about.map((person) => (
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
