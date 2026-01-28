import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { getDB } from "@/lib/db";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

interface Appointment {
    id: string;
    userId: string;
    service: string;
    therapist: string;
    date: string;
    time: string;
    status: string;
    createdAt: string;
}

const appointmentSchema = z.object({
    service: z.string(),
    therapist: z.string(),
    date: z.string(),
    time: z.string(),
});

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || !session.user) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const body = await req.json();
        const { service, therapist, date, time } = appointmentSchema.parse(body);
        const userId = (session.user as any).id;
        const id = uuidv4();

        const db = await getDB();
        await db
            .prepare("INSERT INTO appointments (id, userId, service, therapist, date, time) VALUES (?, ?, ?, ?, ?, ?)")
            .bind(id, userId, service, therapist, date, time)
            .run();

        return NextResponse.json(
            { message: "Appointment booked successfully", id },
            { status: 201 }
        );
    } catch (error) {
        console.error("Booking error:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}

export async function GET(req: Request) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || !session.user) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const userId = (session.user as any).id;
        const db = await getDB();

        const { results: appointments } = await db
            .prepare("SELECT * FROM appointments WHERE userId = ? ORDER BY createdAt DESC")
            .bind(userId)
            .all<Appointment>();

        return NextResponse.json(appointments);
    } catch (error) {
        console.error("Fetch appointments error:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
