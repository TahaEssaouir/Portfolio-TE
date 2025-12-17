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
           <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-100 mb-2">
               Medical marketplace platform :  
           </h3>
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
         <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-100 mb-2">
              Leave and absence management application :
           </h3>
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
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-100 mb-2">
               Network Administrator Intern :  
           </h3>

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
          <div className="absolute left-[-15px] sm:left-[-50px] md:left-[-70px] inset-y-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-slate-800 opacity-20"></div>

          {data.length === 0 ? (
            <div className="text-center text-slate-400">Aucune expérience à afficher.</div>
          ) : (
            data.map((exp) => (
              <div
                key={exp.id}
                className="relative flex flex-col md:flex-row gap-4 md:gap-8 group"
              >
                {/* Timeline Node */}
                <div className="absolute left-[-20px] sm:left-[-55px] md:left-[-77px] top-8 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.6)] group-hover:scale-125 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.6)] transition-all duration-300 z-10"></div>
                </div>

                {/* Bloc Dates + Titre/Entreprise/Lieu */}
                <div className="flex flex-col items-start min-w-[180px] sm:min-w-[220px] md:min-w-[260px] ml-4 sm:ml-12 md:ml-[-40px] mr-2 sm:mr-4">
                  {/* Dates */}
                  <div className="mb-2">
                    <span className="text-xs text-slate-400 font-semibold">
                      <FaCalendarAlt className="inline-block mr-1 mb-0.5" />
                      {exp.start_date}
                      {exp.end_date && ` - ${exp.end_date}`}
                    </span>
                  </div>
                  {/* Titre, entreprise, lieu */}
                  <div>
                    <h3 className="text-lg  md:text-1xl font-bold text-gray-200 mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col gap-1 text-xs text-slate-400">
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
                </div>

                {/* Carte Description */}
                <div className="flex-1 pb-8 max-w-sm sm:max-w-md md:max-w-none mx-auto md:mx-0 md:mt-12">
                  <div className="relative p-4 sm:p-6 rounded-2xl bg-[#0B0A10] border border-gray-800/60 hover:border-indigo-500/30 transition-colors duration-500 shadow-xl">
                    <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-indigo-500/5 rounded-full blur-2xl -z-10"></div>
                    <div className="flex items-start gap-2 sm:gap-3 mb-3">
                      <FaBriefcase className="text-xl sm:text-2xl text-indigo-600 mt-1 flex-shrink-0" />
                   
                      {/*  Description Text*/}
                      <div className="w-full">
                        <div className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400 font-light">
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
