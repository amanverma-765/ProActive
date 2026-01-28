import { AppointmentFormData } from "@/lib/validations";

// In-memory store (mock database)
const appointments: AppointmentFormData[] = [];

export async function createAppointment(data: AppointmentFormData) {
    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    appointments.push(data);
    console.log("New Appointment Booked:", data);

    return { success: true, id: appointments.length };
}

export async function getAppointments() {
    return appointments;
}
