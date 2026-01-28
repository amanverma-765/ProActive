import { NextResponse } from "next/server";
import { getDB } from "@/lib/db";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

const contactSchema = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email(),
    subject: z.string().min(1),
    message: z.string().min(1),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { firstName, lastName, email, subject, message } = contactSchema.parse(body);
        const id = uuidv4();

        const db = getDB();
        await db
            .prepare("INSERT INTO contact_messages (id, firstName, lastName, email, subject, message) VALUES (?, ?, ?, ?, ?, ?)")
            .bind(id, firstName, lastName, email, subject, message)
            .run();

        return NextResponse.json(
            { message: "Message sent successfully" },
            { status: 201 }
        );
    } catch (error) {
        console.error("Contact error:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}

// Enable edge runtime for Cloudflare Pages
export const runtime = 'edge';
