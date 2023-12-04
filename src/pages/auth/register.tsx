import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router"

export default function RegisterPage() {

    const { push } = useRouter();
    const handleRegister = () => {
        push("/auth/login");
    }

    return (
        <>
            <Head>
                <title>Register</title>
            </Head>
            <div className="flex h-screen flex-wrap items-center justify-center lg:justify-between px-20">
                <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                    <Image src="/loginImage.svg" width={500} height={500} alt="Login Image" className="w-fit mx-auto" />
                </div>

                <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-fun-green font-semibold">Username</span>
                        </div>
                        <input type="text" placeholder="Ucup@example.com" className="input input-bordered w-full border-fun-green focus:border-fun-green focus:outline-fun-green text-almond-forest" />
                        <div className="label">
                            {/* <span className="label-text-alt">Bottom Left label</span> */}
                        </div>
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-fun-green font-semibold">Email</span>
                        </div>
                        <input type="email" placeholder="Ucup@example.com" className="input input-bordered w-full border-fun-green focus:border-fun-green focus:outline-fun-green text-almond-forest" />
                        <div className="label">
                            {/* <span className="label-text-alt">Bottom Left label</span> */}
                        </div>
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-fun-green font-semibold">Password</span>
                        </div>
                        <input type="password" placeholder="••••••••" className="input input-bordered w-full border-fun-green focus:border-fun-green focus:outline-fun-green text-almond-forest" />
                        <div className="label">
                            {/* <span className="label-text-alt">Bottom Left label</span> */}
                        </div>
                    </label>

                    <div className="text-center lg:text-left">
                    <button className="btn px-7 pb-2.5 pt-3 uppercase text-white bg-fun-green hover:bg-eden" onClick={() => handleRegister()}>Register</button>

                        <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                            Already have an account? <Link href="/auth/login" className="text-tradewind transition duration-150 ease-in-out hover:text-eden focus:text-eden active:text-eden">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
