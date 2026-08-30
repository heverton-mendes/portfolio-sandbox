import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaGithub } from 'react-icons/fa';
import { useI18n } from '../context/I18nContext';
import { articlesData } from '../data/articles';
import { allProjects } from '../data/projects';

export default function ArticleLayout() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useI18n();
  const navigate = useNavigate();

  // Busca os dados do projeto
  const projectInfo = allProjects.find(p => p.slug === slug);
  
  // Busca o texto completo formatado
  const articleContent = slug && articlesData[slug] ? articlesData[slug][language] : null;

  // Se a pessoa digitar uma URL errada, volta pra home
  useEffect(() => {
    if (!projectInfo) {
      navigate('/');
    }
  }, [projectInfo, navigate]);

  if (!projectInfo) return null;

  const title = typeof projectInfo.name === 'string' ? projectInfo.name : projectInfo.name[language];

  return (
    <main className="container-max py-20 min-h-screen">
      {/* Container Pai mais largo para o cabeçalho e imagem (Sensação Editorial) */}
      <div className="max-w-4xl mx-auto">
        
        {/* Botão Voltar Sutil */}
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-zinc-500 text-sm font-ui hover:text-white transition-colors mb-12 group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
          {language === 'en' ? 'Back to Home' : 'Voltar ao Início'}
        </Link>
        
        {/* Título Gigante e Impactante */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 font-ui tracking-tight leading-tight">
          {title}
        </h1>
        
        {/* Tabela de Metadados (Estilo Data-Driven / Referência Fable) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-y border-zinc-800/60 py-6 mb-12 bg-primary">
          
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold font-ui">
              {language === 'en' ? 'Tech Stack & Tools' : 'Tecnologias & Ferramentas'}
            </span>
            <div className="text-[13.5px] text-zinc-300 font-medium font-ui leading-relaxed">
              {projectInfo.tech.join(', ')}
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold font-ui">
              {language === 'en' ? 'Project Scope' : 'Escopo do Projeto'}
            </span>
            <span className="text-[13.5px] text-zinc-300 font-medium font-ui">
              Product Design / CX
            </span>
          </div>

          <div className="flex items-center md:justify-end gap-3">
            {/* O botão "View Live" foi removido daqui */}
            
            {projectInfo.github && (
              <a 
                href={projectInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white hover:bg-zinc-800 border border-zinc-800 text-xs font-bold rounded-full transition-colors font-ui"
              >
                GitHub <FaGithub />
              </a>
            )}
          </div>
        </div>

        {/* Hero Image Cinematográfica (Maior que o texto para quebrar o grid) */}
        <div className="w-full rounded-2xl overflow-hidden aspect-[16/10] md:aspect-[21/9] border border-zinc-800 shadow-2xl mb-16 relative bg-[#111]">
          <img 
            src={projectInfo.banner || 'https://via.placeholder.com/1200x600?text=Project+Cover'} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          {/* Overlay de gradiente super sutil na parte inferior para dar peso */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent"></div>
        </div>

        {/* Container Estreito para o Texto (Conforto de Leitura Editorial) */}
        <div className="max-w-3xl mx-auto article-body pb-20">
          {articleContent ? (
            articleContent
          ) : (
            <p className="text-zinc-500 italic">
              {language === 'en' ? 'Full case study coming soon.' : 'Case de estudo completo em breve.'}
            </p>
          )}
        </div>

      </div>
    </main>
  );
}