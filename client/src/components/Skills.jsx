const skillsData = [
  {
    category: "Frontend",
    color: "bg-[#0c223a]",
    items: [
      { name: "React", img: "/react.png" },
      // ...ajoute d'autres skills ici si besoin...
    ],
  },
  {
    category: "Backend",
    color: "bg-[#0c1a0c]",
    items: [
      { name: "Node.js", img: "/nodejs.png" },
      // ...ajoute d'autres skills ici si besoin...
    ],
  },
  {
    category: "Tools",
    color: "bg-[#1a1020]",
    items: [
      { name: "Git", img: "/git.webp" },
      // ...ajoute d'autres skills ici si besoin...
    ],
  },
];

export default function Skills() {
  return (
    <section id="compétences" className="py-10 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8 justify-center">
        {skillsData.map((cat) => (
          <div
            key={cat.category}
            className={`${cat.color} rounded-2xl border border-gray-400/30 p-6 flex-1 min-w-[200px] max-w-sm shadow-lg`}
          >
            <div className="flex items-center mb-6">
              <span className="inline-block w-3 h-3 rounded-full bg-white mr-2" />
              <span className="text-xl font-bold text-white">{cat.category}</span>
            </div>
            <div className="grid grid-cols-1 gap-5">
              {cat.items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center bg-black/30 rounded-xl py-6 transition hover:bg-black/50"
                >
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-12 h-12 object-contain mb-2"
                    loading="lazy"
                  />
                  <span className="mt-2 text-base font-semibold text-white">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
