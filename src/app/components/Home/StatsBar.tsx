import React from 'react';

const StatsBar = () => {
  return (
    <section className="bg-brand-700 py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-600">
          <div className="px-md-6 py-6 text-center">
            <div className="font-display text-3xl font-bold text-white">23+</div>
            <div className="text-brand-200 text-sm mt-1 font-body">Years in Bhatwadi &amp; Asalpha Ghatkopar</div>
          </div>
          <div className="px-md-6 py-6 text-center">
            <div className="font-display text-3xl font-bold text-amber-300">90%+</div>
            <div className="text-brand-200 text-sm mt-1 font-body">Students show score improvement</div>
          </div>
          <div className="px-md-6 py-6 text-center">
            <div className="font-display text-2xl font-bold text-white">Small Batches</div>
            <div className="text-brand-200 text-sm mt-1 font-body">Better Results</div>
          </div>
          <div className="px-md-6 py-6 text-center">
            <div className="font-display text-3xl font-bold text-amber-300">IIT/NIT</div>
            <div className="text-brand-200 text-sm mt-1 font-body">Qualified faculty &amp; mentors</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
