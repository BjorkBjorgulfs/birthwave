import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Fetch users from Supabase
export default async function fetchUsers() {
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

