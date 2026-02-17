import { NextResponse } from "next/server";
import experiences from "@/data/experiences.json";

export async function GET() {
    // In production, fetch from database using Prisma
    // import prisma from "@/lib/db";
    // const experiences = await prisma.experience.findMany({ orderBy: { order: "asc" } });
    return NextResponse.json(experiences);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // In production, create in database
        // const experience = await prisma.experience.create({ data: body });
        // return NextResponse.json(experience, { status: 201 });

        return NextResponse.json(
            { message: "Experience created (CMS mode required)", data: body },
            { status: 201 }
        );
    } catch {
        return NextResponse.json(
            { error: "Failed to create experience" },
            { status: 500 }
        );
    }
}
