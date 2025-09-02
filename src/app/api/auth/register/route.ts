import { NextResponse } from "next/server";
import prisma from "@/lib/db"; 
import bcrypt from "bcryptjs";

type ParsedBody = {
  email: string;
  password: string;
  confirmPassword?: string;
  name?: string | null;
};

async function parseRequest(req: Request): Promise<ParsedBody> {
  const ct = req.headers.get("content-type") || "";
  if (ct.includes("application/json")) {
    const json = await req.json().catch(() => ({} as any));
    return {
      email: (json.email || "").toString().trim().toLowerCase(),
      password: (json.password || "").toString(),
      confirmPassword: (json.confirmPassword || "").toString(),
      name: json.name ? String(json.name) : null,
    };
  }
  if (ct.includes("multipart/form-data") || ct.includes("application/x-www-form-urlencoded")) {
    const fd = await req.formData();
    return {
      email: (fd.get("email") || "").toString().trim().toLowerCase(),
      password: (fd.get("password") || "").toString(),
      confirmPassword: (fd.get("confirmPassword") || "").toString(),
      name: fd.get("name") ? String(fd.get("name")) : null,
    };
  }
  // Fallback empty
  return { email: "", password: "" };
}

export async function GET() {
  return NextResponse.json({ ok: true, route: "/api/auth/register" });
}

export async function POST(req: Request) {
  try {
    const { email, password, confirmPassword, name } = await parseRequest(req);

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password required." }, { status: 400 });
    }
    if (password.length < 6) {
      return NextResponse.json({ error: "Password too short." }, { status: 400 });
    }
    if (confirmPassword && password !== confirmPassword) {
      return NextResponse.json({ error: "Passwords do not match." }, { status: 400 });
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json({ error: "Email already registered." }, { status: 409 });
    }

    const passwordHash = await bcrypt.hash(password, 12);
    await prisma.user.create({
      data: { email, passwordHash, name: name || null },
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (e) {
    console.error("REGISTER_ERROR", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}