import { FaBriefcase, FaBuilding, FaMapMarkerAlt, FaCalendarAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";


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
  const [openId, setOpenId] = useState(null);

  // Animation on scroll
  const cardRefs = useRef([]);
  const [visible, setVisible] = useState(() => Array(data.length).fill(false));

  useEffect(() => {
    const observers = cardRefs.current.map((ref, idx) => {
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
      if (observer && cardRefs.current[idx]) {
        observer.observe(cardRefs.current[idx]);
      }
    });

    return () => {
      observers.forEach((observer, idx) => {
        if (observer && cardRefs.current[idx]) {
          observer.unobserve(cardRefs.current[idx]);
        }
      });
    };
  }, [cardRefs, data.length]);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="expérience" className="py-12 sm:py-16 lg:py-24 bg-black">
      <div className="max-w-4xl mx-auto px-2 sm:px-4">
        <div className="mb-12 flex justify-center">
          <span
            className={`about-title text-2xl font-semibold tracking-widest text-indigo-500 uppercase select-none px-4 py-1 transition-all duration-500
              ${visible.some(v => v) ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}
            style={{ willChange: "opacity, transform" }}
          >
            ✦ Expériences ✦
          </span>
        </div>
        <div className="space-y-8">
          {data.map((exp, idx) => (
            <div
              key={exp.id}
              ref={el => cardRefs.current[idx] = el}
              className={
                `bg-black rounded-xl shadow-lg p-6 border-2 border-[#23232a] transition-all duration-500 hover:bg-[#18181b] hover:border-gray-600 hover:shadow-2xl relative
                ${visible[idx] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`
              }
              style={{ willChange: "opacity, transform" }}
            >
              {/* Toggle Button */}
              <button
                onClick={() => handleToggle(exp.id)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-xl bg-transparent hover:bg-[#23232a] transition-all duration-200 shadow-none hover:shadow-lg hover:scale-110 text-gray-400 hover:text-white"
                aria-label={openId === exp.id ? "Hide achievements" : "Show achievements"}
              >
                {openId === exp.id ? (
                  <FaChevronUp className="text-xl" />
                ) : (
                  <FaChevronDown className="text-xl" />
                )}
              </button>
              <div className="flex items-center mb-2">
                {/* Image */}
                <div className="w-14 h-14 rounded-full flex items-center justify-center mr-4 overflow-hidden bg-[#23232a]">
                  {exp.image ? (
                    <img src={exp.image} alt={exp.company} className="object-cover w-full h-full" />
                  ) : (
                    <FaBriefcase className="text-indigo-700 text-2xl" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">• {exp.title}</h3>
                  <div className="flex items-center text-sm text-gray-400">
                    <FaBuilding className="mr-1" /> {exp.company}
                    <span className="mx-2 text-xl">•</span>
                    <FaMapMarkerAlt className="mr-1" /> {exp.location}
                  </div>
                  {/* Date*/}
                  <div className="inline-block bg-[#18181b] rounded-full px-4 py-1 text-xs text-gray-200 font-normal mt-2">
                    {exp.start_date} - {exp.end_date ? exp.end_date : "Present"}
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="text-gray-400 mb-2">
                  <span className="font-semibold text-2xl">  {/*Projet :*/}-</span> {exp.project}
                </div>
                {/* Description or summary here if needed */}
                {/* Achievements collapsible */}
                {openId === exp.id && (
                  <div>
                    <hr className="my-3 border-[#23232a]" />
                    <div className="font-semibold text-gray-300 mb-2">Key Achievements:</div>
                    <ul className="list-disc pl-5 text-gray-500 text-xs space-y-1 mb-2">
                      {exp.achievements.map((ach, idx) => (
                        <li key={idx}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {exp.technologies && (
                  <div className="mt-2 text-xs text-indigo-300">
                    <span className="font-semibold">Technologies :</span> {exp.technologies}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
