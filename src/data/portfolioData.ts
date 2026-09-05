import groceryImg from '../assets/images/grocery.png';
import coffeeImg from '../assets/images/coffee.png';
import hoseImg from '../assets/images/hose.png';
import attendanceImg from '../assets/images/attendance.png';
import dmsImg from '../assets/images/dms.png';
import essetImg from '../assets/images/esset.png';
import letterImg from '../assets/images/letter.png';
import resignImg from '../assets/images/resign.png';
import revampBackImg from '../assets/images/revamp-back.png';
import revampFrontImg from '../assets/images/revamp-front.png';
import staffRequisitionImg from '../assets/images/staff reqisition.png';

export interface Project {
  id: string;
  title: string;
  category: 'Web App Design' | 'Mobile Design' | 'Web Development' | 'Banking Systems' | 'Full-Stack Development' | string;
  roleBadge: string;
  techBadge: string;
  description: string;
  detailedOverview?: string;
  frontendHighlights?: string[];
  backendHighlights?: string[];
  databaseHighlights?: string[];
  techStack?: string[];
  image: string;
  UrlLink?: string;
  liveUrl?: string;
  githubUrl?: string;
  restricted?: boolean; // Internal / confidential — no live demo or detail view
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
    category: 'Mobile Design',
    roleBadge: 'UX/UI & Mobile App',
    techBadge: 'Figma & React Native',
    description: 'Streamlined mobile shopping experience with intelligent search, smart cart management, recipe discovery, and a frictionless 2-step checkout flow.',
    image: groceryImg,
    UrlLink: 'https://www.figma.com/proto/JdaOgZUYi2s2TpqwuPGtN8/Pok-s-Project?node-id=313-39201&p=f&t=mNrn2BZJA7a5ADSh-1&scaling=scale-down&content-scaling=fixed&page-id=169%3A4579&starting-point-node-id=313%3A39201',
    liveUrl: '#',
  },
  {
    id: 'coffee-shop',
    title: 'Artisan Coffee Ordering & Loyalty App',
    category: 'Mobile Design',
    roleBadge: 'UX Flow & Dark UI',
    techBadge: 'Figma & Tailwind CSS',
    description: 'Dark-themed beverage ordering application featuring rewards point tracking, personalized brewing presets, and express in-store pickup booking.',
    image: coffeeImg,
    UrlLink: 'https://www.figma.com/proto/JdaOgZUYi2s2TpqwuPGtN8/Pok-s-Project?node-id=169-7245&p=f&t=ui1jE7r1QQPKEmf2-1&scaling=min-zoom&content-scaling=fixed&page-id=169%3A4576&show-proto-sidebar=1&starting-point-node-id=169%3A8906',
    liveUrl: '#',
  },
  {
    id: 'attendance-mobile',
    title: 'Attendance Report — Mobile App',
    category: 'Mobile Design',
    roleBadge: 'Mobile UX Design',
    techBadge: 'Figma & Angular Mobile',
    description: 'Mobile attendance viewer for bank staff to check their own card-scan attendance records, view daily punch-in/out history, request corrections, and download monthly reports on the go.',
    image: attendanceImg,
    restricted: true,
  },
  {
    id: 'rental-house',
    title: 'Enterprise Property Management Portal',
    category: 'Web App Design',
    roleBadge: 'Full-Stack Web UX',
    techBadge: 'Next.js & Django REST',
    description: 'Comprehensive property listing and tenant management platform built for institutional portfolios with live contract oversight and financial reporting.',
    image: hoseImg,
    UrlLink: 'https://www.figma.com/proto/JdaOgZUYi2s2TpqwuPGtN8/Pok-s-Project?node-id=313-23896&t=Ss95RYvtKHS0cE14-1&scaling=scale-down-width&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=313%3A23303&show-proto-sidebar=1',
    liveUrl: '#',
  },

  // ─── Web App Design Projects (Confidential — Internal Access Only) ──────────
  {
    id: 'medical-claim',
    title: 'Medical Claim — Partner Bank Reimbursement',
    category: 'Web App Design',
    roleBadge: 'UX Design & Frontend Dev',
    techBadge: 'Angular & Oracle DB',
    description: 'Digital medical claim portal enabling staff to submit and track healthcare reimbursement requests from partner banks — with supporting document uploads, approval routing, and payment status tracking.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    restricted: true,
  },
  {
    id: 'attendance-web',
    title: 'Attendance Report — Web Dashboard',
    category: 'Web App Design',
    roleBadge: 'UX Design & Frontend Dev',
    techBadge: 'Angular & REST API',
    description: 'Web-based HR attendance management dashboard providing managers with department-wide attendance analytics, card scan logs, leave summaries, and exportable monthly reports.',
    image: attendanceImg,
    restricted: true,
  },
  {
    id: 'easset-web',
    title: 'eAsset — Asset Management Web Portal',
    category: 'Web App Design',
    roleBadge: 'UX Design & Angular Dev',
    techBadge: 'Angular & Oracle DB',
    description: 'Web portal for full lifecycle management of bank physical and digital assets — covering registration, allocation to staff or branches, maintenance scheduling, and audit trail reporting.',
    image: essetImg,
    restricted: true,
  },
  {
    id: 'erequest-web',
    title: 'eRequest — Internal Request Web System',
    category: 'Web App Design',
    roleBadge: 'UX Design & Full-Stack Dev',
    techBadge: 'Angular & Node.js',
    description: 'Centralized web-based request management system for bank staff to raise, track, and manage operational and HR requests — including card issuance, promotions, equipment, and transfers.',
    image: 'https://images.unsplash.com/photo-1568219557405-376e23e4f7cf?auto=format&fit=crop&w=800&q=80',
    restricted: true,
  },
  {
    id: 'visa-purchase',
    title: 'Visa Purchase — Card Transaction Portal',
    category: 'Web App Design',
    roleBadge: 'UX Design & Frontend Dev',
    techBadge: 'Angular & Oracle DB',
    description: 'Secure web platform for managing and reviewing Visa card purchase transactions — featuring transaction history, dispute flagging, merchant categorization, and daily spending limit controls.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
    restricted: true,
  },
  {
    id: 'revamp-website',
    title: 'Revamp — Bank Public Website Redesign',
    category: 'Web App Design',
    roleBadge: 'UX/UI Design Lead',
    techBadge: 'Figma & React',
    description: 'Full UX/UI redesign of the bank public-facing website — modernizing brand identity, improving content hierarchy, optimizing mobile responsiveness, and enhancing customer onboarding journeys.',
    image: revampFrontImg,
    restricted: true,
  },
  {
    id: 'revamp-system',
    title: 'Revamp — Internal Banking System UI Overhaul',
    category: 'Web App Design',
    roleBadge: 'Design System & UI Architecture',
    techBadge: 'Angular & Figma Design System',
    description: 'Comprehensive UI/UX overhaul of legacy internal banking systems — unifying component libraries, migrating to a tokenized design system, and improving workflow efficiency across core operations.',
    image: revampBackImg,
    restricted: true,
  },

  {
    id: 'brand-identity',
    title: 'FinTech Brand Identity & Component Library',
    category: 'Web Development',
    roleBadge: 'Design System & Tokens',
    techBadge: 'Illustrator & Figma',
    description: 'Modular design system tokenization and digital brand guidelines ensuring unified visual consistency across web dashboards and native mobile apps.',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80',
    UrlLink: 'link',
    liveUrl: '#',
  },

  // ─── Confidential Banking Systems (Internal Access Only) ─────────────────
  {
    id: 'eresign',
    title: 'E-Resign — Staff Resignation Management',
    category: 'Banking Systems',
    roleBadge: 'Full-Stack Development',
    techBadge: 'React & Django REST',
    description: 'Internal banking platform for managing staff resignation requests, approval processes, status tracking, and administrative workflows — developed as part of a full-stack engineering team.',
    detailedOverview: 'An internal staff resignation management platform developed as part of a full-stack engineering team to support the submission, processing, approval, and tracking of employee resignation requests within the banking organization.',
    frontendHighlights: [
      'Developed user interfaces using React.js',
      'Built reusable components and forms',
      'Implemented form validation and user interactions',
      'Integrated frontend with REST APIs',
    ],
    backendHighlights: [
      'Developed REST APIs using Django REST Framework',
      'Implemented request processing and validation',
      'Integrated backend services with Oracle Database',
      'Supported workflow and status management',
    ],
    databaseHighlights: [
      'Oracle Database integration',
      'Docker containerized development environment',
    ],
    techStack: ['React.js', 'Django', 'Django REST Framework', 'Oracle Database', 'Docker', 'REST API'],
    image: resignImg,
    restricted: true,
  },
  {
    id: 'attendance-report',
    title: 'Attendance Report — Staff Attendance & Reporting',
    category: 'Banking Systems',
    roleBadge: 'Full-Stack Development',
    techBadge: 'React & Django REST',
    description: "Internal platform for reviewing staff attendance records generated through the bank's card-scanning attendance system — developed as part of a cross-functional development team.",
    detailedOverview: "An internal attendance reporting platform developed as part of a cross-functional engineering team that allows authorized users to review and manage staff attendance information collected from the organization's card-scanning attendance system.",
    frontendHighlights: [
      'Developed attendance reporting interfaces using React.js',
      'Implemented search and filtering',
      'Implemented pagination and data presentation',
      'Integrated frontend with REST APIs',
    ],
    backendHighlights: [
      'Developed Django REST APIs',
      'Implemented attendance data retrieval and filtering',
      'Integrated application with Oracle Database',
      'Supported reporting-related functionality',
    ],
    databaseHighlights: [
      'Oracle Database integration',
      'Docker containerized development environment',
    ],
    techStack: ['React.js', 'Django', 'Django REST Framework', 'Oracle Database', 'Docker', 'REST API'],
    image: attendanceImg,
    restricted: true,
  },
  {
    id: 'erequest',
    title: 'E-Request — Internal Request Management',
    category: 'Banking Systems',
    roleBadge: 'Full-Stack Development',
    techBadge: 'React & Django REST',
    description: 'Centralized platform for submitting and managing internal staff requests (cards, staff services, administrative requests) — developed collaboratively within an engineering team.',
    detailedOverview: 'An internal request management platform built as part of a full-stack development team to centralize different types of staff requests within the banking organization, including requests related to cards, staff services, and administrative processes.',
    frontendHighlights: [
      'Developed dynamic request forms using React.js',
      'Built reusable form components',
      'Implemented form validation',
      'Implemented search, filtering, and pagination',
      'Integrated frontend with REST APIs',
    ],
    backendHighlights: [
      'Developed REST APIs using Django REST Framework',
      'Implemented request processing and validation',
      'Supported request status and workflow functionality',
      'Integrated with Oracle Database',
    ],
    databaseHighlights: [
      'Oracle Database integration',
      'Docker containerized development environment',
    ],
    techStack: ['React.js', 'Django', 'Django REST Framework', 'Oracle Database', 'Docker', 'REST API'],
    image: 'https://images.unsplash.com/photo-1568219557405-376e23e4f7cf?auto=format&fit=crop&w=800&q=80',
    restricted: true,
  },
  {
    id: 'easset',
    title: 'E-Asset — Bank Asset Management',
    category: 'Banking Systems',
    roleBadge: 'Full-Stack Development',
    techBadge: 'React & Django REST',
    description: 'Internal system for managing, tracking, and maintaining information related to bank assets throughout their lifecycle — engineered as part of an enterprise project team.',
    detailedOverview: 'An internal asset management platform engineered as part of a banking project team to help the organization manage and track bank assets and their related information.',
    frontendHighlights: [
      'Developed asset management interfaces using React.js',
      'Implemented asset listing and data presentation',
      'Implemented search and filtering',
      'Built reusable components',
      'Integrated frontend with REST APIs',
    ],
    backendHighlights: [
      'Developed REST APIs using Django',
      'Implemented asset-related data processing',
      'Integrated backend with Oracle Database',
      'Implemented validation and data management functionality',
    ],
    databaseHighlights: [
      'Oracle Database integration',
      'Docker containerized development environment',
    ],
    techStack: ['React.js', 'Django', 'Django REST Framework', 'Oracle Database', 'Docker', 'REST API'],
    image: essetImg,
    restricted: true,
  },
  {
    id: 'staff-requisition',
    title: 'Staff Requisition — Staff Requisition Management',
    category: 'Banking Systems',
    roleBadge: 'Full-Stack Development',
    techBadge: 'React & Django REST',
    description: 'Internal platform for submitting, reviewing, approving, and tracking staff requisition requests — developed within an internal development team.',
    detailedOverview: 'An internal staff requisition platform developed as part of an internal engineering team to support the submission, review, approval, and tracking of staff recruitment requests within the organization.',
    frontendHighlights: [
      'Developed requisition interfaces using React.js',
      'Built forms and reusable UI components',
      'Implemented form validation',
      'Implemented search and filtering',
      'Integrated frontend with REST APIs',
    ],
    backendHighlights: [
      'Developed REST APIs using Django REST Framework',
      'Implemented requisition data processing',
      'Supported workflow and status management',
      'Integrated with Oracle Database',
    ],
    databaseHighlights: [
      'Oracle Database integration',
      'Docker containerized development environment',
    ],
    techStack: ['React.js', 'Django', 'Django REST Framework', 'Oracle Database', 'Docker', 'REST API'],
    image: staffRequisitionImg,
    restricted: true,
  },
  {
    id: 'eticket',
    title: 'eTicket — Internal IT Support Ticketing',
    category: 'Banking Systems',
    roleBadge: 'Full-Stack Development',
    techBadge: 'React & Django REST',
    description: 'Internal IT support platform allowing bank staff to submit, track, and manage technical support requests — developed as part of a full-stack team.',
    detailedOverview: 'An internal IT support ticketing platform developed within a full-stack team to help bank staff submit and track technical support requests and allow support teams to manage those requests.',
    frontendHighlights: [
      'Developed ticket submission and management interfaces using React.js',
      'Built reusable components and forms',
      'Implemented ticket status displays',
      'Implemented search, filtering, and pagination',
      'Integrated frontend with REST APIs',
    ],
    backendHighlights: [
      'Developed REST APIs using Django REST Framework',
      'Implemented ticket-related data processing',
      'Supported ticket status management',
      'Integrated with Oracle Database',
    ],
    databaseHighlights: [
      'Oracle Database integration',
      'Docker containerized development environment',
    ],
    techStack: ['React.js', 'Django', 'Django REST Framework', 'Oracle Database', 'Docker', 'REST API'],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
    restricted: true,
  },
  {
    id: 'loan-contract',
    title: 'Loan Contract — Loan Contract Management',
    category: 'Banking Systems',
    roleBadge: 'Full-Stack Development',
    techBadge: 'React & Django REST',
    description: 'Internal banking platform for managing loan contract-related information, documentation, and processing workflows — built collaboratively within a project team.',
    detailedOverview: 'An internal banking application developed as part of a software development team to support the management and processing of loan contract-related information and documentation.',
    frontendHighlights: [
      'Developed loan contract interfaces using React.js',
      'Built forms and reusable components',
      'Implemented data validation',
      'Integrated frontend with REST APIs',
    ],
    backendHighlights: [
      'Developed REST APIs using Django REST Framework',
      'Implemented contract-related data processing',
      'Integrated backend with Oracle Database',
      'Supported workflow-related functionality',
    ],
    databaseHighlights: [
      'Oracle Database integration',
      'Docker containerized development environment',
    ],
    techStack: ['React.js', 'Django', 'Django REST Framework', 'Oracle Database', 'Docker', 'REST API'],
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80',
    restricted: true,
  },
  {
    id: 'dms',
    title: 'DMS — Document Management System',
    category: 'Banking Systems',
    roleBadge: 'Full-Stack Development',
    techBadge: 'React & Django REST',
    description: 'Internal platform for organizing, managing, searching, and accessing business documents within the banking environment — engineered within an enterprise development team.',
    detailedOverview: 'An internal document management platform built within an enterprise development team to help users organize, manage, search, and access business documents within the organization.',
    frontendHighlights: [
      'Developed document management interfaces using React.js',
      'Implemented document listing and search',
      'Implemented filtering and pagination',
      'Built reusable UI components',
      'Integrated frontend with REST APIs',
    ],
    backendHighlights: [
      'Developed REST APIs using Django REST Framework',
      'Implemented document-related data processing',
      'Integrated with Oracle Database',
      'Supported document management workflows',
    ],
    databaseHighlights: [
      'Oracle Database integration',
      'Docker containerized development environment',
    ],
    techStack: ['React.js', 'Django', 'Django REST Framework', 'Oracle Database', 'Docker', 'REST API'],
    image: dmsImg,
    restricted: true,
  },
  {
    id: 'letter-management',
    title: 'Letter Management — Bank Letter Management',
    category: 'Banking Systems',
    roleBadge: 'Full-Stack Development',
    techBadge: 'React & Django REST',
    description: 'Internal system for creating, managing, processing, and tracking official banking letters and workflows — developed as part of a full-stack engineering team.',
    detailedOverview: 'An internal letter management platform developed as part of a full-stack engineering team to support the creation, processing, management, and tracking of official banking letters.',
    frontendHighlights: [
      'Developed letter management interfaces using React.js',
      'Built forms and reusable components',
      'Implemented form validation',
      'Implemented search and filtering',
      'Integrated frontend with REST APIs',
    ],
    backendHighlights: [
      'Developed REST APIs using Django REST Framework',
      'Implemented letter-related data processing',
      'Supported status and workflow functionality',
      'Integrated with Oracle Database',
    ],
    databaseHighlights: [
      'Oracle Database integration',
      'Docker containerized development environment',
    ],
    techStack: ['React.js', 'Django', 'Django REST Framework', 'Oracle Database', 'Docker', 'REST API'],
    image: letterImg,
    restricted: true,
  },
];

