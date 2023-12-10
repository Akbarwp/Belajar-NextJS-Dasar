import { useRouter } from 'next/router';

export default function Index() {
    const { push } = useRouter();
    return (
        <>
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-eden">Hello Admin</h1>
                        <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quae!</p>
                        <button className="btn bg-eden text-white hover:bg-eden hover:opacity-90">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
}
