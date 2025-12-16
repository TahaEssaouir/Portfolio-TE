export default function About() {
  return (
    <section id="profil" className="py-0 px-4 flex flex-col items-center justify-center min-h-[60vh] bg-transparent">
      <div className="max-w-3xl w-full mx-auto text-center">
        <div className="mb-6">
          <span className="about-title text-xs font-semibold tracking-widest text-indigo-500 uppercase select-none relative inline-block px-4 py-1">
            ✦ About me
            <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-gradient-to-r from-violet-400 via-cyan-400 to-teal-400 rounded-full blur-[2px] opacity-70 -z-10"></span>
          </span>
        </div>
        <style>{`
          .about-title {
            letter-spacing: 0.25em;
            text-shadow: 0 2px 8px #a78bfa99, 0 0px 2px #06b6d4cc;
            transition: text-shadow 0.3s;
          }
          .about-title:hover {
            text-shadow: 0 4px 16px #a78bfa, 0 0px 8px #06b6d4;
          }
        `}</style>
        <h1 className="text-base sm:text-lg text-gray-400 leading-relaxed italic max-w-2xl text-left mx-auto font-normal mb-8">
          Hey, I'm <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-fuchsia-300 not-italic relative inline-block animate-gradientText">Taha Essaouir</span>.
          I'm a computer and network engineer, specializing in Full-Stack Engineering with a background in networking.
          I create robust and scalable web applications.
          I enjoy solving real-world problems through clean and efficient design and code.
          <span className="hidden sm:block" />
        {/*   Mon expertise : * Backend : Conception d'architectures API. 
         * Frontend : Création d'interfaces réactives.
         * Méthodologie : Approche collaborative, forte gestion du stress et adaptabilité.*/}
          <span className="hidden sm:block" />
        </h1>

        {/* Ligne de séparation - About */}
        <div className="flex justify-center w-full my-6">
          <span className="relative w-3/4 h-[2px] flex items-center">
            <span className="absolute left-20 w-2/3 h-[1.5px] bg-gradient-to-r from-white/0 via-white/60 to-white/0 rounded-full shadow-[0_0_8px_0_rgba(255,255,255,0.15)] animate-fadeInLine" />
          </span>
        </div>

             {/* My Resume - More Informations */}
        <div className="flex flex-wrap w-full mt-8 gap-4 justify-center">
          <a
            href="/cv-taha-essaouir.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium flex items-center gap-2 text-white  hover:text-indigo-400 hover:scale-105 hover:-translate-y-1 transition duration-300"
          >
            {/* Eye icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M1.5 12s3.5-7 10.5-7 10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12Z" />
              <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
            <span>My Resume</span>
          </a>
          <a
            href="/about"
            className="p-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium flex items-center gap-2 text-white  hover:text-indigo-400 hover:scale-105 hover:-translate-y-1 transition duration-300"
          >
            {/* Info icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4m0-4h.01" />
            </svg>
            <span>More Informations</span>
          </a>
        </div>
        <style>{`
          @keyframes gradientText {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
          .animate-gradientText {
            background-size: 200% 200%;
            animation: gradientText 2.5s ease-in-out infinite alternate;
          }
        `}</style>
      </div>
    </section>
  );
}
