"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  salary?: string;
  tags?: string[];
  description: string;
  experience?: string;
  requirements?: string[];
  responsibilities?: string[];
};

const JOBS: Job[] = [
  {
    id: "hr-admin-officer",
    title: "HR&Admin Officer",
    department: "Administration",
    location: "Head Office, Phnom Penh, Prampir Meakkakra, Boeng Prolit",
    type: "Full-time",
    tags: ["HR", "Administration", "Entry-level"],
    description:
      "Support HR operations, recruitment coordination, records, onboarding, training, and admin tasks. Open to fresh graduates.",
    experience: "No experience could apply",
    requirements: [
      "Female candidates are preferred",
      "Bachelor’s or Associate degree in Human Resource Management or a related field",
      "Year 4 student or recent graduate",
      "Strong analytical and problem-solving skills",
      "Good negotiation skills",
      "Understanding of cross-cultural communication",
      "Willingness to embrace and adapt to the company culture",
      "High attention to detail",
      "Intermediate level of English proficiency",
      "Highly self-motivated",
      "Proficient with Microsoft Office (Word, Excel, PowerPoint) and basic data entry",
    ],
    responsibilities: [
      "Assist in day-to-day HR operations and administrative tasks",
      "Support recruitment: coordinate interviews, post jobs, screen applications",
      "Maintain and update employee records and databases",
      "Assist in preparing HR documents (contracts, announcements, reports)",
      "Coordinate training sessions, staff orientation, and onboarding",
      "Support attendance and leave tracking, including data entry and reporting",
      "Help organize HR events, workshops, and engagement activities",
      "Ensure proper filing of HR documents (hard and soft copies)",
      "Communicate HR policies and procedures to staff as needed",
      "Perform other duties as assigned by the Line Manager or supervisor",
    ],
  },
{
    id: "software-engineer",
    title: "Software Engineer",
    department: "Engineering",
    location: "Head Office, Phnom Penh, Prampir Meakkakra, Boeng Prolit",
    type: "Full-time",
    tags: ["React", "TypeScript", "Backend", "Mid-level"],
    description:
        "Develop and maintain web applications, collaborate with cross-functional teams, and ensure code quality. Experience with React and Node.js preferred.",
    experience: "2+ years in software development",
    requirements: [
        "Bachelor’s degree in Computer Science or relate</div>d field",
        "Proficient in JavaScript/TypeScript and React",
        "Experience with REST APIs and backend development",
        "Strong problem-solving skills",
        "Good communication and teamwork abilities",
    ],
    responsibilities: [
        "Design, develop, and maintain web applications",
        "Write clean, scalable, and efficient code",
        "Collaborate with designers and product managers",
        "Participate in code reviews and </div>testing",
        "Troubleshoot and debug applications",
    ],
},
{
    id: "marketing-specialist",
    title: "Market</ul>ing Specialist",
    department: "Marketing",
    location: "Head Office, Phnom Penh, Prampir Meakkakra, Boeng Prolit",
    type: "Full-time",
    tags: ["Marketing", "Digital", "Creative", "Entry-level"],
    description:
        "Plan and execute marketing campaigns, manage social media, and analyze performance metrics. Creative thinkers encouraged to apply.",
    experience: "1+ year in marketing or related field",
    requirements: [
        "Bachelor’s degree in Marketing, Business, or related field",
        "Strong written and verbal communication skills",
        "Experience with social media platforms",
        "Ability to analyze data and trends",
        "Creative and proactive mindset",
    ],
    responsibilities: [
        "Develop and implement marketing strategies",
        "Manage social media accounts and content",
        "Monitor and report on campaign performance",
        "Coordinate with external partners and agencies",
        "Support event planning and execution",
    ],
},
{
    id: "finance-analyst",
    title: "Finance Analyst",
    department: "Finance",
    location: "Head Office, Phnom Penh, Prampir Meakkakra, Boeng Prolit",
    type: "Full-time",
    tags: ["Finance", "Analysis", "Excel", "Mid-level"],
    description:
        "Analyze financial data, prepare reports, and support budgeting processes. Strong analytical skills and Excel proficiency required.",
    experience: "2+ years in finance or accounting",
    requirements: [
        "Bachelor’s degree in Finance, Accounting, or related field",
        "Advanced Excel skills",
        "Experience with financial modeling",
        "Attention to detail",
        "Ability to work independently",
    ],
    responsibilities: [
        "Analyze financial statements and data",
        "Prepare monthly and quarterly reports",
        "Assist in budgeting and forecasting",
        "Support audits and compliance",
        "Identify process improvement opportunities",
    ],
},
{
    id: "graphic-designer",
    title: "Graphic Designer",
    department: "Design",
    location: "Head Office, Phnom Penh, Prampir Meakkakra, Boeng Prolit",
    type: "Full-time",
    tags: ["Design", "Adobe", "Creative", "Entry-level"],
    description:
        "Create visual assets for digital and print media, collaborate with marketing, and maintain brand consistency. Portfolio required.",
    experience: "1+ year in graphic design",
    requirements: [
        "Bachelor’s degree in Design or related field",
        "Proficiency in Adobe Creative Suite",
        "Strong portfolio of design work",
        "Attention to detail and creativity",
        "Ability to meet deadlines",
    ],
    responsibilities: [
        "Design graphics for web, social media, and print",
        "Collaborate with marketing and product teams",
        "Ensure brand consistency across materials",
        "Revise and improve existing designs",
        "Stay updated on design trends",
    ],
},
{
    id: "customer-support-representative",
    title: "Customer Support Representative",
    department: "Customer Support",
    location: "Head Office, Phnom Penh, Prampir Meakkakra, Boeng Prolit",
    type: "Full-time",
    tags: ["Support", "Communication", "Entry-level"],
    description:
        "Provide excellent customer service, resolve inquiries, and ensure customer satisfaction. Strong communication skills required.",
    experience: "No experience required",
    requirements: [
        "High school diploma or equivalent",
        "Excellent communication and interpersonal skills",
        "Ability to handle customer inquiries professionally",
        "Basic computer skills",
        "Patience and empathy",
    ],
    responsibilities: [
        "Respond to customer inquiries via phone, email, and chat",
        "Resolve issues and provide solutions",
        "Document interactions and feedback",
        "Collaborate with other departments as needed",
        "Maintain high customer satisfaction",
    ],
},
];

