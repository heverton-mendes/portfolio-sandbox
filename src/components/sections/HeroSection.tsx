import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaDiscord, FaAssistiveListeningSystems } from 'react-icons/fa';
import { userImages } from '../../data/images';
import { socialLinks } from '../../data/socialLinks';
import { Tooltip } from '../ui/Tooltip';
import { useI18n } from '../../context/I18nContext';

export function HeroSection() {
  const [time, setTime] = useState('');
  const { language } = useI18n();
  
  useEffect(() => {
    const updateTime = () => setTime(new Date().toLocaleTimeString('en-US', { timeZone: 'America/Sao_Paulo' }));
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const content = {
    en: {
      role: "Product Designer — Remote",
      greeting: "Hi, I'm a",
      roleHighlight: "Product Designer",
      bio1: (
        <>
          Over the past 4 years, I designed payment journeys for <strong className="font-bold text-white">10M+ users</strong> at Itaú.
        </>
      ),
      bio2: (
        <>
          I love <strong className="font-bold text-white">simplifying rules</strong>, exploring <strong className="font-bold text-white">AI</strong>, and making complex systems easy to use.
        </>
      ),
      building: "Building",
      experiences: " great experiences",
      country: "Brazil",
      email: "Email Me"
    },
    pt: {
      role: "Product Designer — Remoto",
      greeting: "Oi, eu sou",
      roleHighlight: "Product Designer",
      bio1: (
        <>
          Nos últimos quase 4 anos, desenhei jornadas de pagamento para <strong className="font-bold text-white">10M+ de usuários</strong> no Itaú.
        </>
      ),
      bio2: (
        <>
          Adoro <strong className="font-bold text-white">simplificar regras</strong>, explorar <strong className="font-bold text-white">IA</strong> e tornar sistemas densos fáceis de usar.
        </>
      ),
      building: "Criando",
      experiences: " experiências incríveis",
      country: "Brasil",
      email: "E-mail"
    }
  };

  const t = content[language];

  return (
    <section className="container-max mt-0 md:mt-6 z-[1]">
      <div className="flex flex-col w-full">
        
        {/* Top Profile Header - LADO A LADO FORÇADO COMO NO ORIGINAL */}
<div className="items-center flex justify-start relative w-full min-h-[180px] z-[3]">
          
          {/* Container da Imagem - Ajustado para w-24 no mobile e w-32 no desktop */}
          <div className="items-center flex justify-center relative w-24 h-24 md:w-32 md:h-32 mr-4 md:mr-[24px] z-[10] shrink-0">
            <div className="relative w-full h-full border-[rgb(10,_10,_11)] border-[4px] shadow-[rgba(0,0,0,0.267)_0px_4px_32px_0px] rounded-[10px] z-[2]">
              <img 
                src="/images/avatar.png.png" 
                alt="Heverton Mendes" 
                className="size-full object-cover overflow-clip bg-[rgb(31,_31,_35)] rounded-[6px]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://github.com/heverton-mendes.png';
                }}
              />
              <div className="absolute -bottom-1 -right-1 bg-[#0a0a0b] p-1.5 rounded-full z-[5]">
                <div className="w-2.5 h-2.5 bg-[#10b981] rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse-dot" />
              </div>
            </div>
          </div>

          {/* Textos do Header */}
          <div className="items-start flex flex-col justify-center w-full max-w-[420px]">
            <div className="items-start flex flex-col w-full gap-[4px] md:gap-[6px]">
              
              <div className="items-center flex justify-start w-full">
                {/* Fonte e espaçamento reduzidos no mobile para caber em uma linha */}
                <h1 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
  Heverton Mendes <span className="hidden md:inline">📌</span>
</h1>
              </div>
              
              {/* Escondemos o @ no celular para poupar espaço (hidden sm:flex) */}
              <div className="hidden sm:flex items-center text-[rgb(180,_180,_180)] text-[13.6px] gap-[6px]" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
                <span>@heverton-mendes</span>
              </div>
              
              {/* Ajuste mobile: fonte menor (text-[12px]), sem negrito no destaque (apenas text-white) e forçando uma linha única (whitespace-nowrap) */}
              <div className="text-[12px] md:text-[13.6px] leading-snug text-[rgb(180,_180,_180)] whitespace-nowrap tracking-tight md:tracking-normal" style={{ fontFamily: 'Figtree, sans-serif' }}>
                <span className="text-white">{t.building}</span>{t.experiences}
              </div>
              
              {/* O relógio some no mobile (hidden sm:flex) para a linha não quebrar */}
              <div className="items-center flex flex-wrap text-[rgb(180,_180,_180)] text-[12px] md:text-[12.8px] gap-[6px] md:gap-[8px]" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
                <span className="flex items-center gap-[4px]">
                  📍 {t.country}
                </span>
                <span className="text-[rgb(68,_68,_68)] hidden sm:block">•</span>
                <span className="hidden sm:flex items-center gap-[4px]">
                  {time || 'Loading...'}
                </span>
              </div>

              {/* Tag PCD adaptada */}
              <div className="items-center flex text-[rgb(180,_180,_180)] text-[12px] md:text-[12.8px] mt-0.5" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
                <span className="flex items-center gap-[4px]">
                  🦻 {language === 'en' ? 'Hard of hearing' : 'PCD (Auditiva)'}
                </span>
              </div>
              
            </div>
          </div>
        </div>

        {/* Bio List - Usando as bolinhas cinzas personalizadas do original */}
<div className="text-[rgb(140,_140,_140)] mt-0 md:mt-0">
          <div className="leading-[27.2px] font-ui">
            <ul className="flex flex-col">
              <li className="items-start flex gap-[12px] pt-1 pr-0 pb-1 pl-0">
                <span className="block w-2 h-2 mt-[10px] bg-[rgb(136,_136,_136)] text-[14px] leading-[20px] shrink-[0] rounded-[50%]" />
                <span className="block text-[14px] leading-[28px]">{t.greeting} <strong className="font-bold text-white">{t.roleHighlight}</strong>.</span>
              </li>
              <li className="items-start flex gap-[12px] pt-1 pr-0 pb-1 pl-0">
                <span className="block w-2 h-2 mt-[10px] bg-[rgb(136,_136,_136)] text-[14px] leading-[20px] shrink-[0] rounded-[50%]" />
                <span className="block text-[14px] leading-[28px]">{t.bio1}</span>
              </li>
              <li className="items-start flex gap-[12px] pt-1 pr-0 pb-1 pl-0">
                <span className="block w-2 h-2 mt-[10px] bg-[rgb(136,_136,_136)] text-[14px] leading-[20px] shrink-[0] rounded-[50%]" />
                <span className="block text-[14px] leading-[28px]">{t.bio2}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider - Gradiente perfeito do original */}
        <div 
          className="h-px w-full mt-[24px] mb-[24px]" 
          style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(68, 68, 68) 50%, rgba(0, 0, 0, 0) 100%)" }}
        />

        {/* Social Buttons - Usando a classe shadow-composite e estrutura do original */}
