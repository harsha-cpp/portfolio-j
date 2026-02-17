import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                // In production, verify against database with hashed password
                // For development, use environment variables
                const adminEmail = process.env.ADMIN_EMAIL || "admin@jahnavi.dev";
                const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

                if (
                    credentials?.email === adminEmail &&
                    credentials?.password === adminPassword
                ) {
                    return {
                        id: "1",
                        name: "Jahnavi Dantuluri",
                        email: adminEmail,
                        role: "admin",
                    };
                }
                return null;
            },
        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    pages: {
        signIn: "/admin/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                token.role = (user as any).role;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (session.user as any).role = token.role;
            }
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
};
