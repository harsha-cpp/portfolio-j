import { NextResponse } from "next/server";
import heroData from "@/data/hero.json";

export async function GET() {
    // In production:
    // const settings = await prisma.siteSettings.findUnique({ where: { id: "default" } });
    return NextResponse.json({
        heroName: heroData.name,
        heroTitle: heroData.title,
        heroDesc: heroData.description,
        resumeUrl: "/resume.pdf",
        email: "jahnavi.dantuluri@gmail.com",
        linkedinUrl: "https://linkedin.com/in/jahnavi-dantuluri",
    });
}

export async function PUT(request: Request) {
    try {
        const body = await request.json();
        // const settings = await prisma.siteSettings.upsert({
        //   where: { id: "default" },
        //   update: body,
        //   create: { id: "default", ...body },
        // });
        return NextResponse.json(
            { message: "Settings updated (CMS mode required)", data: body }
        );
    } catch {
        return NextResponse.json(
            { error: "Failed to update settings" },
            { status: 500 }
        );
    }
}
