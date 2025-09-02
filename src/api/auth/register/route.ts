import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  console.log("REGISTER_ROUTE_HIT gg");
  const formData = await req.formData();
  const email = String(formData.get("email") || "").toLowerCase();
  const password = String(formData.get("password") || "");
  const confirm = String(formData.get("confirmPassword") || "");

  if (!email || !password) {
    return NextResponse.json({ success: false, error: "Email and password required." }, { status: 400 });
  }
  if (password !== confirm) {
    return NextResponse.json({ success: false, error: "Passwords do not match." }, { status: 400 });
  }
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ success: false, error: "Email already registered." }, { status: 409 });
  }
  const passwordHash = await bcrypt.hash(password, 12);
  await prisma.user.create({
    data: { email, passwordHash },
  });
  return NextResponse.json({ success: true });
}