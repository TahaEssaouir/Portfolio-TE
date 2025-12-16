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
      <ul className="list-disc ml-5 space-y-1">
        <li>
          <span className="font-semibold">
          Development of an e-commerce web platform for medical equipment designed for healthcare professionals and individuals.
          </span>
        </li>
        <li>
          <span className="font-semibold">
          Built and maintained a full-featured application enabling product management, order processing, and user administration (clients, suppliers, and administrators).
          </span>
        </li>
        <li>
          <span className="font-semibold">
          Implemented a comprehensive admin dashboard using Angular, covering all core functionalities (user management, order management, product management, etc.).
          </span>
        </li>
        <li>
          <span className="font-semibold">
          Developed modern, responsive user interfaces using React, and integrated secure REST APIs with Spring Boot.
          </span>
        </li>
        <li>
          <span className="font-semibold">
          Managed data persistence with MySQL, ensuring system reliability and performance.
          </span>
        </li>
        <li>
          <span className="font-semibold">
          Implemented key features including JWT-based authentication, shopping cart, Cash on delivery, order tracking, and complaint management.
          </span>
        </li>
        <li>
          <span className="font-semibold">
          Ensured a secure, reliable, and user-friendly experience.
          </span>
        </li>
        <li>
          <span className="font-semibold">Technologies utilisées :</span> Spring boot, JWT, MySQL, React js, Angular, Tailwind CSS.
        </li>
      </ul>
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
      <ul className="list-disc ml-5 space-y-1">
        <li>
          <span className="font-semibold">
            Designed and developed a local leave and time-off management application for operational teams and internal administrators.
          </span>
        </li>
        <li>
          <span className="font-semibold">
            Implemented employee management with assignment to groups based on role, terminal, and job function.
          </span>
        </li>
        <li>
          <span className="font-semibold">
            Built features for planning and managing absences including paid leave, training, sick leave, secondment, and other absence types.
          </span>
        </li>
        <li>
          <span className="font-semibold">
            Developed a comprehensive administrative dashboard providing:
          </span>
          <ul className="ml-5 mt-1 space-y-1">
            <li>
              <span className="font-semibold">* Employee and status management</span>
            </li>
            <li>
              <span className="font-semibold">* Dynamic creation and management of groups</span>
            </li>
            <li>
              <span className="font-semibold">* Intelligent leave and rest scheduling based on job roles, shifts, and operational constraints</span>
            </li>
            <li>
              <span className="font-semibold">* Absence tracking and generation of reliable work schedules</span>
            </li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">Technologies utilisées :</span> Spring-boot, Angular, MySQL.
        </li>
      </ul>
    ),
    technologies: "Spring-boot, Angular, MySQL",
    type: "work",
    image: "",
  },
  {
    id: 3,
    title: "IT Network Internship",
    company: "Marsa Maroc",
    location: "Casablanca",
    start_date: "Juillet 2023",
    end_date: "",
    description: (
      <>
       
        <ul className="list-disc ml-5 mt-1">
          <li>Observed IT network management and maintenance processes within an industrial and port environment</li>
            <li>Participated in the design and deployment of local area networks (LANs)</li>
            <li>Configured and tested routers and switches to ensure reliable network communication between devices</li>
            <li>Implemented and validated network connectivity and device-to-device communication</li>
            <li>Worked with core networking protocols including DNS, DHCP, HTTP, and TCP/IP</li>
            <li>Worked with core networking protocols including DNS, DHCP, HTTP, and TCP/IP</li>
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
                      <div className="bg-[#111015] border border-violet-400/30 rounded-2xl shadow-lg p-7 font-semibold text-slate-100 mb-1">
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
