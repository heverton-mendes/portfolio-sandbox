import React from 'react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { allProjects } from '../data/projects';
import { ProjectCard } from '../components/sections/Projects';
import { useI18n } from '../context/I18nContext';

export default function ProjectsLayout() {
  const { language } = useI18n();

  return (
    <main className="container-max py-20 min-h-screen">
      <SectionTitle>/projects</SectionTitle>
      <div className="flex flex-col gap-6 mt-8">
        {allProjects.map((project, idx) => (
          <ProjectCard key={idx} project={project} language={language} />
        ))}
      </div>
    </main>
  );
}
