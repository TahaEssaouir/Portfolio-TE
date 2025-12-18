import React, { useRef, useEffect, useState } from "react";
import { FaGraduationCap, FaUniversity, FaMapMarkerAlt } from "react-icons/fa";

// Données extraites de votre CV/Image
const realEducation = [
  {
    id: 1,
    school: "Moroccan School of Engineering Sciences (EMSI)",
    degree: "Computer and network engineer, MIAGE option",
    location: "Casablanca, Morocco",
    start_year: "2022",
    end_year: "2025",
    description: "In-depth engineering training focused on software development (Java/J2EE, .NET), web architecture, mobile development, network and systems development and administration.",
  },
  {
    id: 2,
    school: "Specialized Institute of Applied Technology (ISTA)",
    degree: "Diploma of Specialized Technician in Computer Networks",
    location: "Casablanca, Morocco",
    start_year: "2020",
    end_year: "2022",
    description: "Specialized technical training in network administration, computer maintenance and system security (Cisco, Linux, Windows Server).",
  }
];

export default function Education({ education }) {
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
    <section id="formation" className="pt-40 pb-20 bg-black">
      <div className="max-w-4xl mx-auto px-2 sm:px-4">
        <div className="mb-12 flex justify-center">
          <span
            className={`about-title text-2xl font-semibold tracking-widest text-indigo-500 uppercase select-none px-4 py-1 transition-all duration-500
              ${visible.some(v => v) ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}
            style={{ willChange: "opacity, transform" }}
          >
            ✦ Education ✦
          </span>
        </div>
        <div className="space-y-8">
          {data.map((edu, idx) => (
            <div
              key={edu.id}
              ref={el => cardRefs.current[idx] = el}
              className={
                `bg-black rounded-xl shadow-lg p-6 border border-[#23232a] transition-all duration-500 hover:bg-[#18181b] hover:border-gray-400 hover:shadow-2xl relative
                ${visible[idx] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`
              }
              style={{ willChange: "opacity, transform" }}
            >
              <div className="flex items-center mb-2">
                {/* Icon Education*/}
                <div className="w-14 h-14 rounded-full flex items-center justify-center mr-4 overflow-hidden bg-[#23232a]">
                  <FaGraduationCap className="text-indigo-700 text-2xl" />
                </div>
                {/* content */}
                <div>
                  <h3 className="text-lg font-bold text-white">• {edu.school}</h3>
                  <div className="flex items-center text-sm text-gray-400">
                    <FaUniversity className="mr-1" /> {edu.degree}
                    <span className="mx-2 text-xl">•</span>
                    <FaMapMarkerAlt className="mr-1" /> {edu.location}
                  </div>
                  {/* Years badge */}
                  <div className="inline-block bg-[#18181b] rounded-full px-4 py-1 text-xs text-gray-200 font-normal mt-2">
                    {edu.start_year} - {edu.end_year}
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="text-gray-400 text-sm">{edu.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}