"use server";

import prisma from "@/lib/db";
import bcrypt from "bcrypt";

export async function registerUser(formData: FormData) {
  const email = String(formData.get("email") || "").toLowerCase();
  const password = String(formData.get("password") || "");
  const confirm = String(formData.get("confirmPassword") || "");

  if (!email || !password) {
    return { success: false, error: "Email and password required." };
  }
  if (password !== confirm) {
    return { success: false, error: "Passwords do not match." };
  }
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return { success: false, error: "Email already registered." };
  }
  const passwordHash = await bcrypt.hash(password, 12);
  await prisma.user.create({
    data: {
      email,
      passwordHash,
    },
  });
  return { success: true };
}