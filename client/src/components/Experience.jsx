import { FaBriefcase, FaBuilding, FaMapMarkerAlt } from "react-icons/fa";

const realExperiences = [
  {
    id: 1,
    title: "Réalisation d’un MarketPlace Médical - Stage de fin d’études",
    company: "ChronoTech",
    location: "Casablanca",
    start_date: "Mars 2025",
    end_date: "Septembre 2025",
    description: (
      <>
        <span className="font-semibold">
           Development of an e-commerce web platform for medical equipment
           designed for healthcare professionals and individuals.
          Built and maintained a full-featured application enabling product management, order processing, and user administration 
          (clients, suppliers, and administrators).
          Implemented modern, responsive user interfaces using React, integrated secure REST APIs with Spring Boot,
          and managed data persistence with MySQL.
          Developed key features including JWT-based authentication, shopping cart, online payments, order tracking, 
          notifications, and complaint management, ensuring a secure, reliable, and user-friendly experience.
</span>
        <ul className="list-disc ml-5 mt-1">
          <li>Technologie utilisée : Spring boot, JWT, MySQL, React js, Angular, Tailwind CSS.</li>
        </ul>
      </>
    ),
    technologies: "Spring boot, JWT, React js, Angular, MySQL",
    type: "work",
    image: "",
  },
  {
    id: 2,
    title: "Réalisation d’une application Gestion des Congé - Stage",
    company: "Marsa Maroc",
    location: "Casablanca",
    start_date: "Juillet 2024",
    end_date: "Août 2024",
    description: (
      <>
        <span className="font-semibold">Worked on the development of a workforce rest management system to organize
           employees, manage absences, and generate rest schedules across different roles and shifts, following defined
            business rules and operational constraints.</span>
        <ul className="list-disc ml-5 mt-1">
          <li>Technologie utilisée : Spring-boot, Angular, MySQL.</li>
        </ul>
      </>
    ),
    technologies: "Spring-boot, Angular, MySQL",
    type: "work",
    image: "",
  },
  {
    id: 3,
    title: "Stage d’observation",
    company: "Marsa Maroc",
    location: "Casablanca",
    start_date: "Juillet 2023",
    end_date: "",
    description: (
      <>
        <span className="font-semibold">Stage d’observation chez Marsa Maroc, Casablanca</span>
        <ul className="list-disc ml-5 mt-1">
          <li>Observation des processus de gestion et de maintenance des réseaux informatiques.</li>
        </ul>
      </>
    ),
    technologies: "",
    type: "work",
    image: "",
  },
];

export default function Experience({ experiences }) {
  const data = experiences && experiences.length > 0 ? experiences : realExperiences;

  return (
    <section id="expérience" className="py-40">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-6 flex justify-center">
          <span className="about-title text-xs font-semibold tracking-widest text-indigo-500 uppercase select-none relative inline-block px-4 py-1">
            ✦ Expériences ✦
            <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-gradient-to-r from-violet-400 via-cyan-400 to-teal-400 rounded-full blur-[2px] opacity-70 -z-10"></span>
          </span>
        </div>
        <div className="relative flex">
          {/* Timeline verticale */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-cyan-400 to-teal-400 rounded-full opacity-60"></div>
          <div className="flex flex-col space-y-16 w-full ml-12 mt-16">
            {data.length === 0 ? (
              <div className="text-center text-slate-400">Aucune expérience à afficher.</div>
            ) : (
              data.map((exp) => (
                <div key={exp.id} className="relative flex items-start">
                  {/* Image/Icône timeline */}
                  <div className="absolute -left-12 flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 border-4 border-indigo-400 shadow-lg">
                    {exp.image ? (
                      <img src={exp.image} alt="" className="w-6 h-6 object-contain rounded-full" />
                    ) : (
                      <FaBriefcase className="text-indigo-400 text-xl" />
                    )}
                  </div>
                  {/* Contenu expérience */}
                  <div className="flex flex-col md:flex-row w-full ml-4 gap-8">
                    {/* Colonne gauche : dates, titre, entreprise, lieu */}
                    <div className="md:w-1/3 flex flex-col gap-2">
                      <span className="text-xs text-slate-400">
                        {exp.start_date}
                        {exp.end_date && ` - ${exp.end_date}`}
                      </span>
                      <span className="text-lg font-bold text-green-400">{exp.title}</span>
                      <div className="flex items-center gap-2 text-slate-200 mt-1">
                        <FaBuilding className="text-slate-400" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <FaMapMarkerAlt />
                        <span className="font-semibold">{exp.location}</span>
                      </div>
                    </div>
                    {/* Colonne droite : description détaillée */}
                    <div className="md:w-2/3">
                      <div className="font-semibold text-slate-100 mb-1">
                        {typeof exp.description === "string" ? exp.description : exp.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
