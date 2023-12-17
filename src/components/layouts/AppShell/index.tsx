import { useRouter } from "next/router";
import Navbar from "../Navbar";

//? Contoh penggunaan Dynamic Import --> LazyLoad
// import dynamic from "next/dynamic";
// const Navbar = dynamic(() => import("../Navbar"));

//? Optimasi Font
import { Roboto } from "next/font/google";
const roboto = Roboto({
    subsets: ["latin"],
    weight: "400",
});

type AppShellProps = {
    children: React.ReactNode;
}

export default function AppShell(props: AppShellProps) {

    const { children } = props;
    const { pathname } = useRouter();

    //? Navbar tidak akan muncul di halaman ini
    const disableNavbar = ['/auth/login', '/auth/register', '/404'];

    return (
        <main className={roboto.className}>
            {!disableNavbar.includes(pathname) && <Navbar />}
            {children}
        </main>
    )
}
