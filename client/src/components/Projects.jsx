import React, { useState, useRef, useEffect } from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useNavigate } from "react-router-dom"; // Ajouté
import { useLanguage } from '../contexts/LanguageContext';

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
      "Django",
      "React Js",
      "Tailwind CSS",
      "PostgreSQL",
      "Ollama",
      "REST APIs",
      "Docker",
    ],
  },

  {
    id: 2,
    image: "/projects/medtimo.png",
    title: { en: "E-commerce Web Application for Medical Supplies", fr: "Application Web E-commerce pour Fournitures Médicales" },
    year: "2025",
    category: { en: "Full Stack Development", fr: "Développement Full Stack" },
    description: {
      en: "Full e-commerce web application with product catalog, cart, checkout and user management for medical supplies.",
      fr: "Application web e-commerce complète avec catalogue de produits, panier, paiement et gestion des utilisateurs pour les fournitures médicales."
    },
    tags: ["Spring Boot", "JWT", "React Js", "Tailwind CSS", "Angular", "MySQL"],
  },

  {
    id: 3,
    image: "/projects/congé/cn3.png",
    title: { en: "Leave and absence management application", fr: "Application de gestion des congés et absences" },
    year: "2024",
    category: { en: "Full Stack Development", fr: "Développement Full Stack" },
    description: {
      en: "A local application to manage employee leave and absences, with request submission, approval workflows and reporting features.",
      fr: "Une application locale pour gérer les congés et absences des employés, avec soumission de demandes, workflows d'approbation et fonctionnalités de reporting."
    },
    tags: ["Spring Boot", "Angular Material", "MySQL"],
  },

  {
    id: 4,
    image: "/projects/potfolio.png",
    title: { en: "Portfolio Website", fr: "Site Web Portfolio" },
    year: "2025",
    category: { en: "Full Stack Development", fr: "Développement Full Stack" },
    description: {
      en: "A responsive portfolio website showcasing my projects, skills, and experience.",
      fr: "Un site web portfolio responsive mettant en valeur mes projets, compétences et expériences."
    },
    tags: [" React Js", "Tailwind CSS", "Express Js", " PostgreSQL"],
  },
];

export default function Projects({ projects }) {
  const { lang } = useLanguage();

  const texts = {
    en: {
      title: "✦ Projects ✦",
      viewProject: "View Project",
    },
    fr: {
      title: "✦ Projets ✦",
      viewProject: "Voir le Projet",
    }
  };

  const data = projects && projects.length > 0 ? projects : realProjects;
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate(); // Ajouté

  // Animation on scroll (comme Education)
  const cardRefs = useRef([]);
  const [visible, setVisible] = useState(() => Array(data.length).fill(false));

  useEffect(() => {
    const refsSnapshot = cardRefs.current.slice();
    const observers = refsSnapshot.map((ref, idx) => {
      if (!ref) return null;
      return new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((v) => {
              const updated = [...v];
              updated[idx] = true;
              return updated;
            });
          }
        },
        { threshold: 0.2 }
      );
    });

    observers.forEach((observer, idx) => {
      if (observer && refsSnapshot[idx]) {
        observer.observe(refsSnapshot[idx]);
      }
    });

    return () => {
      observers.forEach((observer, idx) => {
        if (observer && refsSnapshot[idx]) {
          observer.unobserve(refsSnapshot[idx]);
        }
      });
    };
  }, [data.length]);

  return (
    <section id="projets" className="py-10 text-slate-100">
      <div className="mb-12 flex justify-center">
        <h2 className={`about-title text-4xl font-semibold tracking-widest text-indigo-500 uppercase select-none px-4 py-1 transition-all duration-500
          ${visible.some(v => v) ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}
          style={{ willChange: "opacity, transform" }}
        >
          {texts[lang].title}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {data.map((project, idx) => (
          <div
            key={project.id}
            ref={el => cardRefs.current[idx] = el}
            className={`bg-[rgb(17,17,20)] rounded-2xl overflow-hidden shadow-lg flex flex-col border-2 border-[#23232a] transition-all transition-transform duration-700
              ${hoveredIndex === idx ? "hover:border-gray-900 hover:shadow-2xl hover:scale-105 z-10 brightness-90" : ""}
              ${hoveredIndex !== null && hoveredIndex !== idx ? "brightness-50" : ""}
              ${visible[idx] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
            `}
            style={{ transition: "filter 1s, transform 1s", willChange: "opacity, transform" }}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="bg-[#23232a]">
              <img
                src={project.image}
                alt={project.title[lang]}
                className="object-cover w-full h-80"
              />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-bold text-white">{project.title[lang]}</h3>
                {/* <span className="text-gray-400 text-lg">{project.year}</span>*/}
              </div>
              {/* <p className="text-gray-300 text-lg mb-1">{project.category[lang]}</p> */}
              <p className="mb-6 text-gray-400">{project.description[lang]}</p>
              <div className="flex flex-wrap gap-3 mt-auto">
                
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-1 rounded-full border border-[#2e4369] bg-[#19233a] text-[#7ec3ff] text-sm font-medium"
                    style={{ display: "inline-block" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Button */}
              <div className="mt-6">
                <button
                  className="flex items-center gap-2 px-6 py-2 rounded-2xl bg-white text-black font-semibold shadow border border-black hover:bg-gray-300 transition"
                  onClick={() => navigate(`/projects/${project.id}`)} // Modifié
                >
                  <HiOutlineExternalLink className="w-5 h-5" />
                  {texts[lang].viewProject}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
