import { ContactFormData, AppointmentFormData } from "./validations";

export const api = {
    contact: {
        send: async (data: ContactFormData) => {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error("Failed to send message");
            }
            return response.json();
        },
    },
    appointments: {
        book: async (data: AppointmentFormData) => {
            const response = await fetch("/api/appointments", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error("Failed to book appointment");
            }
            return response.json();
        },
    },
};
