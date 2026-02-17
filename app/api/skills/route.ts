import { NextResponse } from "next/server";
import skillsData from "@/data/skills.json";

export async function GET() {
    // In production, fetch from database
    // const skills = await prisma.skill.findMany({ orderBy: { order: "asc" } });
    return NextResponse.json(skillsData);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        // const skill = await prisma.skill.create({ data: body });
        return NextResponse.json(
            { message: "Skill created (CMS mode required)", data: body },
            { status: 201 }
        );
    } catch {
        return NextResponse.json(
            { error: "Failed to create skill" },
            { status: 500 }
        );
    }
}
