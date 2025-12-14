export default function About() {
  return (
    <section id="profil" className="py-24 px-4 flex flex-col items-center justify-center min-h-[60vh] bg-transparent">
      <div className="max-w-3xl w-full mx-auto text-center">
        <div className="mb-6">
          <span className="about-title text-xs font-semibold tracking-widest text-sky-600 uppercase select-none relative inline-block px-4 py-1">
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
          Hey, I'm <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-purple-400 not-italic relative inline-block animate-gradientText">Taha Essaouir</span>.
          I'm a Software Engineer with a strong foundation in Networks, 
          I specialize in developing robust and scalable web applications.
          I enjoy solving real-world problems through clean and responsive design and code.
          <span className="hidden sm:block" />
          Mon expertise : * Backend : Conception d'architectures API. 
         * Frontend : Création d'interfaces réactives.
         * Méthodologie : Approche collaborative, forte gestion du stress et adaptabilité.
          <span className="hidden sm:block" />

                 <a
          href="/cv-taha-essaouir.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#18181b] text-white text-lg font-normal border border-[#b983ff] outline-none transition-all duration-300
            hover:scale-105 mt-16 -ml-24 self-start"
          style={{ boxShadow: '0 4px 24px 0 #00ffe1a0' }}
        >
          <span className="mr-2 px-2 py-0.5 rounded text-white">My Resume</span>
          {/* Eye icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M1.5 12s3.5-7 10.5-7 10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12Z" />
            <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
          <span className="absolute inset-0 rounded-full pointer-events-none border border-[#b983ff]"></span>
        </a>
        </h1>
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
