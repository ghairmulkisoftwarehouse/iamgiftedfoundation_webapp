import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("access_token")?.value;
  const { pathname } = req.nextUrl;


  
  const publicPaths = [
    "/auth/login",
    "/auth/register",
    "/auth/reset-password",
  ];

  // const isPublicPath = publicPaths.includes(pathname);

  const isProtectedPath = pathname.startsWith("/account");



  if (!token && isProtectedPath) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/auth/:path*",
    "/account/:path*",
  ],
};
