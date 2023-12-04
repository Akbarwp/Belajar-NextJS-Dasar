import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router"

export default function LoginPage() {

    const { push } = useRouter();
    const handlerLogin = () => {
        push("/");
    }

    return (
        <>
            <div className="flex h-full flex-wrap items-center justify-center lg:justify-between px-20 mt-20">
                <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                    <Image src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" width={500} height={500} alt="Login Image" className="w-full" />
                </div>

                <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Email</span>
                        </div>
                        <input type="email" placeholder="Ucup@example.com" className="input input-bordered input-primary w-full" />
                        <div className="label">
                            {/* <span className="label-text-alt">Bottom Left label</span> */}
                        </div>
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Password</span>
                        </div>
                        <input type="password" placeholder="••••••••" className="input input-bordered input-primary w-full" />
                        <div className="label">
                            {/* <span className="label-text-alt">Bottom Left label</span> */}
                        </div>
                    </label>

                    <div className="mb-6 flex items-center justify-between">
                        <div className="form-control">
                            <label className="label cursor-pointer gap-x-3">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span className="label-text">Remember me</span>
                            </label>
                        </div>
                    </div>

                    <div className="text-center lg:text-left">
                        <button className="btn btn-primary px-7 pb-2.5 pt-3 uppercase text-white" onClick={() => handlerLogin()}>Login</button>

                        <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                            Don&apos;t have an account? <Link href="/auth/register" className="text-error transition duration-150 ease-in-out hover:text-error-600 focus:text-error-600 active:text-danger-700">Register</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
