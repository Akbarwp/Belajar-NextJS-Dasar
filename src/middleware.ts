import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import withAuth from './middlewares/withAuth';

//? Middleware manual
// export function middleware(req: NextRequest) {
//     const isLogin = false;
//     if (isLogin) {
//         return NextResponse.next();
//     } else {
//         return NextResponse.redirect(new URL("/", req.url));
//     }
// }
// export const config = {
//     matcher: ["/about"],
// }

//? Middleware Next-Auth
export function mainMiddleware(req: NextRequest) {
    const res = NextResponse.next();
    return res;
}
export default withAuth(mainMiddleware, ['/profile', '/admin', '/login', '/register']);