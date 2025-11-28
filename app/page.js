"use client";

import Image from "next/image";
import { useState } from "react";

const FORM_LINK = "https://forms.gle/KjWCZcmrMx7wiYMn8";
const DOC_LINK = "/sitaa-aip-concept-note.pdf";

const navItems = [
  { id: "about", label: "About SITAA" },
  { id: "mission", label: "Mission & Objectives" },
  { id: "aip-role", label: "Role of AIPs" },
  { id: "criteria", label: "Selection Criteria" },
  { id: "funding", label: "Funding Model" },
  { id: "timeline", label: "Timeline" },
  { id: "apply", label: "How to Apply" },
  { id: "faq", label: "FAQs" },
];

function scrollToId(id, setActive) {
  const el = document.getElementById(id);
  if (!el) return;
  setActive(id);
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function HomePage() {
  const [active, setActive] = useState("about");

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-x-0 -top-40 h-72 bg-gradient-to-b from-orange-500/30 via-amber-400/10 to-transparent blur-3xl" />
        <div className="absolute inset-x-10 top-40 h-80 rounded-full bg-gradient-to-r from-sky-500/20 via-fuchsia-500/20 to-orange-400/25 blur-3xl" />
        <div className="absolute inset-y-40 -left-40 w-64 rounded-full bg-gradient-to-b from-orange-500/20 to-transparent blur-3xl" />
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/85 backdrop-blur">
        <div className="wide-container mx-auto flex items-center justify-between px-6 py-3.5">
          {/* Title */}
          <div className="flex items-center gap-4">
  {/* SITAA logo */}
  <div className="relative h-8 md:h-10 w-auto translate-y-[-6px]">
  <Image
    src="/sitaa-logo.png"
    alt="SITAA logo"
    width={150}
    height={40}
    className="object-contain"
    priority
  />
</div>

  {/* Title text */}
  <div className="flex flex-col">
    <span className="text-[10px] md:text-xs uppercase tracking-[0.22em] text-orange-300">
      Scheme for Innovation and Technology Association with Aadhaar
    </span>
    <span className="text-xs md:text-sm font-medium text-slate-50/90">
      Call for Academic Incubators · Pilot Module
    </span>
  </div>
</div>


          {/* Desktop nav */}
          <nav className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToId(item.id, setActive)}
                className={`text-[11px] md:text-xs font-medium uppercase tracking-[0.16em] transition ${
                  active === item.id
                    ? "text-orange-300"
                    : "text-slate-300 hover:text-orange-200"
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href={FORM_LINK}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-orange-400/80 bg-orange-500 px-5 py-2 text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-lg shadow-orange-500/40 hover:bg-orange-400 transition"
            >
              Apply Now
            </a>
          </nav>
        </div>
      </header>

      {/* MOBILE quick CTA bar */}
      <div className="sticky top-[3.3rem] z-20 border-y border-slate-800 bg-slate-950/95 px-4 py-2 lg:hidden">
        <div className="wide-container mx-auto flex items-center justify-between gap-3">
          <span className="text-[11px] font-medium text-slate-200">
            Call for Academic Incubators · Pilot Module
          </span>
          <a
            href={FORM_LINK}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-orange-500 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-950 shadow-md hover:bg-orange-400 transition"
          >
            Apply
          </a>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="wide-container mx-auto flex flex-col gap-16 px-6 pb-20 pt-10 lg:px-8">
        {/* HERO + BANNER */}
        <section className="scroll-mt-24" id="top">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/85 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
            {/* Banner – full, no crop */}
            <div className="relative w-full bg-slate-950">
              <Image
                src="/sitaa-aip-banner.png"
                alt="Call for Applications: Academic Incubators to partner with SITAA"
                width={1920}
                height={670}
                priority
                className="h-auto w-full object-contain"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/35 via-transparent to-slate-950/60" />
            </div>

            <div className="flex flex-col gap-5 px-6 pb-6 pt-5 md:flex-row md:items-center md:justify-between md:px-9 md:pb-7">
              <div className="space-y-2.5 max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/50 bg-slate-900/80 px-4 py-1.5 text-[11px] font-medium text-orange-100 shadow-sm shadow-orange-500/40">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Call for Applications · Academic Incubators (AIPs)
                </div>
                <h1 className="text-2xl md:text-3xl lg:text-[30px] font-semibold leading-snug tracking-tight">
                  Partner with{" "}
                  <span className="bg-gradient-to-r from-orange-300 via-amber-200 to-sky-300 bg-clip-text text-transparent">
                    SITAA ID Tech Programme
                  </span>{" "}
                  to drive innovation in digital identity.
                </h1>
                <p className="text-sm md:text-[15px] leading-relaxed text-slate-200/90">
                  SITAA invites leading academic incubators to join as Accelerator /
                  Incubator Partners (AIPs) and nurture startups building the next
                  generation of Aadhaar-enabled digital identity solutions.
                </p>
              </div>

              <div className="flex flex-col gap-2.5 md:items-end">
                <a
                  href={FORM_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-2 text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-lg shadow-orange-500/40 hover:bg-orange-400 transition"
                >
                  Apply Now
                </a>
                <a
                  href={DOC_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/80 px-6 py-2 text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-slate-100 hover:border-orange-400 hover:text-orange-200 transition"
                >
                  Download Concept Note
                </a>
                <p className="text-[10px] md:text-[11px] text-slate-50 text-right max-w-xs">
                  (Applications open for the pilot module. Please read the concept note
                  before applying.)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SITAA */}
        <section id="about" className="scroll-mt-24">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl lg:text-2xl font-semibold tracking-tight text-slate-50">
                About SITAA
              </h2>
              <p className="mt-1 text-xs lg:text-sm text-slate-300/90">
                Scheme for Innovation and Technology Association with Aadhaar.
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-5 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/85 p-5 text-sm leading-relaxed text-slate-200">
              <p>
                Aadhaar forms the backbone of India&apos;s Digital Public Infrastructure,
                enabling secure, inclusive and at-scale identity verification. SITAA is a
                strategic initiative by UIDAI to deepen this ecosystem by working closely
                with startups, academia and industry.
              </p>
              <p className="mt-3">
                Through SITAA, UIDAI aims to support the development, testing and
                adoption of next-generation digital identity technologies and Aadhaar
                enabled use cases, in line with the vision of{" "}
                <span className="font-semibold">Atmanirbhar Bharat</span>.
              </p>
            </div>

            <div className="grid gap-3 text-xs md:text-[13px]">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/85 p-4">
                <p className="text-[11px] font-semibold text-orange-200 uppercase tracking-[0.18em]">
                  Focus of the Programme
                </p>
                <ul className="mt-2 space-y-1 text-slate-200/90">
                  <li>• Digital identity technologies & Aadhaar-enabled solutions</li>
                  <li>• Secure, scalable and globally benchmarked ID tech</li>
                  <li>• Collaboration across startups, academia and government</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/85 p-4">
                <p className="text-[11px] font-semibold text-orange-200 uppercase tracking-[0.18em]">
                  Target Stakeholders
                </p>
                <ul className="mt-2 space-y-1 text-slate-200/90">
                  <li>• Startups & deep-tech ventures</li>
                  <li>• Academic / research institutions</li>
                  <li>• Incubators & accelerator partners</li>
                  <li>• Government & industry collaborators</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION & OBJECTIVES */}
        <section id="mission" className="scroll-mt-24">
          <h2 className="text-xl lg:text-2xl font-semibold tracking-tight text-slate-50">
            Mission & Objectives
          </h2>
          <p className="mt-1 text-xs lg:text-sm text-slate-300/90">
            As outlined in the SITAA concept note.
          </p>

          <div className="mt-4 grid gap-4 md:grid-cols-3 text-xs md:text-[13px]">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/85 p-4">
              <p className="text-[11px] font-semibold text-orange-200 uppercase tracking-[0.18em]">
                Mission
              </p>
              <p className="mt-2 leading-relaxed text-slate-200/90">
                To strengthen India&apos;s digital identity ecosystem by fostering
                innovation and promoting indigenization in identity technologies.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/85 p-4">
              <p className="text-[11px] font-semibold text-orange-200 uppercase tracking-[0.18em]">
                Key Objectives
              </p>
              <ul className="mt-2 space-y-1 text-slate-200/90">
                <li>• Foster open innovation & entrepreneurship in digital identity.</li>
                <li>• Achieve self-reliance in specialized ID technologies.</li>
                <li>• Strengthen and enhance the Aadhaar ecosystem.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/85 p-4">
              <p className="text-[11px] font-semibold text-orange-200 uppercase tracking-[0.18em]">
                Outcomes for Residents
              </p>
              <ul className="mt-2 space-y-1 text-slate-200/90">
                <li>• Improved access to public and private services.</li>
                <li>• Enhanced ease of living through secure digital identity.</li>
                <li>• Socio-economic empowerment through inclusive innovation.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ROLE OF AIPs */}
        <section id="aip-role" className="scroll-mt-24">
          <h2 className="text-xl lg:text-2xl font-semibold tracking-tight text-slate-50">
            Role of Accelerator / Incubator Partners (AIPs)
          </h2>
          <p className="mt-1 text-xs lg:text-sm text-slate-300/90">
            AIPs are core thematic enablers responsible for incubation, acceleration and
            commercialization readiness of SITAA startups.
          </p>

          <div className="mt-4 grid gap-4 md:grid-cols-2 text-xs md:text-[13px]">
            {[
              {
                title: "Product–Market Fit & Tech Readiness",
                points: [
                  "Align startup solutions with Aadhaar problem statements.",
                  "Facilitate integrations, validation and user testing.",
                  "Support TRL progression and milestone achievement.",
                ],
              },
              {
                title: "Mentoring & Capacity Building",
                points: [
                  "Provide structured mentorship through domain experts.",
                  "Conduct sessions on authentication, biometrics, security, consent, deep-tech etc.",
                  "Enable peer learning and inter-cohort exchanges.",
                ],
              },
              {
                title: "Legal, Compliance & Funding Support",
                points: [
                  "Assist in incorporation, IP and regulatory compliances.",
                  "Guide on investment-readiness, pitch decks and financials.",
                  "Support documentation for grants & linkages with investors.",
                ],
              },
              {
                title: "Demo Days, TRL Validation & Reporting",
                points: [
                  "Plan and manage demo days with UIDAI.",
                  "Consolidate feedback and TRL scores.",
                  "Submit structured reports on startup progress and risks.",
                ],
              },
            ].map((block) => (
              <div
                key={block.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/85 p-4 transition hover:border-orange-400/85 hover:bg-slate-900"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-orange-500/12 via-transparent to-sky-500/12 transition" />
                <div className="relative">
                  <p className="text-[11px] font-semibold text-orange-200 uppercase tracking-[0.18em]">
                    {block.title}
                  </p>
                  <ul className="mt-2 space-y-1 text-slate-200/90">
                    {block.points.map((p) => (
                      <li key={p}>• {p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SELECTION CRITERIA */}
        <section id="criteria" className="scroll-mt-24">
          <h2 className="text-xl lg:text-2xl font-semibold tracking-tight text-slate-50">
            AIP Selection Criteria
          </h2>
          <p className="mt-1 text-xs lg:text-sm text-slate-300/90">
            As per the indicative selection framework in the concept note.
          </p>

          <div className="mt-4 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/75 text-xs md:text-[13px]">
            <div className="grid grid-cols-2 bg-slate-900/90 font-semibold text-slate-100 sm:grid-cols-5">
              <div className="border-b border-slate-800 px-4 py-3">
                Startup scaling parameters
              </div>
              <div className="border-b border-slate-800 px-4 py-3">
                Accelerator capabilities
              </div>
              <div className="border-b border-slate-800 px-4 py-3">
                Infra & support system
              </div>
              <div className="border-b border-slate-800 px-4 py-3">
                Team strength & expertise
              </div>
              <div className="border-b border-slate-800 px-4 py-3">
                Network & partners
              </div>
            </div>
            <div className="grid grid-cols-2 gap-px bg-slate-900/85 text-slate-200/90 sm:grid-cols-5">
              {[
                "No. of startups accelerated, funding raised, success stories.",
                "Cohorts executed, programmes with ministries, corporate programmes.",
                "Co-working space, labs, shared services (HR, legal, admin).",
                "Experience, leadership, advisors, dedicated accelerator team.",
                "Investor, corporate & service partners; purchase orders & expansions.",
              ].map((text) => (
                <div key={text} className="bg-slate-950/90 px-4 py-4">
                  {text}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-end gap-3 border-t border-slate-800 bg-slate-950/95 px-4 py-2.5 text-slate-300">
              <span className="font-semibold text-slate-200">
                Indicative weightage:
              </span>
              <span>30% · 25% · 20% · 15% · 10%</span>
            </div>
          </div>
        </section>

        {/* FUNDING MODEL */}
        <section id="funding" className="scroll-mt-24">
          <h2 className="text-xl lg:text-2xl font-semibold tracking-tight text-slate-50">
            Funding Model for AIPs
          </h2>
          <p className="mt-1 text-xs lg:text-sm text-slate-300/90">
            Disbursement of AIP fees is linked to startup milestones and TRL progression.
          </p>

          <div className="mt-4 grid gap-4 md:grid-cols-4 text-xs md:text-[13px]">
            {[
              {
                step: "Step 1",
                title: "Assignment of Startup",
                badge: "20% of AIP fee",
                body: "Startup is selected under SITAA and assigned to an AIP. AIP supports preparation of Project Design Document (PDD) and PoC plan.",
              },
              {
                step: "Step 2",
                title: "PoC Demonstration – TRL 3",
                badge: "20% of AIP fee",
                body: "Startup presents a functional PoC jointly validated by UIDAI and AIP. AIP facilitates technical review and validation of the prototype.",
              },
              {
                step: "Step 3",
                title: "Beta Testing – TRL 6",
                badge: "30% of AIP fee",
                body: "Startup develops and tests an MVP with key integrations. AIP guides MVP development and supports beta testing.",
              },
              {
                step: "Step 4",
                title: "Pre-commercial Compliance – TRL 8",
                badge: "30% of AIP fee",
                body: "Solution reaches TRL 8 with relevant standards compliance and UIDAI certification. AIP assists go-to-market planning, investor linkages and pitching.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/90 p-4 shadow-sm shadow-orange-500/10"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold text-orange-300 uppercase tracking-[0.18em]">
                    {item.step}
                  </span>
                  <span className="rounded-full bg-orange-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-orange-100">
                    {item.badge}
                  </span>
                </div>
                <p className="mt-2 text-sm font-semibold text-slate-100">
                  {item.title}
                </p>
                <p className="mt-2 leading-relaxed text-slate-200/90">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

                {/* TIMELINE */}
        <section id="timeline" className="scroll-mt-24">
          <h2 className="text-xl lg:text-2xl font-semibold tracking-tight text-slate-50">
            Indicative Programme Timeline
          </h2>
          <p className="mt-1 text-xs lg:text-sm text-slate-300/90">
            The following dates are indicative and subject to confirmation.
          </p>

          <ul className="mt-4 space-y-3 text-xs md:text-[13px]">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2.5 w-2.5 rounded-full border border-orange-400" />
              <div>
                <p className="font-semibold text-orange-200">
                  Call for Applications for AIPs
                </p>
                <p className="text-slate-300/90">
                  27th November – 3rd December (indicative)
                </p>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="mt-1 h-2.5 w-2.5 rounded-full border border-orange-400" />
              <div>
                <p className="font-semibold text-orange-200">Screening of AIPs</p>
                <p className="text-slate-300/90">3rd – 5th December</p>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="mt-1 h-2.5 w-2.5 rounded-full border border-orange-400" />
              <div>
                <p className="font-semibold text-orange-200">
                  Committee Evaluation Meeting
                </p>
                <p className="text-slate-300/90">5th – 8th December</p>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="mt-1 h-2.5 w-2.5 rounded-full border border-emerald-400" />
              <div>
                <p className="font-semibold text-emerald-200">
                  Announcement of Selected AIPs
                </p>
                <p className="text-slate-300/90">8th – 9th December</p>
              </div>
            </li>
          </ul>
        </section>


        {/* HOW TO APPLY */}
        <section id="apply" className="scroll-mt-24">
          <div className="rounded-3xl border border-orange-400/70 bg-slate-950/90 px-5 py-6 shadow-lg shadow-orange-500/30">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl lg:text-2xl font-semibold tracking-tight text-slate-50">
                  How to Apply as an Academic Incubator (AIP)
                </h2>
                <p className="mt-1 text-xs lg:text-sm text-slate-200/90">
                  Please review the detailed concept note before submitting your
                  application.
                </p>
                <ul className="mt-3 space-y-1 text-xs md:text-[13px] text-slate-200/90">
                  <li>1. Download and read the SITAA AIP concept note.</li>
                  <li>
                    2. Prepare details on your cohorts, infra, mentors and success
                    stories.
                  </li>
                  <li>3. Fill the online application form with accurate information.</li>
                  <li>4. Submit within the specified application window.</li>
                </ul>
              </div>
              <div className="flex flex-col items-start gap-2 md:items-end">
                <a
                  href={FORM_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-2 text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 hover:bg-orange-400 transition shadow-lg shadow-orange-500/40"
                >
                  Open Application Form
                </a>
                <a
                  href={DOC_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/80 px-6 py-2 text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-slate-100 hover:border-orange-400 hover:text-orange-200 transition"
                >
                  Download Concept Note (PDF)
                </a>
                <span className="text-[10px] md:text-[11px] text-slate-50">
                  For any clarifications, applicants may reach out on the official email
                  ID notified in the guidelines.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24">
          <h2 className="text-xl lg:text-2xl font-semibold tracking-tight text-slate-50">
            Frequently Asked Questions
          </h2>
          <p className="mt-1 text-xs lg:text-sm text-slate-300/90">
            These are indicative FAQs and may be updated over time.
          </p>

          <div className="mt-4 grid gap-4 text-xs md:text-[13px] md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/85 p-4">
              <p className="text-sm font-semibold text-slate-50">
                1. Who can apply as an AIP?
              </p>
              <p className="mt-1 leading-relaxed text-slate-200/90">
                Academic incubators, accelerators and innovation centres with a strong
                track record of supporting startups, especially in deep-tech / digital
                identity domains, are encouraged to apply.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/85 p-4">
              <p className="text-sm font-semibold text-slate-50">
                2. Is funding available for AIPs?
              </p>
              <p className="mt-1 leading-relaxed text-slate-200/90">
                Yes, AIP fees are disbursed in stages linked to startup milestones such
                as assignment, PoC validation, MVP / beta testing and pre-commercial
                readiness.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/85 p-4">
              <p className="text-sm font-semibold text-slate-50">
                3. How many startups will be assigned to each AIP?
              </p>
              <p className="mt-1 leading-relaxed text-slate-200/90">
                The number of startups per AIP will depend on the cohort design and
                programme requirements, and will be communicated at the time of
                onboarding.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/85 p-4">
              <p className="text-sm font-semibold text-slate-50">
                4. Where can I get detailed guidelines?
              </p>
              <p className="mt-1 leading-relaxed text-slate-200/90">
                All detailed guidelines, responsibilities and funding terms are available
                in the SITAA AIP concept note. Applicants are strongly advised to review
                the document before filling the form.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-4 border-top border-t border-slate-800/80 pt-4 text-[10px] md:text-[11px] text-slate-400">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <span>
              © {new Date().getFullYear()} SITAA · UIDAI · MeitY Startup Hub. All
              rights reserved.
            </span>
            <span className="text-slate-500">
              Any Queries : Feel Free to reach out - executiveportal-msh@govcontractor.in
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}
