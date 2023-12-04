import { useRouter } from "next/router";

export default function ShopProduct() {

    let { query } = useRouter();

    return (
        <>
            <div className="w-full h-screen bg-white text-tradewind flex flex-col justify-center items-center">
                <h1 className="text-4xl">Shop Product Page</h1>
                <p className="text-4xl">Product: {`${query.product && query.product[0] + " - " + query.product[1]}`}</p>
            </div>
        </>
    );
}
