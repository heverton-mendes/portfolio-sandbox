import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { SiFigma, SiMiro, SiNotion, SiJira, SiHtml5, SiTailwindcss, SiWebflow, SiWordpress, SiGit, SiGithub, SiVercel, SiGooglechat } from 'react-icons/si';
import { FaPalette, FaProjectDiagram, FaUniversalAccess, FaBrain, FaRegChartBar, FaFlask, FaUserCircle, FaCodeBranch, FaSalesforce } from 'react-icons/fa';
import { BsOpenai } from 'react-icons/bs';
import { useI18n } from '../../context/I18nContext';

export function SkillSection() {
  const { language } = useI18n();
  
  const allSkills = [
    { name: 'Product Design', icon: <FaPalette />, color: '#ffffff' },
    { name: 'UX Research', icon: <FaUserCircle />, color: '#3b82f6' },
    { name: 'Jornada do usuário', icon: <FaProjectDiagram />, color: '#f59e0b' },
    { name: 'Arquitetura de informação', icon: <FaProjectDiagram />, color: '#22c55e' },
    { name: 'Prototipação', icon: <SiFigma />, color: '#F24E1E' },
    { name: 'Testes de usabilidade', icon: <FaFlask />, color: '#ef4444' },
    { name: 'Métricas de experiência', icon: <FaRegChartBar />, color: '#a855f7' },
    { name: 'Figma', icon: <SiFigma />, color: '#F24E1E' },
    { name: 'Code Connect', icon: <SiFigma />, color: '#F24E1E' },
    { name: 'Figma MCP', icon: <SiFigma />, color: '#F24E1E' },
    { name: 'Design Systems', icon: <FaPalette />, color: '#E4405F' },
    { name: 'Auto Layout', icon: <SiFigma />, color: '#F24E1E' },
    { name: 'Prototipação de alta fidelidade', icon: <SiFigma />, color: '#F24E1E' },
    { name: 'Acessibilidade', icon: <FaUniversalAccess />, color: '#005A9C' },
    { name: 'Handoff', icon: <FaCodeBranch />, color: '#10b981' },
    { name: 'QA Design com IA', icon: <FaBrain />, color: '#a855f7' },
    { name: 'CRM', icon: <FaSalesforce />, color: '#00a1e0' },
    { name: 'Testes A/B', icon: <FaFlask />, color: '#ec4899' },
    { name: 'Análise de Dados', icon: <FaRegChartBar />, color: '#f2c811' },
    { name: 'Agile/Scrum/Kanban', icon: <SiJira />, color: '#0052CC' },
    { name: 'Miro', icon: <SiMiro />, color: '#050038' },
    { name: 'Mural', icon: <FaPalette />, color: '#ff005b' },
    { name: 'Notion', icon: <SiNotion />, color: '#ffffff' },
    { name: 'Salesforce', icon: <FaSalesforce />, color: '#00a1e0' },
    { name: 'Dovetail', icon: <FaUserCircle />, color: '#000000' },
    { name: 'UserTesting', icon: <FaUserCircle />, color: '#1a1a1a' },
    { name: 'Maze', icon: <FaFlask />, color: '#000000' },
    { name: 'Jira', icon: <SiJira />, color: '#0052CC' },
    { name: 'Power BI', icon: <FaRegChartBar />, color: '#f2c811' },
    { name: 'HTML', icon: <SiHtml5 />, color: '#E34F26' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
    { name: 'Webflow', icon: <SiWebflow />, color: '#4353FF' },
    { name: 'WordPress', icon: <SiWordpress />, color: '#21759b' },
    { name: 'Git', icon: <SiGit />, color: '#F05032' },
    { name: 'GitHub', icon: <SiGithub />, color: '#ffffff' },
    { name: 'Vercel', icon: <SiVercel />, color: '#ffffff' },
    { name: 'VS Code', icon: <FaCodeBranch />, color: '#007ACC' },
    { name: 'Cursor', icon: <FaCodeBranch />, color: '#ffffff' },
    { name: 'IA Generativa', icon: <FaBrain />, color: '#a855f7' },
    { name: 'ChatGPT', icon: <BsOpenai />, color: '#10a37f' },
    { name: 'Claude', icon: <FaBrain />, color: '#d97757' },
    { name: 'Gemini', icon: <SiGooglechat />, color: '#4285F4' },
    { name: 'Midjourney', icon: <FaPalette />, color: '#ffffff' },
    { name: 'Figma AI', icon: <SiFigma />, color: '#F24E1E' },
  ];

  // Ajustado para 22 (metade de 44 itens) para equilibrar as duas linhas
  const skills1 = allSkills.slice(0, 22);
  const skills2 = allSkills.slice(22);

  // Duplicate for seamless infinite scroll
  const marqueeItems1 = [...skills1, ...skills1];
  const marqueeItems2 = [...skills2, ...skills2];

  return (
    <section className="mb-16">
      <div className="container-max mb-1">
        <SectionTitle>{language === 'en' ? 'My Skills' : 'Minhas Habilidades'}</SectionTitle>
      </div>
      
      <div className="container-max relative overflow-hidden hover-pause group flex flex-col gap-4">
        {/* Left/Right fading edges relative to the container */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />
        
        {/* Row 1: Left to Right (or Right to Left) */}
        <div className="flex animate-marquee gap-4 w-max">
          {marqueeItems1.map((skill, i) => (
            <div 
              key={i} 
              className="flex items-center gap-2 px-3 py-1.5 rounded-[6px] border border-[#27272a] bg-[#111111]/30 hover:bg-[#18181b] transition-colors cursor-default whitespace-nowrap text-zinc-300 hover:text-white"
            >
              <span className="text-sm" style={{ color: skill.color }}>{skill.icon}</span>
              <span className="text-sm font-medium font-ui">{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Row 2: Reverse Direction */}
        <div className="flex animate-marquee-reverse gap-4 w-max">
          {marqueeItems2.map((skill, i) => (
            <div 
              key={i} 
              className="flex items-center gap-2 px-3 py-1.5 rounded-[6px] border border-[#27272a] bg-[#111111]/30 hover:bg-[#18181b] transition-colors cursor-default whitespace-nowrap text-zinc-300 hover:text-white"
            >
              <span className="text-sm" style={{ color: skill.color }}>{skill.icon}</span>
              <span className="text-sm font-medium font-ui">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}