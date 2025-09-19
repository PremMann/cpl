/**
 * @file routes.ts
 * @description Middleware to protect routes and log authentication status.
 * @see https://next-auth.js.org/configuration/nextjs#middleware
 */

// this array contains routes that are accessible without authentication
export const publicRoutes = ["/"];

// this array contains routes related to authentication
export const authRoutes = [
    "/auth/login", 
    "/auth/register",
];

// API route prefixes
export const apiAuthPrefix = "/api/auth";

// Default redirect path after login
export const DEFAULT_LOGIN_REDIRECT = "/settings";