import React, { useState } from 'react';

export default function Hero({ profile }) {
  const [copied, setCopied] = useState(false);
  const email = profile?.email || '';

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
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-6 bg-transparent mt-0 mb-0"
    >
      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-4">
        <div className="max-w-2xl">
    
          {/* title 1 */}
          <h2 className="text-sm sm:text-base md:text-lg font-medium text-white/60 uppercase tracking-widest">
            Hey, It's me Taha
          </h2>

          {/* <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
         <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400">
            Building high‑performing, intuitive web apps
          </span> 
          </h1>*/}

            {/* title 2 */}
          <p className="mt-6 text-4xl font-extrabold leading-tight text-white">
            I'm a <span className="bg-clip-text text-transparent gradient-animate">full-stack engineer</span>, and I transform <span className="bg-clip-text text-transparent gradient-animate">complex concepts</span> into <span className="bg-clip-text text-transparent gradient-animate">high-performing</span> and intuitive web applications.
          </p>

             <p className="inline-flex mt-4 items-center gap-3 px-3 py-1 rounded-full text-xs uppercase tracking-widest bg-white/5 text-white/70 border border-white/10">
              Full-Stack Engineer
              <span className="inline-block h-1 w-1 rounded-full bg-purple-400" />
              Web Performance 
            </p>

          <div className="mt-8 flex items-center gap-4">
        
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
          </div>
        </div>
      </div>
      <style>{`
        @keyframes gradientShift {
          0% {
            filter: hue-rotate(0deg);
          }
          100% {
            filter: hue-rotate(360deg);
          }
        }
        .gradient-animate {
          background-image: linear-gradient(90deg, #ec4899, #06b6d4);
          animation: gradientShift 2s linear infinite;
        }
      `}</style>
    </section>
  );
}
