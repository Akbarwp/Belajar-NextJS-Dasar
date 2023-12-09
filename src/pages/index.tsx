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
            <div className="w-full h-screen bg-white text-tradewind flex justify-center items-center">
                <h1 className="text-4xl">Hello World</h1>
            </div>
        </>
    );
}
