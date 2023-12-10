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
