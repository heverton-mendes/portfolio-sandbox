import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useI18n } from '../../context/I18nContext';

export function UsesSection() {
  const { language } = useI18n();

  return (
    <section className="container-max mb-8">
      {/* 1. Padronizado: mb-4 para dar o mesmo respiro do título das outras seções */}
      <div className="mb-4">
        <SectionTitle>/uses</SectionTitle>
      </div>
      
      {/* 2. Padronizado: Removido o mt-8 e alterado o padding para p-5 para ficar igual aos cards de Projetos e Experiência */}
      <div className="border border-dashed border-border-default rounded-xl p-5 hover:border-border-hover transition-colors">
        <p className="text-text-secondary font-body leading-loose text-sm mb-6">
          {language === 'en' 
            ? 'Curious about my setup? Check out the tools, gear, and software I use daily.' 
            : 'Curioso sobre meu setup? Confira os equipamentos e softwares que uso diariamente.'}
        </p>
        <Link 
          to="/uses"
          className="inline-flex items-center gap-2 text-text-primary px-4 py-2 border border-border-default rounded text-xs hover:bg-surface transition-colors font-ui"
        >
          {language === 'en' ? 'See my setup' : 'Ver meu setup'} <FaArrowRight />
        </Link>
      </div>
    </section>
  );
}