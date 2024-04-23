// here I was just checking if I could fetch data from the database and display it on the page
// I was trying to fetch without using useEffect, because that would make it a client component
// so I'm importing the fetch function from lib/data and calling it directly in the component
import fetchUsers from '../../../lib/data';

export default async function About() {
    async function getUsers() {
        try {
            const users = await fetchUsers();
            console.log(users);
            // Do something with the users data
            return users; // Return the users data
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    const users = await getUsers() ?? []; // Await the getUsers function call and provide a default value of an empty array if 'users' is null or undefined

    return (
        <div>
            <div>
                <h1>here should be users {users[0]?.username}</h1> {/* Access the username property of the first user */}
            </div>
        </div>
    )
}
