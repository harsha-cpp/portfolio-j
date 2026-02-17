import { NextResponse } from "next/server";
import projects from "@/data/projects.json";

export async function GET() {
    // In production, fetch from database
    // const projects = await prisma.project.findMany({
    //   include: { sections: { orderBy: { order: "asc" } } },
    //   orderBy: { order: "asc" },
    // });
    return NextResponse.json(projects);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        // const project = await prisma.project.create({ data: body });
        return NextResponse.json(
            { message: "Project created (CMS mode required)", data: body },
            { status: 201 }
        );
    } catch {
        return NextResponse.json(
            { error: "Failed to create project" },
            { status: 500 }
        );
    }
}
