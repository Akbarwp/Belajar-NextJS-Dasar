import Head from "next/head";
import Image from "next/image";

export default function Custom404() {
    return (
        <>
            <Head>
                <title>Page Not Found</title>
            </Head>
            <div className="w-full h-screen bg-white text-tradewind flex flex-col justify-center items-center">
                <Image src="/notFound.svg" width={500} height={500} alt="Not Found Image" className="mb-5" />
                <h1 className="text-4xl">Page Not Found</h1>
            </div>
        </>
    );
}