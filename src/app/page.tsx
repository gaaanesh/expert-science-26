import React from 'react'
import { Metadata } from 'next'

// New Components
import HeroNew from '@/app/components/Home/HeroNew'
import StatsBar from '@/app/components/Home/StatsBar'
import ProblemSection from '@/app/components/Home/ProblemSection'
import CoursesGrid from '@/app/components/Home/CoursesGrid'
import ResultsSection from '@/app/components/Home/ResultsSection'
import WhyUsSection from '@/app/components/Home/WhyUsSection'
import TestimonialsSection from '@/app/components/Home/TestimonialsSection'
import LocationsSection from '@/app/components/Home/LocationsSection'
import FinalCTA from '@/app/components/Home/FinalCTA'
import FloatingCTAs from '@/app/components/Home/FloatingCTAs'

export const metadata: Metadata = {
  title: 'Expert Science Academy',
}

export default function Home() {
  return (
    <main>
      <HeroNew />
      <StatsBar />
      <ProblemSection />
      <CoursesGrid />
      <ResultsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <LocationsSection />
      <FinalCTA />
      <FloatingCTAs />
    </main>
  )
}
