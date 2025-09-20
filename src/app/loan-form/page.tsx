"use client";
import loanFormData from "@/data/loanForm.json";
import { useState, useTransition } from "react";

export default function LoanFormPage() {
  const [form, setForm] = useState({
    fullName: "",
    dob: "",
    gender: "",
    nationalId: "",
    phone: "",
    email: "",
    address: "",
    employer: "",
    occupation: "",
    monthlyIncome: "",
    employmentType: "",
    employmentLength: "",
    loanAmount: "",
    loanPurpose: "",
    loanTerm: "",
    repaymentSource: "",
    guarantorName: "",
    guarantorPhone: "",
    guarantorRelationship: "",
    guarantorAddress: "",
    agree: false,
  });
  const [birthFileName, setBirthFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [pending, startTransition] = useTransition();
  const [appId, setAppId] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    console.log("Form Data:");
    // setErrors({});
    // startTransition(async () => {
    //   const res = await submitLoanApplication(fd);
    //   if (!res.ok) {
    //     setErrors(res.errors || {});
    //     return;
    //   }
    //   setAppId(res.id);
    //   setSubmitted(true);
    // });
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          {loanFormData.title}
        </h1>

        {submitted ? (
          <div className="text-green-600 font-semibold text-center text-lg">
            ✅ Thank you for your application!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-10">
            {loanFormData.sections.map(
              (
                section: {
                  title: string;
                  declaration?: string;
                  fields: {
                    type: string;
                    name: string;
                    label: string;
                    required?: boolean;
                    min?: number;
                    options?: string[];
                  }[];
                },
                sectionIdx: number
              ) => (
                <section
                  key={sectionIdx}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200"
                >
                  <h2 className="font-semibold text-xl mb-4 text-gray-700 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#f03135] rounded-full"></span>
                    {section.title}
                  </h2>

                  {section.declaration && (
                    <p className="mb-4 text-sm text-gray-600 italic">
                      {section.declaration}
                    </p>
                  )}

                  <div
                    className={
                      section.fields.length > 1
                        ? "grid grid-cols-1 md:grid-cols-2 gap-6"
                        : ""
                    }
                  >
                    {section.fields.map((field, fieldIdx) => {
                      if (field.type === "select") {
                        return (
                          <div
                            key={fieldIdx}
                            className={
                              field.name === "gender" ||
                              field.name === "employmentType"
                                ? ""
                                : "md:col-span-2"
                            }
                          >
                            <label className="block font-medium text-gray-700 mb-1">
                              {field.label}
                            </label>
                            <select
                              name={field.name}
                              value={
                                form[field.name as keyof typeof form] as string
                              }
                              onChange={handleChange}
                              required={field.required}
                              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#f03135] focus:outline-none"
                            >
                              <option value="">Select</option>
                              {field.options?.map((opt: string) => (
                                <option key={opt} value={opt}>
                                  {opt}
                                </option>
                              ))}
                            </select>
                          </div>
                        );
                      }
                      if (field.type === "checkbox") {
                        return (
                          <div
                            key={fieldIdx}
                            className="flex items-center gap-2 md:col-span-2"
                          >
                            <input
                              type="checkbox"
                              name={field.name}
                              checked={
                                form[field.name as keyof typeof form] as boolean
                              }
                              onChange={handleChange}
                              required={field.required}
                              className="h-4 w-4 accent-[#f03135]"
                            />
                            <label
                              htmlFor={field.name}
                              className="text-sm text-gray-700"
                            >
                              {field.label}
                            </label>
                          </div>
                        );
                      }
                      return (
                        <div
                          key={fieldIdx}
                          className={
                            field.name === "address" ||
                            field.name === "guarantorAddress"
                              ? "md:col-span-2"
                              : ""
                          }
                        >
                          <label className="block font-medium text-gray-700 mb-1">
                            {field.label}
                          </label>
                          <input
                            type={field.type}
                            name={field.name}
                            value={
                              form[field.name as keyof typeof form] as string
                            }
                            onChange={handleChange}
                            required={field.required}
                            min={field.min}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#f03135] focus:outline-none"
                          />
                          {errors[field.name] && (
                            <p className="text-sm text-red-600 mt-1">
                              {errors[field.name][0]}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>
              )
            )}

            {/* Attachment Section */}
            <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h2 className="font-semibold text-xl mb-4 text-gray-700 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#f03135] rounded-full"></span>
                Attachments
              </h2>
              <div className="flex flex-col gap-2">
                <label className="block font-medium text-gray-700">
                  Birth Certificate (PDF/JPG/PNG)
                </label>
                <input
                  type="file"
                  name="birthCertificate"
                  accept="application/pdf,image/*"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    setBirthFileName(f ? f.name : null);
                  }}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#f03135] focus:outline-none"
                />
                {birthFileName && (
                  <p className="text-xs text-gray-500">
                    Selected: {birthFileName}
                  </p>
                )}
              </div>
            </section>

            <button
              type="submit"
              disabled={pending}
              className="w-full bg-[#f03135] disabled:opacity-50 text-white font-semibold py-3 rounded-lg hover:bg-[#d3262a] transition print:hidden shadow-md"
            >
              {pending ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        )}

        {submitted && appId && (
          <div className="mt-6 text-xs text-gray-500 text-center">
            Application ID: {appId}
          </div>
        )}
      </div>
    </div>
  );
}