<div className="items-center flex mt-[0px] mb-16 md:mb-16 gap-[8px]">
          
          <div className="flex relative">
            <Tooltip text="24x7 available for your emails" position="bottom">
              <a href="mailto:hevertondaniel97@gmail.com" className="block">
                <button className="shadow-composite items-center inline-flex font-medium justify-center text-center bg-[rgb(26,_27,_28)] text-white hover:text-white text-[12px] gap-[6px] min-h-7 pt-1.5 pr-2.5 pb-1.5 pl-2.5 rounded-md font-ui transition-all hover:bg-[#27272a]">
                  <FaEnvelope className="text-[14px]" /> {t.email}
                </button>
              </a>
            </Tooltip>
          </div>

          <span className="block text-[14px] leading-[20px] text-[rgb(68,_68,_68)] font-ui px-1">|</span>

          <div className="items-center flex flex-wrap justify-center gap-[12px]">
            {socialLinks.map((link, i) => (
              <div key={i} className="flex relative">
                <Tooltip text={link.name} position="bottom">
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="shadow-composite items-center flex font-medium justify-center text-center bg-[rgb(26,_27,_28)] text-zinc-400 hover:text-white text-[12px] min-h-7 w-[34px] rounded-md font-ui transition-all hover:bg-[#27272a]"
                  >
                    <span className="items-center flex justify-center text-[15px]">
                      {link.icon}
                    </span>
                  </a>
                </Tooltip>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}