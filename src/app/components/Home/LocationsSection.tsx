'use client';
import React from 'react';
import { openWhatsAppModal } from '@/app/components/Layout/WhatsAppModal';

const LocationsSection = () => {
  return (
    <section id="locations" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 mb-4 font-body">Find Us</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Two centres near you.<br />
            <span className="text-brand-700 italic">Walk in — no appointment needed.</span>
          </h2>
          <p className="text-gray-500 font-body text-lg">
            Easily reachable from Asalpha, Sakinaka, Mohili Village, Bhatwadi, and Ghatkopar West. Near Asalpha Metro Station.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Location 2: Bhatwadi Ghatkopar */}
          <div className="reveal bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-44 bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center relative">
              <div className="text-center">
                <span className="text-5xl block mb-2">📍</span>
                <p className="text-amber-700 font-semibold text-sm font-body">Bhatwadi – Ghatkopar West</p>
                <p className="text-amber-600 text-xs font-body">Near Shamanand School</p>
              </div>
              <a href="https://maps.app.goo.gl/scpsZdfXZvEVJ1fb6"
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-3 right-3 bg-amber-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-amber-700 transition-colors font-body">
                Open in Maps ↗
              </a>
            </div>
            <div className="p-6">
              <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 text-xs font-bold px-3 py-1 rounded-full border border-amber-200 font-body mb-4">📍 Ghatkopar Branch · Since 2003</div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-2">Bhatwadi, Ghatkopar West</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-body mb-4">
                2nd Floor, Wagheshwari Darshan Building,<br />
                Opp. Shamanand School, Bhatwadi,<br />
                Ghatkopar West, Mumbai
              </p>
              <div className="space-y-2 mb-5">
                <div className="flex items-center gap-2">
                  <span className="text-base">🏫</span>
                  <span className="text-sm text-gray-600 font-body">Opp. Shamanand School, Bhatwadi</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-base">⏰</span>
                  <span className="text-sm text-gray-600 font-body">Mon–Sun: 8:00 AM – 9:30 PM</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+919967439378"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-700 text-white rounded-xl text-sm font-semibold hover:bg-brand-800 transition-colors font-body flex-1">
                  📞 9967439378
                </a>
                <button onClick={() => openWhatsAppModal("Hi! I am near Ghatkopar and want to enquire about classes")}
                  className="flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-500 text-white rounded-xl text-sm font-semibold hover:bg-emerald-600 transition-colors font-body flex-1">
                  💬 WhatsApp
                </button>
              </div>
            </div>
          </div>

          {/* Location 1: Asalpha */}
          <div className="reveal bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
            {/* Map placeholder */}
            <div className="h-44 bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center relative">
              <div className="text-center">
                <span className="text-5xl block mb-2">📍</span>
                <p className="text-brand-700 font-semibold text-sm font-body">Asalpha – Pereirawadi</p>
                <p className="text-brand-500 text-xs font-body">Near Asalpha Metro Station</p>
              </div>
              <a href="https://maps.app.goo.gl/yG6p7ii9CAxkjVEb9"
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-3 right-3 bg-brand-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-brand-800 transition-colors font-body">
                Open in Maps ↗
              </a>
            </div>
            <div className="p-6">
              <div className="inline-flex items-center gap-1.5 bg-brand-50 text-brand-700 text-xs font-bold px-3 py-1 rounded-full border border-brand-200 font-body mb-4">📍 Pereirawadi, Sakinaka Branch</div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-2">Asalpha – Pereirawadi</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-body mb-4">
                Opp. All India School, Beside St. Malankara School,<br />
                Mohili Village, Asalpha,<br />
                Ghatkopar West, Mumbai – 400 072
              </p>
              <div className="space-y-2 mb-5">
                <div className="flex items-center gap-2">
                  <span className="text-base">🚇</span>
                  <span className="text-sm text-gray-600 font-body">5 min walk from Asalpha Metro Station</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-base">⏰</span>
                  <span className="text-sm text-gray-600 font-body">Mon–Sun: 8:00 AM – 9:30 PM</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+917219235357"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-700 text-white rounded-xl text-sm font-semibold hover:bg-brand-800 transition-colors font-body flex-1">
                  📞 7219235357
                </a>
                <button onClick={() => openWhatsAppModal("Hi! I am near Asalpha and want to enquire about classes")}
                  className="flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-500 text-white rounded-xl text-sm font-semibold hover:bg-emerald-600 transition-colors font-body flex-1">
                  💬 WhatsApp
                </button>
              </div>
            </div>
          </div>



        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">

          {/* Location 3: Kopar Khairane, Navi Mumbai */}
          <div className="reveal bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-44 bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center relative">
              <div className="text-center">
                <span className="text-5xl block mb-2">📍</span>
                <p className="text-amber-700 font-semibold text-sm font-body">Kopar Khairane, Navi Mumbai</p>
                <p className="text-amber-600 text-xs font-body">Near Railway Station</p>
              </div>

            </div>

          </div>

          {/* Location 1: Asalpha */}
          <div className="reveal bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
            {/* Map placeholder */}
            <div className="h-44 bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center relative">
              <div className="text-center">
                <span className="text-5xl block mb-2">📍</span>
                <p className="text-brand-700 font-semibold text-sm font-body">Powai - Chandivali</p>
                <p className="text-brand-500 text-xs font-body">Near SM Shetty High School</p>
              </div>

            </div>

          </div>



        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
