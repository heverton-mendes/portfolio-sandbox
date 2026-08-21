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
      en: "Evolution of a centralized financial hub. The scope included assisting in the creation of a conversational assistant, modernizing commitments management (including batch payments), and designing dynamic smart automations.\n\nPROBLEM: Features built by different teams at different times — customers accessed their payment universe across disconnected places for the exact same intent: to pay, manage, and track.\n\nROLE & APPROACH: Led end-to-end journey mapping, organized complex handoffs, modernized the UI (Product Library), and created robust documentation to unify the experience.\n\nCOLLABORATION: Flows and documentation served as a shared reference across Design, Product, and Engineering.\n\nIMPACT: During my tenure, Customer Satisfaction (Likert) rose from ~33% to the 59% target in an ecosystem with over 10M monthly users.\n\nLEARNING: A UX decision only counts when validated by real numbers. I deepened my ability to track metrics, data, and user pain points to accurately target design solutions.",
      
      pt: "Evolução de um hub financeiro centralizado. O escopo envolveu o auxílio na criação de um assistente conversacional, a modernização da gestão de compromissos (incluindo pagamentos em lote) e o design de automações inteligentes dinâmicas.\n\nPROBLEMA: Funcionalidades criadas por times diferentes em momentos diferentes — os clientes acessavam seu universo de pagamentos em lugares desconectados para uma mesma intenção: pagar, gerir e acompanhar.\n\nPAPEL E ABORDAGEM: Liderança no mapeamento de jornadas end-to-end, organização de handoffs complexos, modernização de UI (Library do Produto) e documentação para unificar a experiência.\n\nCOLABORAÇÃO: Fluxos e documentação servindo como referência compartilhada entre Design, Produto e Engenharia.\n\nIMPACTO: Durante minha atuação, a Satisfação do Cliente (Likert) subiu de ~33% para a meta de 59% em um produto com mais de 10 milhões de usuários.\n\nAPRENDIZADO: Uma decisão de UX só conta quando validada por números reais. Aprofundei minha capacidade de acompanhar métricas, dados e dores dos clientes para direcionar as soluções de design com precisão."
    },
    tech: ['UX/UI', 'Information Architecture', 'Journey Mapping'],
    github: '',
    live: 'https://hevertondaniel.medium.com/transformando-uma-tela-de-atalhos-em-uma-experiência-de-gestão-financeira-dbc34fd58a49',
    banner: '/images/projects/payments-hub.jpg',
    isPrivate: true,
  },
  {
    name: 'Open Finance',
    desc: {
      en: "Making regulation feel simple.\n\nPROBLEM: A regulated, technical system — the user only needed to know what to do next, not how it worked underneath.\n\nROLE & APPROACH: Owned the end-to-end flow design; used prototypes as a negotiation tool with the squad before any code was written.\n\nCOLLABORATION: Product, Engineering and Research — balancing user needs against what the system could actually support.\n\nIMPACT: The outcome was a regulatory flow the squad could actually stand behind and implement successfully.\n\nLEARNING: Simplicity, inside a regulated system, is a negotiation — not a redesign.",
      pt: "Tornando a regulação simples.\n\nPROBLEMA: Um sistema técnico e regulado — o usuário só precisava saber o que fazer a seguir, não como funcionava por baixo.\n\nPAPEL E ABORDAGEM: Liderança no design do fluxo end-to-end; uso de protótipos como ferramenta de negociação com a squad antes de qualquer código.\n\nCOLABORAÇÃO: Produto, Engenharia e Pesquisa — equilibrando necessidades do usuário com o que o sistema suportava.\n\nIMPACTO: A entrega foi um fluxo regulatório que a squad conseguiu apoiar e implementar com sucesso.\n\nAPRENDIZADO: Simplicidade, em um sistema regulado, é negociação — não apenas redesign."
    },
    tech: ['UX/UI', 'Prototyping', 'Accessibility'],
    github: '',
    live: 'https://hevertondaniel.medium.com/traduzindo-complexidade-regulatória-em-experiências-digitais-b3123f7a52c9',
    banner: '/images/projects/open-finance.jpg',
    isPrivate: true,
  },

  
  {
  name: 'Design at Scale & Governance',
  desc: {
    en: "Transforming Figma from a chaotic tool into a shared infrastructure of knowledge.\n\nPROBLEM: Scattered files, lack of naming standards, and fragmented flows created a 'herculean effort' to locate final screens or understand the context of UX decisions across multiple squads.\n\nROLE & APPROACH: Mapped the team's operational flow and designed a 3-tier Information Architecture (Macro, Meso, Micro) reflecting the Double Diamond process within Figma.\n\nCOLLABORATION: Empowered Product Designers, Service Designers, UX Writers, and Stakeholders with standardized blueprints (Discovery, Handoff, Critiques, Tests) reducing communication noise.\n\nIMPACT: Eliminated cognitive load for starting new initiatives and created instant visibility of project status for leadership without needing alignment meetings.\n\nLEARNING: Figma is not just a UI tool; in large organizations, it becomes a sociotechnical system that requires governance to preserve knowledge.",
    pt: "Transformando o Figma de uma ferramenta caótica em uma infraestrutura compartilhada de conhecimento.\n\nPROBLEMA: Arquivos dispersos e falta de padrões criavam um esforço gigantesco para localizar telas finais ou entender o contexto de decisões de UX entre várias squads.\n\nPAPEL E ABORDAGEM: Mapeamento do fluxo operacional e criação de uma Arquitetura de Informação em 3 camadas (Macro, Meso, Micro) refletindo o processo de Duplo Diamante dentro do Figma.\n\nCOLABORAÇÃO: Empoderou Designers, UX Writers e Stakeholders com blueprints padronizados (Discovery, Handoff, Critiques, Testes) reduzindo o ruído de comunicação.\n\nIMPACTO: Eliminou a carga cognitiva ao iniciar novas entregas e gerou visibilidade instantânea do status dos projetos para a liderança sem necessidade de reuniões de alinhamento.\n\nAPRENDIZADO: Figma não é só interface; em grandes operações, ele é um sistema sociotécnico que exige governança para preservar conhecimento."
  },
  tech: ['DesignOps', 'Figma', 'Governance', 'Information Architecture'],
  github: '',
  live: '', // Você pode colocar o link do Medium aqui quando escrever o artigo
  banner: '/images/projects/design-governance.jpg', // Substitua pelo caminho da sua imagem
  isPrivate: true,
}



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
      en: "Evolving a critical financial journey to improve clarity and information accessibility after transactions.\n\nPROBLEM: A legacy experience lacking user behavior data, making it hard for users to find, understand, and organize their payment receipts.\n\nROLE & APPROACH: Mapped current flows and recovered lost historical context to build a modernization vision without losing trust.\n\nCOLLABORATION: Partnered with Product, Engineering, and internal operations to balance UX proposals with technical constraints.\n\nIMPACT: Established a baseline for experience metrics and successfully modernized both the user-facing journey and internal service tools.\n\nLEARNING: Modernizing a product isn't just about the interface; it's about recovering knowledge and negotiating with legacy technology.",
      pt: "Evoluindo uma jornada financeira crítica para melhorar a clareza e acessibilidade das informações.\n\nPROBLEMA: Uma experiência legada sem dados de comportamento, dificultando que usuários encontrassem e organizassem seus comprovantes.\n\nPAPEL E ABORDAGEM: Mapeamento de fluxos e recuperação de contexto histórico para construir uma visão de modernização sem perder a confiança.\n\nCOLABORAÇÃO: Parceria com Produto, Engenharia e Operações para equilibrar propostas de UX com restrições técnicas.\n\nIMPACTO: Estabeleceu uma base para métricas de experiência e modernizou a jornada do usuário e ferramentas internas.\n\nAPRENDIZADO: Modernizar um produto não é só sobre interface; é sobre recuperar conhecimento e negociar com tecnologia legada."
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