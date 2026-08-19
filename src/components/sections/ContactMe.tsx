import React from 'react';
import { socialLinks } from '../../data/socialLinks';
import { FaEnvelope, FaFileAlt } from 'react-icons/fa';
import { useI18n } from '../../context/I18nContext';

export function ContactMe() {
  const { language } = useI18n();

  return (
    <section className="container-max mb-0 md:mb-4">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto px-4 py-4 md:p-8">
        <h3 className="text-xl font-bold font-ui text-text-primary mb-2">
          {language === 'en' ? "Let's Connect" : 'Vamos Conversar'}
        </h3>
        <p className="text-text-secondary font-body text-sm mb-8">
          {language === 'en' 
            ? 'Feel free to reach out through any of these platforms' 
            : 'Sinta-se à vontade para entrar em contato por qualquer uma destas plataformas'}
        </p>
        
        <div className="flex flex-wrap justify-center gap-3">
          <a 
            href="mailto:hevertondaniel97@gmail.com"
            className="inline-flex items-center gap-2 bg-surface text-text-primary px-3 py-1.5 rounded border border-border-default hover:bg-surface-elevated transition-colors font-ui text-xs"
          >
            <FaEnvelope /> {language === 'en' ? 'Email' : 'E-mail'}
          </a>
          
          {socialLinks.map((link, i) => (
            <a 
              key={i}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-surface text-text-primary hover:text-text-primary px-3 py-1.5 rounded border border-border-default hover:bg-surface-elevated transition-colors font-ui text-xs"
            >
              {link.icon} {link.name}
            </a>
          ))}

          <button
  type="button"
  onClick={async () => {
    const url = language === 'en' ? "/resume-en.pdf" : "/resume-pt.pdf";
    const fileName = language === 'en' ? "Heverton_Mendes_Resume.pdf" : "Heverton_Mendes_Curriculo.pdf";
    
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Erro ao baixar o arquivo:", error);
    }
  }}
  className="..." // (mantenha as classes CSS originais do seu botão aqui)
>
  {/* Conteúdo do botão (ícone e texto) */}
</button>
        </div>
      </div>
    </section>
  );
}