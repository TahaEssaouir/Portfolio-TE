import { Link } from "react-router-dom";
import { MdInfoOutline } from "react-icons/md";

export default function About() {
  return (
<section
  id="profil"
  className="
    relative flex
    items-start lg:items-start
    justify-center
    min-h-[60vh]
    px-4 sm:px-6
    pt-20 lg:pt-4
    pb-20
    bg-transparent"
    >
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center">

        {/* ===== Title ===== */}
        <div className="mb-8">
          <span className="about-title text-xs font-semibold tracking-widest text-indigo-500 uppercase select-none relative inline-block px-4 py-1">
            ✦ About me ✦
            <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-gradient-to-r from-violet-400 via-cyan-400 to-teal-400 rounded-full blur-[2px] opacity-70 -z-10"></span>
          </span>
        </div>

        {/* ===== Text ===== */}
        <p className="
          text-sm sm:text-base md:text-lg
          text-gray-400 leading-relaxed italic
          max-w-2xl mx-auto
          text-center sm:text-left
          font-normal
        ">
          Hey, I'm{" "}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-fuchsia-300 not-italic animate-gradientText">
            Taha Essaouir
          </span>
          . I'm a computer and network engineer, specializing in Full-Stack Engineering with a background in networking.
          I create robust and scalable web applications and enjoy solving real-world problems through clean and efficient design and code.
        </p>

        {/* ===== Divider ===== */}
        <div className="flex justify-center w-full my-10">
          <span className="relative w-full max-w-md h-[2px]">
            <span className="absolute inset-0 h-[1.5px] bg-gradient-to-r from-white/0 via-white/60 to-white/0 rounded-full shadow-[0_0_8px_0_rgba(255,255,255,0.15)] animate-fadeInLine" />
          </span>
        </div>

        {/* ===== Actions ===== */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Resume */}
          <a
            href="/cv-taha-essaouir.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-4 py-2 rounded-full
              bg-white/5 border border-white/10
              text-xs sm:text-sm font-medium
              flex items-center gap-2
              text-white
              hover:text-indigo-400 hover:scale-105 hover:-translate-y-1
              transition duration-300
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M1.5 12s3.5-7 10.5-7 10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12Z"
              />
              <circle cx="12" cy="12" r="3.5" />
            </svg>
            <span>My Resume</span>
          </a>

          {/* More Info */}
          <Link
            to="/about"
            className="
              px-4 py-2 rounded-full
              bg-white/5 border border-white/10
              text-xs sm:text-sm font-medium
              flex items-center gap-2
              text-white
              hover:text-indigo-400 hover:scale-105 hover:-translate-y-1
              transition duration-300
            "
          >
            <MdInfoOutline className="w-5 h-5" />
            <span>More Information</span>
          </Link>
        </div>

        {/* ===== Styles ===== */}
        <style>{`
          .about-title {
            letter-spacing: 0.25em;
            text-shadow: 0 2px 8px #a78bfa99, 0 0px 2px #06b6d4cc;
            transition: text-shadow 0.3s;
          }
          .about-title:hover {
            text-shadow: 0 4px 16px #a78bfa, 0 0px 8px #06b6d4;
          }
          @keyframes gradientText {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
          .animate-gradientText {
            background-size: 200% 200%;
            animation: gradientText 2.5s ease-in-out infinite alternate;
          }
          @keyframes fadeInLine {
            from { opacity: 0; transform: scaleX(0.7); }
            to { opacity: 1; transform: scaleX(1); }
          }
          .animate-fadeInLine {
            animation: fadeInLine 1.2s ease-out both;
          }
        `}</style>
      </div>
    </section>
  );
}
