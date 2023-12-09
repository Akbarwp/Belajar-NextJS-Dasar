import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Index() {

    const { data }: any = useSession();

    return (
        <>
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-eden">Wellcome back, {data && data.user.username}</h1>
                        <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae alias assumenda ab adipisci modi ipsam corporis aut eum optio porro!</p>
                        <Link href="/" className="btn bg-eden text-white hover:bg-eden hover:opacity-90">Go Home</Link>
                    </div>
                </div>
            </div>
        </>
    )
}