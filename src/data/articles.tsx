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
        <h3 className="!mt-0 !border-none !pl-0 text-xl md:text-2xl text-zinc-400 font-normal">
          Figma Governance: A three-tier structure for operational efficiency at scale
        </h3>

        <p>
          In the ecosystem of one of the country's largest financial institutions, the launch speed and modernization of digital payment products are critical to maintaining market leadership. During my nearly 4-year tenure as a Product Designer at Itaú, working within the Payments division—an area supporting complex financial journeys for millions of daily active users—I faced a challenge that went far beyond drawing interfaces.
        </p>

        <h3>The Challenge: Invisible Collapse</h3>
        <p>
          The accelerated growth of teams and products was creating an invisible collapse in our internal efficiency. Scattered files and the absence of operational standards created a massive effort just to locate final screens or understand the UX context across different squads. I mapped three main pain points draining our daily productivity:
        </p>
        <ul>
          <li><strong>Low Discoverability:</strong> Scattered files required excessive investigative effort just to locate a production screen.</li>
          <li><strong>Cross-Functional Noise:</strong> Service Design partners, UX Writers, and stakeholders struggled to navigate files and understand actual project statuses.</li>
          <li><strong>Process Disconnection:</strong> The team adopted the Double Diamond theoretically, but in Figma, it resulted in contextless clusters of screens.</li>
        </ul>

        {/* <img src="/images/prints/figma-organization.jpg" alt="Estrutura de pastas no Figma" className="w-full rounded-xl border border-zinc-800 my-10 shadow-[0_8px_30px_rgba(0,0,0,0.5)]" /> */}
        
        <h3>Strategy & The 3-Tier Architecture</h3>
        <p>
          I based my strategy on the understanding that, in large operations, Figma acts as a sociotechnical system that requires structured governance to preserve organizational knowledge. I designed a new Information Architecture tailored to our specific reality, structured in three levels:
        </p>
        <ul>
          <li><strong>Management Level (Macro):</strong> Centralizing the entire ecosystem under the "Payments" management root folder, establishing a clear search boundary.</li>
          <li><strong>Coordination & Product Level (Meso):</strong> Creating folders for each coordination (RTs), divided strictly into Product Evolution (daily work), Visioning (strategic concepts), and Research & Tests (protecting UX history).</li>
          <li><strong>File Level (Micro):</strong> Replacing loose files with Blueprints—standardized templates reflecting our design process (Discovery, Explorations, Handoff, Critiques, and Tests).</li>
        </ul>

        <h3>From Practice to AI Preparation</h3>
        <p>
          With governance active, I applied this infrastructure to elevate the "Meus Pagamentos" (My Payments) product. I consolidated documentation into an interactive dashboard using <strong>Figma Make</strong>, actively encouraging its adoption by the design team.
        </p>
        <p>
          The final strategic goal was preparing the team for Artificial Intelligence. By organizing files systematically, we aimed to transform standardized Handoffs into <code>.md</code> files. This would enable the future adoption of <strong>MCP (Model Context Protocol)</strong>, optimizing Design QA and allowing the creation of AI-assisted high-fidelity prototypes.
        </p>

        <h3>Results & Impact</h3>
        <p>
          The implementation drastically reduced the productive time wasted on file searches and unnecessary alignment meetings. The reorganization eliminated cognitive load for designers starting new deliveries and provided instant visibility for leadership.
        </p>
        
        <blockquote>
          This project proves that the true role of a systemic designer in complex corporate environments goes far beyond drawing screens. Optimizing processes reduces operational waste, preserves knowledge history, and prepares an entire team's technological infrastructure for future automations.
        </blockquote>
      </>
    ),
    
    pt: (
      <>
        <h3 className="!mt-0 !border-none !pl-0 text-xl md:text-2xl text-zinc-400 font-normal">
          Governança no Figma: Estrutura em três camadas para eficiência operacional em design
        </h3>

        <p>
          No ecossistema de uma das maiores e mais tradicionais instituições financeiras do país, a velocidade de lançamento e a modernização de produtos são críticas para manter a liderança de mercado. Durante meus quase 4 anos atuando como Product Designer no Banco Itaú, dentro da Gerência de Pagamentos — uma área responsável por sustentar jornadas financeiras complexas para milhões de usuários ativos diariamente — deparei-me com um desafio que ia muito além de desenhar interfaces.
        </p>

        <h3>O Desafio: Colapso Invisível</h3>
        <p>
          O crescimento acelerado de times e produtos estava gerando um colapso invisível na eficiência interna da gerência. Arquivos dispersos e a ausência de padrões operacionais criavam um esforço gigantesco para localizar telas finais ou para compreender o contexto de decisões de UX entre várias squads distintas. Antes de propor soluções, mapeei três dores principais que drenavam a produtividade diária:
        </p>
        <ul>
          <li><strong>Baixa encontrabilidade:</strong> Arquivos espalhados pelo dashboard exigiam esforço investigativo excessivo para localizar uma simples tela de produção.</li>
          <li><strong>Ruído cross-functional:</strong> Parceiros de Service Design, UX Writing e stakeholders sofriam para navegar nos arquivos e entender o status real de cada projeto.</li>
          <li><strong>Desconexão de processos:</strong> O time adotava o Duplo Diamante na teoria, mas a falta de estrutura no Figma resultava em amontoados de telas sem contexto.</li>
        </ul>

        {/* <img src="/images/prints/figma-organization.jpg" alt="Estrutura de pastas no Figma" className="w-full rounded-xl border border-zinc-800 my-10 shadow-[0_8px_30px_rgba(0,0,0,0.5)]" /> */}
        
        <h3>Estratégia e a Arquitetura em 3 Níveis</h3>
        <p>
          A estratégia foi fundamentada no entendimento de que, em grandes operações, o Figma funciona como um sistema sociotécnico que exige governança estruturada para preservar o conhecimento organizacional. Decidi desenhar uma nova Arquitetura de Informação dividida em três níveis hierárquicos (Macro, Meso e Micro):
        </p>
        <ul>
          <li><strong>Nível Gerencial (Macro):</strong> Centralizei o ecossistema sob a pasta matriz da gerência de Pagamentos, estabelecendo uma fronteira de busca clara.</li>
          <li><strong>Nível de Coordenações e Produtos (Meso):</strong> Organizei em pastas dividindo rigorosamente cada produto em pastas de arquivos como Evolução do Produto (dia a dia), Visioning (conceitos estratégicos) e Pesquisas e Testes (historização de UX).</li>
          <li><strong>Nível de Arquivos (Micro):</strong> Substituí arquivos avulsos por blueprints — templates padronizados baseados no processo de design (Discovery, Explorações, Handoff, Critiques e Testes).</li>
        </ul>

        <h3>Da Prática à Preparação para IA</h3>
        <p>
          Com a governança ativa, apliquei essa infraestrutura no produto Meus Pagamentos. Consolidei toda a documentação em um painel interativo utilizando a ferramenta <strong>Figma Make</strong>, o que incentivou a adoção prática pelo time de design.
        </p>
        <p>
          O objetivo estratégico final era preparar a infraestrutura do time para novos desafios tecnológicos. Transformando os handoffs em arquivos Markdown (<code>.md</code>), viabilizaríamos a adoção futura do <strong>MCP (Model Context Protocol)</strong>, otimizando o QA de design e permitindo a criação de protótipos de alta fidelidade com auxílio direto de Inteligência Artificial.
        </p>

        <h3>Resultados e Impacto</h3>
        <p>
          A implementação gerou uma redução drástica no tempo produtivo desperdiçado em buscas de arquivos e reuniões desnecessárias. A reorganização eliminou a carga cognitiva que os designers enfrentavam ao iniciar novas entregas e gerou visibilidade instantânea dos projetos para a liderança.
        </p>
        
        <blockquote>
          Este projeto provou que a verdadeira atuação de um designer sistêmico em ambientes corporativos complexos vai muito além do desenho de telas. A otimização de processos e a governança de ferramentas reduzem o desperdício operacional, preservam o histórico e preparam a equipe para as automações do futuro.
        </blockquote>
      </>
    ),
  },

  'payments-hub': {
    en: (
      <>
        <h3 className="!mt-0 !border-none !pl-0 text-xl md:text-2xl text-zinc-400 font-normal">
          Financial Centralization: Unifying multiple disconnected flows into a single Payments Hub
        </h3>

        <p>
          During my time as a Product Designer at Itaú, I worked on the evolution of digital payment experiences. The "Meus Pagamentos" (My Payments) product, despite its high volume of daily accesses, historically operated as a simplified, static shortcut screen connecting the customer to disparate features across the app.
        </p>

        <h3>The Challenge: A Fragmented Ecosystem</h3>
        <p>
          The rapid organic growth of the organization led different teams to develop payment features at different times. This resulted in a fragmented ecosystem where customers had to navigate confusing paths to pay and track financial commitments. 
        </p>
        <p>
          During user interviews, a clear pattern emerged: paying bills was a confusing process, with users alternating between different bank apps due to scattered balances and missing invoices. They lacked clarity on what was scheduled and strongly desired proactive solutions rather than actively hunting down their bills.
        </p>

        <h3>Strategy & Structural Decisions</h3>
        <p>
          The central decision was to shift from drawing isolated interfaces to unifying the end-to-end journey. To support this scale and ensure consistency, I initiated the componentization of the area's screens, laying the groundwork for a Team Library in Figma intended for reuse by other design squads.
        </p>

        <h3>The Process & Tactical Deliveries</h3>
        <p>The project development was structured around collaboration and iterative improvements:</p>
        <ul>
          <li><strong>Boleto Search (CPF) & Primary Bank Goal:</strong> Based on interview insights regarding multi-app usage, we kept the "Boleto Search" feature prominent. I evolved its UI from a generic card to a streamlined title and status indicator (Active/Inactive). This simple visual shift significantly increased feature activation, directly impacting our primary bank (principality) business target.</li>
          <li><strong>Batch Payments & Cognitive Load Reduction:</strong> I collaborated closely with another product's design team to integrate their "Batch Payment" feature directly into the Hub. This joint effort combined related functionalities, drastically reducing cognitive load, screen repetition, and overall friction for the user.</li>
          <li><strong>Dynamic Smart Automations:</strong> Starting from an existing MVP, I led the continuous evolution of a dynamic carousel offering contextual shortcuts. My work heavily focused on collaborating with other payment squads to integrate new features and establishing robust technical documentation for future iterations.</li>
        </ul>

        <h3>Results & Impact</h3>
        <p>
          The consolidated Payments Hub experience significantly transformed the financial management of millions of customers. During my direct involvement, Customer Satisfaction (Likert scale) rose from <strong>33% to 59%</strong>. This growth in an ecosystem serving over 10 million monthly accesses allowed the division to successfully meet its strategic business target for the year.
        </p>
        
        <blockquote>
          The evolution of the Payments Hub consolidated the practical lesson that UX decisions must be directly connected to real business impact metrics and behavior. Operating in a system of this scale proved the viability of overcoming operational complexities through clear processes and cross-team collaboration.
        </blockquote>
      </>
    ),
    
    pt: (
      <>
        <h3 className="!mt-0 !border-none !pl-0 text-xl md:text-2xl text-zinc-400 font-normal">
          Centralização financeira: Como unificar múltiplos fluxos desconectados em um único hub de pagamentos
        </h3>

        <p>
          Durante minha atuação como Product Designer no Banco Itaú, atuei na evolução da experiência de pagamentos digitais. O produto Meus Pagamentos, apesar de possuir alto volume de acessos diários, funcionava de maneira simplificada, operando historicamente como uma porta de entrada estática de atalhos que conectava o cliente a ferramentas dispersas pelo aplicativo.
        </p>

        <h3>O Desafio: Ecossistema Fragmentado</h3>
        <p>
          O crescimento orgânico da organização fez com que diferentes equipes desenvolvessem recursos de pagamento em momentos distintos. Isso resultou em um ecossistema fragmentado, onde os clientes precisavam percorrer caminhos desconectados e confusos para gerir compromissos financeiros. 
        </p>
        <p>
          Durante entrevistas com usuários, um padrão claro emergiu: a jornada de pagamento de contas era confusa, com clientes alternando entre diferentes aplicativos bancários devido a saldos dispersos e boletos não visualizados. Os usuários sentiam falta de clareza sobre o que já estava programado e manifestavam o desejo de receber centralização e proatividade.
        </p>

        <h3>Estratégia e Decisões Estruturais</h3>
        <p>
          A decisão central foi migrar do desenho isolado de interfaces para a unificação das jornadas. Para suportar essa escala, iniciei a estruturação e componentização das telas da área, estabelecendo as bases de uma Team Library no Figma focada no reuso e consistência para outros times de design.
        </p>

        <h3>O Processo e Entregas Táticas</h3>
        <p>O desenvolvimento do projeto foi estruturado em forte colaboração cross-functional e evolução contínua:</p>
        <ul>
          <li><strong>Buscador de Boletos e Principalidade:</strong> Mapeando a dor do uso de múltiplos apps, mantivemos a busca de boletos por CPF em extremo destaque. Evoluí a interface de um modelo genérico de card para um elemento direto composto por título e status (Ativo/Desativado). Essa mudança visual aumentou consideravelmente a ativação da funcionalidade, impulsionando a meta de principalidade bancária.</li>
          <li><strong>Pagamento em Lote e Redução Cognitiva:</strong> Em colaboração direta com outro time de design, atuamos para integrar a funcionalidade de "Pagamento em lote" para dentro do Hub. Esse esforço conjunto combinou funcionalidades sobrepostas, reduzindo repetições de telas e diminuindo drasticamente a carga cognitiva do cliente.</li>
          <li><strong>Automações Dinâmicas (Facilite seu dia a dia):</strong> A partir de um MVP já existente, atuei na evolução contínua do carrossel inteligente. O trabalho focou na colaboração com outras squads de pagamento para trazer funcionalidades relevantes e na documentação técnica rigorosa para viabilizar as versões futuras.</li>
        </ul>

        <h3>Resultados e Impacto</h3>
        <p>
          A experiência consolidada do Hub de Pagamentos transformou o gerenciamento financeiro de milhões de clientes. Durante o período do meu envolvimento direto no produto, a Satisfação do Cliente (medida através da escala Likert) subiu de <strong>33% para 59%</strong>[cite: 2]. Esse crescimento em um ecossistema que transaciona mais de 10 milhões de acessos mensais permitiu que a gerência atingisse o seu target estratégico de negócios.
        </p>
        
        <blockquote>
          A evolução do Hub de Pagamentos consolidou o aprendizado de que decisões de UX precisam estar conectadas a métricas de impacto real de negócios. A atuação como designer num sistema desse porte reforçou meu repertório de superar complexidades operacionais por meio de colaboração entre times e metodologias consistentes de design.
        </blockquote>
      </>
    ),
  },

  'open-finance': {
    en: (
      <>
        <h3 className="!mt-0 !border-none !pl-0 text-xl md:text-2xl text-zinc-400 font-normal">
          Regulatory Translation: Simplifying the Open Finance consent journey
        </h3>

        <p>
          Over the course of my nearly 4 years acting as a Product Designer at Itaú, I worked on digital products aimed at evolving the payments and Open Finance ecosystem. This environment deals with crucial financial transactions and data sharing, where clarity and security are fundamental for the millions of customers interacting with the institution daily.
        </p>

        <h3>The Challenge: Navigating Systemic Complexity</h3>
        <p>
          The Open Finance ecosystem represents one of the most complex scenarios in digital product design. It combines invisible layers such as rigid regulations, complex business rules, security integrations, and legacy technology dependencies. The main challenge was to modernize legacy journeys (operating on desktop and mobile with outdated components) and adapt them to the new corporate Design System. 
        </p>
        <p>
          The guiding question was: <em>How do we modernize existing experiences and create new solutions while keeping things radically simple for the customer in a highly complex regulatory environment?</em>
        </p>

        {/* <img src="/images/prints/open-finance.jpg" alt="Fluxo Open Finance" className="w-full rounded-xl border border-zinc-800 my-10 shadow-[0_8px_30px_rgba(0,0,0,0.5)]" /> */}

        <h3>Strategy & Decisions</h3>
        <p>
          The strategy was based on the premise that simplicity in regulated systems is the result of technical negotiation, not just aesthetic redesign. I positioned design as a translation layer between data system complexity and human perception, ensuring the user only needed to understand the next step without decoding the underlying technical processes. 
        </p>
        <p>
          The core decision was using high-fidelity prototypes as active technical negotiation tools with engineering and product teams before writing any code, guaranteeing that usability proposals were viable against system limitations.
        </p>

        <h3>Process & Collaborative Alignment</h3>
        <p>The project was executed through multidisciplinary cooperation, divided into functional stages:</p>
        <ul>
          <li><strong>Deep Journey Analysis:</strong> Studied the normative requirements of the Central Bank's Experience Guide, mapping existing flows to identify technological dependencies and impacts.</li>
          <li><strong>Legacy Migration & Evolution:</strong> Led the transition of old mobile and desktop interfaces to the updated Design System patterns, ensuring consistency and accessibility without breaking familiar navigation logic.</li>
          <li><strong>Systemic Alignment:</strong> Worked closely with engineers so that the design didn't operate in a silo, adjusting consent and sharing screens according to what the technological integrations could actually support.</li>
        </ul>

        <h3>Results & Impact</h3>
        <p>
          The main result was the delivery of a consistent regulatory flow that the engineering team could fully support and successfully implement. The integrated experience reduced user cognitive load, translating complex data rules into intelligible steps. Qualitatively, the unified design rebuilt brand consistency and increased consent clarity, helping to build trust in automated financial flows. 
        </p>
        
        <blockquote>
          Working with Open Finance demonstrated that in highly regulated corporate environments, product design plays a strategic role in connecting human needs to technical and normative possibilities. User-friendliness is the ultimate result of decoding complex systems transparently and securely.
        </blockquote>
      </>
    ),
    
    pt: (
      <>
        <h3 className="!mt-0 !border-none !pl-0 text-xl md:text-2xl text-zinc-400 font-normal">
          Tradução regulatória: Simplificação da jornada de consentimento no Open Finance
        </h3>

        <p>
          Ao longo dos meus quase 4 anos atuando como Product Designer no Banco Itaú, trabalhei em produtos digitais voltados para a evolução do ecossistema de pagamentos e Open Finance. Esse ecossistema lida com transações financeiras e compartilhamento de dados cruciais, onde a clareza e a segurança são fundamentais para os milhões de clientes que interagem diariamente com a instituição.
        </p>

        <h3>O Desafio: Navegando na Complexidade Sistêmica</h3>
        <p>
          O ecossistema do Open Finance representa um dos cenários mais complexos no design financeiro. Ele combina camadas invisíveis para o cliente, como regulamentações rígidas, regras de negócios, integrações de segurança e dependências de tecnologia legada. O desafio principal consistia em modernizar as jornadas legadas (que operavam em ambientes desktop e mobile com componentes desatualizados) e adaptá-las aos novos padrões do Design System corporativo.
        </p>
        <p>
          A pergunta central que guiou o projeto foi: <em>Como modernizar experiências existentes e criar novas soluções mantendo a simplicidade para o cliente em um ambiente de alta complexidade técnica e regulatória?</em>
        </p>

        {/* <img src="/images/prints/open-finance.jpg" alt="Fluxo Open Finance" className="w-full rounded-xl border border-zinc-800 my-10 shadow-[0_8px_30px_rgba(0,0,0,0.5)]" /> */}

        <h3>Estratégia e Decisões</h3>
        <p>
          A estratégia adotada partiu do princípio de que a simplicidade em sistemas regulados é fruto de negociação técnica e não apenas de redesenho estético. Decidi posicionar o design como uma camada de tradução entre a complexidade do sistema de dados e a percepção humana, de modo que o usuário precisasse apenas compreender o passo seguinte da jornada.
        </p>
        <p>
          A decisão central foi utilizar protótipos de alta fidelidade como ferramentas ativas de negociação técnica com as equipes de tecnologia e produto antes do início do desenvolvimento do código, garantindo a viabilidade das propostas de usabilidade.
        </p>

        <h3>Processo e Alinhamento Colaborativo</h3>
        <p>O processo dividiu-se em três etapas funcionais de forte cooperação multidisciplinar:</p>
        <ul>
          <li><strong>Análise Aprofundada de Jornadas:</strong> Estudei os requisitos normativos do Guia de Experiência do Banco Central, mapeando os fluxos existentes para identificar os impactos tecnológicos.</li>
          <li><strong>Migração e Evolução de Legados:</strong> Conduzi a transição das interfaces antigas (mobile e desktop) para os padrões atualizados do Design System, garantindo acessibilidade sem quebrar a lógica de navegação familiar.</li>
          <li><strong>Alinhamento Sistêmico:</strong> Trabalhei em conjunto com engenheiros e gerentes de produto ajustando as telas de consentimento e compartilhamento conforme o que as integrações tecnológicas realmente suportavam, evitando silos.</li>
        </ul>

        <h3>Resultados e Impacto</h3>
        <p>
          O principal resultado foi a entrega de um fluxo regulatório consistente que a equipe de engenharia conseguiu apoiar e implementar com sucesso. A experiência integrada reduziu a carga cognitiva do usuário, traduzindo regras complexas de dados em etapas inteligíveis. O design unificado restabeleceu a consistência da marca e ajudou a construir confiança nos fluxos automatizados do ecossistema financeiro.
        </p>
        
        <blockquote>
          O trabalho no Open Finance demonstrou que, em ambientes corporativos altamente regulados, o design desempenha um papel estratégico ao conectar necessidades humanas às possibilidades normativas. A facilidade de uso na ponta é o resultado de decodificar sistemas complexos de forma transparente e segura.
        </blockquote>
      </>
    ),
  },

  'receipts': {
    en: (
      <>
        <h3 className="!mt-0 !border-none !pl-0 text-xl md:text-2xl text-zinc-400 font-normal">
          Rescuing operational context for large-scale digital receipts modernization
        </h3>

        <p>
          As part of my nearly 4-year journey working as a Product Designer at Itaú, I led the evolution of the consultation and receipt sharing journey. Receipts represent an essential component in clients' financial lives, directly used for organization, transaction confirmation, dispute resolution, and tracking.
        </p>

        <h3>The Challenge: Modernizing Legacies</h3>
        <p>
          The initial scenario required dealing with the absence of user behavioral data on a legacy experience, making it difficult to understand how people found and organized their receipts. Concurrently, the design organization was migrating tools and evolving its Design System. 
        </p>
        <p>
          Since previous design documentation was unavailable, I had to rebuild the visual context by mapping screens directly from the production environment and recovering operational history. The greatest challenge was designing a modern interface that communicated with an aging storage infrastructure—characterized by massive historical data volumes—without compromising the trust of a critical journey.
        </p>

        {/* <img src="/images/prints/comprovantes.jpg" alt="Evolução de Comprovantes" className="w-full rounded-xl border border-zinc-800 my-10 shadow-[0_8px_30px_rgba(0,0,0,0.5)]" /> */}

        <h3>Strategy & Decisions</h3>
        <p>
          The design strategy shifted from a "screen-drawing" approach to one focused on real user needs. The decision to recover the operational history was made to ensure the visual modernization respected the trust already established by the journey. Given the technical limitations of legacy databases, I prioritized viable adjustments that brought immediate functional gains, balancing improvements between the external customer journey and internal support tools.
        </p>

        <h3>Process & Collaborative Execution</h3>
        <p>The project was executed collaboratively across Product, Engineering, and Research teams:</p>
        <ul>
          <li><strong>Recovery & Mapping:</strong> Led the reconstruction of the entire visual context by mapping production screens to recover the system's scattered operational history.</li>
          <li><strong>User Requirements Definition:</strong> Identified the most urgent customer needs, prioritizing the expansion of the consultation period (search amplitude) and content organization via advanced category and transaction type filters.</li>
          <li><strong>Parallel Support Redesign:</strong> To ensure end-to-end consistency, I simultaneously worked on modernizing the internal service platform used by operational support teams, validating usability proposals directly with internal users.</li>
        </ul>

        <h3>Results & Impact (PRAD 2024 Award)</h3>
        <p>
          The new receipts experience modernized financial data consultation and sharing for millions of users. Qualitatively, the project enabled much clearer navigation with efficient filters and expanded retroactive search, alongside optimizing internal service flows. 
        </p>
        <p>
          Because of the success and systemic impact of this technical work, I was recognized by the institution with the <strong>PRAD 2024 (High-Performance Award)</strong>.
        </p>
        
        <blockquote>
          The evolution of this product demonstrated that the role of a strategic designer in large corporations involves recovering dispersed organizational knowledge and acting as an articulator of viable solutions in the face of technical limitations.
        </blockquote>
      </>
    ),
    
    pt: (
      <>
        <h3 className="!mt-0 !border-none !pl-0 text-xl md:text-2xl text-zinc-400 font-normal">
          Resgate de contexto operacional para redesenho de comprovantes em larga escala
        </h3>

        <p>
          Como parte da minha trajetória de quase 4 anos atuando como Product Designer no Banco Itaú, atuei na evolução da jornada de consulta e compartilhamento de comprovantes. Os comprovantes representam um componente essencial na vida financeira dos clientes, sendo utilizados diretamente para fins de organização, confirmação, contestação e acompanhamento de transações.
        </p>

        <h3>O Desafio: Modernizando Legados</h3>
        <p>
          O cenário inicial exigia lidar com a ausência de dados comportamentais sobre uma experiência de uso legada. Somado a isso, a organização de design passava por um período de migração de ferramentas e evolução de seu Design System. Como a documentação de design anterior estava indisponível, foi necessário reconstruir o contexto visual mapeando as telas diretamente do ambiente de produção e recuperando o histórico operacional. 
        </p>
        <p>
          O maior desafio foi projetar uma interface moderna que conversasse com uma infraestrutura antiga de armazenamento, caracterizada por um enorme volume de dados e modelos legados, sem comprometer a confiança de uma jornada crítica.
        </p>

        {/* <img src="/images/prints/comprovantes.jpg" alt="Evolução de Comprovantes" className="w-full rounded-xl border border-zinc-800 my-10 shadow-[0_8px_30px_rgba(0,0,0,0.5)]" /> */}

        <h3>Estratégia e Decisões</h3>
        <p>
          A estratégia de design mudou o foco do "desenho de telas" para as necessidades reais dos usuários. O mapeamento minucioso dos fluxos garantiu que a modernização visual respeitasse a confiança já estabelecida. Diante das restrições de tecnologia, optei por priorizar ajustes viáveis que trouxessem ganhos funcionais imediatos, dividindo as melhorias entre a jornada externa do cliente e as ferramentas internas de suporte, mantendo o equilíbrio entre tecnologia, negócio e operação.
        </p>

        <h3>O Processo e Execução Colaborativa</h3>
        <p>O projeto foi executado de forma colaborativa com as equipes de Produto, Engenharia e Pesquisa:</p>
        <ul>
          <li><strong>Recuperação e Mapeamento:</strong> Conduzi a reconstrução de todo o contexto visual mapeando as telas em produção para recuperar o histórico operacional disperso do sistema.</li>
          <li><strong>Definição de Requisitos de Usuário:</strong> Identifiquei as necessidades mais urgentes, priorizando a ampliação do período de consulta (amplitude de busca) e a organização do conteúdo por meio de filtros avançados por categorias.</li>
          <li><strong>Redesenho Paralelo do Suporte:</strong> Para garantir a consistência de ponta a ponta, atuei paralelamente na modernização da plataforma de atendimento interna utilizada pelas equipes de suporte operacional.</li>
        </ul>

        <h3>Resultados e Impacto (Prêmio PRAD 2024)</h3>
        <p>
          A nova experiência modernizou a consulta de dados financeiros para milhões de usuários. O projeto viabilizou uma navegação muito mais clara, além de otimizar o fluxo de atendimento interno e estabelecer as bases necessárias para a coleta de métricas de UX.
        </p>
        <p>
          Pelo sucesso e impacto sistêmico deste trabalho técnico, fui reconhecido pela instituição com o <strong>prêmio PRAD 2024 (Prêmio de Alto Rendimento)</strong> pela qualidade das entregas.
        </p>
        
        <blockquote>
          A evolução deste produto demonstrou que o papel de um designer estratégico envolve recuperar conhecimento organizacional disperso e atuar como um articulador de soluções viáveis. O sucesso de um produto financeiro reside na habilidade de balancear a experiência do cliente com o legado tecnológico.
        </blockquote>
      </>
    ),
  }
};