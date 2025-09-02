import NextAuth, { type NextAuthOptions, type DefaultSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import prisma from '@/lib/db';

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const authConfig: NextAuthOptions = {
  session: {
    strategy: "database", // uses Session model; or "jwt" if you prefer stateless
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (creds) => {
        if (!creds?.email || !creds.password) return null;
        const user = await prisma.user.findUnique({
          where: { email: creds.email },
        });
        if (!user) return null;
        const valid = await bcrypt.compare(creds.password, user.passwordHash);
        if (!valid) return null;
        return {
          id: String(user.id),
          email: user.email,
          name: user.name ?? null,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login", // optional—uses your existing page
  },
  callbacks: {
    async session({ session, user }) {
      // If using database sessions, user is available
      if (user && session.user) {
        session.user.id = String(user.id);
      }
      return session;
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);