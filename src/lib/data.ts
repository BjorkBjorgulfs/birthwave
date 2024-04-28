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

export async function fetchAboutMe() {
    try {
        const aboutMeData = await prisma.aboutMe.findMany();
        if (!aboutMeData) {
            return null;
        }
        return aboutMeData;
    } catch (error) {
        console.error('Error fetching about me:', error);
        throw new Error ('Failed to fetch about me');
    };
};
