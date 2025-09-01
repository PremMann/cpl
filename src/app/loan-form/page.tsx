"use client";
import loanFormData from "@/data/loanForm.json";

import { useState } from "react";

export default function LoanFormPage() {
  const [form, setForm] = useState({
    // Applicant Information
    fullName: "",
    dob: "",
    gender: "",
    nationalId: "",
    phone: "",
    email: "",
    address: "",
    // Employment Details
    employer: "",
    occupation: "",
    monthlyIncome: "",
    employmentType: "",
    employmentLength: "",
    // Loan Request
    loanAmount: "",
    loanPurpose: "",
    loanTerm: "",
    repaymentSource: "",
    // Guarantor
    guarantorName: "",
    guarantorPhone: "",
    guarantorRelationship: "",
    guarantorAddress: "",
    // Declaration
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);


  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
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
    setSubmitted(true);
    // Here you would send the form data to your backend
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow mt-8 print:max-w-full print:shadow-none print:p-2">
      <h1 className="text-2xl font-bold mb-4 text-center">{loanFormData.title}</h1>
      {submitted ? (
        <div className="text-green-600 font-semibold text-center">Thank you for your application!</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          {loanFormData.sections.map((section: { title: string; declaration?: string; fields: { type: string; name: string; label: string; required?: boolean; min?: number; options?: string[] }[] }, sectionIdx: number) => (
            <section key={sectionIdx}>
              <h2 className="font-semibold text-lg mb-2 border-b pb-1">{section.title}</h2>
              {section.declaration && (
                <div className="mb-2 text-sm text-gray-700">{section.declaration}</div>
              )}
              <div className={section.fields.length > 1 ? "grid grid-cols-1 md:grid-cols-2 gap-4" : ""}>
                {section.fields.map((field, fieldIdx) => {
                  if (field.type === "select") {
                    return (
                      <div key={fieldIdx} className={field.name === "gender" || field.name === "employmentType" ? "" : "md:col-span-2"}>
                        <label className="block font-medium mb-1">{field.label}</label>
                        <select
                          name={field.name}
                          value={form[field.name as keyof typeof form] as string}
                          onChange={handleChange}
                          required={field.required}
                          className="w-full border rounded px-3 py-2"
                        >
                          <option value="">Select</option>
                          {field.options?.map((opt: string) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                    );
                  }
                  if (field.type === "checkbox") {
                    return (
                      <div key={fieldIdx} className="flex items-center gap-2 md:col-span-2">
                        <input
                          type="checkbox"
                          name={field.name}
                          checked={form[field.name as keyof typeof form] as boolean}
                          onChange={handleChange}
                          required={field.required}
                        />
                        <label htmlFor={field.name} className="text-sm">{field.label}</label>
                      </div>
                    );
                  }
                  return (
                    <div key={fieldIdx} className={field.name === "address" || field.name === "guarantorAddress" ? "md:col-span-2" : ""}>
                      <label className="block font-medium mb-1">{field.label}</label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={form[field.name as keyof typeof form] as string}
                        onChange={handleChange}
                        required={field.required}
                        min={field.min}
                        className="w-full border rounded px-3 py-2"
                      />
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
          <button
            type="submit"
            className="w-full bg-[#f03135] text-white font-semibold py-2 rounded hover:bg-[#d3262a] transition print:hidden"
          >
            Submit Application
          </button>
        </form>
      )}
    </div>
  );
}
