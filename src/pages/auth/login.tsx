import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router"
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {

    const { push, query } = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const callbackUrl: any = query.callbackUrl || '/';

    const handleLogin = () => {
        push("/");
    }

    //? Login atau Sign In
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const res = await signIn('credentials', {
                redirect: false,
                email: event.target.email.value,
                password: event.target.password.value,
                callbackUrl,
            });

            if (!res?.error) {
                setIsLoading(false);
                push(callbackUrl);
            } else {
                setIsLoading(false);
                setError("Email or password is incorrect");
            }

        } catch (error: any) {
            setIsLoading(false);
            setError("Email or password is incorrect");
        }
    };

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <div className="flex h-screen flex-wrap items-center justify-center lg:justify-between px-20">
                <div className="mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 lg:w-6/12 xl:w-6/12">
                    <Image src="/loginImage.svg" width={500} height={500} alt="Login Image" className="w-fit mx-auto" />
                </div>

                <form onSubmit={handleSubmit} className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                    {error &&
                        <div role="alert" className="alert alert-error">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{error}</span>
                        </div>
                    }

                    <div className="flex flex-row items-center justify-center lg:justify-start">
                        <p className="mb-0 mr-4 text-lg">Sign in with</p>

                        <button type="button" className="btn btn-circle bg-fun-green hover:bg-eden text-white" onClick={() => signIn('google', {callbackUrl, redirect: false})}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-6 w-6" viewBox="0 0 24 24"><path d="M3.06364 7.50914C4.70909 4.24092 8.09084 2 12 2C14.6954 2 16.959 2.99095 18.6909 4.60455L15.8227 7.47274C14.7864 6.48185 13.4681 5.97727 12 5.97727C9.39542 5.97727 7.19084 7.73637 6.40455 10.1C6.2045 10.7 6.09086 11.3409 6.09086 12C6.09086 12.6591 6.2045 13.3 6.40455 13.9C7.19084 16.2636 9.39542 18.0227 12 18.0227C13.3454 18.0227 14.4909 17.6682 15.3864 17.0682C16.4454 16.3591 17.15 15.3 17.3818 14.05H12V10.1818H21.4181C21.5364 10.8363 21.6 11.5182 21.6 12.2273C21.6 15.2727 20.5091 17.8363 18.6181 19.5773C16.9636 21.1046 14.7 22 12 22C8.09084 22 4.70909 19.7591 3.06364 16.4909C2.38638 15.1409 2 13.6136 2 12C2 10.3864 2.38638 8.85911 3.06364 7.50914Z" fill="currentColor"></path></svg>
                        </button>
                    </div>

                    <div className="divider text-gray-600">OR</div>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-fun-green font-semibold">Email</span>
                        </div>
                        <input type="email" name="email" placeholder="ucup@example.com" className="input input-bordered w-full border-fun-green focus:border-fun-green focus:outline-fun-green text-eden" />
                        <div className="label">
                            {/* <span className="label-text-alt">Bottom Left label</span> */}
                        </div>
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-fun-green font-semibold">Password</span>
                        </div>
                        <input type="password" name="password" placeholder="••••••••" className="input input-bordered w-full border-fun-green focus:border-fun-green focus:outline-fun-green text-eden" />
                        <div className="label">
                            {/* <span className="label-text-alt">Bottom Left label</span> */}
                        </div>
                    </label>

                    <div className="mb-6 flex items-center justify-between">
                        <div className="form-control">
                            <label className="label cursor-pointer gap-x-3">
                                <input type="checkbox" className="checkbox border-fun-green checked:border-tradewind [--chkbg:theme(colors.tradewind)] [--chkfg:white]" />
                                <span className="label-text text-fun-green">Remember me</span>
                            </label>
                        </div>
                    </div>

                    <div className="text-center lg:text-left">
                        {/* <button className="btn px-7 pb-2.5 pt-3 uppercase text-white bg-fun-green hover:bg-eden" onClick={() => handleLogin()}>Login</button> */}
                        <button type="submit" className="btn px-7 pb-2.5 pt-3 uppercase text-white bg-fun-green hover:bg-eden" disabled={isLoading}>
                            {isLoading ? "Loading..." : "Login"}
                        </button>

                        <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                            Don&apos;t have an account? <Link href="/auth/register" className="text-tradewind transition duration-150 ease-in-out hover:text-eden focus:text-eden active:text-eden">Register</Link>
                        </p>
                    </div>
                </form>
            </div>
        </>
    )
}
