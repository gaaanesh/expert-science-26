'use client';
import React from 'react';
import { openWhatsAppModal } from '@/app/components/Layout/WhatsAppModal';

const TopAnnouncementBar = () => {
  return (
    <div className="bg-brand-700 text-white text-sm py-2 md:px-4 px-4 text-center font-body">
      <div className="inline-flex items-center gap-2 flex-wrap justify-center">
        <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
        <strong>Admissions Open <span className='hidden sm:inline'>— </span>2025–27 <span className='hidden sm:inline'>Batch</span></strong>
        <span className="text-brand-200 hidden sm:inline">·</span>
        <span className="hidden sm:inline text-brand-100">Limited seats in 11th Science, JEE &amp; NEET batches</span>
        <button
          onClick={() => openWhatsAppModal("Hi! I want to enquire about admissions 2025-27")}
          className="ml-2 underline font-semibold hover:text-amber-300 transition-colors"
        >
          Book Free Demo →
        </button>
      </div>
    </div>
  );
};

export default TopAnnouncementBar;
