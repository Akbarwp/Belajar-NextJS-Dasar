import Head from "next/head";
import { useEffect, useState } from "react";

type productType = {
    id: number;
    name: string;
    price: number;
    discount: number;
}

export default function Index() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Menggunakan bawaan JS yaitu fetch()
        fetch("/api/product")
            .then((res) => res.json())
            .then((response) => {
                setProducts(response.data);
            });

    }, [])


    return (
        <>
            <Head>
                <title>Product</title>
            </Head>
            <div className="w-full h-screen bg-white text-tradewind flex flex-col justify-center items-center gap-y-7">
                <h1 className="text-4xl">Product Page</h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr className="text-eden">
                                <th>No.</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Discount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product: productType, index) => (
                                <tr key={product.id} className="text-fun-green hover:bg-tradewind/25 transition">
                                    <th>{index+1}</th>
                                    <td>{product.name}</td>
                                    <td>Rp{product.price}</td>
                                    <td>{product.discount}%</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
