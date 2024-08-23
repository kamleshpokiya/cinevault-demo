import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";

export default async function middleware(req: NextRequest) {
  const session = await auth();
  const { pathname } = req.nextUrl;
  if (session === null && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", req.url));
  } else if (session && pathname === "/login") {
    return NextResponse.redirect(new URL("/home", req.url));
  } else if (pathname === "/") {
    return NextResponse.redirect(new URL("/home", req.url));
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
