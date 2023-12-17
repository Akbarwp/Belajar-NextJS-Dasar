import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Script from "next/script";

export default function Navbar() {

    const { data }: any = useSession();

    return (
        <>
            <div className="navbar bg-fun-green">
                {/* Mobile */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="text-fun-green"><Link href="/about">About</Link></li>
                            <li>
                                <Link href="/shop">Shop</Link>
                                <ul className="p-2">
                                    <li className="text-fun-green"><Link href="/shop/guitar">Guitar</Link></li>
                                    <li className="text-fun-green"><Link href="/shop/guitar/bass">Bass</Link></li>
                                </ul>
                            </li>
                            <li className="text-fun-green"><Link href="/product">Product</Link></li>
                        </ul>
                    </div>

                    {/* Contoh penggunaan optimasi Script --> biasanya digunakan untuk Google Analytics */}
                    <Link href="/" className="btn btn-ghost text-xl text-white" id="title"></Link>
                    <Script id="script-title" strategy="lazyOnload">
                        {`document.getElementById('title').innerHTML = 'Home'`}
                    </Script>
                </div>
                {/* Website */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="text-white"><Link href="/about">About</Link></li>
                        <li>
                            <div className="dropdown dropdown-bottom dropdown-hover">
                                <div tabIndex={0} role="button" className="text-white"><Link href="/shop">Shop</Link></div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li className="text-fun-green"><Link href="/shop/guitar">Guitar</Link></li>
                                    <li className="text-fun-green"><Link href="/shop/guitar/bass">Bass</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className="text-white"><Link href="/product">Product</Link></li>
                    </ul>
                </div>
                <div className="navbar-end gap-x-2">
                    {data ? (
                        <>
                            <div className="dropdown dropdown-end">
                                <div className="flex items-center mr-3">
                                    <span className="text-white font-semibold mr-1">{data && data.user.username}</span>
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-9 rounded-full">
                                            <Image width={100} height={100} alt="Photo Profile" src="/photoProfile.jpg" />
                                        </div>
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-fun-green">
                                    {data.user.role === "admin" ? 
                                        <li><Link href="/admin">Admin</Link></li>
                                    : ""}
                                    <li>
                                        <Link href="/profile" className="justify-between">
                                            Profile
                                        </Link>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li>
                                        {/* Sign In dari Next-Auth */}
                                        <a onClick={() => signOut()}>
                                            Sign Out
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </>

                    ) : (
                        <>
                            {/* Sign Up biasa */}
                            <Link href="/auth/register" className="btn uppercase font-bold text-fun-green bg-white border-white hover:text-white hover:bg-tradewind hover:border-tradewind">
                                Register
                            </Link>

                            {/* Login biasa */}
                            {/* <Link href="/auth/login" className="btn uppercase font-bold text-amber-900 bg-dawn-pink border-dawn-pink hover:text-white hover:bg-almond-forest hover:border-almond-forest">
                                Login
                            </Link> */}

                            {/* Sign In dari Next-Auth */}
                            <button onClick={() => signIn()} className="btn uppercase font-bold text-amber-900 bg-dawn-pink border-dawn-pink hover:text-white hover:bg-almond-forest hover:border-almond-forest">
                                Sign In
                            </button>
                        </>
                    )}
                </div>
            </div >
        </>
    )
}
