import React, { useState } from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useNavigate } from "react-router-dom"; // Ajouté

const realProjects = [
  {
    id: 1,
    image: "/projects/magicquiz.png",
    title: "Collaborative Educational SaaS Platform",
    year: "2025",
    category: "Full Stack Development",
    description:
      "Personal SaaS project that lets teachers and students collaborate on courses, quizzes and flashcards with AI-powered content generation.",
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
    title: "E-commerce Web Application for Medical Supplies",
    year: "2025",
    category: "Full Stack Development",
    description:
      "Full e-commerce web application with product catalog, cart, checkout and user management for medical supplies.",
    tags: ["Spring Boot", "JWT", "React Js", "Tailwind CSS", "Angular", "MySQL"],
  },

  {
    id: 3,
    image: "/projects/congé/cn3.png",
    title: "Leave and absence management application",
    year: "2024",
    category: "Full Stack Development",
    description:
      "A local application to manage employee leave and absences, with request submission, approval workflows and reporting features.",
    tags: ["Spring Boot", "Angular Material", "MySQL"],
  },

  {
    id: 4,
    image: "/projects/potfolio.png",
    title: "Potfolio Website",
    year: "2025",
    category: "Full Stack Development",
    description:
      "A local application to manage employee leave and absences, with request submission, approval workflows and reporting features.",
    tags: [" React Js", "Tailwind CSS", "Express Js", " PostgreSQL"],
  },
];

export default function Projects({ projects }) {
  const data = projects && projects.length > 0 ? projects : realProjects;
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate(); // Ajouté

  return (
    <section id="projets" className="py-10 text-slate-100">
      <div className="mb-12 flex justify-center">
        <h2 className="about-title text-4xl font-semibold tracking-widest text-indigo-500 uppercase select-none px-4 py-1 transition-all duration-500">
          ✦ Projects ✦
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {data.map((project, idx) => (
          <div
            key={project.id}
            className={`bg-[rgb(17,17,20)] rounded-2xl overflow-hidden shadow-lg flex flex-col border-2 border-[#23232a] transition-all transition-transform duration-700
              ${hoveredIndex === idx ? "hover:border-gray-900 hover:shadow-2xl hover:scale-105 z-10 brightness-90" : ""}
              ${hoveredIndex !== null && hoveredIndex !== idx ? "brightness-50" : ""}
            `}
            style={{ transition: "filter 1s, transform 1s" }}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="bg-[#23232a]">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-80"
              />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                {/* <span className="text-gray-400 text-lg">{project.year}</span>*/}
              </div>
              {/* <p className="text-gray-300 text-lg mb-1">{project.category}</p> */}
              <p className="mb-6 text-gray-400">{project.description}</p>
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
                  View Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
