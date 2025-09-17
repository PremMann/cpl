import { NextResponse } from "next/server";
import { auth } from "./auth"; // reuse the shared NextAuth instance (v5)
import {
  publicRoutes,
  authRoutes,
  apiAuthPrefix,
  DEFAULT_LOGIN_REDIRECT,
} from "./routes";

export default auth((req) => {
  // These logs will show in the server console in `next dev`
  console.log("[middleware] auth check");
  console.log("[middleware] path:", req.nextUrl.pathname);
  console.log("[middleware] isLoggedIn:", !!req.auth);

  const { nextUrl } = req;
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  // Let NextAuth handle its own API endpoints
  if (isApiAuthRoute) {
    return NextResponse.next();
  }

  if (isAuthRoute) {
    if (req.auth) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return NextResponse.next();
  }

  if (!isPublicRoute && !req.auth) {
    // Adjust this path to your actual login route ("/login" vs "/auth/login")
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  return NextResponse.next();
});

// Keep the matcher simple so middleware actually runs for app routes
export const config = {
  matcher: [
    // run on all app pages except static assets and next internals
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:css|js|jpg|jpeg|png|gif|svg|ico|woff2?|ttf|map)).*)",
  ],
};