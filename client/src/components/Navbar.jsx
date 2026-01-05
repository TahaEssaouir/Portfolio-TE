import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiHome, HiUser, HiCollection, HiLightningBolt, HiMail, HiMenu, HiX, HiBriefcase, HiGlobeAlt } from 'react-icons/hi';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const navRef = useRef(null);
  const { lang, toggleLang } = useLanguage();
  const [active, setActive] = useState('/');
  const [mobileOpen, setMobileOpen] = useState(false); // Ajout état mobile

  const navLinks = [
    { label: { en: 'Home', fr: 'Accueil' }, path: '/', icon: HiHome },
    { label: { en: 'About', fr: 'À propos' }, path: '#about', icon: HiUser },
    { label: { en: 'Skills', fr: 'Compétences' }, path: '#compétences', icon: HiLightningBolt },
    { label: { en: 'Experience', fr: 'Expérience' }, path: '#expérience', icon: HiBriefcase },
    { label: { en: 'Projects', fr: 'Projets' }, path: '#projets', icon: HiCollection },
    { label: { en: 'Contact', fr: 'Contact' }, path: '#contact', icon: HiMail }
  ];

  // Smooth scroll for hash links
  const handleNavClick = (e, path) => {
    setActive(path);
    if (path.startsWith('#')) {
      e.preventDefault();
      const id = path.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileOpen(false); // Fermer le menu mobile après clic
    } else {
      setMobileOpen(false); // Fermer le menu mobile après clic
    }
  };

  // Auto-highlight active section on scroll
  useEffect(() => {
    const hashLinks = navLinks.filter(l => l.path.startsWith('#'));
    const sectionIds = hashLinks.map(l => l.path.replace('#', ''));
    const handleScroll = () => {
      let found = false;
      for (let id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            setActive('#' + id);
            found = true;
            break;
          }
        }
      }
      if (!found && window.scrollY < 100) setActive('/');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-90 flex items-center justify-between px-6 md:px-24 py-4 shadow transition-all duration-700 opacity-100 translate-y-0 animate-navbarFadeIn border-b border-[#222]"
        style={{ willChange: "opacity, transform" }}
      >
        {/* Logo + Name */}
        <div className="flex items-center">
          <a 
            href="/" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActive('/');
            }}
            className="cursor-pointer"
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10 mr-3 rounded-full border border-[#232323] bg-black hover:scale-110 transition-transform duration-200"
              style={{ objectFit: "cover" }}
            />
          </a>
        </div>
        {/* Desktop links */}
        <div className="hidden md:flex space-x-3 items-center ml-8">
          {navLinks.map(link => (
            <a
              key={link.path}
              href={link.path}
              className={`group flex items-center text-xs relative transition
                ${active === link.path ? "scale-105 text-indigo-400" : ""}
                ${
                  link.label[lang] === "Contact"
                    ? "gap-2 px-6 py-2 rounded-2xl bg-white text-black font-semibold shadow border border-black hover:bg-gray-300 mb-0"
                    : "text-white hover:bg-[#232323] hover:text-white px-2 py-1 rounded-xl"
                }
              `}
              onClick={e => handleNavClick(e, link.path)}
              style={{ transition: "color 0.2s, transform 0.2s" }}
            >
              <link.icon className={`w-5 h-5 mr-2 transition-transform duration-200 group-hover:scale-110 ${active === link.path ? "text-indigo-400" : ""} ${link.label[lang] === "Contact" ? "text-black" : ""}`} />
              <span className="relative">
                {link.label[lang]}
                {link.label[lang] !== "Contact" && (
                  <span
                    className={`absolute left-0 -bottom-1 w-full h-0.5 rounded transition-transform duration-300 origin-left
                      ${active === link.path ? "scale-x-100" : "scale-x-0"} group-hover:scale-x-100 marching-underline`}
                  />
                )}
              </span>
            </a>
          ))}
          {/* Language Toggle Button next to Contact */}
          <button
            onClick={toggleLang}
            className="px-3 py-1 rounded-xl bg-white text-black hover:bg-gray-200 transition font-semibold hover:scale-110 active:scale-95 shadow-md hover:shadow-lg lang-btn-animated flex items-center gap-1.5"
            aria-label="Toggle language"
          >
            <HiGlobeAlt className="w-4 h-4" />
            {lang === 'en' ? 'FR' : 'EN'}
          </button>
        </div>
        {/* Hamburger for mobile */}
        <button
          className={`md:hidden flex items-center text-white text-3xl focus:outline-none transition-colors duration-200 ${
            mobileOpen ? "hover:text-red-500" : "hover:text-indigo-400"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile menu: panneau qui slide sous la navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-40 md:hidden transition-all duration-300 ${mobileOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"}`}
        style={{ marginTop: "64px" }}
      >
        <div className="bg-black border-b border-[#222] shadow-xl pt-2 pb-4 px-2 rounded-b-2xl">
          {/* Header mobile: logo + close + language toggle */}
          <div className="flex items-center justify-end px-2 py-2">
           {/* <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-8 h-8 mr-2 rounded-full border border-[#232323] bg-black"
                style={{ objectFit: "cover" }}
              />
              <span className="text-lg font-bold text-white">Menu</span>
            </div>*/}
            <button
              onClick={toggleLang}
              className="px-3 py-1 rounded-xl bg-white text-black hover:bg-gray-200 transition font-semibold hover:scale-110 active:scale-95 shadow-md hover:shadow-lg lang-btn-animated flex items-center gap-1.5"
              aria-label="Toggle language"
            >
              <HiGlobeAlt className="w-4 h-4" />
              {lang === 'en' ? 'FR' : 'EN'}
            </button>
          </div>
          {/* Liens */}
          <div className="flex flex-col gap-2 mt-2">
            {navLinks.map(link => (
              <a
                key={link.path}
                href={link.path}
                className={`flex items-center gap-3 text-base font-medium px-3 py-2 rounded-xl transition
                  ${
                    active === link.path
                      ? "bg-[#232323] text-white font-bold shadow"
                      : "bg-black text-gray-300 hover:bg-[#232323] hover:text-white"
                  }
                `}
                onClick={e => handleNavClick(e, link.path)}
                style={{ minHeight: "40px" }}
              >
                <link.icon className="w-5 h-5" />
                {link.label[lang]}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Animation style */}
      <style>{`
        .marching-underline {
          background: repeating-linear-gradient(
            90deg,
            #6366f1 0px,
            #6366f1 6px,
            transparent 6px,
            transparent 12px
          );
          background-size: 24px 2px;
          animation: marching 1s linear infinite;
        }
        @keyframes marching {
          from { background-position-x: 0; }
          to { background-position-x: 24px; }
        }
        @keyframes navbarFadeIn {
          from {
            opacity: 0;
            transform: translateY(-3rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-navbarFadeIn {
          animation: navbarFadeIn 0.7s ease-out forwards;
        }
        .lang-btn-animated {
          position: relative;
          border: 2px solid transparent;
          background-image: 
            linear-gradient(white, white),
            repeating-linear-gradient(
              90deg,
              #6366f1 0px,
              #6366f1 8px,
              #a78bfa 8px,
              #a78bfa 16px
            );
          background-origin: border-box;
          background-clip: padding-box, border-box;
          background-size: 100% 100%, 32px 100%;
          animation: marchingBorder 0.8s linear infinite;
        }
        @keyframes marchingBorder {
          0% {
            background-position: 0 0, 0 0;
          }
          100% {
            background-position: 0 0, 32px 0;
          }
        }
      `}</style>
    </>
  );
}
