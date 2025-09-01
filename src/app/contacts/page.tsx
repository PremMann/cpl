"use client";

import React, { useState } from "react";
import '../../lib/i18n';
import { useTranslation } from 'react-i18next';

type FormValues = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

type Branch = { name: string; address: string; phone: string; email: string };
interface Institution { name: string; tagline: string }
interface HeadOffice { name: string; address: string; mapUrl: string }
interface BusinessHours { title: string; weekdays: string; saturday: string; weekdayHours: string; saturdayHours: string }
interface CallCenter { title: string; intro: string; hoursPrompt: string; phones: string[]; closing: string }
interface Complaint { title: string; intro: string; phones: string[]; email: string; details: string }
interface BranchesSection { title: string; countLabel: string }
interface FormField { label: string; placeholder: string }
interface FormText { title: string; subtitle: string; fields: { name: FormField; email: FormField; phone: FormField; message: FormField }; submit: string; submitting: string; success: string; error: string }
interface ValidationMsgs { nameRequired: string; emailRequired: string; emailInvalid: string; messageRequired: string; phoneInvalid: string }
interface MapText { title: string; subtitle: string }

export default function ContactPage() {
  const { t } = useTranslation('contacts');
  const institution = t('institution', { returnObjects: true }) as Institution;
  const headOffice = t('headOffice', { returnObjects: true }) as HeadOffice;
  const branches = t('branches', { returnObjects: true }) as Branch[];
  const businessHours = t('businessHours', { returnObjects: true }) as BusinessHours;
  const callCenter = t('callCenter', { returnObjects: true }) as CallCenter;
  const complaint = t('complaint', { returnObjects: true }) as Complaint;
  const branchesSection = t('branchesSection', { returnObjects: true }) as BranchesSection;
  const formText = t('form', { returnObjects: true }) as FormText;
  const validation = t('validation', { returnObjects: true }) as ValidationMsgs;
  const mapText = t('map', { returnObjects: true }) as MapText;

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
    if (!v.name.trim()) e.name = validation.nameRequired;
    if (!v.email.trim()) e.email = validation.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))
      e.email = validation.emailInvalid;
    if (!v.message.trim()) e.message = validation.messageRequired;
    if (v.phone && v.phone.trim() && !/^[+\d][\d\s\-()]{6,}$/.test(v.phone))
      e.phone = validation.phoneInvalid;
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
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">{t('page.title')}</h1>
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
            <h2 className="text-lg font-semibold text-gray-900">{businessHours.title}</h2>
            <p className="mt-2 text-gray-700">
              <b>{businessHours.weekdays}</b> {businessHours.weekdayHours}<br />
              <b>{businessHours.saturday}</b> {businessHours.saturdayHours}
            </p>
          </div>
          {/* Call Center */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-lg font-semibold text-gray-900">{callCenter.title}</h2>
            <p className="mt-2 text-gray-700">
              {callCenter.intro}
            </p>
            <p className="mt-3 text-gray-700">
              {callCenter.hoursPrompt}<br />
              {callCenter.phones.map((p: string, i: number) => (
                <React.Fragment key={p}>
                  <a className="text-blue-600 hover:underline" href={`tel:${p.replace(/[^+\d]/g,'')}`}>{p}</a>{i < callCenter.phones.length -1 && ', '}
                </React.Fragment>
              ))}
            </p>
            <p className="mt-2 text-gray-600">{callCenter.closing}</p>
          </div>
          {/* Customer Complaint */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-lg font-semibold text-gray-900">{complaint.title}</h2>
            <p className="mt-2 text-gray-700">
              {complaint.intro}
            </p>
            <ul className="mt-3 text-gray-700 space-y-1">
              <li>
                Tel:&nbsp;
                {complaint.phones.map((p: string, i: number) => (
                  <React.Fragment key={p}>
                    <a className="text-blue-600 hover:underline" href={`tel:${p.replace(/[^+\d]/g,'')}`}>{p}</a>{i < complaint.phones.length -1 && ', '}
                  </React.Fragment>
                ))}
              </li>
              <li>
                Email:&nbsp;
                <a className="text-blue-600 hover:underline" href={`mailto:${complaint.email}`}>{complaint.email}</a>
              </li>
            </ul>
            <p className="mt-2 text-gray-700">
              {complaint.details}
            </p>
          </div>
          {/* Branch Locator */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-lg font-semibold text-gray-900">{branchesSection.title}</h2>
            <p className="mt-2 text-gray-700">{t('branchesSection.countLabel', { count: branches.length })}</p>
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
            <h2 className="text-xl font-semibold text-gray-900">{formText.title}</h2>
            <p className="mt-2 text-sm text-gray-600">{formText.subtitle}</p>
            <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900">{formText.fields.name.label}</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange("name")}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  placeholder={formText.fields.name.placeholder}
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
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">{formText.fields.email.label}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange("email")}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  placeholder={formText.fields.email.placeholder}
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
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900">{formText.fields.phone.label}</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={handleChange("phone")}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  placeholder={formText.fields.phone.placeholder}
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
                <label htmlFor="message" className="block text-sm font-medium text-gray-900">{formText.fields.message.label}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={handleChange("message")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  placeholder={formText.fields.message.placeholder}
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
                  {formText.submit}
                </button>
                {submitted === "success" && (
                  <p className="mt-3 text-sm text-green-700">{formText.success}</p>
                )}
                {submitted === "error" && (
                  <p className="mt-3 text-sm text-red-600">{formText.error}</p>
                )}
              </div>
            </form>
          </div>
          {/* Map */}
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">{mapText.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{mapText.subtitle}</p>
            </div>
            <div className="w-full aspect-video">
              <iframe
                title={headOffice.name}
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