import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            //? Membuat halaman Sign In dengan input yang diinginkan
            type: "credentials",
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            //? Ketika klik tombol Sign In akan menjalankan ini
            async authorize(credentials) {
                const { username, email, password } = credentials as {
                    username: string;
                    email: string;
                    password: string;
                };

                const user: any = { id: 1, username:username, email: email, password: password };
                if (user) {
                    return user;
                } else {
                    return null;
                }
            },
        }),
    ],
    //? Setelah authorize akan menjalankan ini
    callbacks: {
        jwt({ token, account, profile, user }: any) {
            if (account?.provider === "credentials") {
                //? untuk mengirimkan data yang diperlukan ke session
                token.email = user.email;
                token.username = user.username;
            }
            //? token secara default berisi = email, picture, name
            return token;
        },
        async session({ session, token }: any) {
            //? untuk mengecek kiriman data yang diperlukan ke session
            if ("email" in token) {
                session.user.email = token.email;
            }
            if ("username" in token) {
                session.user.username = token.username;
            }
            //? session biasanya berisi = email, expires
            return session;
        }
    },
};

export default NextAuth(authOptions);