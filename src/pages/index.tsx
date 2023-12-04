import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Index() {

    const [isLogin, setIsLogin] = useState(false);
    const { push } = useRouter();

    useEffect(() => {
        if (!isLogin) {
            push('/auth/login');
        }
    }, []);

    return (
        <>
            <div className="w-full h-screen bg-white text-tradewind flex justify-center items-center">
                <h1 className="text-4xl">Hello World</h1>
            </div>
        </>
    );
}
