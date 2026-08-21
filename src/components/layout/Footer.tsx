import React, { useState, useEffect } from 'react';
import { useI18n } from '../../context/I18nContext';

export function Footer() {
  const [time, setTime] = useState('');
  const { language } = useI18n();
  
  useEffect(() => {
    const updateTime = () => setTime(new Date().toLocaleTimeString('en-US', { hour12: false, timeZone: 'America/Sao_Paulo' }));
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const content = {
    en: {
      status: 'Looking for my next big challenge — Available remotely or in Belo Horizonte-MG.',
      builtWith: "Coded with Gemini, Google AI Studio & VSCode.",
      rights: "2026. All rights reserved."
    },
    pt: {
      status: 'Buscando meu próximo grande desafio — Remoto ou Belo Horizonte / MG.',
      builtWith: "Desenvolvido com Gemini, Google AI Studio & VSCode.",
      rights: "2026. Todos os direitos reservados."
    }
  };

  const t = content[language];

  return (
    <footer className="w-full border-t border-dashed border-zinc-800 mt-20 pt-10 pb-24 md:pb-16 text-center">
      <div className="container-max flex flex-col items-center justify-center gap-4 md:gap-6">
        
        {/* Status (Referência ao texto do topo) - Itálico, fonte suave e cor acinzentada */}
        <p className="text-zinc-400 text-[13px] md:text-sm font-ui italic leading-relaxed max-w-lg px-4">
          {t.status}
        </p>
        
        {/* Créditos (Referência ao "Designed & Made with") - Fonte mais forte, clara e em destaque */}
        <p className="text-zinc-100 text-[13px] md:text-sm font-ui font-medium mt-1 md:mt-0">
          {t.builtWith}
        </p>
        
        {/* Rodapé com direitos e horário (Referência aos textos monoespaçados) */}
        {/* No mobile: flex-col e gap-2 para empilhar. No desktop: flex-row e justify-between para separar. */}
        <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center text-zinc-600 font-mono text-[11.5px] md:text-xs mt-6 md:mt-8 gap-2 md:gap-0">
          <span>{t.rights}</span>
          <span>{time || '...'} BRT</span>
        </div>
        
      </div>
    </footer>
  );
}