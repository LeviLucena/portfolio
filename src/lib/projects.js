// src/lib/projects.js
// Fonte única dos projetos do portfolio.
// Para adicionar um projeto, insira o objeto na posição desejada —
// o campo "number" é gerado automaticamente pela ordem do array.

const projects = [
  {
    title: 'Elderly Vision',
    description: 'Visão computacional para acompanhar a mobilidade de idosos a partir de um vídeo comum de celular ou tablet. Estima a pose do corpo e transforma o movimento em medidas objetivas: repetições e tempo no teste de levantar da cadeira (30 s), equilíbrio em um pé e Timed Up and Go (TUG), com referências do CDC STEADI, modo ao vivo no navegador e vídeo anotado com painel de resultados. Protótipo de apoio ao acompanhamento por profissionais de saúde, sem substituir a avaliação clínica.',
    technologies: ['Python', 'FastAPI', 'OpenCV', 'ViTPose+', 'MediaPipe', 'VLM Run', 'FFmpeg', 'NumPy', 'Uvicorn', 'Matplotlib', 'Pillow', 'SAM 3.1', 'Gemma 4', 'JavaScript', 'HTML5', 'CSS', 'Conda'],
    url: 'https://github.com/LeviLucena/Elderly-Vision',
    category: 'HealthTech'
  },
  {
    title: 'Agente Comercial Autônomo — CRM Vendas',
    description: 'CRM de vendas com um agente comercial autônomo embutido: qualifica leads, responde dúvidas, agenda reuniões, liga por telefone e envia e-mails e WhatsApp — com base numa persona, objetivo e regras configuráveis, sem precisar de vendedor humano no primeiro contato. Só escala para um humano quando faz sentido (desconto fora da tabela, contrato, cliente insatisfeito ou pedido explícito).',
    technologies: ['Pipecat', 'Deepgram', 'Ollama', 'ElevenLabs', 'Twilio', 'FastAPI', 'Uvicorn'],
    url: 'https://github.com/LeviLucena/agent-CRM-Sales',
    category: 'Sales AI'
  },
  {
    title: 'Copiloto Clínico por Voz',
    description: 'Assistente conversacional para gestão hospitalar com avatar interativo (Simli) e reconhecimento de voz em português. Detecta automaticamente a intenção do usuário e roteia para workflows n8n — dashboards executivos, documentação clínica e copiloto regulatório TISS/ANS. Interface PWA instalável com orbe de estado e painel destacável.',
    technologies: ['Python', 'FastAPI', 'LangChain', 'LangGraph', 'OpenAI', 'PostgreSQL', 'React', 'TanStack Start', 'asyncpg', 'Pydantic', 'Docker', 'Telegram Bot', 'TypeScript', 'Vite', 'Cloudflare', 'Tailwind CSS', 'Radix UI', 'Framer Motion', 'Simli', 'Zod', 'React Hook Form', 'Recharts'],
    url: 'https://github.com/LeviLucena/personal-ai',
    category: 'MedTech'
  },
  {
    title: 'LicitaAI',
    description: 'Plataforma SaaS para prospecção e análise de licitações públicas no Brasil (PNCP) e na União Europeia (TED). A API consulta os portais oficiais com retentativas automáticas, usa IA (Ollama) para resumir editais, apontar vícios jurídicos com fundamentação legal e gerar minutas de impugnação, e organiza as oportunidades em um pipeline de 5 etapas com calendário de prazos, buscas salvas e alertas por e-mail.',
    technologies: ['Cloudflare', 'Node.js', 'PostgreSQL', 'Ollama', 'Hono', 'Express', 'TypeScript', 'Cloudflare D1', 'JWT', 'React', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Radix UI', 'React Router', 'i18next', 'PNCP', 'TED'],
    url: 'https://github.com/LeviLucena/Licita',
    category: 'GovTech'
  },
  {
    title: 'MedAscend',
    description: 'Simulador de consulta clínica com avatar de paciente virtual pré-gravado (HeyGen) para treinamento de anamnese. O estudante conduz a entrevista clínica com reconhecimento de voz em português e o avatar responde com vídeos contextuais via correspondência de palavras-chave.',
    technologies: ['React', 'TanStack Start', 'TypeScript', 'Vite', 'Cloudflare', 'Tailwind CSS', 'Radix UI', 'Framer Motion', 'HeyGen', 'Zod', 'React Hook Form', 'Recharts'],
    url: 'https://github.com/LeviLucena/medascend',
    category: 'MedTech'
  },
  {
    title: 'AI Render Pipeline',
    description: 'Pipeline de IA generativa para visualização arquitetônica que transforma renders 3D em imagens foto-realistas, gera mapas de textura PBR e cria cenas arquitetônicas completas a partir de texto.',
    technologies: ['Python', 'FastAPI', 'Flux', 'Replicate', 'Stability AI', 'Stable Diffusion', 'LoRA', 'PyTorch', 'Uvicorn', 'JavaScript', 'HTML5', 'CodeMirror', 'dotenv'],
    url: 'https://github.com/LeviLucena/ai-render-pipeline',
    category: 'Creative AI'
  },
  {
    title: 'Axisus MES',
    description: 'Sistema abrangente de gestão da produção para ambientes industriais com monitoramento em tempo real, métricas de OEE e análise de desempenho.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Docker', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'React Router', 'TanStack Query', 'Axios', 'Recharts', 'JWT', 'Bcrypt.js', 'Zod', 'dotenv', 'Docker Compose', 'Nginx'],
    url: 'https://github.com/LeviLucena/new-axisus',
    category: 'Industrial'
  },
  {
    title: 'JurisGPT Advisor',
    description: 'Plataforma jurídica inteligente com LLMs (GPT-4o) que simula a atuação de um advogado virtual.',
    technologies: ['React', 'TypeScript', 'OpenAI', 'GPT-4o', 'NLP'],
    url: 'https://jurisgpt-advisor.com',
    category: 'Legal AI'
  },
  {
    title: 'Zellu AI',
    description: 'Sistema de IA jurídica com agentes conversacionais para classificação de demandas e análise através de RAG com base de conhecimento jurídico.',
    technologies: ['Python', 'FastAPI', 'LangChain', 'LangGraph', 'Google Gemini', 'ChromaDB', 'React', 'Docker', 'Uvicorn', 'Sentence Transformers', 'Scikit Learn', 'PyTorch', 'Pydantic', 'Material UI', 'SQLite', 'Docker Compose', 'LLM Agents', 'RAG Architecture', 'Semantic Search', 'AI Automation'],
    url: 'https://github.com/LeviLucena/zellu-ai',
    category: 'Legal AI'
  },
  {
    title: 'IntelliDoc AI',
    description: 'Plataforma com agentes especializados para leitura e análise de documentos jurídicos com OCR, RAG e NLP.',
    technologies: ['Python', 'Flask', 'Plotly Dash', 'OpenAI GPT-4o', 'YOLOv8', 'FAISS', 'LangChain', 'OCR'],
    url: 'https://github.com/LeviLucena/IntellidocAI',
    category: 'Document AI'
  },
  {
    title: 'Sales Insights API',
    description: 'Plataforma de análise de vendas com IA que processa consultas em linguagem natural e gera insights acionáveis sobre dados comerciais.',
    technologies: ['Python', 'FastAPI', 'SQLAlchemy', 'SQLite', 'LangChain', 'OpenAI', 'Bootstrap', 'JavaScript', 'HTML'],
    url: 'https://github.com/LeviLucena/Sales-Insights-API',
    category: 'Business Intelligence'
  },
  {
    title: 'API Data Collector',
    description: 'Solução de integração unificada que centraliza coleta de dados de sistemas empresariais (Watio IoT, Omie ERP, HubSpot CRM) com retry automático e validação robusta.',
    technologies: ['Python', 'FastAPI', 'Pydantic', 'Docker', 'OpenAPI', 'HubSpot', 'Omie', 'Watio'],
    url: 'https://github.com/LeviLucena/API-Data-Collector',
    category: 'Data Integration'
  },
  {
    title: 'Clima Blue',
    description: 'Sistema inteligente de meteogramas para apoio à tomada de decisão no agronegócio.',
    technologies: ['Python', 'Flask', 'Meteoblue API', 'OpenWeatherMap', 'Requests', 'Pytest', 'Docker', 'Docker Compose', 'dotenv'],
    url: 'https://github.com/LeviLucena/ClimaBlue_Brasil',
    category: 'AgTech'
  },
  {
    title: 'AmazonFireGuard',
    description: 'Sistema de monitoramento inteligente para alertas ambientais focado em incêndios florestais.',
    technologies: ['Python', 'Flask', 'Dash', 'NASA FIRMS', 'INPE', 'Meteoblue API', 'OpenWeatherMap', 'Leaflet.js', 'OpenStreetMap', 'PostGIS', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'PostgreSQL', 'SQLAlchemy', 'Requests', 'Docker', 'Docker Compose', 'dotenv'],
    url: 'https://github.com/LeviLucena/amazonfireguard',
    category: 'Environment'
  },
  {
    title: 'Calculadora Renda Fixa',
    description: 'Aplicação web para simulação de rentabilidade de diferentes tipos de investamentos em renda fixa.',
    technologies: ['React', 'Three.js', 'Vite', 'Tailwind CSS', 'Zustand'],
    url: 'https://github.com/LeviLucena/rendafixa.github.io',
    category: 'Fintech'
  },
  {
    title: 'MLPractical',
    description: 'Sistema de classificação de síndromes genéticas usando embeddings 320D, KNN e t-SNE com AUC de 96.30%.',
    technologies: ['Python', 'Scikit-learn', 't-SNE', 'KNN', 'NumPy', 'Pandas', 'SciPy', 'Matplotlib', 'Seaborn', 'FPDF2'],
    url: 'https://github.com/LeviLucena/MLPractical',
    category: 'HealthTech'
  },
  {
    title: 'NeoCore Systems',
    description: 'Interface experimental futurista estilo sci-fi com dashboard interativo, animações avançadas e visualização de dados em tempo real.',
    technologies: ['React', 'Framer Motion', 'Recharts', 'Tailwind'],
    url: 'https://github.com/LeviLucena/NeoCore_Systems',
    category: 'UI/UX Showcase'
  },
  {
    title: 'Gestão de Leitos Hospitalares (GGH)',
    description: 'Sistema de gerenciamento para saúde pública com registro de hospitais, pacientes, prontuários médicos e mapas de leitos hospitalares.',
    technologies: ['Python', 'Django', 'SQLite', 'Bootstrap', 'jQuery', 'DataTables', 'Plotly.js', 'Leaflet.js', 'Font Awesome', 'Faker', 'Pandas'],
    url: 'https://github.com/LeviLucena/DjangoLivre',
    category: 'HealthTech'
  },
  {
    title: 'DeepLearning YOLO',
    description: 'Sistema de detecção de objetos em tempo real usando YOLO v8 com captura de tela e webcam, processamento com OpenCV e visualização interativa.',
    technologies: ['Python', 'YOLO', 'OpenCV', 'NumPy'],
    url: 'https://github.com/LeviLucena/DeepLearning',
    category: 'Computer Vision'
  },
  {
    title: 'NDA Tools',
    description: 'Ferramenta de automação jurídica que compara contratos NDA usando OpenAI, destaca diferenças e gera documentos DOCX com modificações realçadas.',
    technologies: ['Python', 'Flask', 'OpenAI API', 'python-docx', 'Werkzeug', 'WTForms', 'Bootstrap', 'HTML5', 'CSS3'],
    url: 'https://github.com/LeviLucena/NDA_Tools',
    category: 'Legal Tech'
  },
  {
    title: 'Gestão de Inventário TI',
    description: 'Sistema web para gerenciamento de ativos de TI com controle de entrada/saída de equipamentos, CRUD completo e interface responsiva com DataTables.',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'DataTables', 'HTML', 'CSS', 'JavaScript'],
    url: 'https://github.com/LeviLucena/Gestao-de-Inventario-de-TI',
    category: 'IT Management'
  },
  {
    title: 'Certificados SSL Monitor',
    description: 'Ferramenta de monitoramento de certificados SSL para múltiplos domínios com verificação automática, alertas de expiração e visualização gráfica.',
    technologies: ['PHP', 'OpenSSL', 'Bootstrap', 'Bootstrap Icons', 'Chart.js', 'Google Fonts', 'HTML5', 'CSS'],
    url: 'https://github.com/LeviLucena/Certificados-SSL-Web',
    category: 'Security Tools'
  },
  {
    title: 'Gestão de Projetos',
    description: 'Sistema completo de gerenciamento de projetos com controle de demandas, atividades, entregas, dashboards e autenticação de usuários.',
    technologies: ['PHP', 'MySQL', 'Apache', 'HTML'],
    url: 'https://github.com/LeviLucena/Gestao_Projetos',
    category: 'Project Management'
  },
  {
    title: 'Painel Arboviroses',
    description: 'Plataforma de vigilância epidemiológica para monitoramento de arboviroses (dengue, zika, chikungunya) com visualizações interativas e mapas de calor.',
    technologies: ['Python', 'Dash', 'Plotly', 'Pandas', 'NumPy', 'Font Awesome', 'Google Fonts'],
    url: 'https://github.com/LeviLucena/Arbovirose',
    category: 'Public Health'
  },
  {
    title: 'Bolsa de Valores Analytics',
    description: 'Aplicação interativa em R/Shiny para análise de mercado de ações com visualização de preços, volume, correlações e volatilidade histórica.',
    technologies: ['R', 'Shiny', 'Plotly', 'dplyr'],
    url: 'https://github.com/LeviLucena/Bolsa_de_Valores',
    category: 'Financial Analytics'
  },
  {
    title: 'ClimaTempo Dashboard',
    description: 'Dashboard interativo em R/Shiny para análise de dados climáticos com visualizações temporais, estatísticas mensais e gráficos comparativos.',
    technologies: ['R', 'Shiny', 'dplyr', 'lubridate', 'ggplot2', 'Plotly', 'HTML', 'CSS', 'SVG', 'JavaScript', 'Font Awesome'],
    url: 'https://github.com/LeviLucena/ClimaTempo',
    category: 'Weather Analytics'
  },
  {
    title: 'Space Invaders',
    description: "Implementação do clássico arcade Space Invaders em Python/Pygame com sistema de pontuação, efeitos sonoros e mecânicas shoot'em up.",
    technologies: ['Python', 'Pygame', 'Game Dev', 'Boss Fight', 'Power-ups', 'Partículas', 'Efeito CRT', 'Screen Shake', 'Som procedural'],
    url: 'https://github.com/LeviLucena/pygame',
    category: 'Game Development'
  },
  {
    title: 'CobolBank',
    description: 'Sistema bancário open-source escrito em COBOL para mainframes IBM z/OS, com modos de execução modernos incluindo experiência de terminal CRT retrô inspirado na estética Alien: Isolation.',
    technologies: ['COBOL', 'GnuCOBOL', 'IBM z/OS', 'CICS', 'WSL 2'],
    url: 'https://github.com/LeviLucena/CobolBank',
    category: 'Mainframe / Fintech'
  },
  {
    title: 'ExampleHR TimeOff',
    description: 'Frontend para gerenciamento de solicitações de licenças e folgas em sistemas de RH. Dois fluxos distintos (colaborador e gerente), atualizações otimistas com rollback automático, reconciliação periódica de dados e simulação realista de falhas HCM.',
    technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Storybook', 'Vitest', 'Playwright'],
    url: 'https://github.com/LeviLucena/examplehr-timeoff',
    category: 'HRTech'
  },
  {
    title: 'FaceAuth Service',
    description: 'Microsserviço de reconhecimento facial com anti-spoofing ativo e passivo para autenticação biométrica segura. Combina InsightFace (embeddings 512-dim) para reconhecimento, MediaPipe para liveness ativo (viés de cabeça + piscada) e MiniFASNet ONNX para anti-spoofing passivo (98.2% acurácia). Armazenamento vetorial com PostgreSQL + pgvector para busca por similaridade facial.',
    technologies: ['FastAPI', 'Python 3.12', 'InsightFace', 'MediaPipe', 'PostgreSQL', 'pgvector', 'Docker', 'ONNX Runtime'],
    url: 'https://github.com/LeviLucena/FaceAuth-Service',
    category: 'Biometrics'
  },
  {
    title: 'Contract Wise',
    description: 'Sistema de análise inteligente de contratos de saúde suplementar. Extrai, consolida e disponibiliza informações de contratos hospitalares por operadora (CNPJ) com chat contextual baseado em GPT-4o Mini para consultas e predição de risco de glosas. Utiliza Docling para extração de PDFs com classificação automática de cláusulas e consolidação de aditivos.',
    technologies: ['React 18', 'Vite 6', 'FastAPI', 'Python 3.14', 'OpenAI GPT-4o', 'Docling'],
    url: 'https://github.com/LeviLucena/contract-wise',
    category: 'Legal AI'
  },
  {
    title: 'Freight Recovery Console',
    description: 'Console de auditoria de invoices e recuperação de claims logísticos com agentes de IA. Audita faturas de transportadoras via Claude (structured tool-use, com fallback heurístico), abre e conduz claims como uma state machine durável com retries, human-in-the-loop e reconciliação, com timeline de execução completa e e-mail de disputa gerado automaticamente. Multi-idioma (PT/ES/EN) persistido por claim.',
    technologies: ['TypeScript', 'React', 'TanStack Start', 'TanStack Router', 'Vite', 'Nitro', 'Drizzle ORM', 'SQLite', 'Tailwind CSS', 'Radix UI', 'Zod', 'Bun', 'Cloudflare Workers', 'D1'],
    url: 'https://freight-recovery-console.the-joker-lucena.workers.dev/',
    category: 'InvoiceTech'
  },
  {
    title: 'Delphos Insights Hub',
    description: 'Plataforma de inteligência operacional para gestão de frotas de energia renovável. Monitoramento SCADA em tempo real, alertas, ordens de serviço e assistente de IA (GPT-4o-mini) para suporte à decisão com dashboard interativo e cena isométrica de turbina eólica.',
    technologies: ['React', 'TypeScript', 'TanStack Start', 'TanStack Query', 'Tailwind CSS', 'shadcn/ui', 'Highcharts', 'dnd-kit', 'OpenAI', 'Cloudflare Workers', 'Vite', 'Bun'],
    url: 'https://delphos-insights-hub.the-joker-lucena.workers.dev/',
    category: 'Industrial'
  },
  {
    title: 'Grimhold RPG',
    description: 'RPG de aventura em primeira pessoa criado com vibe coding no Meta Pocket. O jogador encarna um guerreiro explorando um castelo gótico, com sistema de inventário dividido em itens e relíquias, interação com objetos do cenário e combate com mecânicas de ataque e defesa. É necessário baixar o app Pocket para ter a experiência sonora completa do game.',
    technologies: ['Meta Pocket', 'Vibe Coding', 'IA Generativa', 'RPG'],
    url: 'https://www.madewithpocket.com/pt-BR/p/ENSV8ZMsg',
    category: 'Game Development'
  },
  {
    title: 'Empório da Música — Agente de Atendimento',
    description: 'Agente de atendimento conversacional para loja de instrumentos musicais, com function calling sobre dados da operação (SQLite) e RAG (BM25) sobre o manual de políticas da loja. Interface de chat web em React consumindo API própria em FastAPI.',
    technologies: ['TypeScript', 'React', 'TanStack Start', 'TanStack Router', 'Vite', 'Tailwind CSS', 'Python', 'Google Gemini', 'FastAPI', 'SQLite', 'Bun'],
    url: 'https://github.com/LeviLucena/emporio-da-musica-agent',
    category: 'Retail AI'
  }
];

export const featuredProjects = projects.map((project, index) => ({
  ...project,
  number: String(index + 1).padStart(2, '0')
}));
