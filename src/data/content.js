export const profile = {
  firstName: "Mouhamadou",
  lastName: "Mouhtada Ndiaye",
  fullName: "Mouhamadou Mouhtada Ndiaye",
  role: "Élève ingénieur — Génie logiciel / Cybersécurité",
  school: "ESP Dakar — L3 Génie logiciel · L2 Cybersécurité",
  location: "Dakar, Sénégal",
  availability: "Disponible — stage / alternance",
  year: "2026",
  email: "mouhamadoumouhtada.ndiaye@gmail.com",
  linkedin: "https://www.linkedin.com/in/mouhamadou-mouhtada-ndiaye-5b5bb3344",
  linkedinLabel: "linkedin.com/in/mouhamadou-mouhtada-ndiaye-5b5bb3344",
  github: "https://github.com/mouhtada-1829",
  githubLabel: "github.com/mouhtada-1829",
};

export const nav = [
  { id: "projets", label: "Projets" },
  { id: "certifications", label: "Certifications" },
  { id: "securite", label: "Cybersécurité" },
  { id: "parcours", label: "Parcours" },
  { id: "contact", label: "Contact" },
];

export const circuit = [
  {
    id: "mobile",
    index: "01",
    label: "APP MOBILE",
    meta: "Application mobile",
    detail:
      "Le billet reste sur le téléphone après l'achat, y compris sans réseau au moment du contrôle.",
  },
  {
    id: "api",
    index: "02",
    label: "API REST",
    meta: "Web + mobile",
    detail:
      "Une API unique sert l'application mobile et l'interface web avec les mêmes règles d'accès.",
  },
  {
    id: "backend",
    index: "03",
    label: "BACKEND",
    meta: "Laravel · PHP",
    detail:
      "Chaque organisateur gère ses événements, ses billets et ses validations dans le même backend.",
  },
  {
    id: "paiement",
    index: "04",
    label: "PAIEMENT LOCAL",
    meta: "Wave · Orange Money · Free Money",
    detail:
      "Le paiement mobile local est branché au parcours d'achat, sans passer par une carte bancaire.",
  },
  {
    id: "validation",
    index: "05",
    label: "VALIDATION",
    meta: "Smart Ticket",
    detail:
      "Le contrôle du billet se fait par un code unique, côté organisateur, au moment de l'entrée.",
  },
];

export const flagship = {
  name: "Senguichet",
  year: "2026",
  status: "Réalisation",
  kicker: "Senguichet — réalisation 2026",
  title: "Billetterie dématérialisée, du paiement mobile à la validation.",
  context:
    "Une plateforme de billetterie pour le marché sénégalais, pensée pour plusieurs organisateurs et pour un achat qui se fait au téléphone, avec les moyens de paiement locaux.",
  role:
    "J'ai conçu et développé l'architecture du produit : backend, interface web, application mobile, API REST et modules partagés entre les clients.",
  scope: [
    "Application web et application mobile",
    "API REST commune aux deux clients",
    "Paiements Wave, Orange Money et Free Money",
    "Validation des billets par code unique",
    "Gestion multi-organisateurs",
  ],
  stack: "Laravel · PHP · React · API REST · Application mobile",
  payments: "Wave · Orange Money · Free Money",
  spec: [
    { term: "Rôle", value: "Architecture et développement produit" },
    { term: "Marché", value: "Sénégal — multi-organisateurs" },
    { term: "Stack", value: "Laravel, PHP, React, API REST, mobile" },
    { term: "Paiements", value: "Wave, Orange Money, Free Money" },
  ],
  videos: [
    {
      id: "demo",
      title: "Démo produit",
      duration: "3:01",
      src: "media/senguichet/senguichet-demo.mp4",
      type: "video/mp4",
      download: "media/senguichet/senguichet-demo.mp4",
      label: "Démonstration de Senguichet : parcours d'achat, paiement et validation d'un billet.",
    },
    {
      id: "mobile",
      title: "Démo mobile",
      duration: "1:59",
      src: "media/senguichet/senguichet-mobile.mp4",
      type: "video/mp4",
      download: "media/senguichet/senguichet-mobile.mp4",
      label: "Démonstration de l'application mobile Senguichet : achat et validation d'un billet sur téléphone.",
    },
  ],
};

