import React, { useRef, useEffect, useState } from "react";
import { FaGraduationCap, FaUniversity, FaMapMarkerAlt } from "react-icons/fa";
import { useLanguage } from '../contexts/LanguageContext';

// Données extraites de votre CV/Image
const realEducation = [
  {
    id: 1,
    school: { en: "Moroccan School of Engineering Sciences (EMSI)", fr: "École Marocaine des Sciences de l'Ingénieur (EMSI)" },
    degree: { en: "Computer and network engineer, MIAGE option", fr: "Ingénieur en informatique et réseaux, option MIAGE" },
    location: "Casablanca, Morocco",
    start_year: "2022",
    end_year: "2025",
    description: { 
      en: "In-depth engineering training focused on software development (Java/J2EE, .NET), web architecture, mobile development, network and systems development and administration.",
      fr: "Formation d'ingénieur approfondie axée sur le développement logiciel (Java/J2EE, .NET), l'architecture web, le développement mobile, le développement et l'administration des réseaux et systèmes."
    },
    image: "/emsi.png", // ajout de l'image EMSI
  },
  {
    id: 2,
    school: { en: "Specialized Institute of Applied Technology (ISTA)", fr: "Institut Spécialisé de Technologie Appliquée (ISTA)" },
    degree: { en: "Diploma of Specialized Technician in Computer Networks", fr: "Diplôme de Technicien Spécialisé en Réseaux Informatiques" },
    location: "Casablanca, Morocco",
    start_year: "2020",
    end_year: "2022",
    description: { 
      en: "Specialized technical training in network administration, computer maintenance and system security (Cisco, Linux, Windows Server).",
      fr: "Formation technique spécialisée en administration réseau, maintenance informatique et sécurité des systèmes (Cisco, Linux, Windows Server)."
    },
    image: "/ofppt.png", // ajout de l'image OFPPT
  }
];

export default function Education({ education }) {
  const { lang } = useLanguage();

  const texts = {
    en: {
      title: "✦ Education ✦",
    },
    fr: {
      title: "✦ Formation ✦",
    }
  };

  const data = education && education.length > 0 ? education : realEducation;

  // Animation on scroll (comme Experience)
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
    <section id="formation" className="py-12 sm:py-16 lg:py-24 bg-black">
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
          {data.map((edu, idx) => (
            <div
              key={edu.id}
              ref={el => cardRefs.current[idx] = el}
              className={
                `bg-black rounded-xl shadow-lg p-6 border-2 border-[#23232a] transition-all duration-500 hover:bg-[#18181b] hover:border-gray-600 hover:shadow-2xl relative
                ${visible[idx] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
                w-full sm:w-full md:w-auto`
              }
              style={{ willChange: "opacity, transform" }}
            >
              <div className="flex items-center mb-2">
                {/* Icon/Image Education */}
                <div className="w-14 h-14 rounded-full flex items-center justify-center mr-4 overflow-hidden bg-white">
                  {edu.image ? (
                    <img
                      src={edu.image}
                      alt={edu.school[lang]}
                      className={
                        edu.school[lang].includes("EMSI")
                          ? "object-contain w-16 h-16 scale-110"
                          : edu.school[lang].includes("ISTA")
                          ? "object-contain w-16 h-16 scale-110"
                          : "object-contain w-12 h-12"
                      }
                      style={{ background: "white" }}
                    />
                  ) : (
                    <FaGraduationCap className="text-indigo-700 text-2xl" />
                  )}
                </div>
                {/* content */}
                <div className="flex-1">
                  {/* Desktop layout */}
                  <div className="hidden sm:block">
                    <h3 className="text-lg font-bold text-white">• {edu.school[lang]}</h3>
                    <div className="flex items-center text-sm text-gray-400">
                      <FaUniversity className="mr-1" /> {edu.degree[lang]}
                      <span className="mx-2 text-xl">•</span>
                      <FaMapMarkerAlt className="mr-1" /> {edu.location}
                    </div>
                    <div className="inline-block bg-[#18181b] rounded-full px-4 py-1 text-xs text-gray-200 font-normal mt-2">
                      {edu.start_year} - {edu.end_year}
                    </div>
                  </div>
                  {/* Mobile layout */}
                  <div className="block sm:hidden">
                    <h3 className="text-base font-bold text-white mb-1">• {edu.school[lang]}</h3>
                    <div className="text-sm text-gray-400 mb-1 flex items-center">
                      <FaUniversity className="mr-1" /> {edu.degree[lang]}
                    </div>
                    <div className="text-sm text-gray-400 mb-1 flex items-center">
                      <FaMapMarkerAlt className="mr-1" /> {edu.location}
                    </div>
                    <div className="inline-block bg-[#18181b] rounded-full px-4 py-1 text-xs text-gray-200 font-normal">
                      {edu.start_year} - {edu.end_year}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="text-gray-400 text-sm">{edu.description[lang]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}