// src/lib/projects.js
// Fonte única dos projetos do portfolio.
// Para adicionar um projeto, insira o objeto na posição desejada —
// o campo "number" é gerado automaticamente pela ordem do array.

const projects = [
  {
    title: 'Copiloto Clínico por Voz',
    description: 'Assistente conversacional para gestão hospitalar com avatar interativo (Simli) e reconhecimento de voz em português. Detecta automaticamente a intenção do usuário e roteia para workflows n8n — dashboards executivos, documentação clínica e copiloto regulatório TISS/ANS. Interface PWA instalável com orbe de estado e painel destacável.',
    technologies: ['React 19', 'TanStack Start', 'TypeScript', 'n8n', 'OpenAI', 'Simli API', 'Cloudflare Pages'],
    url: 'https://github.com/LeviLucena/personal-ai',
    category: 'MedTech'
  },
  {
    title: 'LicitaAI',
    description: 'Sistema SaaS para análise e gestão inteligente de editais de licitação no setor de saúde pública. Integra IA multi-modelo (Gemini, OpenAI, Ollama) para identificar oportunidades em portais oficiais (PNCP/Compras.gov), extrair requisitos de PDFs, detectar vícios legais e gerenciar o pipeline comercial em 5 estágios com drag-and-drop.',
    technologies: ['React 18', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Gemini', 'OpenAI', 'Ollama'],
    url: 'https://github.com/LeviLucena/Licita',
    category: 'GovTech'
  },
  {
    title: 'MedAscend',
    description: 'Simulador de consulta clínica com avatar de paciente virtual pré-gravado (HeyGen) para treinamento de anamnese. O estudante conduz a entrevista clínica com reconhecimento de voz em português e o avatar responde com vídeos contextuais via correspondência de palavras-chave.',
    technologies: ['React 19', 'TanStack Start', 'TypeScript', 'HeyGen API', 'Cloudflare Pages', 'Tailwind CSS'],
    url: 'https://github.com/LeviLucena/medascend',
    category: 'MedTech'
  },
  {
    title: 'AI Render Pipeline',
    description: 'Pipeline de IA generativa para visualização arquitetônica que transforma renders 3D em imagens foto-realistas, gera mapas de textura PBR e cria cenas arquitetônicas completas a partir de texto.',
    technologies: ['Python', 'FastAPI', 'Flux', 'Stable Diffusion', 'Replicate'],
    url: 'https://github.com/LeviLucena/ai-render-pipeline',
    category: 'Creative AI'
  },
  {
    title: 'Axisus MES',
    description: 'Sistema abrangente de gestão da produção para ambientes industriais com monitoramento em tempo real, métricas de OEE e análise de desempenho.',
    technologies: ['React', 'TypeScript', 'PostgreSQL', 'Docker'],
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
    technologies: ['FastAPI', 'LangChain', 'Gemini', 'ChromaDB'],
    url: 'https://github.com/LeviLucena/zellu-ai',
    category: 'Legal AI'
  },
  {
    title: 'IntelliDoc AI',
    description: 'Plataforma com agentes especializados para leitura e análise de documentos jurídicos com OCR, RAG e NLP.',
    technologies: ['LangChain', 'GPT-4', 'Python', 'OCR'],
    url: 'https://github.com/LeviLucena/IntellidocAI',
    category: 'Document AI'
  },
  {
    title: 'Sales Insights API',
    description: 'Plataforma de análise de vendas com IA que processa consultas em linguagem natural e gera insights acionáveis sobre dados comerciais.',
    technologies: ['FastAPI', 'LangChain', 'OpenAI', 'SQLAlchemy'],
    url: 'https://github.com/LeviLucena/Sales-Insights-API',
    category: 'Business Intelligence'
  },
  {
    title: 'API Data Collector',
    description: 'Solução de integração unificada que centraliza coleta de dados de sistemas empresariais (Watio IoT, Omie ERP, HubSpot CRM) com retry automático e validação robusta.',
    technologies: ['FastAPI', 'Docker', 'Pydantic', 'Async'],
    url: 'https://github.com/LeviLucena/API-Data-Collector',
    category: 'Data Integration'
  },
  {
    title: 'Clima Blue',
    description: 'Sistema inteligente de meteogramas para apoio à tomada de decisão no agronegócio.',
    technologies: ['Python', 'Flask', 'API', 'Docker'],
    url: 'https://github.com/LeviLucena/ClimaBlue_Brasil',
    category: 'AgTech'
  },
  {
    title: 'AmazonFireGuard',
    description: 'Sistema de monitoramento inteligente para alertas ambientais focado em incêndios florestais.',
    technologies: ['Python', 'Dash', 'ML', 'NASA API'],
    url: 'https://github.com/LeviLucena/amazonfireguard',
    category: 'Environment'
  },
  {
    title: 'Calculadora Renda Fixa',
    description: 'Aplicação web para simulação de rentabilidade de diferentes tipos de investamentos em renda fixa.',
    technologies: ['Nuxt.js', 'Vue.js', 'TypeScript'],
    url: 'https://github.com/LeviLucena/rendafixa.github.io',
    category: 'Fintech'
  },
  {
    title: 'MLPractical',
    description: 'Sistema de classificação de síndromes genéticas usando embeddings 320D, KNN e t-SNE com AUC de 96.30%.',
    technologies: ['Python', 'Scikit-learn', 't-SNE', 'KNN'],
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
    technologies: ['Django', 'Python', 'Bootstrap', 'jQuery'],
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
    technologies: ['Flask', 'OpenAI', 'Python-docx', 'Bootstrap'],
    url: 'https://github.com/LeviLucena/NDA_Tools',
    category: 'Legal Tech'
  },
  {
    title: 'Gestão de Inventário TI',
    description: 'Sistema web para gerenciamento de ativos de TI com controle de entrada/saída de equipamentos, CRUD completo e interface responsiva com DataTables.',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'DataTables'],
    url: 'https://github.com/LeviLucena/Gestao-de-Inventario-de-TI',
    category: 'IT Management'
  },
  {
    title: 'Certificados SSL Monitor',
    description: 'Ferramenta de monitoramento de certificados SSL para múltiplos domínios com verificação automática, alertas de expiração e visualização gráfica.',
    technologies: ['PHP', 'OpenSSL', 'HTML5', 'CSS'],
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
    technologies: ['Dash', 'Plotly', 'Pandas', 'Python'],
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
    technologies: ['R', 'Shiny', 'ggplot2', 'Plotly'],
    url: 'https://github.com/LeviLucena/ClimaTempo',
    category: 'Weather Analytics'
  },
  {
    title: 'Space Invaders',
    description: "Implementação do clássico arcade Space Invaders em Python/Pygame com sistema de pontuação, efeitos sonoros e mecânicas shoot'em up.",
    technologies: ['Python', 'Pygame', 'Game Dev'],
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
    title: 'Delphos Insights Hub',
    description: 'Plataforma de inteligência operacional para gestão de frotas de energia renovável. Monitoramento SCADA em tempo real, alertas, ordens de serviço e assistente de IA (GPT-4o-mini) para suporte à decisão com dashboard interativo e cena isométrica de turbina eólica.',
    technologies: ['React 19', 'TanStack Start', 'TypeScript', 'Tailwind CSS v4', 'shadcn/ui', 'Recharts', 'OpenAI GPT-4o-mini', 'Cloudflare Workers', 'Vite 8', 'Bun'],
    url: 'https://github.com/LeviLucena/Delphos-Insights-Hub',
    category: 'Industrial'
  }
];

export const featuredProjects = projects.map((project, index) => ({
  ...project,
  number: String(index + 1).padStart(2, '0')
}));
