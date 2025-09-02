import { NextResponse, NextRequest } from "next/server";
import * as jose from "jose";

const COOKIE_NAME = "session";
const SECRET = process.env.AUTH_JWT_SECRET; // ensure set

export async function middleware(req: NextRequest) {
  // Only protect /admin (matcher also enforces this)
  if (!req.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const token = req.cookies.get(COOKIE_NAME)?.value;
  if (!token || !SECRET) {
    return redirectToLogin(req);
  }

  try {
    await jose.jwtVerify(token, new TextEncoder().encode(SECRET));
    return NextResponse.next();
  } catch {
    return redirectToLogin(req);
  }
}

function redirectToLogin(req: NextRequest) {
  const login = new URL("/login", req.url);
  login.searchParams.set("callbackUrl", req.nextUrl.pathname);
  return NextResponse.redirect(login);
}

export const config = {
  matcher: ["/admin/:path*"],
};