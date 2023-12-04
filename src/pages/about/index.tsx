import Head from "next/head";

export default function Index() {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <div className="w-full h-screen bg-white text-tradewind flex justify-center items-center">
                <h1 className="text-4xl">About Page</h1>
            </div>
        </>
    );
}
