export interface Profile {
  name: string;
  role: string;
  specialty: string;
  pitch: string;
  location: string;
  experience: string;
  focus: string[];
  trajectory: string;
  languages: string[];
  openToWork: boolean;
  email: string;
  github: string;
  linkedin: string;
  contactMessage: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface StackGroup {
  title: string;
  items: string[];
  secondary?: boolean;
}

export interface Experience {
  period: string;
  duration: string;
  role: string;
  company: string;
  summary: string;
  highlights: string[];
  tech: string[];
  promoted?: boolean;
}

export interface RoadmapStep {
  label: string;
  done: boolean;
}

export interface Project {
  number: string;
  category: string;
  name: string;
  description: string;
  architecture: string[];
  roadmap: RoadmapStep[];
  stack: string[];
  repoUrl: string;
  /** Previsão de entrega (ex.: "03/2027"). Vazio esconde o campo. */
  eta: string;
}

export interface Education {
  level: string;
  period: string;
  course: string;
  institution: string;
  highlights: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: number;
}

export const PROFILE: Profile = {
  name: 'Matheus Monteiro da Luz',
  role: 'Engenheiro de Software Sênior',
  specialty: 'Node.js, TypeScript & AWS',
  pitch:
    'Construo APIs e pipelines de dados serverless na AWS, do desenho da arquitetura à operação em produção. Venho da área de qualidade de software e hoje aplico LLMs e agentes de IA em produtos reais.',
  location: 'Pato Branco, PR · Brasil',
  experience: '5+ anos',
  focus: ['back-end', 'serverless', 'IA aplicada'],
  trajectory: 'QA → automação → dev → sênior',
  languages: ['português', 'inglês profissional'],
  openToWork: true,
  email: 'matheusmonteiro.luz@outlook.com',
  github: 'https://github.com/matheusm-luz',
  linkedin: 'https://www.linkedin.com/in/matheusm-luz/',
  contactMessage:
    'Estou aberto a oportunidades como Engenheiro de Software Sênior em back-end, cloud e IA aplicada.',
};

export const ABOUT: string[] = [
  'Sou Engenheiro de Software com mais de cinco anos de experiência, especializado em back-end com Node.js e TypeScript e em arquiteturas serverless na AWS. Atuo de ponta a ponta na construção de APIs e pipelines de dados escaláveis, do desenho da arquitetura em nuvem à operação em produção.',
  'Comecei em testes e automação, e isso moldou meu jeito de trabalhar: BDD, testes automatizados e CI/CD fazem parte de tudo o que entrego. Hoje aplico LLMs, LangChain e sistemas multiagentes em memória conversacional e personalização de jornadas.',
];

export const STATS: Stat[] = [
  { value: '5+', label: 'anos construindo software' },
  { value: '−80%', label: 'erros de concorrência no Amazon Neptune' },
  { value: '30→80%', label: 'cobertura de testes de uma aplicação web' },
];

export const STACK: StackGroup[] = [
  {
    title: 'Back-end & Cloud',
    items: ['Node.js', 'TypeScript', 'Serverless Framework', 'AWS Lambda', 'SQS · SNS', 'DynamoDB', 'Neptune', 'APIs REST'],
  },
  {
    title: 'IA & Dados',
    items: ['LangChain', 'LLMs · multiagentes', 'Python', 'Azure Databricks', 'PostgreSQL', 'OpenCypher'],
  },
  {
    title: 'Qualidade & DevOps',
    items: ['BDD · Cucumber', 'Selenium', 'Jenkins', 'SonarQube', 'Docker', 'LocalStack', 'CI/CD'],
  },
  {
    title: 'Também trabalhei com',
    items: ['Java · Spring Boot', 'Grails', 'Angular', 'React', 'Flutter', 'n8n'],
    secondary: true,
  },
];

export const EXPERIENCES: Experience[] = [
  {
    period: '08/2024 — 08/2026',
    duration: '2 anos',
    role: 'Engenheiro de Software Sênior',
    company: 'Omnichat',
    summary:
      'Plataforma de marketing conversacional. Back-end em Node.js e TypeScript e arquitetura serverless na AWS, passando pelos times de Soluções de Marketing, Dados de Consumidores (como desenvolvedor principal) e Jornadas.',
    highlights: [
      'Reestruturei a arquitetura com SNS, SQS, Lambda e Amazon Neptune, reduzindo em 80% os erros de operações concorrentes no banco.',
      'Conduzi a PoC da ferramenta de Jornadas de mensagens de marketing, da descoberta com clientes à implementação. A PoC virou produto.',
      'Desenvolvi sistemas multiagentes com LangChain e LLMs que transformam dados de consumidores em memória para a IA de chat conversacional.',
      'Automatizei a renovação de tokens AWS no ambiente local, publiquei guias de debug Serverless e mantive um fork corrigido de um pacote Node.js descontinuado.',
    ],
    tech: ['Node.js', 'TypeScript', 'AWS Lambda', 'SQS · SNS', 'Neptune', 'LangChain'],
  },
  {
    period: '08/2023 — 08/2024',
    duration: '1 ano',
    role: 'Engenheiro de Software Júnior',
    company: 'Softplan',
    summary:
      'Software jurídico para escritórios de advocacia. Time focado em recuperação, arquivamento e monitoramento de petições eletrônicas, com Java, Grails, AngularJS e AWS.',
    highlights: [
      'Integrei o PeticionaMais ao Projuris ADV, permitindo protocolar petições eletrônicas direto pela plataforma.',
      'Assumi um projeto de IA em Python com um único mantenedor e documentei a execução e o monitoramento (CloudWatch, EC2), eliminando o ponto único de conhecimento.',
      'Componentizei recursos em Angular, reduzindo o débito técnico em 10%, e migrei telas legadas de JSF para AngularJS.',
    ],
    tech: ['Java', 'Grails', 'AngularJS', 'Python', 'AWS'],
  },
  {
    period: '12/2021 — 08/2023',
    duration: '1 ano e 8 meses',
    role: 'Automação de Testes → Engenheiro de Software Júnior',
    company: 'Projuris',
    summary:
      'Contratado para retomar a automação de testes de uma aplicação web jurídica. Após a aquisição pela Softplan, fui promovido a desenvolvedor, acumulando QA, melhorias e correções críticas na web e no app móvel.',
    highlights: [
      'Aumentei a cobertura de testes de 30% para 80%, reduzindo de forma significativa a incidência de defeitos.',
      'Liderei a automação de testes, com code review e mentoria do time, e integrei o framework ao pipeline de CI/CD no Jenkins.',
      'Otimizei consultas ao banco de dados, reduzindo o tempo de execução em mais de 70%.',
    ],
    tech: ['BDD', 'Jenkins', 'CI/CD', 'SQL'],
    promoted: true,
  },
  {
    period: '11/2020 — 11/2021',
    duration: '1 ano',
    role: 'Analista de Testes → Engenheiro de Automação de Testes',
    company: 'Viasoft',
    summary:
      'Comecei com testes manuais, de regressão e de integração. Ainda no primeiro ano, fui convidado para a nova iniciativa de testes automatizados.',
    highlights: [
      'Automatizei cerca de 40 cenários críticos, E2E e unitários, com Cucumber, JavaScript e TestComplete.',
      'Escrevi guias de troubleshooting adotados por vários times, reduzindo em 50% o tempo de configuração de ambientes.',
    ],
    tech: ['Cucumber', 'JavaScript', 'TestComplete', 'Oracle'],
    promoted: true,
  },
];

export const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Back-end serverless',
    name: 'Pipeline de eventos serverless',
    description:
      'Um pipeline orientado a eventos na AWS, do recebimento à persistência, que roda inteiro na máquina local com LocalStack. Uma versão aberta do tipo de arquitetura que mantive em produção.',
    architecture: ['evento', 'SQS · SNS', 'Lambda', 'DynamoDB'],
    roadmap: [
      { label: 'Arquitetura e registro de decisões (ADRs)', done: false },
      { label: 'Serviços com SQS, SNS e Lambda, com idempotência e DLQ', done: false },
      { label: 'Testes BDD e pipeline de CI no GitHub Actions', done: false },
      { label: 'Deploy, métricas e demo pública', done: false },
    ],
    stack: ['Node.js', 'TypeScript', 'AWS Lambda', 'SQS · SNS', 'LocalStack'],
    repoUrl: 'https://github.com/matheusm-luz',
    eta: '',
  },
  {
    number: '02',
    category: 'IA aplicada',
    name: 'Agente de IA com memória',
    description:
      'Um agente que transforma conversas em memória estruturada e a usa para personalizar as próximas respostas. Uma versão aberta do tipo de problema em que trabalhei com LLMs e sistemas multiagentes.',
    architecture: ['mensagem', 'agentes', 'memória em grafo', 'resposta'],
    roadmap: [
      { label: 'Modelagem da memória das conversas em grafo', done: false },
      { label: 'Agentes com LangChain para extrair e consultar a memória', done: false },
      { label: 'Avaliação das respostas e controle de custo por chamada', done: false },
      { label: 'Interface de demo e deploy', done: false },
    ],
    stack: ['Python', 'LangChain', 'LLMs', 'banco de grafos'],
    repoUrl: 'https://github.com/matheusm-luz',
    eta: '',
  },
];

export const EDUCATION: Education[] = [
  {
    level: 'Pós-graduação · Lato Sensu',
    period: '2023 — 2024',
    course: 'Ciências de Dados e Inteligência Artificial',
    institution: 'Centro Universitário Internacional UNINTER',
    highlights: ['Redes Neurais Artificiais', 'Inteligência Artificial', 'Análise Preditiva', 'Mineração de Dados', 'Computação em Nuvem'],
  },
  {
    level: 'Graduação · Tecnólogo',
    period: '2020 — 2023',
    course: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Centro Universitário de Pato Branco · UNIDEP',
    highlights: ['Programação Distribuída', 'Design e Arquitetura de Software', 'Programação para Web', 'Programação para Mobile', 'Banco de Dados'],
  },
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'Introdução ao SQL com Oracle: manipule e consulte dados', issuer: 'Alura', year: 2021 },
  { name: 'Power BI Desktop: carregue, analise e visualize dados', issuer: 'Alura', year: 2021 },
  { name: 'Comunicação e Oratória', issuer: 'Escola Conquer', year: 2021 },
];
