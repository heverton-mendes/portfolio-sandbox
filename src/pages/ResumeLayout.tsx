import React from 'react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { FaArrowLeft, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useI18n } from '../context/I18nContext';

export default function ResumeLayout() {
  const { language } = useI18n();

  const content = {
    en: {
      description: "My resume — view it inline below or download a copy.",
      download: "Download PDF",
      back: "Back to Home"
    },
    pt: {
      description: "Meu currículo — visualize abaixo ou baixe uma cópia.",
      download: "Baixar PDF",
      back: "Voltar para o Início"
    }
  };

  const t = content[language];

  return (
    <main className="container-max py-20 min-h-[80vh]">
      <SectionTitle>/resume</SectionTitle>
      
      <div className="flex flex-col items-center text-center mt-8">
        <p className="text-text-secondary font-mono italic mb-6">
          {t.description}
        </p>
        
        {/* Botão de Download */}
        <button
  type="button"
  onClick={() => {
    const url = language === 'en' ? "/resume-en.pdf" : "/resume-pt.pdf";
    const fileName = language === 'en' ? "Heverton_Mendes_Resume.pdf" : "Heverton_Mendes_Curriculo.pdf";
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }}
  className="inline-flex items-center gap-2 bg-surface border border-border-default hover:bg-surface-elevated text-text-primary px-4 py-2 rounded mb-8 transition-colors text-sm font-ui cursor-pointer"
>
  <FaDownload className="text-accent-amber" /> {t.download}
</button>

        {/* Visualizador (iframe) */}
        <div className="w-full max-w-4xl bg-white rounded overflow-hidden shadow-composite border border-dashed border-border-default p-2">
          <iframe 
            src={language === 'en' ? "/resume-en.pdf" : "/resume-pt.pdf"}
            className="w-full aspect-[1/1.4] rounded bg-white"
            title="Resume"
          />
        </div>

        <div className="w-full flex justify-start mt-8">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 border border-border-default bg-surface hover:bg-surface-elevated px-4 py-2 rounded text-sm text-text-primary transition-colors"
          >
            <FaArrowLeft /> {t.back}
          </Link>
        </div>
      </div>
    </main>
  );
}