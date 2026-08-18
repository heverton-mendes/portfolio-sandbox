export interface ProjectData {
  banner: string;
  name: { en: string; pt: string } | string;
  desc: { en: string; pt: string } | string;
  tech: string[];
  github: string;
  live?: string;
  demoWarning?: boolean;
  isUnderDevelopment?: boolean;
  isPrivate?: boolean;
}

export const featuredProjects: ProjectData[] = [
  {
    name: 'Hub de Pagamentos',
    desc: {
      en: "Untangling a fragmented ecosystem. Problem: Features built by different teams at different times. Role & approach: Worked alongside multiple payment teams to map the user journey and information architecture. Impact: Satisfaction (Likert) rose from ~33% to the 59% target on a product with 10M+ monthly users. Learning: A UX decision only counts once it's followed by a real number.",
      pt: "Desembaraçando um ecossistema fragmentado. Problema: Funcionalidades construídas por times diferentes. Papel e abordagem: Trabalhei com múltiplos times para realizar o mapeamento de jornada e unificar a experiência. Impacto: Satisfação (Likert) subiu de ~33% para a meta de 59% em um app com 10M+ de acessos mensais. Aprendizado: Uma decisão de UX só conta quando seguida por um número real."
    },
    tech: ['UX/UI', 'Information Architecture', 'Journey Mapping'],
    github: '',
    live: 'https://hevertondaniel.medium.com/transformando-uma-tela-de-atalhos-em-uma-experiência-de-gestão-financeira-dbc34fd58a49',
    banner: '/images/projects/payments-hub.png.png',
    isPrivate: true,
  },
  {
    name: 'Open Finance',
    desc: {
      en: "Making regulation feel simple. Problem: A regulated, technical system — the user only needed to know what to do next. Role & approach: Owned the end-to-end flow design; used prototypes as a negotiation tool before coding. Collaboration: Product, Engineering and Research. Impact: A regulatory flow the squad could stand behind. Learning: Simplicity, inside a regulated system, is a negotiation.",
      pt: "Tornando a regulação simples. Problema: Um sistema técnico e regulamentado. Papel e abordagem: Fui dono do design de ponta a ponta; usei protótipos como ferramenta de negociação. Colaboração: Produto, Engenharia e Pesquisa. Impacto: Um fluxo regulatório que a squad pôde realmente defender. Aprendizado: Simplicidade, dentro de um sistema regulamentado, é uma negociação."
    },
    tech: ['UX/UI', 'Prototyping', 'Accessibility'],
    github: '',
    live: 'https://hevertondaniel.medium.com/traduzindo-complexidade-regulatória-em-experiências-digitais-b3123f7a52c9',
    banner: '/images/projects/open-finance.png.png',
    isPrivate: true,
  }
  /* Ocultado temporariamente:
  {
    name: {
      en: "Design at Scale & Governance",
      pt: "Design em Escala & Governança"
    },
    desc: {
      en: "A shared Figma library for mobile products...",
      pt: "Uma biblioteca Figma compartilhada..."
    },
    tech: ['Design Systems', 'Figma', 'Governance'],
    github: '',
    live: '',
    banner: '/images/projects/design-governance.png',
    isPrivate: true,
  }
  */
];

export const additionalProjects: ProjectData[] = [
  {
    name: 'Uni Imóveis',
    desc: {
      en: 'How to help people find their perfect rental with more flexibility and less friction.',
      pt: 'Como ajudar pessoas a encontrarem sua locação perfeita com mais flexibilidade e menos atrito.'
    },
    tech: ['UX Discovery', 'Wireframing', 'UI Design'],
    github: '',
    live: 'https://hevertondaniel.medium.com/uni-imóveis-como-ajudar-pessoas-à-encontrarem-sua-locação-perfeita-com-mais-flexibilidade-e-66fe2cabcce2',
    banner: '/images/projects/uni-moveis.png.webp',
  },
  {
    name: 'Evolução de Comprovantes',
    desc: {
      en: 'Evolving a critical financial journey to improve clarity and information accessibility after transactions.',
      pt: 'Evoluindo uma jornada financeira crítica para melhorar a clareza e a acessibilidade da informação após transações.'
    },
    tech: ['UX Research', 'UI Design', 'Finance'],
    github: '',
    live: 'https://hevertondaniel.medium.com/evoluindo-uma-jornada-financeira-crítica-b4032c17cd6e',
    banner: '/images/projects/receipt.png.png',
  }
  /* Ocultado temporariamente:
  {
    name: 'Handoff Automation',
    desc: {
      en: 'Transforming Figma handoff files...',
      pt: 'Transformando arquivos de handoff...'
    },
    tech: ['Handoff', 'AI Automation', 'MCP'],
    github: '',
    isUnderDevelopment: true,
    banner: '',
  }
  */
];

export const allProjects: ProjectData[] = [...featuredProjects, ...additionalProjects];