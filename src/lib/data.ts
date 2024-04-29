import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Fetch users from Supabase
export async function fetchUsers() {
    try {
        const users = await prisma.user.findMany();
        if (!users) {
            return null;
        }
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error ('Failed to fetch users');
    };
};

// fetch "about me" data from Supabase
// this fetch function will be used in the server component
export async function fetchAboutMe() {
    try {
        const aboutMeData = await prisma.aboutMe.findMany(); //"aboutMe" is the name of the table in the database
        if (!aboutMeData) { 
            return null; //if there is no data found then return null
        }
        // return the data
        return aboutMeData;
        //catch any errors
    } catch (error) {
        console.error('Error fetching about me:', error);
        throw new Error ('Failed to fetch about me');
    };
};
