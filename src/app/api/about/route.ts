// This is the route file for the about me API endpoint
import { db } from "@/lib/db"; 
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const about = await db.aboutMe.findMany();
        if (!about || about.length === 0) {
            return NextResponse.json({error: 'No data found'}, { status: 404 });
        } 
        return NextResponse.json(about);

    } catch (error) {
        console.error('Error fetching about me:', error);
        return NextResponse.json({error: 'An error occurred'}, { status: 500 });
    }
}