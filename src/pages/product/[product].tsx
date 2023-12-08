import { fetcher } from "@/lib/swr/fetcher";
import { productType } from "@/types/product.type";
import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";

//? Implementasi Dynamic Routes --> Server-Side Rendering
// export async function getServerSideProps({ params }: { params: { product: string } }) {
//     const res = await fetch(`http://localhost:3000/api/product/${params.product}`);
//     const response = await res.json();

//     return {
//         props: {
//             product: response.data
//         },
//     };
// }

//? Implementasi Dynamic Routes --> Static Site Rendering
// export async function getStaticPaths() {
//     const res = await fetch("http://localhost:3000/api/product");
//     const response = await res.json();

//     const paths = response.data.map((product: productType) => ({
//         params: {
//             product: product.id
//         }
//     }));

//     return {paths, fallback: false};
// }
// export async function getStaticProps({ params }: { params: { product: string } }) {
//     const res = await fetch(`http://localhost:3000/api/product/${params.product}`);
//     const response = await res.json();

//     return {
//         props: {
//             product: response.data
//         },
//     };
// }


//? Client-Side Rendering
export default function DetailProduct() {

    //? Implementasi Page Router
    let { query } = useRouter();

    //? Implementasi Dynamic Routes --> Client-Side Rendering
    const { data, error, isLoading } = useSWR(
        `/api/product/${query.product}`,
        fetcher
    );
    const product = isLoading ? [] : data.data;

    return (
        <>
            {/* Implementasi Page Router */}
            {/* <div className="w-full h-screen bg-white text-tradewind flex flex-col justify-center items-center">
                <h1 className="text-4xl">Detail Product Page</h1>
                <p className="text-4xl">Product: {query.product}</p>
            </div> */}

            {/* Implementasi Dynamic Routes */}
            <Head>
                <title>Detail Product - {product.name}</title>
            </Head>
            <div className="w-full bg-white">
                <h1 className="text-4xl text-center mt-5 mb-10 font-bold text-tradewind">Detail Product: <span className="text-fun-green">{product.name}</span></h1>
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
                            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure><img src={product.image} alt={product.name} /></figure>
                                <div className="card-body">
                                    <div className="text-xl font-bold text-fun-green">{product.name}</div>
                                    <p className="text-base text-tradewind">{product.category}</p>
                                    <h2 className="text-base font-bold text-fun-green">{product.price.toLocaleString('id-ID', { style: "currency", currency: "IDR" })}</h2>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

//? Server-Side & Static Site Rendering
// export default function DetailProduct({ product }: { product: productType }) {

//     //? Implementasi Page Router
//     let { query } = useRouter();

//     return (
//         <>
//             {/* Implementasi Dynamic Routes */}
//             <Head>
//                 <title>Detail Product - {product.name}</title>
//             </Head>
//             <div className="w-full bg-white">
//                 <h1 className="text-4xl text-center mt-5 mb-10 font-bold text-tradewind">Detail Product: <span className="text-fun-green">{product.name}</span></h1>
//                 <div className="flex justify-center gap-5">
//                     <div className="card card-compact w-96 bg-base-100 shadow-xl">
//                         <figure><img src={product.image} alt={product.name} /></figure>
//                         <div className="card-body">
//                             <div className="text-xl font-bold text-fun-green">{product.name}</div>
//                             <p className="text-base text-tradewind">{product.category}</p>
//                             <h2 className="text-base font-bold text-fun-green">{product.price.toLocaleString('id-ID', { style: "currency", currency: "IDR" })}</h2>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
