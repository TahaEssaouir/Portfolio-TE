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
        {/* row: photo + name */}
        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* photo */}
          <div className="flex-shrink-0">
            <div className="relative h-64 w-64 sm:h-72 sm:w-72 rounded-full overflow-hidden border-[6px] border-sky-400 shadow-2xl">
              <img
                src={photoSrc}
                alt="Profile"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* name to the right with accent */}
          <div className="flex-1">
            <div className="flex items-start gap-4">
              <span className="w-[3px] h-24 bg-blue-500" />
              <div>
                <p className="text-xs sm:text-sm font-medium uppercase tracking-widest text-gray-400 mb-2">
                  Hey, It's me
                </p>
                <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-blue-400 tracking-wide uppercase">
                  Taha
                  <br />
                  Essaouir
                </h1>
              </div>
            </div>

            {/* year and experience under name */}
            <div className="mt-6 text-right">
              <div className="text-4xl sm:text-5xl font-extrabold text-blue-400">2022 - 2025</div>
              <div className="text-xl sm:text-2xl text-gray-300 mt-1">3 years of experience</div>
            </div>
          </div>
        </div>

        {/* quote block */}
        <div className="mt-12 flex items-start gap-4">
          <span className="w-[3px] h-32 bg-blue-500" />
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed italic">
            "As a Computer and Network Engineer, I am familiar with high-performance web applications that combine robustness. My goal is simple: to transform complex needs into elegant and sustainable technical solutions."
          </p>
        </div>

        {/* bottom: role and button */}
        <div className="mt-16 flex flex-col items-start gap-6">
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
      `}</style>
    </section>
  );
}