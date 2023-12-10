import { login } from "@/lib/firebase/services";
import { compare } from "bcrypt";
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
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            //? Ketika klik tombol Sign In akan menjalankan ini
            async authorize(credentials) {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };

                //? Testing login
                // const user: any = { id: 1, email: email, password: password };

                //? Login dengan database: firebase
                const user: any = await login({ email });

                if (user) {
                    const passwordConfirm = await compare(password, user.password);
                    if (passwordConfirm) {
                        return user;
                    }
                    return null;
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
                token.role = user.role;
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
            if ("role" in token) {
                session.user.role = token.role;
            }
            //? session biasanya berisi = email, expires
            return session;
        }
    },
    pages: {
        signIn: "/auth/login",
    }
};

export default NextAuth(authOptions);