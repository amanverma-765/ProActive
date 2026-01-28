import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getDB } from "@/lib/db";
import bcrypt from "bcryptjs";

interface User {
    id: string;
    name: string;
    email: string;
    password: string;
}

export const authOptions: any = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials: any) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                const db = getDB();
                const user = await db
                    .prepare("SELECT * FROM users WHERE email = ?")
                    .bind(credentials.email)
                    .first<User>();

                if (!user) {
                    return null;
                }

                const isValid = await bcrypt.compare(credentials.password, user.password);

                if (!isValid) {
                    return null;
                }

                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                };
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user }: any) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }: any) {
            if (session.user) {
                session.user.id = token.id;
            }
            return session;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// Enable edge runtime for Cloudflare Pages
export const runtime = 'edge';
