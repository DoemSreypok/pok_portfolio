export interface Project {
  id: string;
  title: string;
  category: 'Website Design' | 'App Mobile Design' | 'App Desktop' | 'Branding';
  roleBadge: string;
  techBadge: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
}

export const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Delivered' },
  { value: '12+', label: 'Enterprise Systems' },
];

export const processSteps = [
  {
    id: 'research',
    icon: 'Search',
    title: 'User Research',
    description: 'Uncovering user behavior, stakeholder requirements, and market insights.',
  },
  {
    id: 'flows',
    icon: 'Network',
    title: 'User Flow & IA',
    description: 'Structuring intuitive user journeys, information architecture, and navigation.',
  },
  {
    id: 'wireframing',
    icon: 'Layout',
    title: 'Wireframing',
    description: 'Iterating on low-fidelity wireframes to validate usability and core hierarchy.',
  },
  {
    id: 'ui-design',
    icon: 'Palette',
    title: 'UI Design & Systems',
    description: 'Crafting responsive interfaces with tokenized design systems in Figma.',
  },
  {
    id: 'prototyping',
    icon: 'PlayCircle',
    title: 'Interactive Prototyping',
    description: 'Building high-fidelity prototypes for stakeholder testing and developer handoff.',
  },
  {
    id: 'testing',
    icon: 'CheckCircle2',
    title: 'Testing & Implementation',
    description: 'Conducting usability testing and ensuring pixel-perfect web development.',
  },
];

export const designTools = [
  { name: 'Figma', percentage: 95, iconType: 'figma' },
  { name: 'FigJam', percentage: 90, iconType: 'figjam' },
  { name: 'Canva', percentage: 85, iconType: 'canva' },
  { name: 'Adobe Illustrator', percentage: 75, iconType: 'ai' },
  { name: 'Adobe Photoshop', percentage: 70, iconType: 'ps' },
];

export const uxUiSkills = [
  'User Research & Personas',
  'User Journey Mapping',
  'Information Architecture & User Flows',
  'Wireframing & UI Prototyping',
  'Interaction Design',
  'Design Systems & Design Tokens',
  'Responsive Web & Mobile Design',
  'Usability Testing & Accessibility (WCAG)',
  'Developer Handoff & Design QA',
];

export interface DevSkillItem {
  name: string;
  percentage: number;
  iconType: string;
}

export interface DevCategory {
  category: string;
  categoryColor: string; // Tailwind text color
  barColor: string; // Tailwind bg color
  skills: DevSkillItem[];
}

export const devCategories: DevCategory[] = [
  {
    category: 'FRONTEND',
    categoryColor: 'text-sky-400',
    barColor: 'bg-blue-500',
    skills: [
      { name: 'React.js & Next.js', percentage: 85, iconType: 'react' },
      { name: 'Angular & TypeScript', percentage: 60, iconType: 'angular' },
      { name: 'TypeScript & JavaScript', percentage: 85, iconType: 'js' },
      { name: 'HTML5 & CSS3', percentage: 95, iconType: 'html5' },
      { name: 'Tailwind CSS', percentage: 95, iconType: 'tailwind' },
      { name: 'Bootstrap', percentage: 95, iconType: 'bootstrap' },
    ],
  },
  {
    category: 'BACKEND',
    categoryColor: 'text-purple-400',
    barColor: 'bg-purple-500',
    skills: [
      { name: 'Node.js & Express.js', percentage: 80, iconType: 'node' },
      { name: 'Django & REST Framework', percentage: 75, iconType: 'django' },
      { name: 'REST API Development', percentage: 85, iconType: 'api' },
    ],
  },
  {
    category: 'DATABASE',
    categoryColor: 'text-orange-400',
    barColor: 'bg-orange-500',
    skills: [
      { name: 'MongoDB', percentage: 60, iconType: 'mongodb' },
      { name: 'Oracle Database', percentage: 50, iconType: 'oracle' },
      { name: 'PostgreSQL', percentage: 80, iconType: 'postgresql' },
    ],
  },
  {
    category: 'TOOLS & DEVOPS',
    categoryColor: 'text-emerald-400',
    barColor: 'bg-emerald-500',
    skills: [
      { name: 'Git & GitHub', percentage: 85, iconType: 'github' },
      { name: 'Docker', percentage: 50, iconType: 'docker' },
      { name: 'Postman', percentage: 85, iconType: 'postman' },
    ],
  },
];


export const projects: Project[] = [
  {
    id: 'grocery-shop',
    title: 'OmniChannel Grocery Platform',
    category: 'App Mobile Design',
    roleBadge: 'UX/UI & Mobile App',
    techBadge: 'Figma & React Native',
    description: 'Streamlined mobile shopping experience with intelligent search, smart cart management, recipe discovery, and a frictionless 2-step checkout flow.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    caseStudyUrl: '#',
    liveUrl: '#',
  },
  {
    id: 'coffee-shop',
    title: 'Artisan Coffee Ordering & Loyalty App',
    category: 'App Mobile Design',
    roleBadge: 'UX Flow & Dark UI',
    techBadge: 'Figma & Tailwind CSS',
    description: 'Dark-themed beverage ordering application featuring rewards point tracking, personalized brewing presets, and express in-store pickup booking.',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    caseStudyUrl: '#',
    liveUrl: '#',
  },
  {
    id: 'rental-house',
    title: 'Enterprise Property Management Portal',
    category: 'Website Design',
    roleBadge: 'Full-Stack Web UX',
    techBadge: 'Next.js & Django REST',
    description: 'Comprehensive property listing and tenant management platform built for institutional portfolios with live contract oversight and financial reporting.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    caseStudyUrl: '#',
    liveUrl: '#',
  },
  {
    id: 'bank-portal',
    title: 'FinTech Banking Core Dashboard',
    category: 'App Desktop',
    roleBadge: 'Design System & UI Architecture',
    techBadge: 'React & TypeScript',
    description: 'High-density banking operations portal designed for rapid teller transactions, account auditing, and real-time compliance validation.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    caseStudyUrl: '#',
    liveUrl: '#',
  },
  {
    id: 'brand-identity',
    title: 'FinTech Brand Identity & Component Library',
    category: 'Branding',
    roleBadge: 'Design System & Tokens',
    techBadge: 'Illustrator & Figma',
    description: 'Modular design system tokenization and digital brand guidelines ensuring unified visual consistency across web dashboards and native mobile apps.',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80',
    caseStudyUrl: '#',
    liveUrl: '#',
  },
];
