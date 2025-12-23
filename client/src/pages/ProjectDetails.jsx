import { useParams, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { HiOutlineExternalLink } from "react-icons/hi"; // Ajout de l'icône
import { FaArrowUp } from "react-icons/fa"; // Ajouté
import { useLanguage } from '../contexts/LanguageContext';

// Copie/importe la liste realProjects ici
const realProjects = [
  {
    id: 1,
    image: "/projects/magicquiz.png",
    title: { en: "Collaborative Educational SaaS Platform", fr: "Plateforme SaaS Éducative Collaborative" },
    year: "2025",
    category: { en: "Full Stack Development", fr: "Développement Full Stack" },
    description: {
      en: "Personal SaaS project that lets teachers and students collaborate on courses, quizzes and flashcards with AI-powered content generation.",
      fr: "Projet SaaS personnel permettant aux enseignants et étudiants de collaborer sur des cours, quiz et flashcards avec génération de contenu alimentée par l'IA."
    },
    tags: [
      "React",
      "Django",
      "Tailwind CSS",
      "PostgreSQL",
      "Ollama",
      "REST APIs",
      "Docker",
    ],
    context: { en: "Facilitate online educational collaboration.", fr: "Faciliter la collaboration éducative en ligne." },
    objective: { en: "Help create, assess, and track courses with AI assistance.", fr: "Aider à créer, évaluer et suivre les cours avec l'assistance de l'IA." },
    challenge: {
      en: "Integrating AI for content generation while maintaining educational quality and user engagement.",
      fr: "Intégrer l'IA pour la génération de contenu tout en maintenant la qualité éducative et l'engagement des utilisateurs."
    },
    solution: {
      en: "Fine-tuned Ollama models for education, implemented sophisticated gamification mechanics, and built an intuitive UI with React.",
      fr: "Affiné les modèles Ollama pour l'éducation, implémenté des mécanismes de gamification sophistiqués et construit une UI intuitive avec React."
    },
    features: {
      en: [
        "Course creation and management",
        "AI-generated quizzes and flashcards",
        "Gamification system (points, rewards, leaderboard)",
        "Subscription and payment management",
        "Real-time collaboration",
        "Role-based access control",
        "Progress tracking and analytics",
      ],
      fr: [
        "Création et gestion de cours",
        "Quiz et flashcards générés par IA",
        "Système de gamification (points, récompenses, classement)",
        "Gestion des abonnements et paiements",
        "Collaboration en temps réel",
        "Contrôle d'accès basé sur les rôles",
        "Suivi des progrès et analyses",
      ]
    },
    gallery: [
      "/projects/Magic_Quiz/mq1.png",
      "/projects/Magic_Quiz/mq2.png",
      "/projects/Magic_Quiz/mq3.png",
      "/projects/Magic_Quiz/mq4.png",
      "/projects/Magic_Quiz/mq5.png",
      "/projects/Magic_Quiz/mq6.png",
      "/projects/Magic_Quiz/mq7.png",
      "/projects/Magic_Quiz/mq8.png",
      "/projects/Magic_Quiz/mq9.png",
      "/projects/Magic_Quiz/mq10.png",
    ],
    role: { en: "Developer", fr: "Développeur" },
    type: { en: "Personal Project", fr: "Projet Personnel" },
    demo: "https://magic-quiz-v2-d6l8.vercel.app/",
    status: { en: "Under development", fr: "En développement" },
  },
  {
    id: 2,
    image: "/projects/medtimo.png",
    title: { en: "E-commerce Web Application for Medical Supplies", fr: "Application Web E-commerce pour Fournitures Médicales" },
    year: "2025",
    category: { en: "Full Stack Development", fr: "Développement Full Stack" },
    description: {
      en: "Full e-commerce web application with product catalog, cart, checkout and supplier management for medical supplies.The administrator has full control over all features from the dashboard.",
      fr: "Application web e-commerce complète avec catalogue de produits, panier, paiement et gestion des fournisseurs pour les fournitures médicales. L'administrateur a un contrôle total sur toutes les fonctionnalités depuis le tableau de bord."
    },
    tags: ["React", "Spring Boot", "Tailwind CSS", "MySQL", "REST APIs"],
    context: { en: "Sell medical products with compliant user experience.", fr: "Vendre des produits médicaux avec une expérience utilisateur conforme." },
    objective: { en: "Offer a smooth and secure shopping journey.", fr: "Offrir un parcours d'achat fluide et sécurisé." },
    challenge: {
      en: "Creating a robust backend API and ensuring smooth user experience across devices.",
      fr: "Créer une API backend robuste et assurer une expérience utilisateur fluide sur tous les appareils."
    },
    solution: {
      en: "Built RESTful APIs with Spring Boot, implemented state management with React hooks, and used Tailwind for responsive design.",
      fr: "Construit des APIs RESTful avec Spring Boot, implémenté la gestion d'état avec les hooks React, et utilisé Tailwind pour un design responsive."
    },
    features: {
      en: [
        "Product catalog with search and filtering",
        "Shopping cart functionality",
        "Secure checkout process",
        "User account management",
        "Order history and tracking",
        "Responsive design",
      ],
      fr: [
        "Catalogue de produits avec recherche et filtrage",
        "Fonctionnalité de panier d'achat",
        "Processus de paiement sécurisé",
        "Gestion des comptes utilisateurs",
        "Historique et suivi des commandes",
        "Design responsive",
      ]
    },
    gallery: [
      "/projects/Med_Timo/mt2.png",
      "/projects/Med_Timo/mt3.png",
      "/projects/Med_Timo/mt4.png",
      "/projects/Med_Timo/mt5.png",
      "/projects/Med_Timo/mt6.png",
      "/projects/Med_Timo/mt7.png",
      "/projects/Med_Timo/mt8.png",
      "/projects/Med_Timo/mt9.png",
      "/projects/Med_Timo/mt10.png",
      "/projects/Med_Timo/mt11.png",
      "/projects/Med_Timo/mt12.png",
    ],
    role: { en: "Developer", fr: "Développeur" },
    type: { en: "Academic Project", fr: "Projet Académique" },
    demo: "https://medi-market-bj3z.vercel.app/", 
    status: { en: "Released", fr: "Publié" },
  },
  {
    id: 3,
    image: "/projects/conge.png",
    title: { en: "Leave and Absence Management Application", fr: "Application de Gestion des Congés et Absences" },
    year: "2024",
    category: { en: "Full Stack Development", fr: "Développement Full Stack" },
    description: {
      en: "A local application to manage employee leave and absences, with request submission, approval workflows and reporting features.",
      fr: "Une application locale pour gérer les congés et absences des employés, avec soumission de demandes, workflows d'approbation et fonctionnalités de reporting."
    },
    tags: ["Spring Boot", "Angular Material", "MySQL"],
    context: { en: "Streamline and digitize the management of employee leaves and absences for operational teams and HR.", fr: "Rationaliser et numériser la gestion des congés et absences des employés pour les équipes opérationnelles et les RH." },
    objective: { en: "Provide an intuitive platform for employees to request leave and for managers to approve, track, and report on absences.", fr: "Fournir une plateforme intuitive pour que les employés demandent des congés et que les managers approuvent, suivent et rapportent les absences." },
    challenge: {
      en: "Automating complex leave policies, ensuring accurate scheduling, and providing real-time status tracking for both employees and administrators.",
      fr: "Automatiser les politiques de congé complexes, assurer une planification précise et fournir un suivi d'état en temps réel pour les employés et les administrateurs."
    },
    solution: {
      en: "Developed a modular system with Spring Boot for backend logic, Angular Material for a modern UI, and MySQL for robust data storage. Integrated dynamic group management and intelligent scheduling.",
      fr: "Développé un système modulaire avec Spring Boot pour la logique backend, Angular Material pour une UI moderne, et MySQL pour un stockage de données robuste. Intégré la gestion dynamique des groupes et la planification intelligente."
    },
    features: {
      en: [
        "Employee leave request and approval workflow",
        "Dynamic group and role management",
        "Absence tracking and reporting",
        "Automated scheduling based on roles and shifts",
        "Admin dashboard for HR and managers",
        "Responsive and user-friendly interface"
      ],
      fr: [
        "Workflow de demande et d'approbation de congé des employés",
        "Gestion dynamique des groupes et rôles",
        "Suivi et reporting des absences",
        "Planification automatisée basée sur les rôles et quarts",
        "Tableau de bord admin pour les RH et managers",
        "Interface responsive et conviviale"
      ]
    },
    gallery: [
        "/projects/congé/cn1.png",
        "/projects/congé/cn2.png",
        "/projects/congé/cn3.png",
      "/projects/congé/cn4.png",
        "/projects/congé/cn5.png",
        "/projects/congé/cn6.png",
        "/projects/congé/cn7.png",
    ],
    role: { en: "Developer", fr: "Développeur" },
    type: { en: "Academic Project", fr: "Projet Académique" },
    demo: "https://your-leave-demo-link.com", // Remplace par ton vrai lien si besoin
    status: { en: "Released", fr: "Publié" },
  },
  {
    id: 4,
    image: "/projects/potfolio.png",
    title: { en: "Portfolio Website", fr: "Site Web Portfolio" },
    year: "2025",
    category: { en: "Full Stack Development", fr: "Développement Full Stack" },
    description: {
      en: "Personal portfolio website to showcase my projects, skills, and experience as a full stack engineer.",
      fr: "Site web portfolio personnel pour présenter mes projets, compétences et expériences en tant qu'ingénieur full stack."
    },
    tags: ["React", "Tailwind CSS", "Express Js", "PostgreSQL"],
    context: { en: "Create a professional online presence and centralize all my work and contact information.", fr: "Créer une présence en ligne professionnelle et centraliser tout mon travail et mes informations de contact." },
    objective: { en: "Showcase my skills, projects, and experience in a modern, interactive, and responsive way.", fr: "Présenter mes compétences, projets et expériences de manière moderne, interactive et responsive." },
    challenge: {
      en: "Designing a unique, visually appealing, and user-friendly interface while ensuring fast performance and accessibility.",
      fr: "Concevoir une interface unique, visuellement attrayante et conviviale tout en assurant des performances rapides et l'accessibilité."
    },
    solution: {
      en: "Built a custom React SPA with Tailwind CSS for styling, Express.js for backend API, and PostgreSQL for storing project and contact data.",
      fr: "Construit une SPA React personnalisée avec Tailwind CSS pour le style, Express.js pour l'API backend, et PostgreSQL pour stocker les données de projets et de contact."
    },
    features: {
      en: [
        "Responsive and modern design",
        "Animated sections and smooth scrolling",
        "Project gallery with detailed views",
        "Downloadable resume",
        "Contact form with backend integration",
        "Dark/light mode support"
      ],
      fr: [
        "Design responsive et moderne",
        "Sections animées et défilement fluide",
        "Galerie de projets avec vues détaillées",
        "CV téléchargeable",
        "Formulaire de contact avec intégration backend",
        "Support du mode sombre/clair"
      ]
    },
    gallery: [
      "/projects/potfolio.png",
    ],
    role: { en: "Developer", fr: "Développeur" },
    type: { en: "Personal Project", fr: "Projet Personnel" },
    demo: "https://your-portfolio-demo-link.com", // potfolio.png
    status: { en: "Under development", fr: "En développement" },
  },
];

export default function ProjectDetails() {
  const { lang } = useLanguage();

  const texts = {
    en: {
      backToProjects: "Back to Projects",
      liveDemo: "Live Demo",
      technologies: "Technologies:",
      context: "CONTEXT",
      objective: "OBJECTIVE",
      theChallenge: "The Challenge",
      theSolution: "The Solution",
      keyFeatures: "Key Features",
      gallery: "Gallery",
      scrollToTop: "Scroll to Top",
    },
    fr: {
      backToProjects: "Retour aux Projets",
      liveDemo: "Démo en Direct",
      technologies: "Technologies:",
      context: "CONTEXTE",
      objective: "OBJECTIF",
      theChallenge: "Le Défi",
      theSolution: "La Solution",
      keyFeatures: "Fonctionnalités Clés",
      gallery: "Galerie",
      scrollToTop: "Remonter en Haut",
    }
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const project = realProjects.find((p) => p.id === Number(id));

  const handleBack = useCallback(() => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("projets");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [navigate]);

  // Status badge style
  const statusColor =
    project.status[lang] === "Released"
      ? "bg-green-900 text-green-300"
      : "bg-[#232a1a] text-green-200";

  const statusDot =
    project.status[lang] === "Released"
      ? "bg-green-500"
      : "bg-green-500";

  if (!project) {
    return <div className="text-center text-red-500 mt-10">Project not found.</div>;
  }

  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <button
        onClick={handleBack}
        className="text-gray-400 hover:text-indigo-500 text-sm mb-8 inline-block"
      >
        &larr; {texts[lang].backToProjects}
      </button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left: Main info (sticky/fixed) */}
        <div className="md:col-span-1 flex flex-col gap-6 md:sticky md:top-24 self-start h-fit">
          <h1 className="text-3xl font-bold mb-2">{project.title[lang]}</h1>
          {/* Status badge déplacé ici */}
          <div className={`inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm font-medium ${statusColor} mb-3 w-max`}>
            <span className={`inline-block w-3 h-3 rounded-full ${statusDot} mr-2`} />
            {project.status[lang]}
          </div>
          <p className="text-gray-500 mb-4">{project.description[lang]}</p>
          {/* tags  */}
          <div className="flex gap-4 mb-2">
            <div>
              <div className="text-xs text-gray-400 uppercase">Type</div>
              <div className="font-semibold">{project.type[lang]}</div>
            </div>
            <div>
              <div className="text-xs text-gray-400 uppercase">Role</div>
              <div className="font-semibold">{project.role[lang]}</div>
            </div>
            <div>
              <div className="text-xs text-gray-400 uppercase">Year</div>
              <div className="font-semibold">{project.year}</div>
            </div>
          </div>
          <button
            className="flex items-center gap-2 px-6 py-2 rounded-2xl bg-white text-black font-semibold shadow border border-black hover:bg-gray-300 transition w-max"
            onClick={() => window.open(project.demo || "#", "_blank")}
          >
            <HiOutlineExternalLink className="w-5 h-5" />
            {texts[lang].liveDemo}
          </button>
        </div>

        {/* Right: Details (scrollable on desktop) */}
        <div className="md:col-span-2 flex flex-col gap-8">
          {/* tags  */}
          <div className="flex flex-wrap gap-2 mb-4">
            <h3>{texts[lang].technologies}</h3>
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-4 py-1 rounded-full border border-[#2e4369] bg-[#19233a] text-[#7ec3ff] text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Context & Objective */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
            <div className="bg-[#f8fafc] rounded-xl p-4">
              <div className="text-xs font-bold text-gray-500 mb-1">
                {texts[lang].context}
              </div>
              <div className="text-sm text-gray-700">{project.context[lang]}</div>
            </div>
            <div className="bg-[#f8fafc] rounded-xl p-4">
              <div className="text-xs font-bold text-gray-500 mb-1">
                {texts[lang].objective}
              </div>
              <div className="text-sm text-gray-700">{project.objective[lang]}</div>
            </div>
          </div>

          {/* Process: Challenge & Solution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
            <div className="border-l-4 border-red-400 bg-white rounded-xl p-4">
              <div className="font-bold text-gray-700 mb-1">{texts[lang].theChallenge}</div>
              <div className="text-sm text-gray-600">{project.challenge[lang]}</div>
            </div>
            <div className="border-l-4 border-green-400 bg-white rounded-xl p-4">
              <div className="font-bold text-gray-700 mb-1">{texts[lang].theSolution}</div>
              <div className="text-sm text-gray-600">{project.solution[lang]}</div>
            </div>
          </div>

          {/* Features */}
          <div>
            <div className="font-bold text-gray-300 mb-2">{texts[lang].keyFeatures}</div>
            <ul className="list-disc pl-6 space-y-1 text-gray-500 text-sm">
              {project.features[lang].map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            {/* Title "Scroll" with effect - déplacé plus haut */}
           {/* <div className="w-full flex justify-center mt-2 mb-6">
              <span className="text-indigo-400 text-lg font-bold animate-bounce tracking-widest select-none">
                ↓ Scroll for more ↓
              </span>
            </div>*/}

          </div>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div>
              <div className="font-bold text-gray-300 mb-2">{texts[lang].gallery}</div>
              <div className="flex flex-col gap-6">
                {project.gallery.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Screenshot ${i + 1}`}
                    className="rounded-xl border bg-white object-contain w-full max-h-96"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Scroll to Top Button */}
      <div className="flex justify-end mt-12">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 px-2 py-2 rounded-2xl bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-500 transition"
        >
          {texts[lang].scrollToTop}
          <FaArrowUp className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
