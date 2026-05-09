'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const TestimonialsSection = () => {
  const [activeTab, setActiveTab] = useState<'parents' | 'students'>('parents');

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 mb-4 font-body">What They Say</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Heard from parents and students<br />
            <span className="text-brand-700 italic">in Asalpha &amp; Ghatkopar.</span>
          </h2>
          <p className="text-gray-500 text-lg font-body">Short, honest, believable — from people in your neighbourhood.</p>
        </div>

        {/* Tabs: Parents / Students */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white border border-gray-200 rounded-xl p-1">
            <button 
              onClick={() => setActiveTab('parents')} 
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all font-body ${activeTab === 'parents' ? 'bg-brand-700 text-white' : 'text-gray-600 hover:text-gray-900'}`}>
              👨👩👧 Parents
            </button>
            <button 
              onClick={() => setActiveTab('students')} 
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all font-body ${activeTab === 'students' ? 'bg-brand-700 text-white' : 'text-gray-600 hover:text-gray-900'}`}>
              🎓 Students
            </button>
          </div>
        </div>

        {/* Parent testimonials */}
        {activeTab === 'parents' && (
          <div id="testimonials-parents" className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-[fadeUp_0.4s_ease-out]">
            <div className="reveal bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow relative">
              <div className="absolute top-5 right-6 font-display text-6xl text-gray-100 leading-none select-none">&quot;</div>
              <div className="flex gap-1 mb-4">
                <span className="text-amber-400 text-sm">★★★★★</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed font-body mb-5 italic">
                &quot;My daughter was struggling in 11th Physics — scoring 40% in term tests. After joining Expert Science, her weekly test scores went from 40% to 74% in just three months. What really convinced us was that the teacher actually calls us if she misses a class. That doesn&apos;t happen elsewhere.&quot;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center font-bold text-brand-700 text-sm font-display overflow-hidden">
                  <Image src="/images/testimonial/sunita-mehta.png" alt="Sunita Mehta" width={40} height={40} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm font-body">Sunita Mehta</div>
                  <div className="text-xs text-gray-400 font-body">Parent of Class 11 student · Asalpha</div>
                </div>
              </div>
            </div>

            <div className="reveal bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow relative">
              <div className="absolute top-5 right-6 font-display text-6xl text-gray-100 leading-none select-none">&quot;</div>
              <div className="flex gap-1 mb-4">
                <span className="text-amber-400 text-sm">★★★★★</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed font-body mb-5 italic">
                &quot;We tried a big coaching in Thane first. Our son got completely lost — 80 students, no individual attention. We shifted to Expert Science and the difference was immediate. The teacher messages us every Sunday with the test score. We finally feel like we&apos;re in the loop.&quot;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center font-bold text-amber-700 text-sm font-display overflow-hidden">
                  <Image src="/images/testimonial/vinod-patil.png" alt="Vinod Patil" width={40} height={40} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm font-body">Vinod Patil</div>
                  <div className="text-xs text-gray-400 font-body">Parent of JEE student · Sakinaka</div>
                </div>
              </div>
            </div>

            <div className="reveal bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow relative">
              <div className="absolute top-5 right-6 font-display text-6xl text-gray-100 leading-none select-none">&quot;</div>
              <div className="flex gap-1 mb-4">
                <span className="text-amber-400 text-sm">★★★★★</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed font-body mb-5 italic">
                &quot;Special team for NEET — they assure your child&apos;s dream of becoming a doctor is taken seriously. My daughter wanted to be a doctor since Class 7. We chose Expert Science for NEET prep and she cleared in her first attempt. Grateful doesn&apos;t cover it.&quot;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-700 text-sm font-display overflow-hidden">
                  <Image src="/images/testimonial/ashwini-pawar.png" alt="Dr. Ashwini Pawar" width={40} height={40} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm font-body">Dr. Ashwini Pawar</div>
                  <div className="text-xs text-gray-400 font-body">Obstetrician · Parent of NEET student</div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Student testimonials */}
        {activeTab === 'students' && (
          <div id="testimonials-students" className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-[fadeUp_0.4s_ease-out]">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow relative">
              <div className="absolute top-5 right-6 font-display text-6xl text-gray-100 leading-none select-none">&quot;</div>
              <div className="flex gap-1 mb-4"><span className="text-amber-400 text-sm">★★★★★</span></div>
              <p className="text-gray-600 text-sm leading-relaxed font-body mb-5 italic">&quot;I was at 52% before joining. JEE felt impossible. The small batch meant sir could actually see what I was doing wrong every week — not just grade my paper. I cleared JEE Mains with 87% in 12th boards. I still can&apos;t believe it.&quot;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center font-bold text-brand-700 text-sm font-display overflow-hidden">
                  <Image src="/images/testimonial/rohan-kulkarni.png" alt="Rohan Kulkarni" width={40} height={40} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm font-body">Rohan Kulkarni</div>
                  <div className="text-xs text-gray-400 font-body">JEE 2024 · Ghatkopar West</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow relative">
              <div className="absolute top-5 right-6 font-display text-6xl text-gray-100 leading-none select-none">&quot;</div>
              <div className="flex gap-1 mb-4"><span className="text-amber-400 text-sm">★★★★★</span></div>
              <p className="text-gray-600 text-sm leading-relaxed font-body mb-5 italic">&quot;एक्सपर्ट सायन्सने मला AI इंजिनिअरिंगची दिशा दाखवली! Weekly tests used to scare me at first. Then I realised they were showing me exactly where I was wasting marks. Now studying at VJTI for AI Engineering.&quot;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-700 text-sm font-display overflow-hidden">
                  <Image src="/images/students/vaishnavi-student.png" alt="Vaishnavi Kadam" width={40} height={40} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm font-body">Vaishnavi Kadam</div>
                  <div className="text-xs text-gray-400 font-body">99.11% · AI Engineer · Ex-Student</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow relative">
              <div className="absolute top-5 right-6 font-display text-6xl text-gray-100 leading-none select-none">&quot;</div>
              <div className="flex gap-1 mb-4"><span className="text-amber-400 text-sm">★★★★★</span></div>
              <p className="text-gray-600 text-sm leading-relaxed font-body mb-5 italic">&quot;The teachers made us think critically — not just memorise. WhatsApp doubt support saved me at least 5 times before exams. I became a doctor because of the foundation built here. उत्तम मार्गदर्शन त्याच्यामुळे माझे स्वप्न साकार झाले.&quot;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center font-bold text-purple-700 text-sm font-display overflow-hidden">
                  <Image src="/images/testimonial/prashant-sonawane.png" alt="Dr. Prashant Sonawane" width={40} height={40} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm font-body">Dr. Prashant Sonawane</div>
                  <div className="text-xs text-gray-400 font-body">Doctor · NEET · Ex-Student</div>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default TestimonialsSection;
