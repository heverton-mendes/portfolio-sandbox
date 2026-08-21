import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useI18n } from '../context/I18nContext';
import { articlesData } from '../data/articles';
import { allProjects } from '../data/projects';

export default function ArticleLayout() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useI18n();
  const navigate = useNavigate();

  // Busca os dados do projeto (para pegar o título e banner)
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
      <div className="max-w-3xl mx-auto">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-zinc-400 text-sm font-ui hover:text-white transition-colors mb-10"
        >
          <FaArrowLeft /> {language === 'en' ? 'Back to Home' : 'Voltar ao Início'}
        </Link>
        
        {/* Cabeçalho do Artigo */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 font-ui">
          {title}
        </h1>
        
        {/* Banner do Projeto (Imagem que você gerou) */}
        <div className="w-full rounded-xl overflow-hidden aspect-[16/9] border border-zinc-800 mb-12">
          <img 
            src={projectInfo.banner || 'https://via.placeholder.com/800x450?text=Project+Cover'} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Corpo do Artigo Renderizado */}
        <div className="article-body pb-20">
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