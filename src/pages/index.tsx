import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Index() {

    const { push } = useRouter();

    //? Mengecek apakah sudah login atau belum
    // const [isLogin, setIsLogin] = useState(false);
    // useEffect(() => {
    //     if (!isLogin) {
    //         push('/auth/login');
    //     }
    // }, []);

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-eden">Hello there</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn bg-eden text-white hover:bg-eden hover:opacity-90">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
}
