import React from "react";
import { FaGraduationCap, FaUniversity, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

// Données extraites de votre CV/Image
const realEducation = [
  {
    id: 1,
    school: "École Marocaine des Sciences de l'Ingénieur (EMSI)",
    degree: "Ingénieur en informatique et réseaux, Option MIAGE",
    location: "Casablanca",
    start_year: "2022",
    end_year: "2025",
    description: "Formation d'ingénierie approfondie axée sur le développement logiciel (Java/J2EE, .NET), l'architecture web, et l'administration des réseaux et systèmes.",
  },
  {
    id: 2,
    school: "Institut Spécialisé de Technologie Appliquée (ISTA)",
    degree: "Diplôme de Technicien Spécialisé en Réseaux Informatiques",
    location: "Casablanca",
    start_year: "2020",
    end_year: "2022",
    description: "Formation technique spécialisée dans l'administration des réseaux, la maintenance informatique et la sécurité des systèmes (Cisco, Linux, Windows Server).",
  }
];

export default function Education({ education }) {
  const data = education && education.length > 0 ? education : realEducation;

  return (
    <section id="formation" className="pt-40 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header Section (Identique à Expériences) */}
        <div className="mb-16 flex justify-center">
          <span className="relative inline-block px-4 py-1">
          <span className="about-title text-xs font-semibold tracking-widest text-indigo-500 uppercase select-none relative inline-block px-4 py-1">
              ✦ Education ✦
            </span>
          </span>
        </div>

        {/* Timeline Container */}
        <div className="relative space-y-12">
          {/* La Ligne Verticale Continue */}
          <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-slate-800 opacity-20 md:left-8"></div>

          {data.map((ed) => (
            <div key={ed.id} className="relative flex flex-col md:flex-row gap-6 md:gap-10 group">
              {/* 1. Le Point Lumineux (Timeline Node) */}
              <div className="absolute left-4 md:left-8 top-0 -translate-x-1/2 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.6)] group-hover:scale-125 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.6)] transition-all duration-300 z-10"></div>
              </div>

              {/* 2. La Date */}
              <div className="pl-10 md:pl-0 md:w-48 md:text-right flex-shrink-0 pt-0.5">
                <span className="text-xs text-slate-400 font-semibold">
                  <FaCalendarAlt className="inline-block mr-1 mb-0.5" />
                  {ed.start_year} - {ed.end_year}
                </span>
              </div>

              {/* 3. Le Contenu Principal */}
              <div className="pl-10 md:pl-0 flex-1 pb-8">
                {/* École et Lieu */}
                <div className="mb-4">
                  <h3 className="text-xl md:text-1xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 group-hover:from-teal-100 group-hover:to-teal-100 transition-colors duration-300">
                    {ed.school}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                      <FaUniversity className="text-indigo-600" />
                      {ed.location}
                    </span>
                  </div>
                </div>

                {/* Carte Diplôme & Description */}
                <div className="relative p-6 rounded-2xl bg-[#0B0A10] border border-gray-800/60 hover:border-indigo-500/30 transition-colors duration-500 shadow-xl">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-500/5 rounded-full blur-2xl -z-10"></div>
                  <div className="flex items-start gap-3 mb-3">
                    <FaGraduationCap className="text-2xl text-indigo-600 mt-1 flex-shrink-0" />
                    <div>
                        <h4 className="text-s font-bold text-white group-hover:text-teal-100 transition-colors">
                            {ed.degree}
                        </h4>
                        {/* Description optionnelle */}
                        {ed.description && (
                            <p className="mt-2 text-sm leading-relaxed text-slate-400 font-light">
                                {ed.description}
                            </p>
                        )}
                        {/* Technologies utilisées */}
                        {ed.technologies && (
                          <div className="flex flex-wrap gap-3 mt-4">
                            {ed.technologies.split(",").map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-4 py-1 rounded-full border border-slate-700 text-slate-200 text-sm font-normal bg-transparent"
                                style={{ background: "rgba(30,32,36,0.5)" }}
                              >
                                {tech.trim()}
                              </span>
                            ))}
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}