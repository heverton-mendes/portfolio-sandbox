import React, { useState } from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { useI18n } from '../../context/I18nContext';
import { FiExternalLink, FiChevronDown } from 'react-icons/fi';

interface ExperienceEntry {
  company: string;
  role: string;
  dates: string;
  status: 'present' | 'past';
  dotColor: 'green' | 'red';
  logoUrl?: string;
  url?: string; // Nova propriedade adicionada para receber o link do site
  description: {
    pt: string[];
    en: string[];
  };
}

export function Experience() {
  const { language } = useI18n();
  
  // Estado movido para o componente Pai: controla qual card está aberto pelo Índice.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    // Se clicar no que já está aberto, ele fecha. Se clicar em outro, abre o novo e fecha o antigo.
    setOpenIndex(openIndex === index ? null : index);
  };

  const experiences: ExperienceEntry[] = [
    {
      company: 'Banco Itaú',
      role: 'Product Designer',
      dates: 'Aug 2022 - Mar 2026',
      status: 'past',
      dotColor: 'red',
      logoUrl: '/images/experience/itau.png.jpg',
      url: 'https://www.itau.com.br/', // Link adicionado
      description: {
        pt: [
          "Atuação em produtos digitais focados em Pagamentos, incluindo Hub de Pagamentos, Open Finance e Meus Comprovantes PF.",
          "Trabalho cross-funcional (Produto, Engenharia, Dados e Negócio) do discovery ao delivery.",
          "Gestão de Design System: criação, documentação e evolução da Team Library para reuso de componentes entre squads.",
          "Evolução da satisfação do usuário (Likert) de 33% para 59% em um ecossistema com 10M+ de acessos mensais.",
          "Reconhecido com o PRAD 2024 (Prêmio de Alto Rendimento)."
        ],
        en: [
          "Worked on digital payment products, evolving the Payment Hub, Open Finance, and Personal Receipts.",
          "Cross-functional collaboration with Product, Engineering, Data, and Business from discovery to delivery.",
          "Design System management: creation, documentation, and evolution of the Team Library for cross-squad reuse.",
          "Increased user satisfaction (Likert) from 33% to 59% in an ecosystem with 10M+ monthly accesses.",
          "Awarded the PRAD 2024 (High Performance Award)."
        ]
      }
    },
    {
      company: 'Méliuz',
      role: 'CRM Intern',
      dates: 'Aug 2021 - Jul 2022',
      status: 'past',
      dotColor: 'red',
      logoUrl: '/images/experience/meliuz.png.jpg',
      url: 'https://www.meliuz.com.br/', // Link adicionado
      description: {
        pt: [
          "Construção, operação de campanhas de CRM e planejamento de réguas de comunicação digital.",
          "Execução de testes A/B e segmentação de usuários para otimização de campanhas.",
          "Análise de indicadores operacionais e geração de insights para aprimorar a experiência do usuário."
        ],
        en: [
          "Built and operated CRM campaigns alongside the planning of digital communication flows.",
          "Executed A/B tests and detailed user segmentation for campaign optimization.",
          "Analyzed operational metrics and generated insights to continuously improve the user experience."
        ]
      }
    }
  ];

  return (
    <section className="container-max mb-40"> 
      <div className="mb-1">
        <SectionTitle>{language === 'en' ? 'Work Experience' : 'Experiência'}</SectionTitle>
      </div>
      <div className="border border-dashed border-zinc-800 p-5 rounded-xl">
        <div className="space-y-0 relative">
          {experiences.map((exp, idx) => (
            <ExperienceCard 
              key={idx} 
              exp={exp} 
              isLast={idx === experiences.length - 1} 
              language={language}
              isOpen={openIndex === idx}
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp, isLast, language, isOpen, onToggle }: { exp: ExperienceEntry, isLast: boolean, language: 'en' | 'pt', isOpen: boolean, onToggle: () => void }) {
  const descriptionList = exp.description[language];

  return (
    <div className="flex gap-4 md:gap-5 relative group">
      {!isLast && (
        <div className="absolute left-[4px] top-[26px] bottom-[-16px] w-[1px] border-l border-dashed border-zinc-700" />
      )}
      
      <div className="relative z-10 flex flex-col items-center mt-[18px]">
        {exp.dotColor === 'green' ? (
          <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
        ) : (
          <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444] shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
        )}
      </div>
      
      <div className={`flex-1 ${!isLast ? 'pb-6 md:pb-8' : 'pb-2'}`}>
        
        <div 
          className="flex flex-col md:flex-row md:items-start justify-between gap-2 md:gap-4 cursor-pointer select-none group-hover:opacity-80 transition-opacity"
          onClick={onToggle}
        >
          <div className="flex items-start gap-4">
            {exp.logoUrl ? (
              <img src={exp.logoUrl} alt={exp.company} className="w-[42px] h-[42px] rounded-lg bg-[#151515] object-contain p-0.5" />
            ) : (
              <div className="w-[42px] h-[42px] rounded-lg bg-[#151515] flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">{exp.company[0]}</span>
              </div>
            )}
            
            <div className="space-y-0.5 mt-[-2px]">
              <div className="flex items-center flex-wrap gap-2 md:gap-3">
                <h4 className="text-[16px] font-semibold text-zinc-100 flex items-center gap-1.5 font-ui">
                  {exp.company}
                  
                  {/* Ícone com Link e StopPropagation para não conflitar com o Acordeão */}
                  {exp.url && (
                    <a 
                      href={exp.url} 
                      target="_blank" 
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()} 
                      className="inline-flex hover:text-white transition-colors p-1 -m-1"
                      title={`Visitar site: ${exp.company}`}
                    >
                      <FiExternalLink className="text-zinc-500 hover:text-zinc-300 w-3.5 h-3.5 transition-colors" />
                    </a>
                  )}
                </h4>
                
                {exp.dotColor === 'green' ? (
                  <span className="text-[10px] px-1.5 py-0.5 rounded border-none bg-[#091d11] text-[#02ff67] font-medium flex items-center gap-1.5 uppercase tracking-wide">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#02ff67]" />
                    {language === 'en' ? 'Active' : 'Atual'}
                  </span>
                ) : (
                  <span className="text-[10px] px-1.5 py-0.5 rounded border-none bg-[#1d0909] text-[#ff3333] font-medium flex items-center gap-1.5 uppercase tracking-wide">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff3333]" />
                    {language === 'en' ? 'Done' : 'Concluído'}
                  </span>
                )}
              </div>
              <p className="text-[13.5px] text-zinc-400 font-ui">{exp.role}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 ml-[58px] md:ml-0 mt-1 md:mt-0">
            <span className="text-[12px] text-zinc-400 font-mono">{exp.dates}</span>
            <FiChevronDown 
              className={`text-zinc-500 w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
            />
          </div>
        </div>

        <div 
          className={`grid transition-all duration-300 ease-in-out ${
            isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
          }`}
        >
          <div className="overflow-hidden">
            <ul className="ml-[58px] list-disc list-inside space-y-2 text-[13px] text-[#999999] leading-relaxed marker:text-[#555555] font-ui">
              {descriptionList.map((item, i) => (
                <li key={i}>
                  <span className="relative -left-2">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
}