import { useParams, useNavigate } from "react-router-dom";
import { useCallback } from "react";

// Copie/importe la liste realProjects ici
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
      "React",
      "Spring",
      "Tailwind CSS",
      "PostgreSQL",
      "Ollama",
      "REST APIs",
      "Docker",
    ],
    context: "Facilitate online educational collaboration.",
    objective: "Help create, assess, and track courses with AI assistance.",
    challenge:
      "Integrating AI for content generation while maintaining educational quality and user engagement.",
    solution:
      "Fine-tuned Ollama models for education, implemented sophisticated gamification mechanics, and built an intuitive UI with React.",
    features: [
      "Course creation and management",
      "AI-generated quizzes and flashcards",
      "Gamification system (points, rewards, leaderboard)",
      "Subscription and payment management",
      "Real-time collaboration",
      "Role-based access control",
      "Progress tracking and analytics",
    ],
    gallery: [
      "/projects/magicquiz1.png",
      "/projects/magicquiz2.png",
      "/projects/magicquiz3.png",
    ],
    role: "Developer",
    type: "Personal Project",
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
    image: "/projects/conge.png",
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
    year: "2024",
    category: "Full Stack Development",
    description:
      "A local application to manage employee leave and absences, with request submission, approval workflows and reporting features.",
    tags: [" React Js", "Tailwind CSS", "Express Js", " PostgreSQL"],
  },
];

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = realProjects.find((p) => p.id === Number(id));

  const handleBack = useCallback(() => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("projets");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 100); // petit délai pour attendre le rendu
  }, [navigate]);

  if (!project) {
    return <div className="text-center text-red-500 mt-10">Project not found.</div>;
  }

  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <button
        onClick={handleBack}
        className="text-gray-400 hover:text-indigo-500 text-sm mb-8 inline-block"
      >
        &larr; Back to Projects
      </button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left: Main info */}
        <div className="md:col-span-1 flex flex-col gap-6">
          <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
          <p className="text-gray-500 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-4 py-1 rounded-full border border-[#2e4369] bg-[#19233a] text-[#7ec3ff] text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4 mb-2">
            <div>
              <div className="text-xs text-gray-400 uppercase">Type</div>
              <div className="font-semibold">{project.type}</div>
            </div>
            <div>
              <div className="text-xs text-gray-400 uppercase">Role</div>
              <div className="font-semibold">{project.role}</div>
            </div>
          </div>
          <button
            className="flex items-center gap-2 px-6 py-2 rounded-2xl bg-white text-black font-semibold shadow border border-black hover:bg-gray-300 transition w-max"
            onClick={() => window.open("#", "_blank")}
          >
            View Project
          </button>
        </div>

        {/* Right: Details */}
        <div className="md:col-span-2 flex flex-col gap-8">
          {/* Context & Objective */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
            <div className="bg-[#f8fafc] rounded-xl p-4">
              <div className="text-xs font-bold text-gray-500 mb-1">
                CONTEXT
              </div>
              <div className="text-sm text-gray-700">{project.context}</div>
            </div>
            <div className="bg-[#f8fafc] rounded-xl p-4">
              <div className="text-xs font-bold text-gray-500 mb-1">
                OBJECTIVE
              </div>
              <div className="text-sm text-gray-700">{project.objective}</div>
            </div>
          </div>

          {/* Process: Challenge & Solution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
            <div className="border-l-4 border-red-400 bg-white rounded-xl p-4">
              <div className="font-bold text-gray-700 mb-1">The Challenge</div>
              <div className="text-sm text-gray-600">{project.challenge}</div>
            </div>
            <div className="border-l-4 border-green-400 bg-white rounded-xl p-4">
              <div className="font-bold text-gray-700 mb-1">The Solution</div>
              <div className="text-sm text-gray-600">{project.solution}</div>
            </div>
          </div>

          {/* Features */}
          <div>
            <div className="font-bold text-gray-300 mb-2">Key Features</div>
            <ul className="list-disc pl-6 space-y-1 text-gray-500 text-sm">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div>
              <div className="font-bold text-gray-300 mb-2">Gallery</div>
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
    </section>
  );
}
