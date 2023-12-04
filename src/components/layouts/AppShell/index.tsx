import { useRouter } from "next/router";
import Navbar from "../Navbar";

type AppShellProps = {
    children: React.ReactNode;
}

export default function AppShell(props: AppShellProps) {

    const { children } = props;
    const { pathname } = useRouter();

    const disableNavbar = ['/auth/login', '/auth/register', '/404'];

    return (
        <main>
            {!disableNavbar.includes(pathname) && <Navbar />}
            {children}
        </main>
    )
}
