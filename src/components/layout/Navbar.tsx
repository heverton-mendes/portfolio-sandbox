import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '../../context/I18nContext';
import { FaGlobe } from 'react-icons/fa';

export function Navbar() {
  const location = useLocation();
  const path = location.pathname;
  const { language, toggleLanguage } = useI18n();
  
  // Estado para controlar se a página sofreu scroll
  const [isScrolled, setIsScrolled] = useState(false);

  // Efeito para monitorar o scroll da página
  useEffect(() => {
    const handleScroll = () => {
      // Se rolou mais de 40px, a barra desce
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para rolar a página suavemente para o topo ao clicar nos links
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <nav 
      className={`
        fixed left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4 
        /* Animação suave e fluida do eixo Y (Topo <-> Base) */
        transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
        /* Comportamento Desktop: Sempre absoluto no topo */
        md:absolute md:top-6
        /* Comportamento Mobile: Topo quando 0, Base (100dvh) quando scrolled */
        ${isScrolled ? 'top-[calc(100dvh-5.5rem)]' : 'top-6'}
      `}
    >
      <div 
        className={`
          flex items-center justify-between rounded-full px-4 md:px-6 py-2.5 md:py-3
          transition-all duration-500
          /* Quando flutua (scrolled), aumenta a profundidade visual e o efeito de vidro */
          ${isScrolled 
            ? 'bg-[#111111]/75 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)]' 
            : 'bg-surface/80 backdrop-blur-md border border-border-default shadow-[0_8px_32px_rgba(0,0,0,0.4)]'}
        `}
      >
        
        {/* Links da navegação */}
        <div className="flex items-center gap-3 md:gap-6 text-[13px] md:text-sm font-ui font-medium">
          <Link onClick={handleNavClick} to="/" className={`${path === '/' ? 'text-text-primary border-b-2 border-white/70 pb-0.5' : 'text-text-secondary'} hover:text-white transition-colors`}>{t.home}</Link>
          <Link onClick={handleNavClick} to="/projects" className={`${path === '/projects' ? 'text-text-primary border-b-2 border-white/70 pb-0.5' : 'text-text-secondary'} hover:text-white transition-colors`}>{t.projects}</Link>
          <Link onClick={handleNavClick} to="/uses" className={`${path === '/uses' ? 'text-text-primary border-b-2 border-white/70 pb-0.5' : 'text-text-secondary'} hover:text-white transition-colors`}>{t.uses}</Link>
          <Link onClick={handleNavClick} to="/resume" className={`${path === '/resume' ? 'text-text-primary border-b-2 border-white/70 pb-0.5' : 'text-text-secondary'} hover:text-white transition-colors`}>{t.resume}</Link>
        </div>

        {/* --- VISUAL MOBILE: Botão de Idioma --- */}
        <div className="flex md:hidden items-center ml-3 pl-3 border-l border-white/10 h-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center justify-center text-zinc-400 hover:text-white transition-colors text-[11px] font-bold font-ui uppercase tracking-wider w-5"
            title="Change language"
          >
            {language === 'en' ? 'PT' : 'EN'}
          </button>
        </div>

        {/* --- VISUAL DESKTOP: Botão de Idioma --- */}
        <button 
          onClick={toggleLanguage}
          className="hidden md:flex items-center gap-2 bg-black hover:bg-zinc-900 text-white px-3 py-1.5 rounded-full border border-dashed border-zinc-700 transition-all text-xs font-ui ml-4 shrink-0 uppercase"
        >
          <FaGlobe className="text-text-secondary" />
          <span>{language === 'en' ? 'PT' : 'EN'}</span>
        </button>
        
      </div>
    </nav>
  );
}