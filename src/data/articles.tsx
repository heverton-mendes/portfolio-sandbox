import React from 'react';

export type ArticleContent = {
  [key: string]: {
    en: React.ReactNode;
    pt: React.ReactNode;
  };
};

export const articlesData: ArticleContent = {
  'design-governance': {
    en: (
      <>
        <p>
          In the ecosystem of one of the country's largest financial institutions, the launch speed and modernization of digital payment products are critical to maintaining market leadership. Working as a Product Designer in the Payments division—an area supporting complex journeys for millions of users—I faced a challenge that went far beyond drawing interfaces: accelerated team growth was creating an invisible collapse in our efficiency.
        </p>
        <p>
          This project was executed in three major phases: establishing a governance foundation, tactically applying it to my core product, and structurally preparing the team for Artificial Intelligence in design.
        </p>

        <h3>Phase 1: Diagnosing the Chaos and Restructuring Figma</h3>
        <p>Before proposing solutions, I mapped three main pain points draining our productivity:</p>
        <ul>
          <li><strong>Low Discoverability:</strong> Scattered files required excessive investigative effort just to locate a production screen.</li>
          <li><strong>Cross-Functional Noise:</strong> Service Design partners, UX Writers, and stakeholders struggled to navigate files and understand actual project statuses.</li>
          <li><strong>Process Disconnection:</strong> The team adopted the Double Diamond theoretically, but in Figma, it resulted in contextless clusters of screens.</li>
        </ul>
        
        <p>To solve this, I designed a new Information Architecture tailored to our specific organizational reality, structured in the following hierarchy:</p>
        <ul>
          <li><strong>Management Level (Macro):</strong> Centralizing the entire ecosystem under the "Payments" management root folder, establishing a clear search boundary for our area.</li>
          <li><strong>Coordination & Product Level (Meso):</strong> Creating folders for each coordination (RTs), branching out into specific folders for each product. Within each product, the environment was strictly divided into Product Evolution (daily work), Visioning (strategic concepts), and Research & Tests (protecting historical UX data).</li>
          <li><strong>File Level (Micro):</strong> Replacing loose files with Blueprints—standardized templates reflecting our design process (Discovery, Explorations, Handoff, Critiques, and Tests).</li>
        </ul>

        <h3>Phase 2: From Process to Practice (Interactive Dashboard in "Meus Pagamentos")</h3>
        <p>
          With governance in place, I applied this infrastructure to elevate the maturity of the "Meus Pagamentos" (My Payments) product. I used the newly organized files to better structure flow navigation, end-to-end journeys, metrics tracking, delivery history, links, and notifications.
        </p>
        <p>
          All of this was consolidated into an interactive dashboard built with <strong>Figma Make</strong>. This initiative had a dual impact: it immortalized the product's documentation with absolute clarity, and it actively encouraged the practical adoption of Figma Make at the exact moment the design team was being pushed by leadership to use the new tool.
        </p>

        <h3>Phase 3: The Future Vision (Preparing for AI and MCP)</h3>
        <p>
          The restructuring of the Payments division had a strategic future objective: preparing the team for upcoming technological shifts. By providing adaptation time for designers to migrate to this new model, the plan was to facilitate the transformation of our Handoffs into AI-ready context.
        </p>
        <p>
          The goal was to help time-constrained designers easily convert their standardized Handoffs into <code>.md</code> files. This would enable the adoption of <strong>MCP (Model Context Protocol)</strong>, drastically improving Design QA and allowing for the rapid creation of high-fidelity prototypes with direct AI assistance.
        </p>

        <h3>The Legacy</h3>
        <p>
          Unfortunately, these advanced AI integration proposals were never fully realized, as my time at the company came to an end due to a layoff. However, the implementation of the initial phases generated a drastic reduction in productive time wasted searching for and aligning files.
        </p>
        
        <blockquote>
          This case proves that the true role of a systemic designer goes beyond drawing screens: it involves optimizing processes, reducing corporate time waste, and preparing an entire team's technological infrastructure for the future.
        </blockquote>
      </>
    ),
    
    pt: (
      <>
        <p>
          No ecossistema de uma das maiores e mais tradicionais instituições financeiras do país, a velocidade de lançamento e a modernização de produtos digitais de pagamento são críticas para garantir a liderança no mercado. Atuando como Product Designer na Gerência de Pagamentos — uma área que sustenta jornadas complexas e atende a milhões de usuários — deparei-me com um desafio que ia muito além de desenhar interfaces: o crescimento acelerado de times e produtos estava gerando um colapso invisível na nossa eficiência.
        </p>
        <p>
          O projeto foi estruturado em três grandes momentos: a criação de uma fundação de governança, a aplicação tática no meu produto principal e a preparação estrutural para o uso de Inteligência Artificial no design.
        </p>

        <h3>Fase 1: O Diagnóstico do Caos e a Reestruturação do Figma</h3>
        <p>Antes de propor qualquer solução, mapeei três dores principais que drenavam nossa produtividade:</p>
        <ul>
          <li><strong>Baixa Encontrabilidade:</strong> Arquivos espalhados pelo dashboard exigiam um esforço investigativo excessivo para localizar uma simples tela de produção.</li>
          <li><strong>Ruído Cross-Functional:</strong> Parceiros de Service Design, UX Writing e stakeholders sofriam para navegar nos arquivos e entender o status real dos projetos.</li>
          <li><strong>Desconexão de Processos:</strong> O time adotava o Duplo Diamante na teoria, mas no Figma resultava em amontoados de telas sem contexto.</li>
        </ul>
        
        <p>Para resolver isso, estruturei uma nova Arquitetura de Informação alinhada à realidade da nossa área, organizada na seguinte hierarquia estrutural:</p>
        <ul>
          <li><strong>Nível Gerencial (Macro):</strong> Centralização de todo o ecossistema sob a pasta matriz da gerência de "Pagamentos", estabelecendo uma fronteira clara de busca para o nosso time.</li>
          <li><strong>Nível de Coordenações e Produtos (Meso):</strong> Estruturação de pastas para cada coordenação (RTs), que se ramificavam nas pastas de cada produto. Para garantir a organização de cada produto, o ambiente foi dividido estritamente em Evolução do Produto (dia a dia), Visioning (conceitos estratégicos) e Pesquisas e Testes (blindando o histórico de UX).</li>
          <li><strong>Nível de Arquivos (Micro):</strong> Substituição de arquivos soltos por Blueprints — templates padronizados baseados no processo de design (Discovery, Explorações, Handoff, Critiques e Testes).</li>
        </ul>

        <h3>Fase 2: Do Processo à Prática (Painel Interativo em "Meus Pagamentos")</h3>
        <p>
          Com a governança operando, apliquei essa infraestrutura para elevar a maturidade do produto "Meus Pagamentos". Utilizei os arquivos agora organizados para estruturar a navegação dos fluxos, das jornadas end-to-end, do acompanhamento de métricas, e do histórico e links de cada entrega.
        </p>
        <p>
          Tudo isso foi consolidado na construção de um painel interativo utilizando o <strong>Figma Make</strong>. Essa iniciativa teve um impacto duplo: além de imortalizar a documentação do produto com clareza, ela estimulou ativamente a adoção prática do Figma Make no exato momento em que o time de design estava sendo cobrado pelas lideranças para utilizar a nova ferramenta.
        </p>

        <h3>Fase 3: A Visão de Futuro (Preparação para IA e MCP)</h3>
        <p>
          A reestruturação da gerência de Pagamentos tinha um objetivo futuro estratégico: preparar a equipe para os novos desafios tecnológicos. Com um tempo de adaptação garantido para que todos os designers migrassem para o novo modelo, o plano era que a nova estrutura facilitasse a transformação dos nossos arquivos de Handoff em contexto para IA.
        </p>
        <p>
          O objetivo era ajudar designers — que operavam com tempo escasso — a transformar seus Handoffs padronizados em arquivos <code>.md</code>. Isso viabilizaria a adoção do <strong>MCP (Model Context Protocol)</strong>, elevando drasticamente a qualidade do QA de Design e permitindo futuras criações de protótipos rápidos e de alta fidelidade com o auxílio direto de Inteligência Artificial.
        </p>

        <h3>O Legado</h3>
        <p>
          Infelizmente, essas propostas de integração com IA não chegaram a acontecer, pois meu ciclo na empresa foi encerrado devido a um desligamento. No entanto, a implementação das fases iniciais gerou uma redução drástica de tempo produtivo desperdiçado em busca e alinhamento.
        </p>
        
        <blockquote>
          Este case comprova que a verdadeira atuação do designer sistêmico vai além do desenho de telas: envolve otimizar processos, reduzir resíduos de tempo e preparar a infraestrutura tecnológica de um time inteiro para o futuro.
        </blockquote>
      </>
    ),
  },

  'payments-hub': {
    en: (
      <>
        <p>
          Within a large-scale financial institution, I led the evolution of a digital payment experience dedicated to helping customers organize their financial routines. Originally, "Meus Pagamentos" (My Payments) functioned primarily as a shortcut screen—a simple gateway to disparate payment features.
        </p>
        <p>
          Despite its basic structure, it handled a significant volume of monthly accesses, turning it into a strategic leverage point. The challenge shifted from merely facilitating shortcuts to transforming an entry point into a comprehensive financial organization hub.
        </p>

        <h3>The Problem: A Fragmented Ecosystem</h3>
        <p>
          Customers had to navigate disconnected paths to manage their financial commitments, facing issues such as multiple journeys for different payment types, a lack of consolidated overview, and poor visibility over what was paid, pending, or scheduled. Common customer pain points included:
        </p>
        <ul>
          <li><strong>Cognitive Overload:</strong> "I get lost in all the payment options."</li>
          <li><strong>Lack of Predictability:</strong> "I don't know what's already scheduled versus what is still due."</li>
          <li><strong>Proactive Friction:</strong> "Bills feel like something I have to hunt down rather than things that surface automatically."</li>
        </ul>

        <h3>Solution & Scope of Work</h3>
        <p>
          Leveraging behavioral data and customer research, we pivoted toward a unified vision: the <strong>Payments Hub</strong>. My hands-on scope as Product Designer covered key strategic initiatives:
        </p>
        <ul>
          <li><strong>Conversational Assistant:</strong> Assisted in designing and accelerating the rollout of an integrated conversational experience, mapping multi-channel touchpoints (WhatsApp, email, notifications).</li>
          <li><strong>Commitments & Batch Payments:</strong> Modernized the calendar and bill management experience, introducing batch payments so users could settle multiple accounts in a single, seamless flow.</li>
          <li><strong>Dynamic Smart Automations ("Facilite seu dia a dia"):</strong> Designed proactive carousels suggesting custom automations, Pix keys setup, and recurring transfer options based on user context.</li>
        </ul>

        <h3>Cross-Functional Collaboration & Governance</h3>
        <p>
          Operating at the intersection of business goals, user needs, and engineering constraints, I collaborated closely with Product, Content/UX Writing, and specialized squads (Pix, Autodebit, Limits). Every flow and documentation artifact served as a shared source of truth across disciplines, adopting the latest versions of the Design System.
        </p>

        <h3>Impact & Metrics</h3>
        <p>
          The success of the experience was tracked across usage dimensions, feedback loops, and customer satisfaction metrics. During my tenure, Customer Satisfaction (Likert scale) rose from <strong>33% to 59%</strong> within an ecosystem serving over 10 million monthly users.
        </p>
        
        <blockquote>
          This project reinforced that design in financial products is about building bridges between Client, Business, Technology, and Experience — turning friction into clarity.
        </blockquote>
      </>
    ),
    
    pt: (
      <>
        <p>
          Dentro de uma grande instituição financeira, atuei na evolução da experiência de pagamentos digitais, em uma frente responsável por ajudar clientes a organizarem sua rotina financeira. Antes dessa evolução, a área de "Meus Pagamentos" funcionava majoritariamente como uma tela de atalhos — uma porta de entrada simples para diferentes funcionalidades dispersas.
        </p>
        <p>
          Apesar da simplicidade inicial, o alto volume de acessos mensais transformou a tela em um ponto ultraestratégico. O desafio deixou de ser apenas facilitar cliques e passou a ser: <em>como transformar um ponto de entrada em um hub onde o cliente consegue visualizar, organizar e acompanhar sua vida financeira?</em>
        </p>

        <h3>O Problema: Ecossistema Fragmentado</h3>
        <p>
          Os clientes precisavam navegar por caminhos desconectados para encontrar informações sobre seus compromissos financeiros. As principais dores mapeadas incluíam múltiplos fluxos para diferentes tipos de pagamento, baixa consolidação de compromissos e dificuldade em prever o que estava pago, pendente ou programado. Falas recorrentes dos clientes refletiam isso:
        </p>
        <ul>
          <li><strong>Falta de Clareza:</strong> "Eu me perco nas opções de pagamento."</li>
          <li><strong>Previsibilidade:</strong> "Não sei direito o que já está programado e o que ainda falta pagar."</li>
          <li><strong>Proatividade:</strong> "Parece que eu tenho que procurar minhas contas, em vez delas aparecerem para mim."</li>
        </ul>

        <h3>Solução e Escopo de Atuação</h3>
        <p>
          Com base em dados de uso e pesquisas, estruturamos a visão do <strong>Hub de Pagamentos</strong>. Minha atuação como Product Designer envolveu frentes críticas de entrega:
        </p>
        <ul>
          <li><strong>Assistente Conversacional:</strong> Auxiliei na criação e aceleração do lançamento de um assistente conversacional, mapeando interações integradas com canais de comunicação (WhatsApp, e-mail, notificações).</li>
          <li><strong>Gestão de Compromissos e Pagamento em Lote:</strong> Conduzi o handoff e a modernização da área de compromissos e calendário, estruturando a jornada de pagamento em lote para que o cliente pudesse quitar múltiplos boletos em um único fluxo.</li>
          <li><strong>Automações Dinâmicas ("Facilite seu dia a dia"):</strong> Antecipei a primeira versão de um carrossel dinâmico baseado no momento do cliente, sugerindo atalhos inteligentes (criação de chaves Pix, automação de pagamentos recorrentes).</li>
        </ul>

        <h3>Colaboração e Governança Cross-Functional</h3>
        <p>
          Atuei conectando restrições técnicas, regras de negócio e necessidades humanas. Trabalhei lado a lado com Produto, Engenharia e o time de Content/UX Writing, alinhando fluxos às diretrizes atualizadas do Design System do banco.
        </p>

        <h3>Resultados e Impacto nas Métricas</h3>
        <p>
          O sucesso da experiência foi acompanhado por meio de dados de uso, pesquisas de percepção e indicadores quantitativos. Durante minha atuação no produto, a Satisfação do Cliente (escala Likert) subiu de <strong>33% para 59%</strong> em um ecossistema com mais de 10 milhões de acessos mensais.
        </p>
        
        <blockquote>
          Este projeto consolidou uma visão essencial: em produtos financeiros complexos, o bom design não decora telas — ele constrói pontes sólidas entre o Cliente, o Negócio e a Tecnologia.
        </blockquote>
      </>
    ),
  },

  'open-finance': {
    en: (
      <>
        <p>
          During my tenure as a Product Designer in digital financial products, I participated in the evolution of experiences related to the payments and Open Finance ecosystem. Open Finance represents one of the most complex scenarios for financial digital products because it combines layers that are normally invisible to the customer: regulations, business rules, system integrations, security, technical dependencies, and cross-product journeys.
        </p>
        <p>
          Beyond building new features, the work involved a recurring challenge in large-scale tech products: modernizing legacy experiences built on previous product iterations and older component libraries, while ensuring full consistency, accessibility, and improved usability.
        </p>

        <h3>The Challenge: Balancing Modernization and Ecosystem Complexity</h3>
        <p>
          The payments ecosystem was in constant motion due to regulatory shifts, technological advancements, and evolving customer needs. The work required balancing two parallel fronts:
        </p>
        <ul>
          <li><strong>Experience Modernization:</strong> Updating components, adapting to new visual guidelines, improving consistency across desktop and mobile journeys.</li>
          <li><strong>Ecosystem Complexity:</strong> Navigating regulatory compliance (Central Bank guidelines), technical limitations, and cross-functional dependencies.</li>
        </ul>
        
        <blockquote>
          The core question was: How to modernize existing experiences and design new solutions while keeping things radically simple for the customer in a highly complex environment?
        </blockquote>

        <h3>Role & Cross-Functional Approach</h3>
        <p>
          Operating within the payments-focused Open Finance front, my scope connected User Needs + Business Goals + Technology + Regulation + Design System. Key activities included:
        </p>
        <ul>
          <li><strong>Journey Mapping & Architecture:</strong> Analyzing current desktop/mobile flows, understanding Central Bank experience guidelines, and assessing technical impacts.</li>
          <li><strong>Legacy Modernization:</strong> Auditing existing interfaces, adapting them to new Design System components, and reviewing interactions without breaking continuity for active users.</li>
          <li><strong>Collaborative Alignment:</strong> Bridging Product, Engineering, Business, Research, and specialized squads (such as Data and Payments) to prevent isolated silos and build a cohesive ecosystem vision.</li>
        </ul>

        <h3>The Role of Design in Regulated Products</h3>
        <p>
          In regulated financial environments, the biggest challenge is rarely drawing a new screen. It is answering questions like: How do you explain a feature the customer has never seen before? How do you build trust in automated actions? How do you balance innovation with tight security regulations? Design acts as the translation layer between intricate systems and human beings.
        </p>

        <h3>Key Learnings</h3>
        <p>
          Working with Open Finance reinforced a core conviction: the more complex the system behind a product, the simpler the front-end experience must feel. 
        </p>
        
        <blockquote>
          Designing complex products isn't just about creating brand-new solutions. It is about understanding what already exists, finding viable paths for evolution, and turning heavy systemic rules into human experiences.
        </blockquote>
      </>
    ),
    
    pt: (
      <>
        <p>
          Durante minha atuação como Product Designer em produtos financeiros digitais, participei da evolução de experiências relacionadas ao ecossistema de pagamentos e Open Finance. O Open Finance representa um dos cenários mais complexos para produtos digitais, pois combina camadas que normalmente ficam invisíveis para o cliente: regulamentações, regras de negócio, integrações entre sistemas, segurança e dependências técnicas.
        </p>
        <p>
          Além de construir novas soluções, o trabalho envolvia um desafio recorrente: modernizar jornadas legadas. Parte das experiências funcionava em ambientes desktop e mobile construídos em versões anteriores, utilizando componentes antigos. Com a evolução do Design System, surgiu a necessidade de atualizar essas jornadas mantendo consistência, acessibilidade e fluidez.
        </p>

        <h3>O Desafio: Complexidade Ecossistêmica e Modernização</h3>
        <p>
          O ecossistema estava em constante transformação impulsionado por mudanças regulatórias e novas necessidades dos clientes. O trabalho exigia equilibrar duas frentes simultâneas:
        </p>
        <ul>
          <li><strong>Modernização Visual e Estrutural:</strong> Atualização de componentes, adaptação a novos padrões e refinamento de jornadas desktop e mobile.</li>
          <li><strong>Navegação Regulatória:</strong> Atendimento estrito aos requisitos do Guia de Experiência do Banco Central, limitantes técnicos e alinhamento entre múltiplas áreas.</li>
        </ul>
        
        <blockquote>
          A pergunta central era: Como modernizar experiências existentes e criar novas soluções mantendo simplicidade para o cliente em um ambiente altamente complexo?
        </blockquote>

        <h3>Atuação e Colaboração Cross-Functional</h3>
        <p>
          Atuei na frente de Open Finance conectando Cliente, Negócio, Tecnologia, Regulamentação e Design System. Minhas principais frentes envolveram:
        </p>
        <ul>
          <li><strong>Análise de Jornadas:</strong> Compreensão profunda das regras do Banco Central, mapeamento de fluxos atuais e levantamento de impactos técnicos.</li>
          <li><strong>Evolução de Legados:</strong> Migração de interfaces antigas para os novos padrões do Design System sem quebrar a continuidade para quem já utilizava o serviço.</li>
          <li><strong>Alinhamento Sistêmico:</strong> Trabalho colaborativo com Produto, Engenharia e frentes irmãs (como Dados e Pagamentos), garantindo que o design funcionasse de forma integrada e não em silos isolados.</li>
        </ul>

        <h3>O Papel do Design em Produtos Regulados</h3>
        <p>
          Em produtos regulados, o maior desafio não é desenhar interfaces, mas responder a perguntas difíceis: <em>Como explicar uma funcionalidade inédita? Como gerar confiança em fluxos automatizados? Como equilibrar inovação e rigor normativo?</em> O Design atua aqui como uma camada essencial de tradução entre a engrenagem sistêmica e a percepção humana.
        </p>

        <h3>Aprendizados e Reflexão Final</h3>
        <p>
          Trabalhar com Open Finance consolidou uma visão definitiva na minha trajetória: quanto mais complexo é o sistema por trás de um produto, mais simples e intuitiva deve ser a experiência na ponta.
        </p>
        
        <blockquote>
          Projetar produtos complexos não é apenas criar novas soluções do zero. É compreender o legado, desenhar caminhos viáveis de evolução e transformar a alta complexidade técnica em experiências humanas e confiáveis.
        </blockquote>
      </>
    ),
  },

  'receipts': {
    en: (
      <>
        <p>
          During my tenure as a Product Designer in a large-scale financial institution, I led the evolution of a critical digital journey for customers: the consultation and sharing of payment receipts. Receipts play an essential role in people's financial lives, serving moments of transaction confirmation, organization, dispute, and tracking.
        </p>
        <p>
          Due to confidentiality constraints, specific product details and internal interfaces cannot be displayed, but here I share the process, challenges, and key learnings involved in modernizing this experience.
        </p>

        <h3>The Initial Scenario & Legacy Context</h3>
        <p>
          The challenge began even before the redesign phase. The product was navigating a period of design organization modernization, which included a massive tool migration and Design System evolution. When I joined, part of the product's history was tied to legacy files and previous workflows. Rebuilding the context required mapping existing screens, understanding current flows, and identifying patterns directly from production.
        </p>

        <h3>The Challenges</h3>
        <p>The journey presented clear opportunities for enhancement across multiple dimensions:</p>
        <ul>
          <li><strong>Information Clarity & Hierarchy:</strong> Better data layout for quick comprehension.</li>
          <li><strong>Navigation & Organization:</strong> Reducing friction in finding past documents.</li>
          <li><strong>Technical Constraints:</strong> Working around legacy storage systems and massive historical data volumes.</li>
        </ul>
        
        <blockquote>
          The central question was: How to modernize an existing experience without losing the trust inherent to a critical financial journey?
        </blockquote>

        <h3>Approach & Cross-Functional Collaboration</h3>
        <p>
          Working closely with Product, Engineering, Research, and specialized business units, I shifted the focus from a "screen-based" mindset to a "needs-based" approach. Users needed simple outcomes: viewing receipts over a longer period, easier filtering, and intuitive categorization.
        </p>
        <p>
          Beyond the customer-facing journey, I also modernized an internal service platform utilized by operations teams. By prototyping and testing directly with internal users, we validated proposals that increased daily service efficiency.
        </p>

        <h3>Results & Learnings</h3>
        <p>
          This project reinforced a core principle of Product Design: modernizing an existing product isn't just about updating an interface. It requires recovering lost knowledge, understanding human needs, negotiating with legacy technology, and building alignment.
        </p>
        
        <blockquote>
          In financial products where trust is paramount, every experience improvement must balance: Client + Technology + Business + Operations.
        </blockquote>
      </>
    ),
    
    pt: (
      <>
        <p>
          Durante minha atuação como Product Designer em uma instituição financeira de grande escala, participei da evolução de uma jornada digital essencial para clientes: a consulta e o compartilhamento de comprovantes. Os comprovantes possuem um papel fundamental na vida financeira das pessoas, sendo utilizados em momentos de confirmação, organização, contestação e acompanhamento de transações.
        </p>
        <p>
          Por questões de confidencialidade, detalhes específicos do produto e interfaces internas não serão apresentados, mas compartilho aqui o processo, os desafios e os aprendizados envolvidos na evolução dessa experiência.
        </p>

        <h3>O Cenário Inicial e Sistemas Legados</h3>
        <p>
          O desafio começou antes mesmo do redesenho da interface. O produto passava por um momento de modernização da organização de design, incluindo migração de ferramentas e evolução do Design System. Grande parte do contexto visual precisou ser reconstruída a partir do ambiente de produção, mapeando telas e recuperando o histórico operacional.
        </p>
        <p>
          A proposta visual precisava conversar com uma estrutura tecnológica antiga de armazenamento, lidando com um grande volume histórico de dados, modelos de dados legados e a necessidade de uma evolução gradual. O design teve de responder a uma pergunta central:
        </p>
        
        <blockquote>
          Como modernizar uma experiência existente sem perder a confiança de uma jornada financeira crítica?
        </blockquote>

        <h3>Atuação e Colaboração Multidisciplinar</h3>
        <p>
          Em parceria estreita com Produto, Engenharia, Pesquisa e áreas especialistas, direcionamos o foco de uma abordagem baseada em "telas" para uma abordagem baseada em "necessidades reais". Identificamos que os usuários precisavam de melhorias simples, como:
        </p>
        <ul>
          <li><strong>Amplitude de Consulta:</strong> Expansão do período disponível para busca de comprovantes.</li>
          <li><strong>Filtros Avançados:</strong> Melhor organização por categorias e tipos de transação.</li>
          <li><strong>Ferramentas Internas:</strong> Modernização paralelamente de uma plataforma de atendimento utilizada por equipes de suporte, validando propostas diretamente com os usuários internos.</li>
        </ul>

        <h3>Resultados e Aprendizados</h3>
        <p>
          Esse projeto reforçou uma visão essencial sobre Product Design: modernizar um produto corporativo existente não significa apenas atualizar sua interface. Significa recuperar conhecimento perdido, entender pessoas, negociar com restrições tecnológicas e construir alinhamento interno.
        </p>
        
        <blockquote>
          Em produtos financeiros, onde a confiança é o pilar central, cada melhoria de experiência deve equilibrar de forma harmoniosa: Cliente + Tecnologia + Negócio + Operação.
        </blockquote>
      </>
    ),
  }
};