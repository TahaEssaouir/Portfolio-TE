import { FaBriefcase, FaBuilding, FaMapMarkerAlt, FaCalendarAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from '../contexts/LanguageContext';


const realExperiences = [
  {
    id: 1,
    title: { en: "Software Engineer Intern", fr: "Stagiaire Ingénieur Logiciel" },
    company: "ChronoTech",
    location: "Morocco",
    start_date: "Mar 2025",
    end_date: "Sep 2025",
    project: { en: "Medical marketplace platform", fr: "Plateforme de marketplace médicale" },
    achievements: {
      en: [
        "Development of an e-commerce web platform for medical equipment designed for healthcare professionals and individuals.",
        "Built and maintained a full-featured application enabling product management, order processing, and user administration (clients, suppliers, and administrators).",
        "Implemented a comprehensive admin dashboard using Angular, covering all core functionalities (user management, order management, product management, etc.).",
        "Developed modern, responsive user interfaces using React, and integrated secure REST APIs with Spring Boot.",
        "Managed data persistence with MySQL, ensuring system reliability and performance.",
        "Implemented key features including JWT-based authentication, shopping cart, Cash on delivery, order tracking, and complaint management.",
        "Ensured a secure, reliable, and user-friendly experience."
      ],
      fr: [
        "Développement d'une plateforme web e-commerce pour équipements médicaux destinée aux professionnels de santé et aux particuliers.",
        "Construction et maintenance d'une application complète permettant la gestion des produits, le traitement des commandes et l'administration des utilisateurs (clients, fournisseurs et administrateurs).",
        "Implémentation d'un tableau de bord d'administration complet utilisant Angular, couvrant toutes les fonctionnalités de base (gestion des utilisateurs, gestion des commandes, gestion des produits, etc.).",
        "Développement d'interfaces utilisateur modernes et responsives utilisant React, et intégration d'APIs REST sécurisées avec Spring Boot.",
        "Gestion de la persistance des données avec MySQL, assurant la fiabilité et les performances du système.",
        "Implémentation de fonctionnalités clés incluant l'authentification basée sur JWT, le panier d'achat, le paiement à la livraison, le suivi des commandes et la gestion des réclamations.",
        "Assurance d'une expérience sécurisée, fiable et conviviale."
      ]
    },
    technologies: "Spring boot, JWT, React js, Tailwind CSS, Angular, MySQL",
    type: "work",
    image: "/chronotech.png",
  },
  {
    id: 2,
    title: { en: "Software Engineer Intern", fr: "Stagiaire Ingénieur Logiciel" },
    company: "Marsa Maroc",
    location: "Morocco",
    start_date: "Jul 2024",
    end_date: "Aug 2024",
    project: { en: "Leave and absence management application", fr: "Application de gestion des congés et absences" },
    achievements: {
      en: [
        "Designed and developed a local leave and time-off management application for operational teams and internal administrators.",
        "Implemented employee management with assignment to groups based on role, terminal, and job function.",
        "Built features for planning and managing absences including paid leave, training, sick leave, secondment, and other absence types.",
        "Developed a comprehensive administrative dashboard providing: Employee and status management, Dynamic creation and management of groups, Intelligent leave and rest scheduling based on job roles, shifts, and operational constraints, Absence tracking and generation of reliable work schedules."
      ],
      fr: [
        "Conception et développement d'une application locale de gestion des congés et absences pour les équipes opérationnelles et les administrateurs internes.",
        "Implémentation de la gestion des employés avec affectation à des groupes basés sur le rôle, le terminal et la fonction.",
        "Construction de fonctionnalités pour la planification et la gestion des absences incluant les congés payés, la formation, les congés maladie, la mise à disposition et autres types d'absences.",
        "Développement d'un tableau de bord d'administration complet fournissant : Gestion des employés et statuts, Création et gestion dynamique des groupes, Planification intelligente des congés et repos basée sur les rôles professionnels, quarts et contraintes opérationnelles, Suivi des absences et génération d'horaires de travail fiables."
      ]
    },
    technologies: "Spring-boot, Angular, MySQL",
    type: "work",
    image: "/marsamaroc.jpg", 
  },
  {
    id: 3,
    title: { en: "IT Network Internship", fr: "Stage en Réseaux Informatiques" },
    company: "Marsa Maroc",
    location: "Morocco",
    start_date: "Jul 2023",
    end_date: "",
    project: { en: "Network Administrator Intern", fr: "Stagiaire Administrateur Réseau" },
    achievements: {
      en: [
        "Observed IT network management and maintenance processes within an industrial and port environment.",
        "Participated in the design and deployment of local area networks (LANs).",
        "Configured and tested routers and switches to ensure reliable network communication between devices.",
        "Implemented and validated network connectivity and device-to-device communication.",
        "Worked with core networking protocols including DNS, DHCP, HTTP, and TCP/IP."
      ],
      fr: [
        "Observation des processus de gestion et de maintenance des réseaux informatiques dans un environnement industriel et portuaire.",
        "Participation à la conception et au déploiement de réseaux locaux (LAN).",
        "Configuration et test de routeurs et commutateurs pour assurer une communication réseau fiable entre les appareils.",
        "Implémentation et validation de la connectivité réseau et de la communication appareil à appareil.",
        "Travail avec les protocoles réseau de base incluant DNS, DHCP, HTTP et TCP/IP."
      ]
    },
    technologies: "",
    type: "work",
    image: "/marsamaroc.jpg",
  },
];


export default function Experience() {
  const { lang } = useLanguage();

  const texts = {
    en: {
      title: "✦ Experiences ✦",
      achievements: "Key Achievements:",
    },
    fr: {
      title: "✦ Expériences ✦",
      achievements: "Réalisations clés:",
    }
  };

  const data = realExperiences;
  const [openId, setOpenId] = useState(null);

  // Animation on scroll
  const cardRefs = useRef([]);
  const [visible, setVisible] = useState(() => Array(data.length).fill(false));

  useEffect(() => {
    const refsSnapshot = [...cardRefs.current];
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

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="expérience" className="py-12 sm:py-16 lg:py-24 bg-black">
      <div className="max-w-4xl mx-auto px-2 sm:px-4">
        <div className="mb-12 flex justify-center">
          <span
            className={`about-title text-4xl font-semibold tracking-widest text-indigo-500 uppercase select-none px-4 py-1 transition-all duration-500
              ${visible.some(v => v) ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}
            style={{ willChange: "opacity, transform" }}
          >
            {texts[lang].title}
          </span>
        </div>
        <div className="space-y-8">
          {data.map((exp, idx) => (
            <div
              key={exp.id}
              ref={el => cardRefs.current[idx] = el}
              className={
                `bg-black rounded-xl shadow-lg p-6 border-2 border-[#23232a] transition-all duration-500 hover:bg-[#18181b] hover:border-gray-600 hover:shadow-2xl relative
                ${visible[idx] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`
              }
              style={{ willChange: "opacity, transform" }}
            >
              {/* Toggle Button */}
              <button
                onClick={() => handleToggle(exp.id)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-xl bg-transparent hover:bg-[#23232a] transition-all duration-200 shadow-none hover:shadow-lg hover:scale-110 text-gray-400 hover:text-white"
                aria-label={openId === exp.id ? "Hide achievements" : "Show achievements"}
              >
                {openId === exp.id ? (
                  <FaChevronUp className="text-xl" />
                ) : (
                  <FaChevronDown className="text-xl" />
                )}
              </button>
              <div className="flex items-center mb-2">
                {/* Image */}
                <div className="w-14 h-14 rounded-full flex items-center justify-center mr-4 overflow-hidden bg-white">
                  {exp.image ? (
                    <img
                      src={exp.image}
                      alt={exp.company}
                      className={
                        exp.company === "ChronoTech"
                          ? "object-contain w-20 h-20 scale-125" // encore un peu plus zoomé
                          : "object-contain w-12 h-12"
                      }
                      style={{ background: "white" }}
                    />
                  ) : (
                    <FaBriefcase className="text-indigo-700 text-2xl" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">• {exp.title[lang]}</h3>
                  <div className="flex items-center text-sm text-gray-400">
                    <FaBuilding className="mr-1" /> {exp.company}
                    <span className="mx-2 text-xl">•</span>
                    <FaMapMarkerAlt className="mr-1" /> {exp.location}
                  </div>
                  {/* Date*/}
                  <div className="inline-block bg-[#18181b] rounded-full px-4 py-1 text-xs text-gray-200 font-normal mt-2">
                    {exp.start_date} - {exp.end_date ? exp.end_date : "Present"}
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="text-gray-400 mb-2">
                  <span className="font-semibold text-2xl">{texts[lang].project}</span> {exp.project[lang]}
                </div>
                {/* Description or summary here if needed */}
                {/* Achievements collapsible */}
                {openId === exp.id && (
                  <div>
                    <hr className="my-3 border-[#23232a]" />
                    <div className="font-semibold text-gray-300 mb-2">{texts[lang].achievements}</div>
                    <ul className="list-disc pl-5 text-gray-500 text-xs space-y-1 mb-2">
                      {exp.achievements[lang].map((ach, idx) => (
                        <li key={idx}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {exp.technologies && (
                  <div className="mt-2 flex flex-wrap gap-3">
                    {exp.technologies.split(",").map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-1 rounded-full border border-[#2e4369] bg-[#19233a] text-[#7ec3ff] text-sm font-medium"

                        style={{ display: "inline-block" }}
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
