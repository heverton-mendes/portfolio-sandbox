import React from 'react';

// Tipagem para os nossos artigos
export type ArticleContent = {
  [key: string]: {
    en: React.ReactNode;
    pt: React.ReactNode;
  };
};

export const articlesData: ArticleContent = {
  'design-governance': {
    en: (
      <div className="space-y-6 text-zinc-300 font-ui text-[15px] leading-relaxed">
        <p>
          In the ecosystem of one of the country's largest financial institutions, the launch speed and modernization of digital payment products are critical to maintaining market leadership. Working as a Product Designer in the Payments division—an area supporting complex journeys for millions of users—I faced a challenge that went far beyond drawing interfaces: accelerated team growth was creating an invisible collapse in our efficiency.
        </p>
        <p>
          This project was executed in three major phases: establishing a governance foundation, tactically applying it to my core product, and structurally preparing the team for Artificial Intelligence in design.
        </p>

        <h3 className="text-xl font-bold text-white mt-10 mb-4">Phase 1: Diagnosing the Chaos and Restructuring Figma</h3>
        <p>Before proposing solutions, I mapped three main pain points draining our productivity:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong className="text-zinc-100">Low Discoverability:</strong> Scattered files required excessive investigative effort just to locate a production screen.</li>
          <li><strong className="text-zinc-100">Cross-Functional Noise:</strong> Service Design partners, UX Writers, and stakeholders struggled to navigate files and understand actual project statuses.</li>
          <li><strong className="text-zinc-100">Process Disconnection:</strong> The team adopted the Double Diamond theoretically, but in Figma, it resulted in contextless clusters of screens.</li>
        </ul>
        
        <p>To solve this, I designed a new Information Architecture tailored to our specific organizational reality, structured in the following hierarchy:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong className="text-zinc-100">Management Level (Macro):</strong> Centralizing the entire ecosystem under the "Payments" management root folder, establishing a clear search boundary for our area.</li>
          <li><strong className="text-zinc-100">Coordination & Product Level (Meso):</strong> Creating folders for each coordination (RTs), branching out into specific folders for each product. Within each product, the environment was strictly divided into Product Evolution (daily work), Visioning (strategic concepts), and Research & Tests (protecting historical UX data).</li>
          <li><strong className="text-zinc-100">File Level (Micro):</strong> Replacing loose files with Blueprints—standardized templates reflecting our design process (Discovery, Explorations, Handoff, Critiques, and Tests).</li>
        </ul>

        <h3 className="text-xl font-bold text-white mt-10 mb-4">Phase 2: From Process to Practice (Interactive Dashboard in "Meus Pagamentos")</h3>
        <p>
          With governance in place, I applied this infrastructure to elevate the maturity of the "Meus Pagamentos" (My Payments) product. I used the newly organized files to better structure flow navigation, end-to-end journeys, metrics tracking, delivery history, links, and notifications.
        </p>
        <p>
          All of this was consolidated into an interactive dashboard built with <strong>Figma Make</strong>. This initiative had a dual impact: it immortalized the product's documentation with absolute clarity, and it actively encouraged the practical adoption of Figma Make at the exact moment the design team was being pushed by leadership to use the new tool.
        </p>

        <h3 className="text-xl font-bold text-white mt-10 mb-4">Phase 3: The Future Vision (Preparing for AI and MCP)</h3>
        <p>
          The restructuring of the Payments division had a strategic future objective: preparing the team for upcoming technological shifts. By providing adaptation time for designers to migrate to this new model, the plan was to facilitate the transformation of our Handoffs into AI-ready context.
        </p>
        <p>
          The goal was to help time-constrained designers easily convert their standardized Handoffs into <code>.md</code> files. This would enable the adoption of <strong>MCP (Model Context Protocol)</strong>, drastically improving Design QA and allowing for the rapid creation of high-fidelity prototypes with direct AI assistance.
        </p>

        <h3 className="text-xl font-bold text-white mt-10 mb-4">The Legacy</h3>
        <p>
          Unfortunately, these advanced AI integration proposals were never fully realized, as my time at the company came to an end due to a layoff. However, the implementation of the initial phases generated a drastic reduction in productive time wasted searching for and aligning files.
        </p>
        <p className="p-4 border-l-4 border-zinc-500 bg-zinc-900/50 mt-6 italic">
          This case proves that the true role of a systemic designer goes beyond drawing screens: it involves optimizing processes, reducing corporate time waste, and preparing an entire team's technological infrastructure for the future.
        </p>
      </div>
    ),
    
    pt: (
      <div className="space-y-6 text-zinc-300 font-ui text-[15px] leading-relaxed">
        <p>
          No ecossistema de uma das maiores e mais tradicionais instituições financeiras do país, a velocidade de lançamento e a modernização de produtos digitais de pagamento são críticas para garantir a liderança no mercado. Atuando como Product Designer na Gerência de Pagamentos — uma área que sustenta jornadas complexas e atende a milhões de usuários — deparei-me com um desafio que ia muito além de desenhar interfaces: o crescimento acelerado de times e produtos estava gerando um colapso invisível na nossa eficiência.
        </p>
        <p>
          O projeto foi estruturado em três grandes momentos: a criação de uma fundação de governança, a aplicação tática no meu produto principal e a preparação estrutural para o uso de Inteligência Artificial no design.
        </p>

        <h3 className="text-xl font-bold text-white mt-10 mb-4">Fase 1: O Diagnóstico do Caos e a Reestruturação do Figma</h3>
        <p>Antes de propor qualquer solução, mapeei três dores principais que drenavam nossa produtividade:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong className="text-zinc-100">Baixa Encontrabilidade:</strong> Arquivos espalhados pelo dashboard exigiam um esforço investigativo excessivo para localizar uma simples tela de produção.</li>
          <li><strong className="text-zinc-100">Ruído Cross-Functional:</strong> Parceiros de Service Design, UX Writing e stakeholders sofriam para navegar nos arquivos e entender o status real dos projetos.</li>
          <li><strong className="text-zinc-100">Desconexão de Processos:</strong> O time adotava o Duplo Diamante na teoria, mas no Figma resultava em amontoados de telas sem contexto.</li>
        </ul>
        
        <p>Para resolver isso, estruturei uma nova Arquitetura de Informação alinhada à realidade da nossa área, organizada na seguinte hierarquia estrutural:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong className="text-zinc-100">Nível Gerencial (Macro):</strong> Centralização de todo o ecossistema sob a pasta matriz da gerência de "Pagamentos", estabelecendo uma fronteira clara de busca para o nosso time.</li>
          <li><strong className="text-zinc-100">Nível de Coordenações e Produtos (Meso):</strong> Estruturação de pastas para cada coordenação (RTs), que se ramificavam nas pastas de cada produto. Para garantir a organização de cada produto, o ambiente foi dividido estritamente em Evolução do Produto (dia a dia), Visioning (conceitos estratégicos) e Pesquisas e Testes (blindando o histórico de UX).</li>
          <li><strong className="text-zinc-100">Nível de Arquivos (Micro):</strong> Substituição de arquivos soltos por Blueprints — templates padronizados baseados no processo de design (Discovery, Explorações, Handoff, Critiques e Testes).</li>
        </ul>

        <h3 className="text-xl font-bold text-white mt-10 mb-4">Fase 2: Do Processo à Prática (Painel Interativo em "Meus Pagamentos")</h3>
        <p>
          Com a governança operando, apliquei essa infraestrutura para elevar a maturidade do produto "Meus Pagamentos". Utilizei os arquivos agora organizados para estruturar a navegação dos fluxos, das jornadas end-to-end, do acompanhamento de métricas, e do histórico e links de cada entrega.
        </p>
        <p>
          Tudo isso foi consolidado na construção de um painel interativo utilizando o <strong>Figma Make</strong>. Essa iniciativa teve um impacto duplo: além de imortalizar a documentação do produto com clareza, ela estimulou ativamente a adoção prática do Figma Make no exato momento em que o time de design estava sendo cobrado pelas lideranças para utilizar a nova ferramenta.
        </p>

        <h3 className="text-xl font-bold text-white mt-10 mb-4">Fase 3: A Visão de Futuro (Preparação para IA e MCP)</h3>
        <p>
          A reestruturação da gerência de Pagamentos tinha um objetivo futuro estratégico: preparar a equipe para os novos desafios tecnológicos. Com um tempo de adaptação garantido para que todos os designers migrassem para o novo modelo, o plano era que a nova estrutura facilitasse a transformação dos nossos arquivos de Handoff em contexto para IA.
        </p>
        <p>
          O objetivo era ajudar designers — que operavam com tempo escasso — a transformar seus Handoffs padronizados em arquivos <code>.md</code>. Isso viabilizaria a adoção do <strong>MCP (Model Context Protocol)</strong>, elevando drasticamente a qualidade do QA de Design e permitindo futuras criações de protótipos rápidos e de alta fidelidade com o auxílio direto de Inteligência Artificial.
        </p>

        <h3 className="text-xl font-bold text-white mt-10 mb-4">O Legado</h3>
        <p>
          Infelizmente, essas propostas de integração com IA não chegaram a acontecer, pois meu ciclo na empresa foi encerrado devido a um desligamento. No entanto, a implementação das fases iniciais gerou uma redução drástica de tempo produtivo desperdiçado em busca e alinhamento.
        </p>
        <p className="p-4 border-l-4 border-zinc-500 bg-zinc-900/50 mt-6 italic">
          Este case comprova que a verdadeira atuação do designer sistêmico vai além do desenho de telas: envolve otimizar processos, reduzir resíduos de tempo e preparar a infraestrutura tecnológica de um time inteiro para o futuro.
        </p>
      </div>
    ),
  },
  
  // O formato para os próximos cases será idêntico:
  // 'open-finance': { en: (...), pt: (...) },
  // 'payments-hub': { en: (...), pt: (...) }
};