export const projects = [
  {
    name: "Gestion de matériel — COREX",
    description:
      "Application web de gestion et de traçabilité des affectations de matériel, de l'analyse des besoins à l'interface.",
    stack: "PHP · MySQL",
    tag: "Stage · code privé",
    repo: null,
  },
  {
    name: "TranspoBot",
    description:
      "Transport urbain avec assistant IA omnicanal, chatbot Text-to-SQL et tableau de bord temps réel.",
    stack: "FastAPI · React · MySQL · Docker",
    tag: "Projet d'équipe",
    repo: "https://github.com/Daba004/TranspoBot",
  },
  {
    name: "SenSanté",
    description:
      "Plateforme de santé communautaire reliant patients et professionnels, avec authentification et agent IA.",
    stack: "Next.js · TypeScript · PostgreSQL",
    tag: "Projet d'équipe",
    repo: "https://github.com/Manse210/sensante",
  },
  {
    name: "KHINTS",
    description:
      "Application mobile de partage de documents pédagogiques entre étudiants de l'ESP Dakar.",
    stack: "Flutter · Dart · iOS / Android",
    tag: "Projet d'équipe",
    repo: "https://github.com/Manse210/KHINTS",
  },
  {
    name: "Gestion de bibliothèque",
    description:
      "Authentification, catalogue, adhérents et suivi des emprunts dans une interface d'administration.",
    stack: "Laravel · PHP · MySQL",
    tag: "Projet d'équipe",
    repo: "https://github.com/Manse210/Bibliotheque",
  },
  {
    name: "Sudoku",
    description:
      "Génération et résolution de grilles avec une interface interactive et une documentation algorithmique.",
    stack: "Java · POO · Algorithmes",
    tag: "Projet d'équipe",
    repo: "https://github.com/harouna-diarra/projet-sudoku",
  },
];

export const certifications = [
  {
    group: "Logiciel",
    items: [
      { name: "IBM Software Engineering", issuer: "Coursera" },
      { name: "Python Essentials", issuer: "Cisco" },
      { name: "Introduction to Data Science", issuer: "Cisco" },
      { name: "Intelligence Artificielle pour tous", issuer: "FORCE-N" },
    ],
  },
  {
    group: "Cybersécurité",
    items: [
      { name: "Google Cybersecurity", issuer: "Coursera" },
      { name: "Introduction to Cybersecurity", issuer: "Cisco" },
      { name: "Certified Cybersecurity Foundations", issuer: "Hackviser" },
      { name: "The Network Technician Career Path", issuer: "Cisco" },
    ],
  },
];

export const securityLayers = [
  {
    title: "Réseaux",
    lead: "Comprendre le chemin, puis le fermer.",
    items: ["DNS, DHCP, SSH", "Nginx, Apache", "Pare-feu, HTTPS / SSL"],
  },
  {
    title: "Systèmes",
    lead: "Durcir la base avant d'empiler.",
    items: ["Linux — Ubuntu Server", "Windows", "Docker"],
  },
  {
    title: "Application",
    lead: "Écrire du code qui résiste à l'entrée.",
    items: ["Validation des entrées", "Gestion des accès", "Sécurité de base"],
  },
  {
    title: "Pratiques",
    lead: "Vérifier, documenter, recommencer.",
    items: ["Certifications", "Labs", "Bonnes pratiques Git"],
  },
];

export const experience = [
  {
    period: "05/2026 — 07/2026",
    role: "Développeur",
    org: "Sen Digital Pulse",
    place: "Dakar",
    details:
      "Conception et développement de Senguichet : backend, web, mobile, API REST et paiements locaux.",
  },
  {
    period: "05/2025 — 06/2025",
    role: "Développeur",
    org: "Groupe COREX",
    place: "Dakar",
    details:
      "Application web de gestion et de traçabilité des affectations de matériel ; analyse des besoins fonctionnels.",
  },
];

export const education = [
  {
    period: "11/2025 — 07/2026",
    title: "Licence 3 — Génie logiciel et systèmes d'information",
    org: "École Supérieure Polytechnique (UCAD)",
    place: "Dakar",
  },
  {
    period: "09/2025 — aujourd'hui",
    title: "Licence 2 — Cybersécurité",
    org: "Université Numérique Cheikh Hamidou Kane",
    place: "Dakar",
  },
  {
    period: "10/2024 — 08/2025",
    title: "Licence 1 — Cybersécurité",
    org: "Université Numérique Cheikh Hamidou Kane",
    place: "Dakar",
  },
  {
    period: "10/2024 — 07/2025",
    title: "DSTI 2 — Diplôme scientifique de technologie informatique",
    org: "École Supérieure Polytechnique",
    place: "Dakar",
  },
  {
    period: "10/2023 — 06/2024",
    title: "DSTI 1 — Diplôme scientifique de technologie informatique",
    org: "École Supérieure Polytechnique",
    place: "Dakar",
  },
];
