"use client";
import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending) return;
    setError(null);

    const fd = new FormData(e.currentTarget);
    const email = (fd.get("email") || "").toString().trim();
    const password = (fd.get("password") || "").toString();
    const confirm = (fd.get("confirmPassword") || "").toString();

    // Basic client validation
    if (!email || !password) {
      setError("Email and password required");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    setPending(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      let data: any = {};
      try { data = await res.json(); } catch {}

      if (!res.ok) {
        setError(data.error || "Registration failed");
        setPending(false);
        return;
      }

      // Success -> go to login (or auto-login to /admin if your API creates session)
      router.push("/login");
    } catch (err) {
      setError("Network error");
      setPending(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input id="email" name="email" type="email" required disabled={pending}
                   className="mt-1 w-full px-3 py-2 border rounded"/>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input id="password" name="password" type="password" required disabled={pending}
                   className="mt-1 w-full px-3 py-2 border rounded"/>
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium">Confirm Password</label>
            <input id="confirmPassword" name="confirmPassword" type="password" required disabled={pending}
                   className="mt-1 w-full px-3 py-2 border rounded"/>
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button disabled={pending} type="submit"
                  className="w-full py-2 px-4 bg-blue-600 text-white rounded disabled:opacity-60">
            {pending ? "Creating..." : "Sign Up"}
          </button>
        </form>
        <p className="text-center text-sm">
          Already have an account? <a href="/login" className="text-blue-600 hover:underline">Sign In</a>
        </p>
      </div>
    </div>
  );
}