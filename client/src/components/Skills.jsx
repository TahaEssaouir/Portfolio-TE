const skillsData = [
  {
    category: "Frontend",
    color: "bg-[#0c223a]",
    items: [
      { name: "React", img: "/react.png" },
      { name: "JavaScript", img: "/javascript.png" },
      { name: "Angular", img: "/angular.png" },
      { name: "TypeScript", img: "/typescript.png" },
      { name: "Tailwind CSS", img: "/tailwindcss.png" },
      // ...ajoute d'autres skills ici si besoin...
    ],
  },
  {
    category: "Backend",
    color: "bg-[#0c1a0c]",
    items: [
      { name: "Java", img: "/java.png" },
      { name: "Spring Boot", img: "/springboot.png" },
      { name: "Django", img: "/django.png" },
      { name: "Node.js", img: "/nodejs.png" },
      { name: "MySQL", img: "/MySQL.png" },
      { name: "PostgreSQL", img: "/PostgreSQL.png" },
   
     
    ],
  },
  {
    category: "Tools",
    color: "bg-[#1a1020]",
    items: [
      { name: "Jwt", img: "/jwt.png" },
      { name: "Git", img: "/git.png" },
      { name: "Docker", img: "/docker.png" },
      // ...ajoute d'autres skills ici si besoin...
    ],
  },
];

export default function Skills() {
  return (
    <section id="compétences" className="py-12 sm:py-16 lg:py-24 bg-black">
      <div className="mb-12 flex justify-center">
        <span
          className="about-title text-2xl font-semibold tracking-widest text-indigo-500 uppercase select-none px-4 py-1 transition-all duration-500 opacity-100 translate-y-0"
          style={{ willChange: "opacity, transform" }}
        >
          ✦ Skills ✦
        </span>
      </div>
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row flex-wrap gap-8 justify-center items-center">
        {skillsData.map((cat) => (
          <div
            key={cat.category}
            className={
              `rounded-2xl p-6 w-full max-w-xs bg-black bg-opacity-80 border-2 border-white/10 shadow-lg transition-all duration-300
              hover:bg-[#18181b] hover:border-gray-600 hover:shadow-2xl`
            }
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-white rounded-full mr-2"></span>
              {cat.category}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-items-center">
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col items-center justify-center bg-black/30 rounded-lg p-1 hover:bg-black/50 transition max-w-[110px] w-full"
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-transparent mb-1">
                    <img
                      src={item.img}
                      alt={item.name}
                      className={
                        item.name === "React"
                          ? "w-14 h-14 object-contain"
                          : item.name === "TypeScript"
                          ? "w-25 h-25 object-contain"
                          : item.name === "JavaScript"
                          ? "w-8 h-8 object-contain"
                          : item.name === "Spring Boot"
                          ? "w-8 h-8 object-contain"
                          : item.name === "Node.js"
                          ? "w-32 h-32 object-contain"
                          : item.name === "MySQL"
                          ? "w-20 h-20 object-contain"
                          : item.name === "Docker"
                          ? "w-14 h-14 object-contain" // réduit un petit peu la taille
                          : item.name === "Git"
                          ? "w-8 h-8 object-contain"
                          : item.name === "Django"
                          ? "w-14 h-14 object-contain"
                          : item.name === "Angular"
                          ? "w-20 h-20 object-contain"
                          : "w-10 h-10 object-contain"
                      }
                      style={
                        item.name === "React"
                          ? { maxWidth: "60px", maxHeight: "66px" }
                          : item.name === "TypeScript"
                          ? { maxWidth: "85px", maxHeight: "85px" }
                          : item.name === "JavaScript"
                          ? { maxWidth: "26px", maxHeight: "26px" }
                          : item.name === "Spring Boot"
                          ? { maxWidth: "32px", maxHeight: "32px" }
                          : item.name === "Node.js"
                          ? { maxWidth: "128px", maxHeight: "128px" }
                          : item.name === "MySQL"
                          ? { maxWidth: "80px", maxHeight: "80px" }
                          : item.name === "Docker"
                          ? { maxWidth: "56px", maxHeight: "56px" } // réduit un petit peu la taille
                          : item.name === "Git"
                          ? { maxWidth: "32px", maxHeight: "32px" }
                          : item.name === "Django"
                          ? { maxWidth: "56px", maxHeight: "56px" }
                          : item.name === "Angular"
                          ? { maxWidth: "80px", maxHeight: "80px" }
                          : { maxWidth: "40px", maxHeight: "40px" }
                      }
                    />
                  </div>
                  <span className="text-sm font-medium text-center">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
