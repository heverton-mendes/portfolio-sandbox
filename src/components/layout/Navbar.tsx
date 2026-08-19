import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '../../context/I18nContext';
import { FaGlobe } from 'react-icons/fa';

export function Navbar() {
  const location = useLocation();
  const path = location.pathname;
  const { language, toggleLanguage } = useI18n();

  // Dicionário de tradução dos links da navbar
  const navText = {
    en: {
      home: 'Home',
      projects: 'Projects',
      uses: 'Uses',
      resume: 'Resume',
    },
    pt: {
      home: 'Início',
      projects: 'Projetos',
      uses: 'Uso',
      resume: 'Currículo',
    }
  };

  const t = navText[language];

  return (
    <nav className="fixed bottom-4 md:absolute md:top-6 md:bottom-auto left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
      <div className="bg-surface/80 backdrop-blur-xl border border-border-default rounded-full px-4 md:px-6 py-2.5 md:py-3 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        
        {/* Links da navegação com as variáveis traduzidas */}
        <div className="flex items-center gap-3 md:gap-6 text-[13px] md:text-sm font-ui font-medium">
          <Link to="/" className={`${path === '/' ? 'text-text-primary border-b-2 border-border-default pb-0.5' : 'text-text-secondary'} hover:text-text-primary transition-colors`}>{t.home}</Link>
          <Link to="/projects" className={`${path === '/projects' ? 'text-text-primary border-b-2 border-border-default pb-0.5' : 'text-text-secondary'} hover:text-text-primary transition-colors`}>{t.projects}</Link>
          <Link to="/uses" className={`${path === '/uses' ? 'text-text-primary border-b-2 border-border-default pb-0.5' : 'text-text-secondary'} hover:text-text-primary transition-colors`}>{t.uses}</Link>
          <Link to="/resume" className={`${path === '/resume' ? 'text-text-primary border-b-2 border-border-default pb-0.5' : 'text-text-secondary'} hover:text-text-primary transition-colors`}>{t.resume}</Link>
        </div>

        {/* --- VISUAL MOBILE --- */}
        <div className="flex md:hidden items-center ml-3 pl-3 border-l border-border-default h-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors text-[11px] font-bold font-ui uppercase tracking-wider w-5"
            title="Change language"
          >
            {language === 'en' ? 'PT' : 'EN'}
          </button>
        </div>

        {/* --- VISUAL DESKTOP --- */}
        <button 
          onClick={toggleLanguage}
          className="hidden md:flex items-center gap-2 bg-black hover:bg-black/80 text-white px-3 py-1.5 rounded-full border border-dashed border-border-default transition-all text-xs font-ui ml-4 shrink-0 uppercase"
        >
          <FaGlobe className="text-text-secondary" />
          <span>{language === 'en' ? 'PT' : 'EN'}</span>
        </button>
        
      </div>
    </nav>
  );
}