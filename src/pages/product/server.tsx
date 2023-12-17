import Head from "next/head";
import { productType } from "@/types/product.type";
import Image from "next/image";

//? Server-Side Rendering
// Dipanggil setiap melakukan request
export async function getServerSideProps() {
    // fetch data
    const res = await fetch("http://localhost:3000/api/product");
    const response = await res.json();

    return {
        props: {
            products: response.data
        },
    };
}

export default function Index(props: { products: productType[] }) {

    const { products } = props;

    return (
        <>
            <Head>
                <title>Product</title>
            </Head>
            <div className="w-full bg-white">
                <h1 className="text-4xl text-center mt-5 mb-10 font-bold text-tradewind">Product</h1>
                <div className="flex justify-center gap-5">

                    {products.length > 0 ? (
                        <>
                            {products.map((product: productType) => (
                                <div key={product.id} className="card card-compact w-96 bg-base-100 shadow-xl">
                                    <figure><Image className="w-full" width={600} height={600} src={product.image} alt={product.name} /></figure>
                                    <div className="card-body">
                                        <h2 className="text-xl font-bold text-fun-green">{product.name}</h2>
                                        <p className="text-base text-tradewind">{product.category}</p>
                                        <p className="text-base font-bold text-fun-green">{product.price.toLocaleString('id-ID', { style: "currency", currency: "IDR" })}</p>
                                    </div>
                                </div>
                            ))}
                        </>

                    ) : (
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
                    )}
                </div>
            </div>
        </>
    );
}