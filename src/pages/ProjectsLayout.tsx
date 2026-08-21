import React from 'react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { allProjects } from '../data/projects';
import { ProjectCard } from '../components/sections/Projects';
import { useI18n } from '../context/I18nContext';

export default function ProjectsLayout() {
  const { language } = useI18n();

  return (
    <main className="container-max py-20 min-h-screen">
      <div className="mb-8">
        <SectionTitle>/projects</SectionTitle>
        {/* Aviso de Confidencialidade */}
        <p className="text-[11.5px] text-zinc-500 italic mt-2 font-ui tracking-wide">
          {language === 'en' 
            ? 'Diagrams below are reconstructed for confidentiality — not original product screens.' 
            : 'Os diagramas abaixo foram reconstruídos por confidencialidade — não são telas originais do produto.'}
        </p>
      </div>
      
      <div className="flex flex-col gap-6">
        {allProjects.map((project, idx) => (
          <ProjectCard key={idx} project={project} language={language} />
        ))}
      </div>
    </main>
  );
}