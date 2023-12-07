import { fetcher } from "@/lib/swr/fetcher";
import Head from "next/head";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { productType } from "@/types/product.type";

export default function Index() {
    //? Client-Side Rendering Menggunakan bawaan JS yaitu fetch()
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     fetch("/api/product")
    //         .then((res) => res.json())
    //         .then((response) => {
    //             setProducts(response.data);
    //         });

    // }, []);

    //? Client-Side Rendering Menggunakan SWR
    const { data, error, isLoading } = useSWR(
        "/api/product",
        fetcher
    );

    return (
        <>
            <Head>
                <title>Product</title>
            </Head>
            <div className="w-full bg-white">
                <h1 className="text-4xl text-center mt-5 mb-10 font-bold text-tradewind">Product</h1>
                <div className="flex justify-center gap-5">

                    {isLoading ? (
                        <>
                            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure className="bg-gray-300 w-full aspect-square animate-pulse" />
                                <div className="card-body">
                                    <h2 className="bg-gray-300 w-full h-4 animate-pulse" />
                                    <p className="bg-gray-300 w-full h-4 animate-pulse" />
                                    <p className="bg-gray-300 w-full h-4 animate-pulse" />
                                </div>
                            </div>
                        </>

                    ) : (
                        <>
                            {data.data.map((product: productType) => (
                                <div key={product.id} className="card card-compact w-96 bg-base-100 shadow-xl">
                                    <figure><img src={product.image} alt={product.name} /></figure>
                                    <div className="card-body">
                                        <h2 className="text-xl font-bold text-fun-green">{product.name}</h2>
                                        <p className="text-base text-tradewind">{product.category}</p>
                                        <p className="text-base font-bold text-fun-green">{product.price.toLocaleString('id-ID', { style: "currency", currency: "IDR" })}</p>
                                    </div>
                                </div>
                            ))}

                        </>
                    )}
                </div>
            </div>
        </>
    );
}
