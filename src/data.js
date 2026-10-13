// ─────────────────────────────────────────────────────────────
// ALL portfolio content lives in this one file.
// Edit text here — no need to touch any component.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Dhananjay Ahlawat',
  role: 'Full-Stack Developer',
  subRole: 'Application Developer',
  location: 'Gurugram, India',
  email: 'ahlawatdhananjay320@gmail.com',
  phone: '+91 8708422237',
  summary:
    'Application Developer with ~2 years of experience building scalable cross-platform mobile and web applications using React Native, React, Node.js/Express, MongoDB, and Socket.io. Currently Lead Developer of Niyoq — an industry management ERP platform — owning features end to end, from system architecture and APIs to real-time sync and production deployment across web, desktop, and mobile.',
  links: {
    github: 'https://github.com/Dhananjay320',
    linkedin: 'https://www.linkedin.com/in/dhananjay-ahlawat-6980422b3',
    playstore: 'https://play.google.com/store/apps/details?id=com.dhananjayahlawat.myreactproject&pcampaignid=web_share',
    resume: 'https://drive.google.com/file/d/1gZJ6BQDlaTkRMn6nimCA9BpFjXoX7YAo/view?usp=sharing',
  },
  stats: [
    { value: '2+', label: 'Years of Experience' },
    { value: '6+', label: 'Production Apps Built' },
    { value: '3', label: 'Platforms — Web · Mobile · Desktop' },
    { value: '2', label: 'Apps Live on Play Store' },
  ],
}

export const skills = [
  {
    group: 'Languages',
    items: ['JavaScript', 'TypeScript', 'C++', 'HTML / CSS'],
  },
  {
    group: 'Frontend & Mobile',
    items: ['React', 'React Native', 'Expo', 'Electron', 'Tailwind CSS', 'Redux / Context'],
  },
  {
    group: 'Backend & Data',
    items: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'Socket.io', 'REST APIs', 'JWT Auth', 'Firebase'],
  },
  {
    group: 'Core & Tools',
    items: ['DSA', 'OOP', 'Git', 'VPS Deployment', 'Play Store Releases', 'Offline-First Sync', 'Debugging'],
  },
]

