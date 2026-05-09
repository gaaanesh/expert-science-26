'use client';
import React from 'react';
import { openWhatsAppModal, openCallModal } from '@/app/components/Layout/WhatsAppModal';

const FinalCTA = () => {
  return (
    <section id="cta" className="py-20 md:py-28 bg-brand-700 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5" fill="white" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Urgency badge */}
        <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 rounded-full px-4 py-2 text-sm text-red-200 font-medium mb-6 font-body">
          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse flex-shrink-0"></span>
          Only 4–6 seats remaining for June 2026 batch
        </div>

        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Ready to see what your child<br />
          <em className="text-[#00ffa6] not-italic">can actually achieve?</em>
        </h2>

        <p className="text-brand-200 text-lg font-body mb-10 max-w-2xl mx-auto leading-relaxed">
          Book a free 1-hour demo class at either centre. No fees. No commitment. No pressure. Just come, sit in a class, meet the teacher, and decide for yourself.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <button onClick={() => openWhatsAppModal("Hi! I want to book a free demo class for my child at Expert Science Academy. Please confirm a slot.")}
            className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-200 text-gray-900 font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-lg hover:-translate-y-0.5 font-display">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            Book Free Demo <span className='hidden sm:inline'>on WhatsApp</span>
          </button>
          <button onClick={openCallModal}
            className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/20 border border-white/25 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all font-body">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
            Call Now
          </button>
        </div>

        {/* Reassurance row */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-brand-200 font-body">
          <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg> 100% Free — No hidden charges</span>
          <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg> No commitment to join</span>
          <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg> Both Asalpha &amp; Ghatkopar available</span>
          <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg> Respond within 30 minutes</span>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
