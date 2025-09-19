//   export default function CareersDetailPage({ params }: { params: { careersId: string } }) {
//       const { careersId } = params;
//       // Fetch career data using careersId
//       return (
//         <div>
//           <h1>Career Detail for ID: {careersId}</h1>
//           {/* Render career details */}
          
//         </div>
//       );
//     }


import Link from "next/link";
import { notFound } from "next/navigation";

const JOB = {
  id: "hr-admin-officer",
  title: "HR&Admin Officer",
  department: "Administration",
  location: "Head Office, Phnom Penh, Prampir Meakkakra, Boeng Prolit",
  type: "Full-time",
  experience: "No experience could apply",
  tags: ["HR", "Administration", "Entry-level"],
  description:
    "Support HR operations, recruitment coordination, records, onboarding, training, and admin tasks. Open to fresh graduates.",
  requirements: [
    "Female candidates are preferred",
    "Bachelor’s or Associate degree in Human Resource Management or a related field",
    "Year 4 student or recent graduate",
    "Strong analytical and problem-solving skills, with the ability to identify issues effectively",
    "Good negotiation skills",
    "Understanding of cross-cultural communication",
    "Willingness to embrace and adapt to the company culture",
    "High attention to detail",
    "Intermediate level of English proficiency",
    "Highly self-motivated",
    "Proficient in Microsoft Office (Word, Excel, PowerPoint) and basic data entry",
  ],
  responsibilities: [
    "Assist in day-to-day HR operations and administrative tasks",
    "Support the recruitment process by coordinating interviews, posting job advertisements, and screening applications",
    "Maintain and update employee records and databases",
    "Assist in preparing HR documents such as employment contracts, staff announcements, and reports",
    "Coordinate training sessions, staff orientation, and onboarding activities",
    "Support attendance and leave tracking, including data entry and reporting",
    "Help organize HR-related events, workshops, and staff engagement activities",
    "Ensure proper filing of HR documents (both hard and soft copies)",
    "Communicate HR policies and procedures to staff as needed",
    "Perform other duties as assigned by the Line Manager or supervisor",
  ],
};

export function generateStaticParams() {
  return [{ careersId: JOB.id }];
}

export function generateMetadata({ params }: { params: { careersId: string } }) {
  if (params.careersId !== JOB.id) return {};
  return {
    title: `${JOB.title} — Careers`,
    description: `${JOB.title} • ${JOB.department} • ${JOB.location}`,
  };
}

export default function CareersDetailPage({ params }: { params: { careersId: string } }) {
  const { careersId } = params;
  if (careersId !== JOB.id) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <div className="mb-6 flex items-center justify-between">
          <Link href="/careers" className="text-sm text-rose-700 hover:text-rose-800">
            ← Back to Careers
          </Link>
        </div>

        <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">{JOB.title}</h1>
              <p className="mt-1 text-sm text-slate-600">
                {JOB.department} • {JOB.location} • {JOB.type}
              </p>
            </div>
            <a
              href="#apply"
              className="inline-flex items-center justify-center rounded-xl bg-[#E53935] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#C62828] focus:outline-none focus:ring-2 focus:ring-[#EF5350]/40"
            >
              Apply now
            </a>
          </div>

          {JOB.tags && JOB.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {JOB.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-rose-200 bg-rose-50 px-2 py-0.5 text-xs text-rose-700"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </header>

        <main className="mt-6 grid gap-6 md:grid-cols-3">
          <section className="md:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-base font-semibold text-slate-900">About the role</h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">{JOB.description}</p>

            <h3 className="mt-6 text-sm font-semibold text-slate-900">Job Responsibilities</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
              {JOB.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>

            <h3 className="mt-6 text-sm font-semibold text-slate-900">Job Requirements</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
              {JOB.requirements.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>

            <div id="apply" className="mt-8 rounded-xl border border-rose-200 bg-rose-50 p-5">
              <h3 className="text-sm font-semibold text-slate-900">How to apply</h3>
              <p className="mt-2 text-sm text-slate-700">
                Send your resume and a short cover letter to careers@example.com. Include the job
                title in the subject line.
              </p>
            </div>
          </section>

          <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">Summary</h3>
            <dl className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-slate-600">Category</dt>
                <dd className="text-slate-900">{JOB.department}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-600">Job Type</dt>
                <dd className="text-slate-900">{JOB.type}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-600">Experience</dt>
                <dd className="text-slate-900">{JOB.experience}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-600">Location</dt>
                <dd className="text-slate-900">{JOB.location}</dd>
              </div>
            </dl>

            <a
              href="#apply"
              className="mt-4 block w-full rounded-xl bg-[#E53935] px-4 py-2 text-center text-sm font-medium text-white shadow-sm transition hover:bg-[#C62828] focus:outline-none focus:ring-2 focus:ring-[#EF5350]/40"
            >
              Apply now
            </a>
          </aside>
        </main>
      </div>
    </div>
  );
}