export const experience = [
  {
    role: 'Application Developer',
    company: 'Avadeti Media',
    note: 'Lead developer of Niyoq — real-time chat, docs, geofenced attendance and payroll across web, desktop and mobile. Also architected a Task Management ERP with RBAC and audit trails.',
    period: 'March 2026 – Present',
    location: 'Gurugram, India',
    points: [
      'Lead Developer of Niyoq, a self-hosted company management platform built with React, Node.js, MongoDB, Socket.io, Electron, and React Native — implementing real-time chat, scheduling, documents, geofenced attendance, task management, payroll, and WFH monitoring with REST APIs and real-time data synchronization.',
      'Architected and deployed a Task Management ERP using React + TypeScript, Tailwind, Node.js + TypeScript, and MongoDB — implementing role-based access control (RBAC), hierarchical task workflows, attendance tracking, progress reporting, approvals, performance history, and audit trails across Director, Team Leader, and Employee roles.',
      'Managed the full application lifecycle: system architecture, database modeling, API development, authentication, responsive UI, real-time communication, data synchronization, VPS deployment, and production maintenance across web, desktop, and mobile platforms.',
    ],
    tags: ['React', 'React Native', 'Electron', 'Node.js', 'MongoDB', 'Socket.io', 'TypeScript'],
  },
  {
    role: 'React Native Developer',
    company: 'Eminent Infosystems Pvt. Ltd.',
    note: 'Built and shipped the Adwin and Adwin Sales apps to the Play Store, including admin-controlled background location tracking with offline-first sync.',
    period: 'January 2025 – February 2026',
    location: 'Najafgarh, India',
    points: [
      'Developed and maintained the Adwin App and Adwin Sales App using React Native — integrating REST APIs, authentication, local storage, background services, and production-ready mobile workflows for applications deployed on the Google Play Store.',
      'Engineered an admin-controlled background location tracking system using GPS/geolocation services, background processing, battery optimization, offline-first data persistence, and automatic synchronization when network connectivity was restored.',
      'Worked across the complete mobile development lifecycle: API integration, state management, offline data handling, debugging, testing, performance optimization, and Android release deployment.',
    ],
    tags: ['React Native', 'REST APIs', 'Background Services', 'Offline-First', 'Play Store'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'BrackettUp HealthTech Pvt. Ltd.',
    note: 'Worked on BrackettUp, an event booking app for fitness activities, and Nexo, its vendor-facing app for creating and managing events.',
    period: 'October 2024 – December 2024',
    location: 'India',
    points: [
      'Contributed to BrackettUp, a React Native event booking platform for discovering and booking gym, yoga, fitness, and other activity-based events — implementing responsive UI and API-driven application flows.',
      'Worked on Nexo, the vendor-facing application for event creation, listing, and management, supporting role-specific workflows and backend API integration.',
      'Developed and refined React Native components, navigation flows, form handling, API integrations, and application state management, while supporting debugging and functional testing across both applications.',
    ],
    tags: ['React Native', 'API Integration', 'State Management'],
  },
]

export const projects = [
  {
    key: 'niyoq',
    shot: '/shots/niyoq.webp',
    title: 'Niyoq',
    subtitle: 'Workspace Management Platform',
    featured: true,
    description:
      'Self-hosted workspace platform shipped as mobile (React Native), web (React), and desktop (Electron) apps. Workspaces bring together document storage, meetings, team conversations, team tasks with progress tracking, email management, feed, geofenced attendance, payroll, and WFH monitoring — powered by Node.js/Express, MongoDB, and Socket.io for real-time sync.',
    highlights: [
      'In daily production use across an entire company',
      'Real-time chat & data sync built on Socket.io',
      'Geofenced attendance + WFH monitoring',
      'One codebase strategy across web, desktop & mobile',
    ],
    tags: ['React', 'React Native', 'Electron', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    platforms: 'Web · Desktop · Mobile',
    status: 'In production',
    link: null,
  },
  {
    key: 'erp',
    shot: '/shots/erp.webp',
    title: 'Task Management ERP',
    subtitle: 'Factory Workforce Management',
    featured: true,
    description:
      'Factory workforce management ERP giving the Director real-time visibility into company-wide progress — daily task updates across all departments including HR and Accounts. Implements RBAC across Director, Team Leader, and Employee roles, hierarchical task workflows, approvals, performance history, and audit trails.',
    highlights: [
      'Role-based access control across 3 role levels',
      'Hierarchical task workflows with approvals',
      'Performance history & full audit trails',
      'Deployed and maintained on a VPS',
    ],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    platforms: 'Web',
    status: 'In production',
    link: null,
  },
  {
    key: 'niyukti',
    shot: '/shots/niyukti.webp',
    title: 'Niyukti',
    subtitle: 'AI Interview Platform — HR Assistant',
    featured: true,
    description:
      'End-to-end interview platform that helps HR conduct multi-round interviews and manage candidates — candidates take a self-serve Round 1 with spoken questions (browser TTS/STT), audio/video recording, and tab-switch proctoring; AI then evaluates and compares candidates to help HR screen, score, and manage the pipeline. Provider-agnostic AI integration with bring-your-own-key configuration.',
    highlights: [
      'Self-serve AI interview rounds with A/V recording',
      'Browser-native speech (TTS + STT) — no third-party SDK',
      'Proctoring with automatic violation lockout',
      'AI candidate comparison with multi-provider support',
    ],
    tags: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Web Speech API', 'MediaRecorder'],
    platforms: 'Web',
    status: 'Complete',
    link: null,
  },
  {
    key: 'tracker',
    shot: '/shots/tracker.webp',
    shotPortrait: true,
    title: 'Background Location Tracker',
    subtitle: 'Field-Force Tracking System',
    featured: false,
    description:
      'React Native (Expo) field-tracking app using Expo Task Manager with foreground-service permissions to transmit salesperson locations every 5 minutes. Distance travelled is computed from GPS coordinates, with offline-first persistence and automatic sync on reconnect, backed by a Node.js/Express REST API with authentication.',
    highlights: [
      'Background location updates every 5 minutes',
      'Offline-first — queues data, auto-syncs on reconnect',
      'Battery-optimized foreground service (native Kotlin module work)',
    ],
    tags: ['React Native', 'Expo', 'Kotlin', 'Node.js', 'Express'],
    platforms: 'Android',
    status: 'Open source',
    link: 'https://github.com/Dhananjay320/backgroundlocationtracker',
  },
  {
    key: 'luxury',
    shot: '/shots/luxury.webp',
    shotPortrait: true,
    title: 'Luxury E-Commerce App',
    subtitle: 'Premium Shopping Experience',
    featured: false,
    description:
      'React Native shopping app inspired by the design language of luxury houses like Louis Vuitton and Gucci — a minimalist, motion-rich UI where every screen features fluid animations and micro-interactions for a premium feel; product catalogue, cart, and checkout with REST API integration.',
    highlights: [
      'Fluid animations & micro-interactions on every screen',
      'Luxury-brand-grade minimalist design system',
      'Full catalogue → cart → checkout flow',
    ],
    tags: ['React Native', 'Animations', 'REST APIs'],
    platforms: 'Mobile',
    status: 'Complete',
    link: null,
  },
  {
    key: 'adwin',
    shot: '/shots/adwin.webp',
    shotPortrait: true,
    title: 'Adwin & Adwin Sales',
    subtitle: 'Production Play Store Apps',
    featured: false,
    description:
      'Production mobile apps live on the Google Play Store, built and maintained end to end — REST API integration, authentication, local storage, background services, admin-controlled location tracking, and offline data handling with automatic synchronization.',
    highlights: [
      'Live in production on the Google Play Store',
      'Admin-controlled background location tracking',
      'Offline-first data persistence & auto-sync',
    ],
    tags: ['React Native', 'Play Store', 'Background Services'],
    platforms: 'Android',
    status: 'Live on Play Store',
    link: 'https://play.google.com/store/apps/details?id=com.dhananjayahlawat.myreactproject&pcampaignid=web_share',
  },
]

export const achievements = [
  {
    icon: '🚀',
    title: 'Production Platform Lead',
    text: 'Lead developer on Niyoq — a full company-management platform in daily use at Avadeti Media across desktop and mobile.',
  },
  {
    icon: '📱',
    title: 'Shipped to Play Store',
    text: 'Adwin apps live in production with background location tracking and offline-first sync.',
  },
  {
    icon: '⚡',
    title: 'Real-Time Systems',
    text: 'Built Socket.io messaging, geofenced attendance, and TTL-indexed data pipelines from scratch.',
  },
  {
    icon: '🎯',
    title: 'End-to-End Ownership',
    text: 'Take features from spec to production — UI, APIs, auth, data models, and deployment.',
  },
]

export const education = {
  degree: 'B.Tech, Computer Science & Engineering',
  school: 'Ganga Institute of Technology & Management',
  period: 'Graduated 2025',
  location: 'Jhajjar, India',
}

export const certifications = [
  'Complete React Native Bootcamp',
  'Master DSA Using C++ (Certificate of Excellence)',
  'NodeJS – The Complete Guide (MVC, REST APIs, GraphQL)',
]

export const languages = [
  { name: 'English', level: 'Advanced' },
  { name: 'Hindi', level: 'Native' },
]
