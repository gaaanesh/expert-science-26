import React from 'react';

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Problem statement */}
          <div className="reveal">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 mb-4 font-body">The Real Problem</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Why do 10th toppers suddenly<br />
              <span className="text-red-500 italic">struggle in 11th Science?</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-body">
              Most students score 75–85% in 10th boards. Then 11th Science hits — and marks drop to 40–50%. It&apos;s not because your child isn&apos;t smart. It&apos;s because <strong className="text-gray-900">the system doesn&apos;t catch them when they fall.</strong>
            </p>

            {/* Problem list */}
            <div className="space-y-4">
              <div className="flex gap-4 items-start p-4 bg-red-50 rounded-xl border border-red-100">
                <span className="text-2xl flex-shrink-0">😰</span>
                <div>
                  <h4 className="font-display font-bold text-gray-900 mb-1">Junior college has 60–80 students per class</h4>
                  <p className="text-sm text-gray-600 font-body">Teachers can&apos;t monitor individual doubts. Students who don&apos;t understand sit silently — and fall further behind every week.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-4 bg-red-50 rounded-xl border border-red-100">
                <span className="text-2xl flex-shrink-0">📉</span>
                <div>
                  <h4 className="font-display font-bold text-gray-900 mb-1">11th syllabus is 3× harder than 10th</h4>
                  <p className="text-sm text-gray-600 font-body">Calculus, Organic Chemistry, Cell Biology — these appear for the first time. Without structured guidance, students feel lost within weeks.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-4 bg-red-50 rounded-xl border border-red-100">
                <span className="text-2xl flex-shrink-0">⏳</span>
                <div>
                  <h4 className="font-display font-bold text-gray-900 mb-1">No accountability until it&apos;s too late</h4>
                  <p className="text-sm text-gray-600 font-body">Parents only discover the problem at term exams — by then, 3 months of syllabus is already behind. Weekly tracking could have caught this in week 2.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Solution */}
          <div className="reveal">
            <div className="bg-brand-700 rounded-2xl p-8 text-white">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-300 mb-4 font-body">The Expert Science Solution</span>
              <h3 className="font-display text-2xl font-bold text-white mb-6">
                We catch every student before they fall — every single week.
              </h3>
              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-7 h-7 text-brand-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-white mb-1">Max 25 students per batch</h5>
                    <p className="text-brand-200 text-sm font-body">Every student is visible. Teachers know each student by name, track their doubts, and notice if marks drop even 5%.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-7 h-7 text-brand-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-white mb-1">Weekly tests with parent WhatsApp update</h5>
                    <p className="text-brand-200 text-sm font-body">Every Saturday test score is sent to parents. You know your child&apos;s progress before problems become crises.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-7 h-7 text-brand-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-white mb-1">Same-day doubt resolution</h5>
                    <p className="text-brand-200 text-sm font-body">Stuck at 10 PM before an exam? Our WhatsApp doubt support answers academic questions the same day — not in the next class.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-7 h-7 text-brand-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-white mb-1">23 years of local trust in Ghatkopar & Asalpha</h5>
                    <p className="text-brand-200 text-sm font-body">We know your local junior colleges, their exam patterns, and what it takes to score well in HSC boards while cracking entrance exams.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
