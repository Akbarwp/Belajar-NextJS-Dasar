import Head from "next/head";

export default function Index() {
    return (
        <>
            <Head>
                <title>Product</title>
            </Head>
            <div className="w-full h-screen bg-white text-tradewind flex justify-center items-center">
                <h1 className="text-4xl">Product Page</h1>
            </div>
        </>
    );
}
