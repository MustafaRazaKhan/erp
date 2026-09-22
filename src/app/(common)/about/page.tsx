"use client";

import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";

const values = [
  {
    number: "01",
    title: "Discipline",
    description: "Building responsibility, consistency and positive habits.",
  },
  {
    number: "02",
    title: "Knowledge",
    description: "Encouraging curiosity, exploration and lifelong learning.",
  },
  {
    number: "03",
    title: "Character",
    description: "Developing honesty, respect, empathy and integrity.",
  },
  {
    number: "04",
    title: "Growth",
    description: "Supporting every student's academic and personal journey.",
  },
];

export default function About() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f8faf9] text-[#25302d]">
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}
      <div
        className="pointer-events-none fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/about-bg.jpg')",
        }}
      />

      {/* Soft neutral overlay */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[#f8faf9]/95" />

      <Navbar />

      <main>
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden border-b border-[#dce5e1] bg-white">
          {/* Decorative shapes */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#5f7f72]/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#5f7f72]/10 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-6 py-20 text-center sm:py-24 lg:py-28">
            {/* Label */}
            <span className="inline-flex items-center rounded-full border border-[#dce5e1] bg-[#edf4f0] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#527064]">
              About Our School
            </span>

            {/* Heading */}
            <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-[#172033] sm:text-5xl lg:text-6xl">
              Shaping Bright Futures
              <span className="mt-2 block text-[#5f7f72]">
                Through Meaningful Education
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#68736f] sm:text-lg">
              At Krishna Public School, we believe education goes beyond
              academic achievement. We help students develop confidence,
              character, curiosity and the skills needed to navigate the future.
            </p>

            {/* Stats */}
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-3 overflow-hidden rounded-2xl border border-[#dce5e1] bg-white shadow-sm">
              <div className="border-r border-[#dce5e1] px-4 py-5">
                <p className="text-xl font-bold text-[#172033]">01</p>
                <p className="mt-1 text-[11px] font-medium text-[#7b8581]">
                  Learning
                </p>
              </div>

              <div className="border-r border-[#dce5e1] px-4 py-5">
                <p className="text-xl font-bold text-[#172033]">02</p>
                <p className="mt-1 text-[11px] font-medium text-[#7b8581]">
                  Character
                </p>
              </div>

              <div className="px-4 py-5">
                <p className="text-xl font-bold text-[#172033]">03</p>
                <p className="mt-1 text-[11px] font-medium text-[#7b8581]">
                  Growth
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHO WE ARE
        ====================================================== */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              {/* Left */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5f7f72]">
                  Who We Are
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#172033] sm:text-4xl">
                  Education that prepares students for life.
                </h2>

                <div className="mt-6 h-1 w-12 rounded-full bg-[#5f7f72]" />
              </div>

              {/* Right */}
              <div className="rounded-3xl border border-[#dce5e1] bg-white p-7 shadow-sm sm:p-10">
                <p className="text-base leading-8 text-[#68736f]">
                  At Krishna Public School, we believe education extends beyond
                  textbooks and examinations. Our aim is to create an
                  environment where every student feels encouraged to learn,
                  explore, participate and grow.
                </p>

                <p className="mt-5 text-base leading-8 text-[#68736f]">
                  Through dedicated teachers, meaningful learning experiences
                  and a supportive school community, we strive to help students
                  build the knowledge, skills and values they need for the
                  future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            VISION & MISSION
        ====================================================== */}
        <section className="border-y border-[#dce5e1] bg-[#edf4f0] py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5f7f72]">
                Our Foundation
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#172033] sm:text-4xl">
                Vision & Mission
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#68736f]">
                The principles that shape our approach to education and student
                development.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {/* Vision */}
              <div className="group rounded-3xl border border-[#dce5e1] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf4f0] text-[#5f7f72]">
                  <span className="text-xl">◇</span>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#172033]">
                  Our Vision
                </h3>

                <p className="mt-4 leading-7 text-[#68736f]">
                  To inspire students to become confident, responsible and
                  globally minded individuals who are prepared to contribute
                  positively to society.
                </p>
              </div>

              {/* Mission */}
              <div className="group rounded-3xl border border-[#dce5e1] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf4f0] text-[#5f7f72]">
                  <span className="text-xl">+</span>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#172033]">
                  Our Mission
                </h3>

                <p className="mt-4 leading-7 text-[#68736f]">
                  To provide a safe, inclusive and inspiring learning
                  environment where students can develop academically, socially
                  and personally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PRINCIPAL MESSAGE
        ====================================================== */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5f7f72]">
                Leadership
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#172033] sm:text-4xl">
                Principal&apos;s Message
              </h2>
            </div>

            <div className="relative mt-10 overflow-hidden rounded-3xl border border-[#dce5e1] bg-white p-8 shadow-sm sm:p-12">
              {/* Decorative quote */}
              <div className="absolute -right-2 -top-8 select-none text-[170px] font-serif leading-none text-[#edf4f0]">
                &ldquo;
              </div>

              <div className="relative">
                <div className="mb-7 h-1 w-12 rounded-full bg-[#5f7f72]" />

                <p className="max-w-3xl text-lg italic leading-8 text-[#68736f] sm:text-xl sm:leading-9">
                  “Education is about shaping character, encouraging curiosity
                  and building the confidence to face the future.”
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#172033] text-sm font-bold text-white">
                    P
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#172033]">
                      Principal
                    </p>

                    <p className="mt-1 text-xs text-[#5f7f72]">
                      Krishna Public School
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            VALUES
        ====================================================== */}
        <section className="border-t border-[#dce5e1] bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5f7f72]">
                What We Believe In
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#172033] sm:text-4xl">
                Values That Guide Us
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#68736f]">
                Principles that influence how we teach, support and develop
                every student.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.number}
                  className="group rounded-2xl border border-[#dce5e1] bg-[#f8faf9] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#b9cdc4] hover:bg-white hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#5f7f72]">
                      {value.number}
                    </span>

                    <span className="h-2 w-2 rounded-full bg-[#5f7f72] opacity-40 transition group-hover:opacity-100" />
                  </div>

                  <h3 className="mt-5 text-base font-bold text-[#172033]">
                    {value.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#68736f]">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            CLOSING CTA
        ====================================================== */}
        <section className="px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#172033] px-7 py-12 text-center shadow-xl sm:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8fb5a5]">
              Discover Krishna Public School
            </p>

            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
              Building tomorrow,
              <span className="text-[#8fb5a5]"> one student at a time.</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
              Learn more about our school, connect with our admission team and
              take the next step in your child&apos;s educational journey.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/enquiry"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#172033] transition hover:bg-[#edf4f0]"
              >
                Make an Enquiry
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact School
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
