import React, { useState } from 'react';

export default function Hero({ profile }) {
  const [copied, setCopied] = useState(false);
  const email = profile?.email || '';
  const photoSrc = profile?.photo || '/Taha4.jpg';

  const handleCopyEmail = () => {
    if (!email) return;
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } else {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section
      id="accueil"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-6 bg-transparent mt-0 mb-0 pt-12"
    >
      <div className="relative z-10 w-full max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* left: photo + name */}
          <div className="flex flex-col items-center lg:items-start gap-8">
            {/* photo */}
            <div className="relative h-64 w-64 sm:h-72 sm:w-72 rounded-full overflow-hidden border-[6px] border-sky-400 shadow-2xl">
              <img
                src={photoSrc}
                alt="Profile"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* name */}
            <div className="text-center lg:text-left">
              <p className="text-xs sm:text-sm font-medium uppercase tracking-widest text-gray-400 mb-2">
                Hey, It's me
              </p>
              <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-blue-400 tracking-wide uppercase">
                <span className="name-letter" style={{ '--i': 0 }}>T</span>
                <span className="name-letter" style={{ '--i': 1 }}>a</span>
                <span className="name-letter" style={{ '--i': 2 }}>h</span>
                <span className="name-letter" style={{ '--i': 3 }}>a</span>
                <br />
                <span className="name-letter" style={{ '--i': 4 }}>E</span>
                <span className="name-letter" style={{ '--i': 5 }}>s</span>
                <span className="name-letter" style={{ '--i': 6 }}>s</span>
                <span className="name-letter" style={{ '--i': 7 }}>a</span>
                <span className="name-letter" style={{ '--i': 8 }}>o</span>
                <span className="name-letter" style={{ '--i': 9 }}>u</span>
                <span className="name-letter" style={{ '--i': 10 }}>i</span>
                <span className="name-letter" style={{ '--i': 11 }}>r</span>
              </h1>
            </div>
          </div>

          {/* right: info stack */}
          <div className="flex flex-col gap-10">
            {/* year & experience */}
            <div className="text-right">
              <div className="text-4xl sm:text-5xl font-extrabold text-blue-400">2022 - 2025</div>
              <div className="text-xl sm:text-2xl text-gray-300 mt-1">3 years of experience</div>
            </div>
            {/* quote */}
            <div className="flex items-start gap-3">
              <span className="w-[3px] h-16 sm:h-20 bg-blue-500" />
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed italic">
                "As a Computer and Network Engineer, I am familiar with high-performance web applications that combine robustness. My goal is simple: to transform complex needs into elegant and sustainable technical solutions."
              </p>
            </div>
            {/* role & button */}
            <div className="flex flex-col items-start gap-6">
              <p className="text-lg sm:text-xl font-semibold text-blue-300 tracking-wide uppercase">
                FULL-STACK ENGINEER - JAVA / SPRING BOOT • ANGULAR • INTEGRATION
              </p>
              <button
                type="button"
                onClick={handleCopyEmail}
                className={`group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/90 hover:text-white hover:border-white/30 bg-[#1a1d2e]/60 backdrop-blur-sm transition-all duration-300 ${copied ? 'ring-2 ring-green-400/40' : ''}`}
                aria-label="Copy email to clipboard"
                title={copied ? 'Copied!' : 'Copy email'}
              >
                <span className={`inline-block h-2 w-2 rounded-full ${copied ? 'bg-green-400' : 'bg-purple-400'} transition-all duration-300`} />
                {copied ? 'Copied!' : 'Copy Email'}
              </button>

              {/* social icons */}
              <div className="flex items-center gap-4 text-gray-300">
                <a
                  href={profile?.linkedin || 'https://www.linkedin.com/in/taha-essaouir-26228a168/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:text-white hover:scale-105 transition"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.94 9.5V18H4V9.5h2.94ZM5.47 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM20 18h-2.93v-4.39c0-1.12-.02-2.55-1.55-2.55-1.55 0-1.79 1.21-1.79 2.47V18H10.8V9.5h2.8v1.16h.04c.39-.74 1.34-1.52 2.76-1.52 2.95 0 3.6 1.94 3.6 4.47V18Z" />
                  </svg>
                </a>
                <a
                  href={profile?.github || 'https://github.com/TahaEssaouir'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:text-white hover:scale-105 transition"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.76.08-.74.08-.74 1.21.09 1.85 1.24 1.85 1.24 1.08 1.84 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.48-1.34-5.48-5.95 0-1.32.47-2.4 1.24-3.24-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.92 1.24 3.24 0 4.62-2.81 5.65-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
                  </svg>
                </a>
                <a
                  href={`mailto:${email}`}
                  className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:text-white hover:scale-105 transition"
                  aria-label="Email"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.17L4.4 7.35 3 8.76l9 7.09 9-7.09-1.4-1.41L12 12.17Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradientShift {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
        .gradient-animate {
          background-image: linear-gradient(90deg, #ec4899, #06b6d4);
          animation: gradientShift 2s linear infinite;
        }
        @keyframes nameCycle {
          0%, 10% { opacity: 0; filter: blur(6px); transform: translateY(8px); }
          25%, 80% { opacity: 1; filter: blur(0px); transform: translateY(0); }
          90%, 100% { opacity: 0; filter: blur(6px); transform: translateY(-8px); }
        }
        .name-letter {
          display: inline-block;
          animation: nameCycle 2.8s ease-in-out infinite;
          animation-delay: calc(var(--i) * 0.12s);
        }
      `}</style>
    </section>
  );
}