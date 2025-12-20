import React, { useRef, useEffect, useState } from "react";

export default function Hero({ profile }) {
  const email = profile?.email || "tessaouir@gmail.com";

  // Animation on scroll for left and right blocks
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);

  useEffect(() => {
    if (!leftRef.current || !rightRef.current) return;

    const leftObserver = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setLeftVisible(true);
      },
      { threshold: 0.2 }
    );
    leftObserver.observe(leftRef.current);

    const rightObserver = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setRightVisible(true);
      },
      { threshold: 0.2 }
    );
    rightObserver.observe(rightRef.current);

    return () => {
      leftObserver.disconnect();
      rightObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent  px-4 sm:px-6"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-stretch gap-14">

        {/* ================= LEFT ================= */}
        <div
          ref={leftRef}
          className={`flex flex-col justify-between w-full flex-1 text-center lg:text-left lg:pl-12 lg:-ml-8 transition-all duration-700
            ${leftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          style={{ willChange: "opacity, transform" }}
        >

          {/* Intro */}
          <div className="flex flex-col items-center lg:items-start">
            <p className="text-xs sm:text-sm font-medium uppercase tracking-widest text-gray-400">
              Hi, It's me
            </p>

            <h1 className="font-extrabold leading-tight tracking-wide uppercase text-teal-300 mt-1">
              <span className="block text-[clamp(2.8rem,6vw,4.5rem)]">
                {"Taha".split("").map((l, i) => (
                  <span key={i} className="name-letter" style={{ "--i": i }}>
                    {l}
                  </span>
                ))}
              </span>

              <span className="block mt-2 text-[clamp(1.8rem,4vw,3rem)]">
                {"Essaouir".split("").map((l, i) => (
                  <span key={i} className="name-letter" style={{ "--i": i + 4 }}>
                    {l}
                  </span>
                ))}
              </span>
            </h1>



            {/* Divider */}
            <div className="w-80 my-8 lg:ml-[-40px]">
              <span className="block w-full h-[2px] bg-gradient-to-r from-white/0 via-white/60 to-white/0 rounded-full animate-fadeInLine" />
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center justify-center lg:justify-start gap-4 mt-0">
            {/* LinkedIn */}
              <a
              href={profile?.linkedin || 'https://www.linkedin.com/in/taha-essaouir-26228a168/'}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full duration-500 bg-white/5 border-white/10 hover:border-[#0A66C2] hover:text-[#0A66C2] hover:scale-105 hover:-translate-y-1 transition"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="#0A66C2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  stroke="currentColor"
                  fill="#0A66C2"
                  d="M6.94 9.5V18H4V9.5h2.94ZM5.47 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM20 18h-2.93v-4.39c0-1.12-.02-2.55-1.55-2.55-1.55 0-1.79 1.21-1.79 2.47V18H10.8V9.5h2.8v1.16h.04c.39-.74 1.34-1.52 2.76-1.52 2.95 0 3.6 1.94 3.6 4.47V18Z"
                />
              </svg>
            </a>

            {/* GitHub */}
           <a
              href={profile?.github || 'https://github.com/TahaEssaouir'}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 duration-500 border-white/10 hover:border-[#0A66C2]  hover:scale-105 hover:-translate-y-1 transition"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.76.08-.74.08-.74 1.21.09 1.85 1.24 1.85 1.24 1.08 1.84 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.48-1.34-5.48-5.95 0-1.32.47-2.4 1.24-3.24-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.92 1.24 3.24 0 4.62-2.81 5.65-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href={`mailto:${email}`}
              className="p-2 rounded-full bg-white/5 duration-500 border-white/10 hover:border-red-4as00 hover:text-red-400 hover:scale-105 hover:-translate-y-1  transition"
              aria-label="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.17L4.4 7.35 3 8.76l9 7.09 9-7.09-1.4-1.41L12 12.17Z" />
              </svg>
            </a>
          </div>

          {/* Mobile experience */}
          <div className="lg:hidden mt-20 text-center">
            <div className="text-3xl font-extrabold text-teal-300">2022 – 2025</div>
            <div className="text-gray-400 mt-1">3 years of experience</div>
            <div className="flex items-start gap-4 mt-8 max-w-md">
              <span className="w-[5px] h-[70px] bg-teal-300" />
              <p className="italic text-gray-500">
                "As a Full-Stack Engineer, I design high-performance web applications that combine robustness, clarity, and scalability."
              </p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT (Desktop) ================= */}
        <div
          ref={rightRef}
          className={`hidden lg:block transition-all duration-700
            ${rightVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          style={{ willChange: "opacity, transform" }}
        >
          <div className="text-5xl font-extrabold text-teal-300">2022 – 2025</div>
          <div className="text-gray-400 text-3xl mt-1">3 years of experience</div>

         {/*  Description */}
          <div className="flex items-start gap-4 mt-8 max-w-md">
            <span className="w-[10px] h-[150px] bg-teal-300" />
            <p className="italic text-2xl text-gray-500">
              "As a Full-Stack Engineer, I design high-performance web applications that combine robustness, clarity, and scalability."
            </p>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes nameCycle {
          0%, 10% { opacity: 0; filter: blur(6px); transform: translateY(8px); }
          25%, 80% { opacity: 1; filter: blur(0); transform: translateY(0); }
          90%, 100% { opacity: 0; filter: blur(6px); transform: translateY(-8px); }
        }
        .name-letter {
          display: inline-block;
          animation: nameCycle 2.8s ease-in-out infinite;
          animation-delay: calc(var(--i) * 0.12s);
        }
        @keyframes fadeInLine {
          from { opacity: 0; transform: scaleX(0.7); }
          to { opacity: 1; transform: scaleX(1); }
        }
        .animate-fadeInLine {
          animation: fadeInLine 1.2s ease-out both;
        }
      `}</style>
    </section>
  );
}
