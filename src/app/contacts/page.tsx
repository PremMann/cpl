"use client";

import React, { useState } from "react";

type FormValues = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

// You can update this with your company details
const institution = {
  name: "Active People’s Microfinance Plc.",
  tagline: "Enabling growth through responsible finance",
};

const headOffice = {
  name: "Head Office",
  address: "Active People’s Microfinance Institution (Head Office), Phnom Penh, Cambodia",
  phone: "+855 (0)15 533 900",
  email: "info@apmfi.com.kh",
  mapUrl:
    "https://www.google.com/maps?q=Active+People%27s+Microfinance+Institution+(Head+Office),+Phnom+Penh,+Cambodia&output=embed",
};

const branches: Array<{
  name: string;
  address: string;
  phone: string;
  email: string;
}> = [
  {
    name: "Branch 1",
    address: "Phnom Penh, Cambodia",
    phone: "+855 (0) 12 574 233",
    email: "branch1@apmfi.com.kh",
  },
  {
    name: "Branch 2",
    address: "Phnom Penh, Cambodia",
    phone: "+855 (0) 98 213 680",
    email: "branch2@apmfi.com.kh",
  },
  {
    name: "Branch 3",
    address: "Phnom Penh, Cambodia",
    phone: "+855 (0) 11 324 473",
    email: "branch3@apmfi.com.kh",
  },
  {
    name: "Branch 4",
    address: "Phnom Penh, Cambodia",
    phone: "+855 (0) 71 3128 777",
    email: "branch4@apmfi.com.kh",
  },
  {
    name: "Branch 5",
    address: "Phnom Penh, Cambodia",
    phone: "+855 (0)15 533 900",
    email: "branch5@apmfi.com.kh",
  },
];

export default function ContactPage() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<null | "success" | "error">(null);

  const validate = (v: FormValues): FormErrors => {
    const e: FormErrors = {};
    if (!v.name.trim()) e.name = "Name is required.";
    if (!v.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))
      e.email = "Enter a valid email.";
    if (!v.message.trim()) e.message = "Message is required.";
    if (v.phone && v.phone.trim() && !/^[+\d][\d\s\-()]{6,}$/.test(v.phone))
      e.phone = "Enter a valid phone number.";
    return e;
  };

  const handleChange =
    (field: keyof FormValues) =>
    (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: ev.target.value }));
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
      setSubmitted(null);
    };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate(values);
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setSubmitting(true);
    setSubmitted(null);
    try {
      await new Promise((r) => setTimeout(r, 800));
      setSubmitted("success");
      setValues({ name: "", email: "", phone: "", message: "" });
    } catch {
      setSubmitted("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            Contact Us
          </h1>
          <p className="mt-3 text-gray-600">
            {institution.name} — {institution.tagline}
          </p>
        </div>
      </section>

      {/* Informational Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid gap-8 grid-cols-1 md:grid-cols-2">
        <div className="space-y-7">
          {/* Business Hours */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-lg font-semibold text-gray-900">Business Hours</h2>
            <p className="mt-2 text-gray-700">
              <b>Monday – Friday:</b> 08:00am – 07:00pm<br />
              <b>Saturday:</b> 08:00am – 05:00pm
            </p>
          </div>
          {/* Call Center */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-lg font-semibold text-gray-900">Call Center</h2>
            <p className="mt-2 text-gray-700">
              Welcome to Active People’s Call Center page. Our professional, friendly, and well-trained call center team are waiting to assist you with essential advice in making the right decision for loan services; should it be about loan requirements, terms and conditions, or our location.
            </p>
            <p className="mt-3 text-gray-700">
              Please call us during our business hours:<br />
              <a className="text-blue-600 hover:underline" href="tel:+855015533900">+855 (0)15 533 900</a>,{" "}
              <a className="text-blue-600 hover:underline" href="tel:+855011324473">+855 (0)11 324 473</a>
            </p>
            <p className="mt-2 text-gray-600">We endeavor to answer your queries as soon as possible.</p>
          </div>
          {/* Customer Complaint */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-lg font-semibold text-gray-900">Customer Complaint</h2>
            <p className="mt-2 text-gray-700">
              We have set up telephone lines and e-mail to offer solutions to all your complaints:
            </p>
            <ul className="mt-3 text-gray-700 space-y-1">
              <li>
                Tel:&nbsp;
                <a className="text-blue-600 hover:underline" href="tel:+855012574233">+855 (0)12 574 233</a>,{" "}
                <a className="text-blue-600 hover:underline" href="tel:+855098213680">+855 (0)98 213 680</a>,{" "}
                <a className="text-blue-600 hover:underline" href="tel:+855011324473">+855 (0)11 324 473</a>,{" "}
                <a className="text-blue-600 hover:underline" href="tel:+8550713128777">+855 (0)71 3128 777</a>
              </li>
              <li>
                Email:&nbsp;
                <a className="text-blue-600 hover:underline" href="mailto:customer_complaint@apmfi.com.kh">customer_complaint@apmfi.com.kh</a>
              </li>
            </ul>
            <p className="mt-2 text-gray-700">
              You may also submit a written complaint to any of our branches during operation hours (Monday–Friday, 8:00 am to 5:00 pm).<br />
              We offer a solution within 2 days for verbal complaints and 30 days for written complaints. All claims will be kept confidentially.
            </p>
          </div>
          {/* Branch Locator */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-lg font-semibold text-gray-900">Branch Locator</h2>
            <p className="mt-2 text-gray-700">5 branches</p>
            <ul className="mt-2 space-y-2">
              {branches.map((b, i) => (
                <li key={i}>
                  <span className="font-medium">{b.name}:</span> {b.address}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Form and Map */}
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Send us a message
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Fill out the form and our team will get back to you shortly.
            </p>
            <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange("name")}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  placeholder="Your full name"
                  className={`mt-2 block w-full rounded-lg border ${
                    errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                  } focus:outline-none focus:ring-2 px-3 py-2 bg-white text-gray-900`}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange("email")}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  placeholder="you@example.com"
                  className={`mt-2 block w-full rounded-lg border ${
                    errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                  } focus:outline-none focus:ring-2 px-3 py-2 bg-white text-gray-900`}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                  Phone (optional)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={handleChange("phone")}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  placeholder="+855 (0)15 533 900"
                  className={`mt-2 block w-full rounded-lg border ${
                    errors.phone ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                  } focus:outline-none focus:ring-2 px-3 py-2 bg-white text-gray-900`}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1 text-sm text-red-600">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={handleChange("message")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  placeholder="How can we help you?"
                  className={`mt-2 block w-full rounded-lg border ${
                    errors.message ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                  } focus:outline-none focus:ring-2 px-3 py-2 bg-white text-gray-900`}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-600">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
                >
                  {submitting ? (
                    <svg
                      className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                  ) : null}
                  Send Message
                </button>
                {submitted === "success" && (
                  <p className="mt-3 text-sm text-green-700">Thanks! Your message has been sent.</p>
                )}
                {submitted === "error" && (
                  <p className="mt-3 text-sm text-red-600">Sorry, something went wrong. Please try again.</p>
                )}
              </div>
            </form>
          </div>
          {/* Map */}
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">Find Us</h3>
              <p className="mt-1 text-sm text-gray-600">
                Head Office location on Google Maps
              </p>
            </div>
            <div className="w-full aspect-video">
              <iframe
                title="Head Office Location"
                src={headOffice.mapUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}