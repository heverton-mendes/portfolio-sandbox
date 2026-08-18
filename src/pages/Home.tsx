import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { SkillSection } from '../components/sections/SkillSection';
import { Experience } from '../components/sections/Experience';
import { Projects } from '../components/sections/Projects';
import { UsesSection } from '../components/sections/UsesSection';
import { ContactMe } from '../components/sections/ContactMe';

export default function Home() {
  return (
    <main className="pt-20">
      <HeroSection />
      <SkillSection />
      <Experience />
      <Projects />
      <UsesSection />
      <ContactMe />
    </main>
  );
}
