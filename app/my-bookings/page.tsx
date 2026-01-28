"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Appointment {
    id: string;
    service: string;
    therapist: string;
    date: string;
    time: string;
    status: string;
    createdAt: string;
}

export default function MyBookingsPage() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login?callbackUrl=/my-bookings");
            return;
        }

        if (status === "authenticated") {
            fetch("/api/appointments")
                .then((res) => res.json())
                .then((data) => {
                    if (Array.isArray(data)) {
                        setAppointments(data);
                    }
                })
                .finally(() => setLoading(false));
        }
    }, [status, router]);

    if (status === "loading" || loading) {
        return (
            <div className="flex h-[50vh] items-center justify-center">
                <div className="text-xl font-bold text-primary">Loading...</div>
            </div>
        );
    }

    return (
        <main className="container mx-auto px-4 py-12">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-black text-text-light dark:text-white">My Bookings</h1>
                <Link href="/book-appointment">
                    <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg transition-colors">
                        Book New
                    </button>
                </Link>
            </div>

            {appointments.length === 0 ? (
                <div className="text-center py-20 bg-gray-50 dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700">
                    <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600 mb-4">calendar_today</span>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">You have no upcoming appointments.</p>
                    <Link href="/book-appointment" className="text-primary font-bold hover:underline">
                        Schedule your first visit
                    </Link>
                </div>
            ) : (
                <div className="grid gap-4">
                    {appointments.map((apt) => (
                        <div key={apt.id} className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-primary/30 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <span className="material-symbols-outlined">event</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-text-light dark:text-white">{apt.service}</h3>
                                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-1">
                                        <span className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">person</span>
                                            {apt.therapist}
                                        </span>
                                        <span>•</span>
                                        <span>{apt.date} at {apt.time}</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 uppercase tracking-wide">
                                    {apt.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
}
