import React, { useRef, useEffect, useState } from "react";
import { FaServer, FaTools, FaDatabase, FaCloud, FaCode, FaCubes } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { SiSpring, SiTypescript, SiTailwindcss } from "react-icons/si";

const skillsData = [

	{
		category: "Backend & Languages",
		icon: <FaServer className="text-blue-400" />,
		color: "bg-[#0c1a0c]",
		items: [
		{ name: "Java", img: "/java.png" },
		{ name: "Spring Boot", img: "/springboot.png" },
		{ name: "Python", img: "/pythonn.png" },
		{ name: "REST APIs" },
		{ name: "Node.js", img: "/nodejs.png" },
		{ name: "Flutter", img: "/flutter.png" },
		],
	},

	{
		category: "Data",
		icon: <FaDatabase className="text-green-400" />,
		color: "bg-[#1a1a2a]",
		items: [
			{ name: "MySQL", img: "/mysqll.png" },
			{ name: "PostgreSQL", img: "/PostgreSQL.png" },
			{ name: "SQL Server" },
      { name: "MongoDB", img: "/mongodb.png" },
		],
	},

	{
		category: "Frontend",
		icon: <MdOutlineWeb className="text-purple-400" />,
		color: "bg-[#0c223a]",
		items: [
			{ name: "React.js", img: "/react.png" },
			{ name: "Angular", img: "/angular.png" },
			{ name: "TypeScript", img: "/typescript.png" },
			{ name: "Tailwind CSS", img: "/tailwindcss.png" },
     
		],
	},

	{
		category: "DevOps & Tools",
		icon: <FaTools className="text-orange-400" />,
		color: "bg-[#1a1020]",
		items: [
		{ name: "Jwt", img: "/jwt.png" },
		{ name: "Git & GitHub", img: "/git.png" },
	   { name: "Docker", img: "/docker.png" },
      { name: "Azure DevOps" },
      { name: "Postman", img: "/postman.png" },
     
      
		],
	},

];

const marqueeStyle = `
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.skills-marquee-outer {
  overflow: hidden;
  width: 100%;
  padding: 1.25rem 0;
  border: 1.5px solid rgba(12, 1, 1, 0.18);
  border-radius: 2rem;
  box-shadow: 0 2px 16px 0 rgba(168,85,247,0.10), 0 1px 8px 0 rgba(27,76,253,0.10);
  margin-top: 4rem;
  backdrop-filter: blur(2px);
}
.skills-marquee-inner {
  display: flex;
  gap: 2.5rem;
  align-items: center;
  animation: marquee 25s linear infinite;
  width: max-content;
}
.skills-marquee-logo {
  background: #18181b;
  border-radius: 1rem;
  box-shadow: 0 2px 12px 0 rgba(168,85,247,0.08);
  padding: 0.5rem;
  transition: box-shadow 0.3s, transform 0.3s;
}
.skills-marquee-logo:hover {
  box-shadow: 0 4px 24px 0 rgba(168,85,247,0.18);
  transform: scale(1.08) rotate(-2deg);
}
`;

export default function Skills() {
	// Animation on scroll (comme Experience)
	const cardRefs = useRef([]);
	const [visible, setVisible] = useState(() => Array(skillsData.length).fill(false));

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
	}, []);

  // Animation for logos marquee
  const marqueeRef = useRef(null);
  const [marqueeVisible, setMarqueeVisible] = useState(false);

  useEffect(() => {
    if (!marqueeRef.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setMarqueeVisible(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(marqueeRef.current);
    return () => observer.disconnect();
  }, []);

	return (
		<section id="compétences" className="py-12 sm:py-16 lg:py-24 bg-black">
			<div className="mb-12 flex justify-center">
				<span
					className={`about-title text-4xl font-semibold tracking-widest text-indigo-500 uppercase select-none px-4 py-1 transition-all duration-500
      ${visible.some((v) => v) ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}
					style={{ willChange: "opacity, transform" }}
				>
					✦ Skills ✦
				</span>
			</div>
			{/* Cards Skills */}
			<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-start">
				{skillsData.map((cat, idx) => (
					<div
						key={cat.category}
						ref={(el) => (cardRefs.current[idx] = el)}
						className={`bg-black rounded-2xl p-6 w-full max-w-md border-2 border-[#23232a] shadow-lg transition-all duration-500
              hover:bg-[#18181b] hover:border-gray-600 hover:shadow-2xl
              ${visible[idx] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
						style={{ willChange: "opacity, transform" }}
					>
						<div className="flex items-center gap-3 mb-4">
							<div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#23232a] text-2xl">
								{cat.icon}
							</div>
							<h2 className="text-xl font-bold text-white">{cat.category}</h2>
						</div>
						<div className="flex flex-wrap gap-3">
							{cat.items.map((item) => (
								<span
									key={item.name}
									className="px-4 py-1 rounded-full border border-[#2e4369] bg-[#19233a] text-[#7ec3ff] text-sm font-medium"
									style={{ display: "inline-block" }}
								>
									{item.name}
								</span>
							))}
						</div>
					</div>
				))}
			</div>

			{/* Section logos en marche avec animation */}
			<style>{marqueeStyle}</style>
			<div
        className={`skills-marquee-outer mt-24 transition-all duration-700 ${
          marqueeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
        ref={marqueeRef}
        style={{ willChange: "opacity, transform" }}
      >
        <div className="skills-marquee-inner ">
          {[...skillsData
            .flatMap(cat => cat.items)
            .filter(item => item.img),
            ...skillsData
            .flatMap(cat => cat.items)
            .filter(item => item.img)
          ].map((item, idx) => (
            <img
              key={item.name + idx}
              src={item.img}
              alt={item.name}
              className={
                item.img === "/mysqll.png"
                  ? "scale-120 h-16 w-16 object-contain opacity-90 skills-marquee-logo"
                  : item.img === "/django.png"
                    ? "scale-110 h-16 w-16 object-contain opacity-90 skills-marquee-logo"
                    : "h-16 w-16 object-contain opacity-90 skills-marquee-logo"
              }
              title={item.name}
            />
          ))}
        </div>
      </div>
		</section>
	);
}