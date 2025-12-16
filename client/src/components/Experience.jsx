import { FaBriefcase, FaBuilding, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";


const realExperiences = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "ChronoTech",
    location: "Morocco",
    start_date: "Mar 2025",
    end_date: "Sep 2025",
    description: (
      <ul className="list-disc ml-5 space-y-2">
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
      {/*  <li>
          <span className="font-semibold">Technologies utilisées :</span> Spring boot, JWT, MySQL, React js, Angular, Tailwind CSS.
        </li>*/}
      </ul>
    ),
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
    description: (
      <ul className="list-disc ml-5 space-y-2">
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
          <ul className="ml-5 mt-1 space-y-2">
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
        {/*<li>
          <span className="font-semibold">Technologies utilisées :</span> Spring-boot, Angular, MySQL.
        </li>*/}
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
    location: "Morocco",
    start_date: "Jul 2023",
    end_date: "",
    description: (
      <>
        <ul className="list-disc ml-5 mt-1 space-y-3">

          <li>
            <span className="font-semibold">
              Observed IT network management and maintenance processes within an industrial and port environment
            </span>
          </li>

          <li>
            <span className="font-semibold">
              Participated in the design and deployment of local area networks (LANs)
            </span>
          </li>

            <li>
              <span className="font-semibold">
               Configured and tested routers and switches to ensure reliable network communication between devices
              </span>
            </li>

            <li>
              <span className="font-semibold">
                Implemented and validated network connectivity and device-to-device communication
              </span>
            </li>

            <li>
              <span className="font-semibold">
               Worked with core networking protocols including DNS, DHCP, HTTP, and TCP/IP
              </span>
          </li>
            
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
    <section id="expérience" className="y-20 mt-12 sm:mt-16 lg:mt-24">
      <div className="max-w-5xl mx-auto px-4 ">
        {/* Header Section (identique à Education) */}
        <div className="mb-16 flex justify-center">
          <span className="relative inline-block px-4 py-1">
            <span className="about-title text-xs font-semibold tracking-widest text-indigo-500 uppercase select-none relative inline-block px-4 py-1">
              ✦ Expériences ✦
            </span>
          </span>
        </div>

        {/* Timeline Container */}
        <div className="relative space-y-12">
          {/* Ligne verticale */}
          <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-slate-800 opacity-20 md:left-8"></div>

          {data.length === 0 ? (
            <div className="text-center text-slate-400">Aucune expérience à afficher.</div>
          ) : (
            data.map((exp) => (
              <div key={exp.id} className="relative flex flex-col md:flex-row gap-6 md:gap-10 group">
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-8 top-0 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.6)] group-hover:scale-125 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.6)] transition-all duration-300 z-10"></div>
                </div>

                {/* Dates */}
                <div className="pl-10 md:pl-0 md:w-48 md:text-right flex-shrink-0 pt-0.5">
                  <span className="text-xs text-slate-400 font-semibold">
                    <FaCalendarAlt className="inline-block mr-1 mb-0.5" />
                    {exp.start_date}
                    {exp.end_date && ` - ${exp.end_date}`}
                  </span>
                </div>

                {/* Contenu principal */}
                <div className="pl-10 md:pl-0 flex-1 pb-8">
                  {/* Titre, entreprise, lieu */}
                  <div className="mb-4">
                    <h3 className="text-xl md:text-1xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 group-hover:from-teal-100 group-hover:to-teal-100 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-slate-400">
                      <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                        <FaBuilding className="text-indigo-600" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-400 font-semibold">
                        <FaMapMarkerAlt className="text-indigo-600" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  {/* Carte Description */}
                  <div className="relative p-6 rounded-2xl bg-[#0B0A10] border border-gray-800/60 hover:border-indigo-500/30 transition-colors duration-500 shadow-xl">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-500/5 rounded-full blur-2xl -z-10"></div>
                    <div className="flex items-start gap-3 mb-3">
                      <FaBriefcase className="text-2xl text-indigo-600 mt-1 flex-shrink-0" />
                      {/*  Description Text*/}
                      <div className="w-full">
                        <div className="mt-2 text-sm leading-relaxed text-slate-400 font-light">
                          {typeof exp.description === "string" ? exp.description : exp.description}
                        </div>
                        {/* Technologies utilisées */}
                       {/* {exp.technologies && (
                          <div className="flex flex-wrap gap-3 mt-4">
                            {exp.technologies.split(",").map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-4 py-1 rounded-full border border-slate-700 text-slate-200 text-sm font-normal bg-transparent"
                                style={{ background: "rgba(30,32,36,0.5)" }}
                              >
                                {tech.trim()}
                              </span>
                            ))}
                          </div>
                        )}*/}

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