export default function Page() {
  const [query, setQuery] = useState("");
  const [dept, setDept] = useState("All");
  const [loc, setLoc] = useState("All");
  const [type, setType] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const departments = useMemo(
    () => ["All", ...Array.from(new Set(JOBS.map((j) => j.department)))],
    []
  );
  const locations = useMemo(
    () => ["All", ...Array.from(new Set(JOBS.map((j) => j.location)))],
    []
  );
  const types = ["All", "Full-time", "Part-time", "Contract", "Internship"];

  const filtered = useMemo(() => {
    return JOBS.filter((j) => {
      const q =
        j.title.toLowerCase().includes(query.toLowerCase()) ||
        j.department.toLowerCase().includes(query.toLowerCase()) ||
        j.location.toLowerCase().includes(query.toLowerCase()) ||
        (j.tags || []).some((t) => t.toLowerCase().includes(query.toLowerCase()));
      const d = dept === "All" || j.department === dept;
      const l = loc === "All" || j.location === loc;
      const t = type === "All" || j.type === (type as Job["type"]);
      return q && d && l && t;
    });
  }, [query, dept, loc, type]);

  const openApply = (job: Job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(229,57,53,0.15),transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-4 pt-16 pb-10 sm:pt-20 sm:pb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-3 py-1 text-xs text-rose-700 shadow-sm">
            We’re hiring
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#E53935]" />
          </span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Build the future with us
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            Join a team that ships with care and moves with purpose. Explore roles across
            engineering, design, and operations.
          </p>

          {/* Search + Filters (card, mobile-first) */}
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="col-span-2 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-xs ring-0 transition focus-within:ring-2 focus-within:ring-[#EF5350]/40">
                <svg
                  className="h-5 w-5 text-slate-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="7" strokeWidth="2" />
                  <path d="M20 20l-3.5-3.5" strokeWidth="2" />
                </svg>
                <input
                  className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                  placeholder="Search roles, skills, or keywords"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <select
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-xs transition focus:outline-none focus:ring-2 focus:ring-[#EF5350]/40"
                value={dept}
                onChange={(e) => setDept(e.target.value)}
              >
                {departments.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              <div className="grid grid-cols-2 gap-3">
                <select
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-xs transition focus:outline-none focus:ring-2 focus:ring-[#EF5350]/40"
                  value={loc}
                  onChange={(e) => setLoc(e.target.value)}
                >
                  {locations.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
                <select
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-xs transition focus:outline-none focus:ring-2 focus:ring-[#EF5350]/40"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  {types.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job list */}
      <section id="open-positions" className="mx-auto max-w-6xl px-4 pb-24">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-medium text-slate-900">
            Open positions
            <span className="ml-2 text-sm font-normal text-slate-500">
              ({filtered.length})
            </span>
          </h2>
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-white p-8 text-center text-slate-500 shadow-sm">
            No roles match your filters. Try adjusting your search.
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {filtered.map((job) => (
              <article
                key={job.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-rose-200 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{job.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {job.department} • {job.location}
                    </p>
                  </div>
                  <span className="rounded-full bg-rose-50 px-2.5 py-1 text-xs font-medium text-rose-700 min-w-fit">
                    {job.type}
                  </span>
                </div>

                <p className="mt-3 line-clamp-3 text-sm text-slate-600">{job.description}</p>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {job.tags?.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-200 bg-rose-50/40 px-2 py-0.5 text-xs text-rose-700"
                    >
                      {t}
                    </span>
                  ))}
                  {job.salary && (
                    <span className="ml-auto text-xs font-medium text-emerald-700">
                      {job.salary}
                    </span>
                  )}
                </div>

                <div className="mt-5 flex items-center gap-2">
                  <button
                    // onClick={() => openApply(job)}
                    
                    className="inline-flex items-center justify-center rounded-xl bg-[#E53935] px-3.5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#C62828] focus:outline-none focus:ring-2 focus:ring-[#EF5350]/40"
                  >
                    Apply now
                  </button>
                  <Link
                    href={"/careers/hr-admin-officer"}
                    className="text-sm font-medium text-[#E53935] underline-offset-4 hover:text-[#C62828] hover:underline"
                  >
                    View details
                  </Link>
                </div>

                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-rose-100 opacity-0 transition group-hover:opacity-100" />
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Apply modal */}
      {showModal && selectedJob && (
        <ApplyModal
          job={selectedJob}
          onClose={() => setShowModal(false)}
          onSubmit={(payload) => {
            console.log("Application submitted:", payload);
            setShowModal(false);
            alert("Thanks for applying! We’ll be in touch.");
          }}
        />
      )}
    </div>
  );
}

function ApplyModal({
  job,
  onClose,
  onSubmit,
}: {
  job: Job;
  onClose: () => void;
  onSubmit: (payload: {
    jobId: string;
    name: string;
    email: string;
    phone?: string;
    coverLetter?: string;
    resume?: File | null;
  }) => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const canSubmit = name.trim() && /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    try {
      onSubmit({
        jobId: job.id,
        name,
        email,
        phone,
        coverLetter,
        resume,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 grid place-items-center px-4">
      <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div>
            <h3 className="text-base font-semibold text-slate-900">Apply for {job.title}</h3>
            <p className="mt-0.5 text-xs text-slate-500">
              {job.department} • {job.location} • {job.type}
            </p>
          </div>
          <button
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-rose-50 hover:text-rose-700"
            aria-label="Close"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M6 6l12 12M6 18L18 6" strokeWidth="2" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 p-5 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm font-medium text-slate-700">Full name</label>
            <input
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-[#EF5350]/40"
              placeholder="Jane Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-[#EF5350]/40"
              placeholder="jane@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm font-medium text-slate-700">Phone (optional)</label>
            <input
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-[#EF5350]/40"
              placeholder="+855 12 345 678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm font-medium text-slate-700">Resume (PDF)</label>
            <input
              type="file"
              accept="application/pdf"
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm file:mr-3 file:rounded-md file:border-0 file:bg-[#E53935] file:px-3 file:py-2 file:text-sm file:font-medium file:text-white transition hover:file:bg-[#C62828] focus:outline-none focus:ring-2 focus:ring-[#EF5350]/40"
              onChange={(e) => setResume(e.target.files?.[0] ?? null)}
            />
          </div>

          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm font-medium text-slate-700">Cover letter (optional)</label>
            <textarea
              rows={5}
              className="w-full resize-y rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-[#EF5350]/40"
              placeholder="Tell us why you’re a great fit..."
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
            />
          </div>

          <div className="sm:col-span-2 flex items-center justify-between gap-3 pt-2">
            <p className="text-xs text-slate-500">By applying, you agree to our Privacy Policy.</p>
            <button
              type="submit"
              disabled={!canSubmit || submitting}
              className="inline-flex items-center justify-center rounded-xl bg-[#E53935] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#C62828] disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-[#EF5350]/40"
            >
              {submitting ? "Submitting..." : "Submit application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}