import { ContactFormData } from "@/lib/validations";

// In-memory store (mock database)
const messages: ContactFormData[] = [];

export async function createContact(data: ContactFormData) {
    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    messages.push(data);
    console.log("New Message Received:", data);

    return { success: true, id: messages.length };
}

export async function getContacts() {
    return messages;
}
