import React from "react";
import { FaGraduationCap, FaUniversity, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

// Données extraites de votre CV/Image
const realEducation = [
  {
    id: 1,
    school: "École Marocaine des Sciences de l'Ingénieur (EMSI)",
    degree: "Computer and network engineer, MIAGE option",
    location: "Casablanca",
    start_year: "2022",
    end_year: "2025",
    description: "In-depth engineering training focused on software development (Java/J2EE, .NET), web architecture, mobile development, network and systems development and administration.",
  },
  {
    id: 2,
    school: "Specialized Institute of Applied Technology (ISTA)",
    degree: "Diploma of Specialized Technician in Computer Networks",
    location: "Casablanca",
    start_year: "2020",
    end_year: "2022",
    description: "Specialized technical training in network administration, computer maintenance and system security (Cisco, Linux, Windows Server).",
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
          {/* Ligne verticale */}
          <div className="absolute left-[-15px] sm:left-[-50px] md:left-[-70px] inset-y-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-slate-800 opacity-20"></div>

          {data.map((ed) => (
            <div
              key={ed.id}
              className="relative flex flex-col md:flex-row gap-4 md:gap-8 group"
            >
              {/* Timeline Node */}
              <div className="absolute left-[-20px] sm:left-[-55px] md:left-[-77px] top-8 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.6)] group-hover:scale-125 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.6)] transition-all duration-300 z-10"></div>
              </div>

              {/* Bloc Dates + Titre/École/Lieu */}
              <div className="flex flex-col items-start min-w-[180px] sm:min-w-[220px] md:min-w-[260px] ml-4 sm:ml-12 md:ml-[-40px] mr-2 sm:mr-4">
                {/* Dates */}
                <div className="mb-2">
                  <span className="text-xs text-slate-400 font-semibold">
                    <FaCalendarAlt className="inline-block mr-1 mb-0.5" />
                    {ed.start_year} - {ed.end_year}
                  </span>
                </div>
                {/* Titre, école, lieu */}
                <div>
                
                  <div className="flex flex-col gap-1 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                      <FaUniversity className="text-indigo-600" />
                      {ed.school}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-400 font-semibold">
                      <FaMapMarkerAlt className="text-indigo-600" />
                      {ed.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Carte Description */}
              <div className="flex-1 pb-8 max-w-sm sm:max-w-md md:max-w-none mx-auto md:mx-0 md:mt-12">
                <div className="relative p-4 sm:p-6 rounded-2xl bg-[#0B0A10] border border-gray-800/60 hover:border-indigo-500/30 transition-colors duration-500 shadow-xl">
                  <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-indigo-500/5 rounded-full blur-2xl -z-10"></div>
                  <div className="flex items-start gap-2 sm:gap-3 mb-3">
                    <FaGraduationCap className="text-xl sm:text-2xl text-indigo-600 mt-1 flex-shrink-0" />
                    {/* Description Text */}
                    <div className="w-full">
                        <h3 className="text-lg sm:text-xl md:text-1xl font-bold text-gray-100 mb-2">
                    {ed.degree}
                  </h3>
                      <div className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400 font-light">
                        {ed.description}
                      </div>
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