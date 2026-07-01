export const personal = {
  name: 'Surya S',
  title: 'Full Stack Developer',
  tagline: 'I build fast, scalable web apps that users love.',
  bio: "I'm a Full Stack Developer from Tamil Nadu, passionate about crafting seamless digital experiences. I specialize in React frontends and Java Spring Boot backends — bringing ideas from zero to production.",
  location: 'Virudhunagar, Tamil Nadu',
  email: 'ssuryaselvam001@gmail.com',
  phone: '+91 6384160255',
  links: {
    github: 'https://github.com/ssurya07',
    linkedin: 'https://www.linkedin.com/in/surya-s-055015317/',
    portfolio: 'https://ssurya07.github.io/surya--portfolio/',
  },
}

export const skills = {
  languages: [
    { name: 'Java', level: 88 },
    { name: 'JavaScript (ES6+)', level: 85 },
    { name: 'Python', level: 70 },
    { name: 'SQL', level: 80 },
  ],
  frontend: [
    { name: 'React.js', level: 87 },
    { name: 'Redux Toolkit', level: 80 },
    { name: 'Material UI', level: 82 },
    { name: 'HTML5 / CSS3', level: 90 },
    { name: 'Tailwind CSS', level: 78 },
    { name: 'Bootstrap', level: 80 },
  ],
  backend: [
    { name: 'Spring Boot', level: 85 },
    { name: 'Spring Security', level: 78 },
    { name: 'REST API Design', level: 88 },
    { name: 'Hibernate / JPA', level: 80 },
    { name: 'JDBC', level: 75 },
  ],
  tools: [
    'Git & GitHub', 'MySQL', 'Postman', 'Maven',
    'VS Code', 'IntelliJ IDEA', 'Eclipse / STS',
    'Netlify', 'JWT', 'BCrypt',
  ],
}

export const projects = [
  {
    id: 1,
    title: 'TrendCart',
    subtitle: 'Premium Watch E-Commerce Platform',
    description:
      'A production-grade full-stack e-commerce platform for luxury watches. Features role-based access control, JWT authentication, Razorpay payment gateway with HMAC-SHA256 signature verification, real-time admin dashboard with analytics, and a React 19 SPA deployed on Netlify CDN.',
    tags: ['React 19', 'Redux Toolkit', 'MUI v9', 'Spring Boot', 'MySQL', 'JWT', 'Razorpay'],
    links: {
      live: 'https://trendcart-time.netlify.app',
      frontend: 'https://github.com/ARUNKUMARP123/TRENDCART_Front-End',
      backend: 'https://github.com/ARUNKUMARP123/TRENDCART_Back-End',
    },
    highlights: [
      '18+ REST API endpoints',
      'Razorpay payment integration',
      'Admin dashboard with real-time stats',
      'Java 21 virtual threads (Project Loom)',
    ],
    featured: true,
    color: '#f97f06',
  },
  {
    id: 2,
    title: 'BankSystem',
    subtitle: 'Secure Banking Platform',
    description:
      'A secure full-stack banking application with account authentication, transaction processing, and account management. Built with Spring Boot backend services and a React frontend, leveraging JWT-secured APIs and MySQL for persistent storage.',
    tags: ['React', 'Spring Boot', 'MySQL', 'JWT', 'REST API'],
    links: {
      github: 'https://github.com/ssurya07/BankSystem',
    },
    highlights: [
      'JWT-secured authentication',
      'Real-time transaction logic',
      'Account management dashboard',
    ],
    featured: false,
    color: '#3b82f6',
  },
  {
    id: 3,
    title: 'Theater Ticket Booking',
    subtitle: 'Real-time Seat Management System',
    description:
      'A scalable ticket-booking platform with real-time seat availability, Spring Boot REST APIs for seat management, and transaction processing. Features dynamic seating layout with conflict-free reservation logic.',
    tags: ['React', 'Spring Boot', 'MySQL', 'REST API'],
    links: {
      github: 'https://github.com/ssurya07/TheaterTicketBookingSystem',
    },
    highlights: [
      'Real-time seat management',
      'Conflict-free reservation',
      'Transaction processing',
    ],
    featured: false,
    color: '#8b5cf6',
  },
  {
    id: 4,
    title: 'Smart Parking Allocator',
    subtitle: 'Automated Slot & Billing System',
    description:
      'An automated parking management simulator featuring dynamic slot assignment algorithms, real-time slot tracking, and instant digital invoice generation. Built with a Spring Boot backend and React frontend.',
    tags: ['React', 'Spring Boot', 'MySQL', 'REST API'],
    links: {
      github: 'https://github.com/ssurya07/InventorySystem',
    },
    highlights: [
      'Dynamic slot assignment',
      'Instant invoice generation',
      'Real-time slot tracking',
    ],
    featured: false,
    color: '#10b981',
  },
  ,{
    id: 5,
    title: 'CRUD App',
    subtitle: 'Fetch API Based CRUD Application',
    description:
      'A dynamic CRUD application built with vanilla JavaScript using the Fetch API for seamless data operations. Features create, read, update, and delete functionality with a clean, responsive UI and real-time DOM updates.',
    tags: ['JavaScript', 'Fetch API', 'HTML5', 'CSS3'],
    links: {
      live: 'https://ssurya07.github.io/Crud_App_Fetch/',
      github: 'https://github.com/ssurya07/Crud_App_Fetch',
    },
    highlights: [
      'Full CRUD operations',
      'Fetch API integration',
      'Real-time DOM updates',
    ],
    featured: false,
    color: '#06b6d4',
  },
  {
    id: 6,
    title: 'E-commerce Frontend',
    subtitle: 'Frontend Web Application',
    description:
      'A frontend web application showcasing modern HTML5, CSS3, and JavaScript skills with responsive design, interactive UI components, and clean code architecture.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
    links: {
      live: 'https://ssurya07.github.io/project1/',
      github: 'https://github.com/ssurya07/project1',
    },
    highlights: [
      'Responsive design',
      'Interactive UI',
      'Clean architecture',
    ],
    featured: false,
    color: '#a855f7',
  }
]

export const experience = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Scope Tech Software Solutions',
    location: 'Madurai',
    period: 'Jan 2026 – May 2026',
    description: [
      'Developed responsive UIs and integrated them with scalable Java Spring Boot backend services.',
      'Built and maintained RESTful APIs for seamless front-end to back-end data exchange.',
      'Managed MySQL database operations using Hibernate and JDBC.',
      'Implemented new features and resolved bugs as part of an agile development team.',
    ],
    tech: ['React', 'Spring Boot', 'MySQL', 'Hibernate', 'REST API'],
  },
]

export const education = [
  {
    degree: 'B.Com with Computer Applications',
    institution: 'Sourashtra College, Madurai',
    period: '2021 – 2024',
    grade: null,
  },
]

export const certifications = [
  {
    name: 'Python Full Stack Developer',
    issuer: 'Edex IT Solutions',
    year: '2024',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
