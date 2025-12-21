import { useParams, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { HiOutlineExternalLink } from "react-icons/hi"; // Ajout de l'icône

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
      "Django",
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
    role: "Developer",
    type: "Personal Project",
    demo: "https://magic-quiz-v2-d6l8.vercel.app/",
  },
  {
    id: 2,
    image: "/projects/medtimo.png",
    title: "E-commerce Web Application for Medical Supplies",
    year: "2025",
    category: "Full Stack Development",
    description:
      "Full e-commerce web application with product catalog, cart, checkout and user management for medical supplies.",
    tags: ["React", "Spring Boot", "Tailwind CSS", "MySQL", "REST APIs"],
    context: "Sell medical products with compliant user experience.",
    objective: "Offer a smooth and secure shopping journey.",
    challenge:
      "Creating a robust backend API and ensuring smooth user experience across devices.",
    solution:
      "Built RESTful APIs with Spring Boot, implemented state management with React hooks, and used Tailwind for responsive design.",
    features: [
      "Product catalog with search and filtering",
      "Shopping cart functionality",
      "Secure checkout process",
      "User account management",
      "Order history and tracking",
      "Responsive design",
    ],
    gallery: [
      "/projects/Med_Timo/mt2.png",
      "/projects/Med_Timo/mt3.png",
      "/projects/Med_Timo/mt4.png",
      "/projects/Med_Timo/mt5.png",
      "/projects/Med_Timo/mt6.png",
      "/projects/Med_Timo/mt7.png",
      "/projects/Med_Timo/mt8.png",
      "/projects/Med_Timo/mt9.png",
    ],
    role: "Developer",
    type: "Academic Project",
    demo: "https://medi-market-bj3z.vercel.app/", 
  },
  {
    id: 3,
    image: "/projects/conge.png",
    title: "Leave and Absence Management Application",
    year: "2024",
    category: "Full Stack Development",
    description:
      "A local application to manage employee leave and absences, with request submission, approval workflows and reporting features.",
    tags: ["Spring Boot", "Angular Material", "MySQL"],
    context: "Streamline and digitize the management of employee leaves and absences for operational teams and HR.",
    objective: "Provide an intuitive platform for employees to request leave and for managers to approve, track, and report on absences.",
    challenge:
      "Automating complex leave policies, ensuring accurate scheduling, and providing real-time status tracking for both employees and administrators.",
    solution:
      "Developed a modular system with Spring Boot for backend logic, Angular Material for a modern UI, and MySQL for robust data storage. Integrated dynamic group management and intelligent scheduling.",
    features: [
      "Employee leave request and approval workflow",
      "Dynamic group and role management",
      "Absence tracking and reporting",
      "Automated scheduling based on roles and shifts",
      "Admin dashboard for HR and managers",
      "Responsive and user-friendly interface"
    ],
    gallery: [
      "/projects/Conge/conge1.png",
      "/projects/Conge/conge2.png",
      "/projects/Conge/conge3.png"
    ],
    role: "Developer",
    type: "Academic Project",
    demo: "https://your-leave-demo-link.com", // Remplace par ton vrai lien si besoin
  },
  {
    id: 4,
    image: "/projects/potfolio.png",
    title: "Portfolio Website",
    year: "2024",
    category: "Full Stack Development",
    description:
      "Personal portfolio website to showcase my projects, skills, and experience as a full stack engineer.",
    tags: ["React", "Tailwind CSS", "Express Js", "PostgreSQL"],
    context: "Create a professional online presence and centralize all my work and contact information.",
    objective: "Showcase my skills, projects, and experience in a modern, interactive, and responsive way.",
    challenge:
      "Designing a unique, visually appealing, and user-friendly interface while ensuring fast performance and accessibility.",
    solution:
      "Built a custom React SPA with Tailwind CSS for styling, Express.js for backend API, and PostgreSQL for storing project and contact data.",
    features: [
      "Responsive and modern design",
      "Animated sections and smooth scrolling",
      "Project gallery with detailed views",
      "Downloadable resume",
      "Contact form with backend integration",
      "Dark/light mode support"
    ],
    gallery: [
      "/projects/potfolio.png",
    ],
    role: "Developer",
    type: "Personal Project",
    demo: "https://your-portfolio-demo-link.com", // potfolio.png
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
    }, 100);
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
        {/* Left: Main info (sticky/fixed) */}
        <div className="md:col-span-1 flex flex-col gap-6 md:sticky md:top-24 self-start h-fit">
          <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
          <p className="text-gray-500 mb-4">{project.description}</p>
          {/* tags  */}
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
            onClick={() => window.open(project.demo || "#", "_blank")}
          >
            <HiOutlineExternalLink className="w-5 h-5" />
            Live Demo
          </button>
        </div>

        {/* Right: Details (scrollable on desktop) */}
        <div className="md:col-span-2 flex flex-col gap-8 md:max-h-[80vh] md:overflow-y-auto pr-2">
          {/* tags  */}
          <div className="flex flex-wrap gap-2 mb-4">
            <h3>Technologies:</h3>
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
            {/* Title "Scroll" with effect - déplacé plus haut */}
            <div className="w-full flex justify-center mt-2 mb-6">
              <span className="text-indigo-400 text-lg font-bold animate-bounce tracking-widest select-none">
                ↓ Scroll for more ↓
              </span>
            </div>
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
