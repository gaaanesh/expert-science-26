'use client';
import React from 'react';
import { openWhatsAppModal, openCallModal } from '@/app/components/Layout/WhatsAppModal';

const CoursesGrid = () => {
  return (
    <section id="courses" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 mb-4 font-body">Our Programs</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Every science path — from 11th board to<br />
            <span className="text-brand-700 italic">JEE, NEET &amp; MHT-CET.</span>
          </h2>
          <p className="text-gray-500 text-lg font-body">
            Five courses, one goal — your child scores higher than they thought possible.
          </p>
        </div>

        {/* Course cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1: 11th Science */}
          <div className="reveal group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-amber-400 hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="h-1.5 bg-amber-400"></div>
            <div className="p-6">
              <div className="text-3xl mb-3">🔬</div>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-display text-xl font-bold text-gray-900">11th Science</h3>
                  <p className="text-xs text-gray-400 font-body mt-1">PCM · PCB · PCMB</p>
                </div>
                <span className="bg-amber-50 text-amber-700 text-xs font-bold px-2 py-1 rounded-full border border-amber-200 font-body flex-shrink-0">New Batch May</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed font-body mb-4">
                The 10th → 11th transition is where students lose confidence. We build strong foundations in Physics, Chemistry, Maths &amp; Biology from day one — before the dip can happen.
              </p>
              {/* Mini features */}
              <ul className="space-y-2 mb-5">
                <li className="flex items-center gap-2 text-sm text-gray-600 font-body">
                  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Smooth transition from 10th to 11th Science
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 font-body">
                  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  PCM, PCB, and PCMB streams available
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 font-body">
                  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Weekly tests + parent progress reports
                </li>
              </ul>
              <button onClick={(e) => { e.stopPropagation(); openWhatsAppModal("I want to enquire about 11th Science coaching"); }}
                className="inline-flex items-center gap-1 text-brand-700 font-semibold text-sm hover:gap-2 transition-all font-body">
                Enquire for 11th Science <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          </div>

          {/* Card 2: 12th Science */}
          <div className="reveal group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-purple-400 hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="h-1.5 bg-purple-500"></div>
            <div className="p-6">
              <div className="text-3xl mb-3">📚</div>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-display text-xl font-bold text-gray-900">12th Science</h3>
                  <p className="text-xs text-gray-400 font-body mt-1">HSC Board + Entrance Exam</p>
                </div>
                <span className="bg-purple-50 text-purple-700 text-xs font-bold px-2 py-1 rounded-full border border-purple-200 font-body flex-shrink-0">Board + JEE/NEET</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed font-body mb-4">
                Score 85%+ in HSC boards AND prepare for JEE / NEET / CET simultaneously. Our integrated approach means you never have to choose between boards and entrance exams.
              </p>
              <ul className="space-y-2 mb-5">
                <li className="flex items-center gap-2 text-sm text-gray-600 font-body">
                  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Full HSC Maharashtra board syllabus
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 font-body">
                  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Entrance exam prep built into classes
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 font-body">
                  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Previous year HSC paper practice
                </li>
              </ul>
              <button onClick={(e) => { e.stopPropagation(); openWhatsAppModal("I want to enquire about 12th Science coaching"); }}
                className="inline-flex items-center gap-1 text-brand-700 font-semibold text-sm hover:gap-2 transition-all font-body">
                Enquire for 12th Science <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          </div>

          {/* Card 3: JEE Mains */}
          <div className="reveal group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-brand-400 hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="h-1.5 bg-brand-700"></div>
            <div className="p-6">
              <div className="text-3xl mb-3">⚛️</div>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-display text-xl font-bold text-gray-900">JEE Mains</h3>
                  <p className="text-xs text-gray-400 font-body mt-1">Engineering Entrance · PCM</p>
                </div>
                <span className="bg-brand-50 text-brand-700 text-xs font-bold px-2 py-1 rounded-full border border-brand-200 font-body flex-shrink-0">IIT/NIT Faculty</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed font-body mb-4">
                JEE coaching in Asalpha that focuses on concept clarity, not rote memorisation. Weekly NTA-pattern mock tests, targeted doubt sessions, and students with 50% in 10th have cleared JEE from our batches.
              </p>
              <ul className="space-y-2 mb-5">
                <li className="flex items-center gap-2 text-sm text-gray-600 font-body">
                  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Weekly NTA-pattern mock tests
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 font-body">
                  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Physics, Chemistry, Maths — expert faculty
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 font-body">
                  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  2-year integrated (11th + 12th + JEE)
                </li>
              </ul>
              <button onClick={(e) => { e.stopPropagation(); openWhatsAppModal("I want to enquire about JEE coaching in Asalpha"); }}
                className="inline-flex items-center gap-1 text-brand-700 font-semibold text-sm hover:gap-2 transition-all font-body">
                Enquire for JEE <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          </div>

          {/* Card 4: NEET */}
          <div className="reveal group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-emerald-400 hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="h-1.5 bg-emerald-500"></div>
            <div className="p-6">
              <div className="text-3xl mb-3">🧬</div>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-display text-xl font-bold text-gray-900">NEET</h3>
                  <p className="text-xs text-gray-400 font-body mt-1">Medical Entrance · PCB</p>
                </div>
                <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-2 py-1 rounded-full border border-emerald-200 font-body flex-shrink-0">Biology Specialist</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed font-body mb-4">
                Our NEET students have become doctors. Biology gets dedicated specialist-teacher sessions — because NEET&apos;s 720 Biology marks deserve separate, deep attention. NEET coaching near Asalpha Metro Station.
              </p>
              <ul className="space-y-2 mb-5">
                <li className="flex items-center gap-2 text-sm text-gray-600 font-body">
                  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Biology-first approach (60% of NEET)
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 font-body">
                  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  NCERT line-by-line revision each term
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 font-body">
                  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  NEET-pattern tests every week (OMR format)
                </li>
              </ul>
              <button onClick={(e) => { e.stopPropagation(); openWhatsAppModal("I want to enquire about NEET coaching near Asalpha"); }}
                className="inline-flex items-center gap-1 text-brand-700 font-semibold text-sm hover:gap-2 transition-all font-body">
                Enquire for NEET <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          </div>

          {/* Card 5: MHT-CET */}
          <div className="reveal group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-red-400 hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="h-1.5 bg-red-500"></div>
            <div className="p-6">
              <div className="text-3xl mb-3">📐</div>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-display text-xl font-bold text-gray-900">MHT-CET</h3>
                  <p className="text-xs text-gray-400 font-body mt-1">State Engineering &amp; Pharmacy</p>
                </div>
                <span className="bg-red-50 text-red-700 text-xs font-bold px-2 py-1 rounded-full border border-red-200 font-body flex-shrink-0">HSC Aligned</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed font-body mb-4">
                MHT-CET coaching in Ghatkopar West aligned with the Maharashtra HSC syllabus. Perfect for students targeting state engineering and pharmacy colleges. No extra syllabus — smart focus on scoring chapters.
              </p>
              <ul className="space-y-2 mb-5">
                <li className="flex items-center gap-2 text-sm text-gray-600 font-body">
                  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Maharashtra CET + HSC board integrated
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 font-body">
                  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  PCM and PCB streams available
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 font-body">
                  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Previous year CET paper practice
                </li>
              </ul>
              <button onClick={(e) => { e.stopPropagation(); openWhatsAppModal("I want to enquire about MHT-CET coaching in Ghatkopar"); }}
                className="inline-flex items-center gap-1 text-brand-700 font-semibold text-sm hover:gap-2 transition-all font-body">
                Enquire for MHT-CET <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          </div>

          {/* Card 6: CTA card (dark) */}
          <div className="reveal relative bg-brand-900 border border-brand-700 rounded-2xl overflow-hidden cursor-pointer group">
            <div className="h-1.5 bg-amber-400"></div>
            <div className="p-6 flex flex-col h-[calc(100%-6px)]">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-display text-xl font-bold text-white mb-2">Not sure which course?</h3>
              <p className="text-brand-200 text-sm leading-relaxed font-body mb-6 flex-1">
                Come for a free 1-hour demo class. We&apos;ll assess your child&apos;s current level, explain all course options, and recommend the right program — at zero cost, zero pressure.
              </p>
              <div className="space-y-3">
                <button onClick={(e) => { e.stopPropagation(); openWhatsAppModal("Hi! I want to book a free demo class to choose the right course"); }}
                  className="flex items-center justify-center gap-2 w-full bg-amber-400 hover:bg-amber-500 text-white font-bold py-3 rounded-xl text-sm transition-all font-display">
                  Book Free Demo Class
                </button>
                <button onClick={(e) => { e.stopPropagation(); openCallModal(); }}
                  className="flex items-center justify-center gap-2 w-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold py-3 rounded-xl text-sm transition-all font-body">
                  Call Now
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoursesGrid;
