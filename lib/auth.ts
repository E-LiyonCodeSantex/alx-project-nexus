import CredentialsProvider from "next-auth/providers/credentials";
import type { JWT } from "next-auth/jwt";
import type { Session } from "next-auth";
import axios from "axios";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    console.error("❌ Missing email or password in credentials");
                    return null;
                }

                try {
                    const res = await axios.post(
                        "https://e-commerce-backend-hvtu.onrender.com/api/users/login/",
                        {
                            email: credentials.email,
                            password: credentials.password,
                        },
                        {
                            withCredentials: true,
                            headers: {
                                "Content-Type": "application/json",
                            },
                        }
                    );

                    console.log("✅ Response status:", res.status);
                    const data = res.data;
                    console.log("✅ Login response:", data);

                    if (!data.user) {
                        console.error("❌ Missing user object in response");
                        return null;
                    }

                    return {
                        id: data.user.id,
                        email: data.user.email,
                        username: data.user.username,
                    };
                } catch (err: unknown) {
                    if (axios.isAxiosError(err)) {
                        console.error("❌ Axios error:", err.response?.data || err.message);
                    } else {
                        console.error("❌ Unexpected error:", err);
                    }
                    return null;
                }
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user }: { token: JWT; user?: any }) {
            if (user && 'id' in user && 'email' in user) {
                token.id = user.id;
                token.email = user.email;
                if ('username' in user) {
                    token.username = user.username;
                }
            }
            return token;
        },
        async session({ session, token }: { session: Session; token: JWT }) {
            session.user.id = token.id;
            session.user.email = token.email;
            session.user.username = token.username;
            return session;
        },
    },

};
