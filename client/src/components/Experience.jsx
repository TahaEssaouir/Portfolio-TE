import { FaBriefcase, FaBuilding, FaMapMarkerAlt, FaCalendarAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";


const realExperiences = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "ChronoTech",
    location: "Morocco",
    start_date: "Mar 2025",
    end_date: "Sep 2025",
    project: "Medical marketplace platform",
    achievements: [
      "Development of an e-commerce web platform for medical equipment designed for healthcare professionals and individuals.",
      "Built and maintained a full-featured application enabling product management, order processing, and user administration (clients, suppliers, and administrators).",
      "Implemented a comprehensive admin dashboard using Angular, covering all core functionalities (user management, order management, product management, etc.).",
      "Developed modern, responsive user interfaces using React, and integrated secure REST APIs with Spring Boot.",
      "Managed data persistence with MySQL, ensuring system reliability and performance.",
      "Implemented key features including JWT-based authentication, shopping cart, Cash on delivery, order tracking, and complaint management.",
      "Ensured a secure, reliable, and user-friendly experience."
    ],
    technologies: "Spring boot, JWT, React js, Angular, MySQL",
    type: "work",
    image: "",
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    company: "Marsa Maroc",
    location: "Morocco",
    start_date: "Jul 2024",
    end_date: "Aug 2024",
    project: "Leave and absence management application",
    achievements: [
      "Designed and developed a local leave and time-off management application for operational teams and internal administrators.",
      "Implemented employee management with assignment to groups based on role, terminal, and job function.",
      "Built features for planning and managing absences including paid leave, training, sick leave, secondment, and other absence types.",
      "Developed a comprehensive administrative dashboard providing: Employee and status management, Dynamic creation and management of groups, Intelligent leave and rest scheduling based on job roles, shifts, and operational constraints, Absence tracking and generation of reliable work schedules."
    ],
    technologies: "Spring-boot, Angular, MySQL",
    type: "work",
    image: "",
  },
  {
    id: 3,
    title: "IT Network Internship",
    company: "Marsa Maroc",
    location: "Morocco",
    start_date: "Jul 2023",
    end_date: "",
    project: "Network Administrator Intern",
    achievements: [
      "Observed IT network management and maintenance processes within an industrial and port environment.",
      "Participated in the design and deployment of local area networks (LANs).",
      "Configured and tested routers and switches to ensure reliable network communication between devices.",
      "Implemented and validated network connectivity and device-to-device communication.",
      "Worked with core networking protocols including DNS, DHCP, HTTP, and TCP/IP."
    ],
    technologies: "",
    type: "work",
    image: "",
  },
];


export default function Experience({ experiences }) {
  const data = experiences && experiences.length > 0 ? experiences : realExperiences;
  const [openIds, setOpenIds] = useState([]);

  const toggleOpen = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((oid) => oid !== id) : [...prev, id]
    );
  };

  return (
    <section id="expérience" className="py-12 sm:py-16 lg:py-24 bg-[#09090c]">
      <div className="max-w-4xl mx-auto px-2 sm:px-4">
        <div className="mb-12 flex justify-center">
          <span className="about-title text-xs font-semibold tracking-widest text-indigo-500 uppercase select-none px-4 py-1">
            ✦ Expériences ✦
          </span>
        </div>
        <div className="flex flex-col gap-8">
          {data.length === 0 ? (
            <div className="text-center text-slate-400">Aucune expérience à afficher.</div>
          ) : (
            data.map((exp) => (
              <div
                key={exp.id}
                className="relative bg-black border border-gray-700 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6 transition-colors duration-300 hover:border-gray-400 hover:shadow-2xl hover:shadow-gray-800/40 group"
              >
                {/* Main Info left */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-100 mb-1 flex items-center gap-2">
                      {exp.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#181824] text-slate-200 text-xs font-semibold shadow-sm mt-2">
                      <FaCalendarAlt className="inline-block mr-1 mb-0.5 text-slate-400" />
                      {exp.start_date}
                      {exp.end_date && ` - ${exp.end_date}`}
                    </span>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1">
                      <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                        <FaBuilding className="text-indigo-600" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-400 font-semibold">
                        <FaMapMarkerAlt className="text-indigo-600" />
                        {exp.location}
                      </span>
                    </div>
                    {/* Project Name */}
                    <div className="mt-4">
                      <span className="block text-base sm:text-lg font-semibold text-gray-400 mb-1">
                        {exp.project}
                      </span>
                    </div>
                  </div>
                  <hr
                    className="border-0 h-[2px] w-full mt-2 mb-2 bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-60"
                  />
                  {/* Key Achievements title and button */}
                  <div className="flex items-center justify-between mt-2 mb-2">
                    <span className="text-white font-semibold text-lg">
                      Key Achievements:
                    </span>
                    <button
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#111] hover:bg-[#232323] transition-colors border-none shadow-none focus:outline-none"
                      style={{
                        boxShadow: "0 2px 8px 0 rgba(0,0,0,0.25)",
                        border: "none",
                      }}
                      onClick={() => toggleOpen(exp.id)}
                      aria-expanded={openIds.includes(exp.id)}
                      aria-controls={`achievements-${exp.id}`}
                    >
                      {openIds.includes(exp.id) ? (
                        <FaChevronUp className="text-2xl text-white" />
                      ) : (
                        <FaChevronDown className="text-2xl text-white" />
                      )}
                    </button>
                  </div>
                  {/* description */}
                  {openIds.includes(exp.id) && (
                    <ul
                      id={`achievements-${exp.id}`}
                      className="list-disc ml-6 space-y-2 text-gray-300 text-sm"
                    >
                      {exp.achievements.map((ach, idx) => (
                        <li key={idx}>{ach}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
