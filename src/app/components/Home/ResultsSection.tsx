import React from 'react';
import Image from 'next/image';

const ResultsSection = () => {
  return (
    <section id="results" className="py-20 md:py-28 bg-brand-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-white mb-4 font-body">Student Results</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Average students. Real scores. No filter.
          </h2>
          <p className="text-gray-400 text-lg font-body">
            These students came with low marks and left with scores they&apos;re proud of. Not because of extraordinary talent — because of consistent, personal coaching.
          </p>
        </div>

        {/* Results grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

          {/* Result card template */}
          <div className="reveal bg-[#d9e3ff] border border-[#d9e3ff] rounded-2xl p-6 hover:border-gray-700 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-black font-body">Aaditya Awate</span>
              <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-800 font-body">+29%</span>
            </div>
            <p className="text-xs text-gray-800 font-body mb-5">Class 11 PCM · Asalpha · Physics &amp; Chemistry</p>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1.5 font-body"><span className="text-red-400 font-semibold">Before joining</span><span className="text-red-400 font-bold">52%</span></div>
                <div className="h-3 bg-[#b3bdd8] rounded-full overflow-hidden"><div className="h-full bg-red-500/60 rounded-full" style={{ width: '52%' }}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1.5 font-body"><span className="text-emerald-700 font-semibold">After 6 months</span><span className="text-emerald-700 font-bold">81%</span></div>
                <div className="h-3 bg-[#b3bdd8] rounded-full overflow-hidden"><div className="h-full bg-emerald-500 rounded-full" style={{ width: '81%' }}></div></div>
              </div>
            </div>
            <p className="text-xs text-gray-500 font-body mt-4 italic">&quot;The small batch meant sir could actually see where I was going wrong every week.&quot;</p>
          </div>

          <div className="reveal bg-[#d9e3ff] border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-black font-body">Tanay Satawase</span>
              <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-800 font-body">+31%</span>
            </div>
            <p className="text-xs text-gray-800 font-body mb-5">Class 12 PCM · Bhatwadi, Ghatkopar West · Physics &amp; Maths</p>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1.5 font-body"><span className="text-red-400 font-semibold">Before joining</span><span className="text-red-400 font-bold">48%</span></div>
                <div className="h-3 bg-[#b3bdd8] rounded-full overflow-hidden"><div className="h-full bg-red-500/60 rounded-full" style={{ width: '48%' }}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1.5 font-body"><span className="text-emerald-700 font-semibold">After 8 months</span><span className="text-emerald-700 font-bold">79%</span></div>
                <div className="h-3 bg-[#b3bdd8] rounded-full overflow-hidden"><div className="h-full bg-emerald-500 rounded-full" style={{ width: '79%' }}></div></div>
              </div>
            </div>
            <p className="text-xs text-gray-500 font-body mt-4 italic">&quot;Weekly tests scared me at first. But they showed me exactly where I needed to improve.&quot;</p>
          </div>

          <div className="reveal bg-[#d9e3ff] border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-black font-body">Shukra Patil</span>
              <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-800 font-body">+33%</span>
            </div>
            <p className="text-xs text-gray-800 font-body mb-5">JEE Aspirant · Pereira Wadi · PCM</p>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1.5 font-body"><span className="text-red-400 font-semibold">Before joining</span><span className="text-red-400 font-bold">55%</span></div>
                <div className="h-3 bg-[#b3bdd8] rounded-full overflow-hidden"><div className="h-full bg-red-500/60 rounded-full" style={{ width: '55%' }}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1.5 font-body"><span className="text-emerald-700 font-semibold">After 10 months</span><span className="text-emerald-700 font-bold">88%</span></div>
                <div className="h-3 bg-[#b3bdd8] rounded-full overflow-hidden"><div className="h-full bg-emerald-500 rounded-full" style={{ width: '88%' }}></div></div>
              </div>
            </div>
            <p className="text-xs text-gray-500 font-body mt-4 italic">&quot;I thought JEE was only for students from big institutes. My first mock at Expert Science proved me wrong.&quot;</p>
          </div>

        </div>

        {/* Top toppers row */}
        <div className="reveal bg-[#d9e3ff] border border-[#d9e3ff] rounded-2xl p-6">
          <h3 className="font-display text-black font-bold text-lg mb-6 text-center">🏆 Previous Year Entrance Toppers</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="text-center p-3 bg-white rounded-xl">
              <div className="w-20 h-20 rounded-full bg-brand-700 flex items-center justify-center text-sm font-bold text-white mx-auto mb-2 font-display overflow-hidden">
                <Image src="/images/students/vaishnavi-student.png" alt="Vaishnavi K" className="w-full h-full object-cover" width={80} height={80} />
              </div>
              <div className="font-display text-xl font-bold text-amber-400">99.11%</div>
              <div className="text-xs text-gray-500 font-body mt-0.5">Vaishnavi K. · PCM</div>
            </div>
            <div className="text-center p-3 bg-white rounded-xl">
              <div className="w-20 h-20 rounded-full bg-brand-700 flex items-center justify-center text-sm font-bold text-white mx-auto mb-2 font-display overflow-hidden">
                <Image src="/images/students/samarth-student.png" alt="Samarth A" className="w-full h-full object-cover" width={80} height={80} />
              </div>
              <div className="font-display text-xl font-bold text-black">97.52%</div>
              <div className="text-xs text-gray-500 font-body mt-0.5">Samarth A. · PCM</div>
            </div>
            <div className="text-center p-3 bg-white rounded-xl">
              <div className="w-20 h-20 rounded-full bg-brand-700 flex items-center justify-center text-sm font-bold text-white mx-auto mb-2 font-display overflow-hidden">
                <Image src="/images/students/krish-student.png" alt="Krish M" className="w-full h-full object-cover" width={80} height={80} />
              </div>
              <div className="font-display text-xl font-bold text-black">97.11%</div>
              <div className="text-xs text-gray-500 font-body mt-0.5">Krish M. · PCM</div>
            </div>
            <div className="text-center p-3 bg-white rounded-xl">
              <div className="w-20 h-20 rounded-full bg-brand-700 flex items-center justify-center text-sm font-bold text-white mx-auto mb-2 font-display overflow-hidden">
                <Image src="/images/students/pritam-student.png" alt="Pritam T" className="w-full h-full object-cover" width={80} height={80} />
              </div>
              <div className="font-display text-xl font-bold text-black">96.28%</div>
              <div className="text-xs text-gray-500 font-body mt-0.5">Pritam T. · PCM</div>
            </div>
            <div className="text-center p-3 bg-white rounded-xl">
              <div className="w-20 h-20 rounded-full bg-brand-700 flex items-center justify-center text-sm font-bold text-white mx-auto mb-2 font-display overflow-hidden">
                <Image src="/images/students/apurva-student.png" alt="Apurva B" className="w-full h-full object-cover" width={80} height={80} />
              </div>
              <div className="font-display text-xl font-bold text-black">95.22%</div>
              <div className="text-xs text-gray-500 font-body mt-0.5">Apurva B. · PCM</div>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 font-body mt-6">Results vary by student. All improvements are real and based on consistent attendance and effort.</p>
      </div>
    </section>
  );
};

export default ResultsSection;
