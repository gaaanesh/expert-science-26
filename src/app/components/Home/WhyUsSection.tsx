'use client';
import React from 'react';
import { openWhatsAppModal } from '@/app/components/Layout/WhatsAppModal';

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left: Section header + features */}
          <div className="lg:col-span-7">
            <div className="reveal mb-10">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 mb-4 font-body">Why Expert Science Academy</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                We&apos;re not the biggest coaching.<br />
                <span className="text-brand-700 italic">We&apos;re the most personal.</span>
              </h2>
              <p className="text-gray-500 text-lg font-body max-w-xl">
                Big coaching institutes optimise for scale. We optimise for your child&apos;s score. Here&apos;s what that actually means on the ground.
              </p>
            </div>

            {/* Feature cards */}
            <div className="space-y-4">

              <div className="reveal flex gap-5 items-start p-5 bg-white border border-gray-200 rounded-2xl hover:border-brand-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-2xl flex-shrink-0">👥</div>
                <div>
                  <h4 className="font-display font-bold text-gray-900 text-lg mb-1.5">Max 25 Students Per Batch — Hard Limit</h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-body">
                    We never go beyond 15 students in a batch. When a batch is full, we open a new one — we don&apos;t squeeze in extra students. This means your child gets individual visibility every single class, their doubts get answered in real time, and their progress is tracked by name — not by roll number.
                  </p>
                </div>
              </div>

              <div className="reveal flex gap-5 items-start p-5 bg-white border border-gray-200 rounded-2xl hover:border-brand-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-2xl flex-shrink-0">📊</div>
                <div>
                  <h4 className="font-display font-bold text-gray-900 text-lg mb-1.5">Weekly Tests + Parent WhatsApp Update</h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-body">
                    Every Saturday, we conduct a written test. Every Sunday, parents receive the score on WhatsApp with improvement notes. You&apos;ll never discover your child is struggling only at exam time. Problems get caught in week 2 — not month 5.
                  </p>
                </div>
              </div>

              <div className="reveal flex gap-5 items-start p-5 bg-white border border-gray-200 rounded-2xl hover:border-brand-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-2xl flex-shrink-0">💬</div>
                <div>
                  <h4 className="font-display font-bold text-gray-900 text-lg mb-1.5">Same-Day Doubt Support via WhatsApp</h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-body">
                    Doubts don&apos;t follow a schedule. If your child is stuck on a problem at 9 PM the night before an exam, they message us — and get a clear answer the same day. No waiting for the next class. No doubt left unresolved.
                  </p>
                </div>
              </div>

              <div className="reveal flex gap-5 items-start p-5 bg-white border border-gray-200 rounded-2xl hover:border-brand-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-2xl flex-shrink-0">📍</div>
                <div>
                  <h4 className="font-display font-bold text-gray-900 text-lg mb-1.5">Local for 23+ Years — We Know This Area</h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-body">
                    We&apos;re not a national franchise that opened a branch in Ghatkopar. We&apos;ve been teaching students from Asalpha, Pereirawadi, Sakinaka, Mohili Village, and Ghatkopar since 2003. We know the local junior colleges, their exam patterns, and exactly what it takes to score well here — not somewhere else.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Stats + visual panel */}
          <div className="lg:col-span-5">
            <div className="reveal sticky top-24">
              <div className="bg-gray-950 rounded-2xl p-8 text-white mb-6">
                <h3 className="font-display text-xl font-bold text-white mb-8">By the numbers.</h3>
                <div className="space-y-6">
                  <div className="border-b border-gray-800 pb-6">
                    <div className="font-display text-5xl font-bold text-amber-400 leading-none">23+</div>
                    <div className="text-gray-400 text-sm mt-2 font-body">Years coaching students in Asalpha and Ghatkopar West, since 2003</div>
                  </div>
                  <div className="border-b border-gray-800 pb-6">
                    <div className="font-display text-5xl font-bold text-white leading-none">25</div>
                    <div className="text-gray-400 text-sm mt-2 font-body">Maximum students per batch. Hard limit. Always.</div>
                  </div>
                  <div className="border-b border-gray-800 pb-6">
                    <div className="font-display text-5xl font-bold text-emerald-400 leading-none">90%+</div>
                    <div className="text-gray-400 text-sm mt-2 font-body">Students who attend regularly see significant score improvement</div>
                  </div>
                  <div>
                    <div className="font-display text-5xl font-bold text-white leading-none">4</div>
                    <div className="text-gray-400 text-sm mt-2 font-body">Convenient locations — Asalpha–Pereirawadi and Bhatwadi, Ghatkopar West</div>
                  </div>
                </div>
              </div>

              {/* Quick CTA in this column */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-2xl">🎓</span>
                  <div>
                    <h4 className="font-display font-bold text-gray-900">See it before you decide.</h4>
                    <p className="text-sm text-gray-600 font-body mt-1">Attend a free 1-hour demo class. No fees, no pressure, no commitment — just come and see if this is the right fit for your child.</p>
                  </div>
                </div>
                <button onClick={() => openWhatsAppModal("Hi! I want to book a free demo class at Expert Science Academy")}
                  className="flex items-center justify-center gap-2 w-full bg-brand-700 hover:bg-brand-800 text-white font-bold py-3.5 rounded-xl text-sm transition-all font-display">
                  📅 Book Free Demo Now
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
