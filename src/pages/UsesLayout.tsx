import React from 'react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { usesData } from '../data/uses';
import { useI18n } from '../context/I18nContext';

export default function UsesLayout() {
  const { language } = useI18n();

  // Dicionário inteligente que traduz os rótulos que vêm do arquivo uses.ts
  const translate = (text: string) => {
    if (language === 'en') return text;
    
    const ptDict: Record<string, string> = {
      'Hardware': 'Equipamentos',
      'Computer': 'Computador',
      'Display': 'Monitor',
      'Keyboard': 'Teclado',
      'Mouse': 'Mouse',
      'Audio': 'Áudio',
      'Software & Tools': 'Softwares & Ferramentas',
      'Design & Prototyping': 'Design e Prototipação',
      'Whiteboarding': 'Lousa Digital',
      'UX Research': 'Pesquisa de UX',
      'Management': 'Gestão e Organização',
      'Browser': 'Navegador',
      'Code Editor': 'Editor de Código',
      'Generative AI': 'IA Generativa'
    };

    // Retorna a tradução. Se não achar, retorna o texto original.
    return ptDict[text] || text;
  };

  return (
    <main className="container-max py-20 min-h-screen">
      <SectionTitle>/uses</SectionTitle>
      
      <div className="mt-8 space-y-12">
        {usesData.map((category, idx) => (
          <div key={idx}>
            <h3 className="text-lg font-bold font-ui text-text-primary mb-4 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-border-hover" /> {translate(category.category)}
            </h3>
            <ul className="flex flex-col gap-3">
              {category.items.map((item, i) => (
                <li key={i} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 border-b border-dashed border-border-default pb-3">
                  {/* w-48 no lugar de w-32 para acomodar melhor as palavras em português */}
                  <span className="text-sm text-text-secondary font-mono w-48 shrink-0">
                    {translate(item.label)}
                  </span>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noreferrer" className="text-text-primary text-sm font-ui hover:text-text-secondary transition-colors underline decoration-border-default underline-offset-4">
                      {item.name}
                    </a>
                  ) : (
                    <span className="text-text-primary text-sm font-ui">{item.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}