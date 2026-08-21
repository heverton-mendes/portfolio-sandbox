import React from 'react';
import { featuredProjects } from '../../data/projects';
import type { ProjectData } from '../../data/projects';
import { SectionTitle } from '../ui/SectionTitle';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useI18n } from '../../context/I18nContext';

export function Projects() {
  const { language } = useI18n();

  return (
    <section className="container-max mt-8 mb-8"> 
      <div className="mb-1">
        <SectionTitle>{language === 'en' ? 'My Projects' : 'Meus Projetos'}</SectionTitle>
      </div>
      <div className="flex flex-col gap-6">
        {featuredProjects.map((project, idx) => (
          <ProjectCard key={idx} project={project} language={language} />
        ))}
      </div>
      <div className="mt-8 flex justify-end">
        <Link 
          to="/projects"
          className="inline-flex items-center gap-2 text-zinc-400 px-4 py-2 text-sm font-ui hover:text-white transition-colors underline decoration-zinc-800 underline-offset-4"
        >
          {language === 'en' ? 'View all projects →' : 'Ver todos os projetos →'}
        </Link>
      </div>
    </section>
  );
}

export function ProjectCard({ project, language }: { project: ProjectData, language: 'en' | 'pt' }) {
  const name = typeof project.name === 'string' ? project.name : project.name[language];
  const desc = typeof project.desc === 'string' ? project.desc : project.desc[language];

  return (
    <div className="group flex flex-col md:flex-row items-start gap-6 p-5 border border-dashed border-zinc-800 rounded-xl bg-transparent hover:border-zinc-600 hover:bg-[#131315] transition-all duration-300">
      
      <div className="w-full md:w-[40%] shrink-0">
        <div className="relative rounded-lg overflow-hidden border border-zinc-800 aspect-[16/10] bg-[#111111]">
          <img 
            src={project.banner || 'https://via.placeholder.com/600x400?text=Project+Image'} 
            alt={name} 
            className="w-full h-full object-cover grayscale-[0.8] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
            onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=Project+Image'; }}
          />
        </div>
      </div>
      
      <div className="flex-1 flex flex-col justify-between py-1 w-full">
        <div>
          <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
            
            <h3 className="text-[17px] font-semibold text-zinc-200 flex items-center gap-2 font-ui group-hover:text-white transition-colors">
              {name}
            </h3>
            
            <div className="flex gap-2">
              {project.live && project.live.trim() !== '' && (
                <a href={project.live} target="_blank" rel="noreferrer" className="shadow-composite items-center flex font-medium justify-center bg-[rgb(26,_27,_28)] text-zinc-300 hover:text-white text-[12px] gap-[6px] pt-1.5 pr-2.5 pb-1.5 pl-2.5 rounded-md font-ui transition-all hover:bg-[#27272a]">
                  <FaExternalLinkAlt className="text-[11px]" /> {language === 'en' ? 'Case Study' : 'Ler Case'}
                </a>
              )}
              
              {project.github && project.github.trim() !== '' && (
                <a href={project.github} target="_blank" rel="noreferrer" className="shadow-composite items-center flex font-medium justify-center bg-[rgb(26,_27,_28)] text-zinc-300 hover:text-white text-[12px] gap-[6px] pt-1.5 pr-2.5 pb-1.5 pl-2.5 rounded-md font-ui transition-all hover:bg-[#27272a]">
                  <FaGithub className="text-[13px]" /> GitHub
                </a>
              )}
            </div>
          </div>
          
          <p className="text-[13.5px] text-zinc-400 leading-relaxed mb-4 whitespace-pre-line font-ui group-hover:text-zinc-300 transition-colors">
            {desc}
          </p>
        </div>
        
        <div>
          <p className="text-[12px] font-medium text-zinc-500 mb-2 font-ui">
            {language === 'en' ? 'Technologies Used:' : 'Tecnologias utilizadas:'}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span key={i} className="text-[11px] font-medium text-zinc-300 bg-[rgb(26,_27,_28)] shadow-sm px-2 py-1 rounded-[4px] border border-zinc-800/50 font-ui group-hover:border-zinc-700 transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}