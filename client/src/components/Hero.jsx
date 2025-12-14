import React,  {/* { useState }*/} from 'react';

export default function Hero({ profile }) {
 {/* const [copied, setCopied] = useState(false); */}
  const email = profile?.email || 'tessaouir@gmail.com';
 

 {/* const handleCopyEmail = () => {
    if (!email) return;
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } else {
      window.location.href = `mailto:${email}`;
    }
  };*/}

  return (
    <section
      id="accueil"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-6 bg-transparent mt-0 mb-0 pt-20"
    >

      
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-stretch justify-between min-h-[70vh]">
        {/* LEFT: Main intro and socials at bottom */}
        <div className="flex flex-col justify-between flex-1 h-full">
          <div className="ml-8 lg:ml-16">
            {/* Name */}
            <div>
              <p className="text-xs sm:text-sm font-medium uppercase tracking-widest text-gray-400 mb-0">
                Hey, It's me
              </p>
              <h1 className="font-extrabold leading-tight text-teal-300 tracking-wide uppercase mb-0 flex flex-col items-start">
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  <span className="name-letter" style={{ '--i': 0 }}>T</span>
                  <span className="name-letter" style={{ '--i': 1 }}>a</span>
                  <span className="name-letter" style={{ '--i': 2 }}>h</span>
                  <span className="name-letter" style={{ '--i': 3 }}>a</span>
                </span>
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2">
                  <span className="name-letter" style={{ '--i': 4 }}>E</span>
                  <span className="name-letter" style={{ '--i': 5 }}>s</span>
                  <span className="name-letter" style={{ '--i': 6 }}>s</span>
                  <span className="name-letter" style={{ '--i': 7 }}>a</span>
                  <span className="name-letter" style={{ '--i': 8 }}>o</span>
                  <span className="name-letter" style={{ '--i': 9 }}>u</span>
                  <span className="name-letter" style={{ '--i': 10 }}>i</span>
                  <span className="name-letter" style={{ '--i': 11 }}>r</span>
                </span>
              </h1>
            </div>
            {/* Ligne de séparation */}
            <div className="flex justify-start w-4/5 my-10">
              <span className="relative w-full h-[2px] flex items-center">
                <span className="absolute left-0 w-4/5 h-[1.5px] bg-gradient-to-r from-white/0 via-white/60 to-white/0 rounded-full shadow-[0_0_8px_0_rgba(255,255,255,0.15)] animate-fadeInLine" />
              </span>
            </div>
          </div>
          {/* Social icons at the bottom left */}
          <div className="flex items-center gap-4 text-gray-300 mt-12 lg:mt-auto mb-4 ml-8 lg:ml-16">
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
            <a
              href={`mailto:${email}`}
              className="p-2 rounded-full bg-white/5 duration-500 border-white/10 hover:border-red-4as00 hover:text-red-400 hover:scale-105 hover:-translate-y-1  transition"
              aria-label="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.17L4.4 7.35 3 8.76l9 7.09 9-7.09-1.4-1.41L12 12.17Z" />
              </svg>
            </a>

      

            {/* Email button */}
           {/* <button
              type="button"
              onClick={handleCopyEmail}
              className={`group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/90 hover:text-white hover:border-white/30 bg-[#1a1d2e]/60 backdrop-blur-sm transition-all  duration-300 ${copied ? 'ring-2 ring-green-400/40' : ''}`}
              aria-label="Copy email to clipboard"
              title={copied ? 'Copied!' : 'Copy email'}
            >
              <span className={`inline-block h-2 w-2 rounded-full ${copied ? 'bg-green-400' : 'bg-purple-400'} transition-all duration-300`} />
              {copied ? 'Copied!' : 'Copy Email'}
            </button> */}
          </div>
        </div>
        {/* RIGHT: Experience & Quote */}
        <div className="flex flex-col justify-start flex-1 items-end text-right mt-0 lg:mt-0">
          <div className="mr-8 lg:mr-16">
            <div className="flex flex-col items-start text-left">
              <div className="text-4xl sm:text-5xl font-extrabold text-teal-300">2022 - 2025</div>
              <div className="text-xl sm:text-2xl text-gray-400 mt-1">3 years of experience</div>
            </div>
            <div className="flex items-start gap-3 mt-8">
              <span className="w-[3px] h-[120px]  bg-teal-300" />
              {/* Quote just below Name moved here, next to the blue bar */}
              <div className="text-base sm:text-lg text-gray-500 leading-relaxed italic max-w-md text-left">
                <span>
                  "As a Computer and Network Engineer, I am familiar with<br />
                  <span className="block pl-0">
                    high-performance web applications that combine
                  </span>
                  robustness. My goal is simple: to transform complex needs into elegant and sustainable technical solutions."
                </span>

              
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
        .glow-border {
          background: conic-gradient(from 0deg, #38bdf8, #818cf8, #f472b6, #38bdf8 100%);
          filter: blur(12px) brightness(1.5);
          opacity: 0.7;
          animation: gradientShift 3s linear infinite;
        }
        @keyframes gradientMove {
          0% { background-position: left; }
          100% { background-position: right; }
        }
        .animate-gradientMove {
          animation: gradientMove 2.5s linear infinite alternate;
        }
        @keyframes fadeInLine {
          0% { opacity: 0; transform: scaleX(0.7); }
          60% { opacity: 1; transform: scaleX(1.08);}
          100% { opacity: 1; transform: scaleX(1);}
        }
        .animate-fadeInLine {
          animation: fadeInLine 1.2s cubic-bezier(0.4,0,0.2,1) both;
        }
      `}</style>
    </section>
  );
}