import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiHome, HiUser, HiCollection, HiLightningBolt, HiMail, HiMenu, HiX, HiBriefcase } from 'react-icons/hi';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDrawerVisible, setMobileDrawerVisible] = useState(true);
  const [mobileLastScrollY, setMobileLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Masquer quand on scrolle vers le bas, afficher quand on scrolle vers le haut
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleMobileScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > mobileLastScrollY && currentScrollY > 100) {
        setMobileDrawerVisible(false);
      } else {
        setMobileDrawerVisible(true);
      }
      setMobileLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleMobileScroll);
    return () => window.removeEventListener('scroll', handleMobileScroll);
  }, [mobileOpen, mobileLastScrollY]);

  const navLinks = [
    { label: 'Home', path: '/', icon: HiHome },
    { label: 'About', path: '#about', icon: HiUser },
    { label: 'Skills', path: '#compétences', icon: HiLightningBolt },
    { label: 'Experience', path: '#expérience', icon: HiBriefcase }, // <-- new link
    { label: 'Projets', path: '#projets', icon: HiCollection },
    { label: 'Contact', path: '/contact', icon: HiMail }
  ];

  // Fermer le menu mobile lors du changement de route uniquement si ouvert
  useEffect(() => {
    if (mobileOpen) {
      setMobileOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      {/* Desktop/Navbar */}
      <nav className={`
        fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-700
        ${isVisible ? 'translate-y-0' : '-translate-y-full'} mt-4
      `}>
        <div className={`
          hidden sm:flex items-center
          transition-all duration-700
          max-w-3xl w-full mx-auto
          ${isScrolled
            ? 'justify-between bg-[#18181b]/90 backdrop-blur-lg rounded-full px-2 py-1 shadow-none gap-8'
            : 'justify-between bg-black/60 shadow-none rounded-xl px-2 py-4 gap-4'
          }
          ${!isVisible && isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}
        `}>
          {/* Logo */}
          <Link
            to="/"
            className={`
              group relative flex items-center justify-center
              transition-all duration-700
              font-bold text-lg
              bg-white text-black
              ${isScrolled
                ? 'w-10 h-10 rounded-full text-lg ml-0'
                : 'w-8 h-8 rounded-xl text-base ml-6'
              }
              hover:scale-125 hover:rotate-[360deg] hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]`}
          >
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-500 transition-all duration-500">TE</span>
          </Link>

          {/* Navigation Links - Center */}
          <div className={`flex items-center ${isScrolled ? 'gap-6' : 'gap-6 mx-auto'}`}>
            {navLinks
              .filter(({ label }) => label !== 'Contact')
              .map(({ label, path, icon }) => {
                const IconComponent = icon;
                // Special handling for Home, About, Skills, Experience, Projets anchor links
                if (label === 'Home') {
                  return (
                    <a
                      key={label}
                      href={path}
                      onClick={e => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`group relative flex items-center gap-2 text-sm font-medium transition-all duration-300 text-gray-300 hover:text-white hover:scale-105 hover:-translate-y-0.5`}
                    >
                      <IconComponent className="text-lg transition-all duration-300 ease-out transform group-hover:scale-125 group-hover:-translate-y-[2px] group-hover:text-purple-300 group-hover:animate-bounce text-gray-300" />
                      <span className="relative">
                        {label}
                        <span className="absolute left-0 bottom-0 block h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-purple-500 to-sky-500 transition-transform duration-300 group-hover:scale-x-100" />
                      </span>
                    </a>
                  );
                }
                if (label === 'Skills') {
                  return (
                    <a
                      key={label}
                      href={path}
                      onClick={e => {
                        e.preventDefault();
                        const el = document.getElementById('compétences');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`group relative flex items-center gap-2 text-sm font-medium transition-all duration-300 text-gray-300 hover:text-white hover:scale-105 hover:-translate-y-0.5`}
                    >
                      <IconComponent className="text-lg transition-all duration-300 ease-out transform group-hover:scale-125 group-hover:-translate-y-[2px] group-hover:text-purple-300 group-hover:animate-bounce text-gray-300" />
                      <span className="relative">
                        {label}
                        <span className="absolute left-0 bottom-0 block h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-purple-500 to-sky-500 transition-transform duration-300 group-hover:scale-x-100" />
                      </span>
                    </a>
                  );
                }
                if (label === 'About') {
                  return (
                    <a
                      key={label}
                      href={path}
                      onClick={e => {
                        e.preventDefault();
                        const el = document.getElementById('about');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`group relative flex items-center gap-2 text-sm font-medium transition-all duration-300 text-gray-300 hover:text-white hover:scale-105 hover:-translate-y-0.5`}
                    >
                      <IconComponent className="text-lg transition-all duration-300 ease-out transform group-hover:scale-125 group-hover:-translate-y-[2px] group-hover:text-purple-300 group-hover:animate-bounce text-gray-300" />
                      <span className="relative">
                        {label}
                        <span className="absolute left-0 bottom-0 block h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-purple-500 to-sky-500 transition-transform duration-300 group-hover:scale-x-100" />
                      </span>
                    </a>
                  );
                }
                if (label === 'Experience') {
                  return (
                    <a
                      key={label}
                      href={path}
                      onClick={e => {
                        e.preventDefault();
                        const el = document.getElementById('expérience');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`group relative flex items-center gap-2 text-sm font-medium transition-all duration-300 text-gray-300 hover:text-white hover:scale-105 hover:-translate-y-0.5`}
                    >
                      <IconComponent className="text-lg transition-all duration-300 ease-out transform group-hover:scale-125 group-hover:-translate-y-[2px] group-hover:text-purple-300 group-hover:animate-bounce text-gray-300" />
                      <span className="relative">
                        {label}
                        <span className="absolute left-0 bottom-0 block h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-purple-500 to-sky-500 transition-transform duration-300 group-hover:scale-x-100" />
                      </span>
                    </a>
                  );
                }
                if (label === 'Projets') {
                  return (
                    <a
                      key={label}
                      href={path}
                      onClick={e => {
                        e.preventDefault();
                        const el = document.getElementById('projets');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`group relative flex items-center gap-2 text-sm font-medium transition-all duration-300 text-gray-300 hover:text-white hover:scale-105 hover:-translate-y-0.5`}
                    >
                      <IconComponent className="text-lg transition-all duration-300 ease-out transform group-hover:scale-125 group-hover:-translate-y-[2px] group-hover:text-purple-300 group-hover:animate-bounce text-gray-300" />
                      <span className="relative">
                        {label}
                        <span className="absolute left-0 bottom-0 block h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-purple-500 to-sky-500 transition-transform duration-300 group-hover:scale-x-100" />
                      </span>
                    </a>
                  );
                }
                const isActive = location.pathname === path;
                return (
                  <Link
                    key={label}
                    to={path}
                    className={`group relative flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
                      isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                    } hover:scale-105 hover:-translate-y-0.5 ${isActive ? 'animate-pulse' : ''}`}
                  >
                    <IconComponent
                      className={`text-lg transition-all duration-300 ease-out transform
                        group-hover:scale-125 group-hover:-translate-y-[2px] group-hover:text-purple-300 group-hover:animate-bounce
                        ${isActive ? 'text-white drop-shadow-[0_0_6px_rgba(168,85,247,0.7)]' : 'text-gray-300'}`}
                    />
                    <span className="relative">
                      {label}
                      <span
                        className={`absolute left-0 bottom-0 block h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-purple-500 to-sky-500 transition-transform duration-300 group-hover:scale-x-100 ${
                          isActive ? 'scale-x-100' : ''
                        }`}
                      />
                    </span>
                  </Link>
                );
              })}
          </div>

          {/* Contact Button à droite seulement en haut */}
          {!isScrolled && (
            <a
              href="#contact"
              onClick={e => {
                e.preventDefault();
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="ml-2 mr-6 px-2 py-1 rounded-full bg-indigo-600 text-xs font-medium flex items-center gap-1.5 shadow-md hover:bg-indigo-500 transition-all duration-300"
            >
              <HiMail className="text-lg" />
              Contact Me
            </a>
          )}

          {/* Contact dans la liste quand scrollé */}
          {isScrolled && (
            <a
              href="#contact"
              onClick={e => {
                e.preventDefault();
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="ml-2 mr-6 px-2 py-1 rounded-full bg-indigo-600 text-xs font-medium flex items-center gap-1.5 shadow-md hover:bg-indigo-500 transition-all duration-300"
            >
              <HiMail className="text-lg" />
              Contact Me
            </a>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="flex sm:hidden w-full justify-between items-center px-4 py-3 bg-[#18181b]/95 rounded-2xl shadow-lg mt-4">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center justify-center font-bold text-lg bg-white text-black w-10 h-10 rounded-full hover:scale-110 transition"
          >
            <span>TE</span>
          </Link>
          {/* Hamburger */}
          <button
            className="text-white text-3xl focus:outline-none transition-transform duration-300 hover:scale-110 hover:text-purple-400 active:rotate-180 ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Open navigation"
          >
            {mobileOpen ? (
              <HiX className="transition-transform duration-300 transform hover:rotate-90" />
            ) : (
              <HiMenu className="transition-transform duration-300 transform hover:rotate-90" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`
          fixed inset-0 z-50 flex items-start justify-center pt-6
          ${mobileOpen && mobileDrawerVisible ? 'block' : 'hidden'}
        `}
        style={{ background: mobileOpen && mobileDrawerVisible ? 'rgba(0,0,0,0.7)' : 'transparent' }}
        onClick={() => setMobileOpen(false)}
      >
        <nav
          className={`
            bg-[#18181b]/95 border border-[#28283a] backdrop-blur-lg shadow-2xl rounded-2xl w-[85vw] sm:w-[80vw] max-w-lg mx-auto
            flex flex-col pt-6 px-4 pb-2 relative
            transition-transform duration-500
            ${mobileOpen && mobileDrawerVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
          `}
          style={{
            minHeight: '240px',
            maxHeight: '60vh',
            transition: 'all 0.3s'
          }}
          onClick={e => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-3xl text-gray-400 hover:text-red-400 transition-transform duration-300 hover:scale-110 hover:text-purple-400 active:rotate-180"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation"
          >
            <HiX className="transition-transform duration-300 transform hover:rotate-90" />
          </button>
          {/* Navigation Links Card */}
          <div className=" rounded-2xl px-2 py-0 flex flex-col gap-0 mt-12">
            {navLinks.map(({ label, path, icon }) => {
              const IconComponent = icon;
              // Special handling for Home, About, Skills, Experience, Projets anchor links in mobile drawer
              if (label === 'Home') {
                return (
                  <a
                    key={label}
                    href={path}
                    onClick={e => {
                      e.preventDefault();
                      setMobileOpen(false);
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }, 200);
                    }}
                    className={`
                      group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200
                      text-gray-300 hover:text-white hover:bg-[#232340]
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent
                        className={`
                          text-xl transition-all duration-300
                          group-hover:scale-125 group-hover:-translate-y-[2px] group-hover:text-purple-300
                          text-gray-400
                        `}
                      />
                      <span className="text-base font-medium">{label}</span>
                    </div>
                  </a>
                );
              }
              if (label === 'Skills') {
                return (
                  <a
                    key={label}
                    href={path}
                    onClick={e => {
                      e.preventDefault();
                      setMobileOpen(false);
                      setTimeout(() => {
                        const el = document.getElementById('compétences');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 200);
                    }}
                    className={`
                      group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200
                      text-gray-300 hover:text-white hover:bg-[#232340]
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent
                        className={`
                          text-xl transition-all duration-300
                          group-hover:scale-125 group-hover:-translate-y-[2px] group-hover:text-purple-300
                          text-gray-400
                        `}
                      />
                      <span className="text-base font-medium">{label}</span>
                    </div>
                  </a>
                );
              }
              if (label === 'About') {
                return (
                  <a
                    key={label}
                    href={path}
                    onClick={e => {
                      e.preventDefault();
                      setMobileOpen(false);
                      setTimeout(() => {
                        const el = document.getElementById('about');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 200);
                    }}
                    className={`
                      group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200
                      text-gray-300 hover:text-white hover:bg-[#232340]
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent
                        className={`
                          text-xl transition-all duration-300
                          group-hover:scale-125 group-hover:-translate-y-[2px] group-hover:text-purple-300
                          text-gray-400
                        `}
                      />
                      <span className="text-base font-medium">{label}</span>
                    </div>
                  </a>
                );
              }
              if (label === 'Experience') {
                return (
                  <a
                    key={label}
                    href={path}
                    onClick={e => {
                      e.preventDefault();
                      setMobileOpen(false);
                      setTimeout(() => {
                        const el = document.getElementById('expérience');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 200);
                    }}
                    className={`
                      group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200
                      text-gray-300 hover:text-white hover:bg-[#232340]
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent
                        className={`
                          text-xl transition-all duration-300
                          group-hover:scale-125 group-hover:-translate-y-[2px] group-hover:text-purple-300
                          text-gray-400
                        `}
                      />
                      <span className="text-base font-medium">{label}</span>
                    </div>
                  </a>
                );
              }
              if (label === 'Projets') {
                return (
                  <a
                    key={label}
                    href={path}
                    onClick={e => {
                      e.preventDefault();
                      setMobileOpen(false);
                      setTimeout(() => {
                        const el = document.getElementById('projets');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 200);
                    }}
                    className={`
                      group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200
                      text-gray-300 hover:text-white hover:bg-[#232340]
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent
                        className={`
                          text-xl transition-all duration-300
                          group-hover:scale-125 group-hover:-translate-y-[2px] group-hover:text-purple-300
                          text-gray-400
                        `}
                      />
                      <span className="text-base font-medium">{label}</span>
                    </div>
                  </a>
                );
              }
              if (label === 'Contact') {
                return (
                  <a
                    key={label}
                    href="#contact"
                    onClick={e => {
                      e.preventDefault();
                      setMobileOpen(false);
                      setTimeout(() => {
                        const el = document.getElementById('contact');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 200);
                    }}
                    className={`
                      group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200
                      text-gray-300 hover:text-white hover:bg-[#232340]
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent
                        className={`
                          text-xl transition-all duration-300
                          group-hover:scale-125 group-hover:-translate-y-[2px] group-hover:text-purple-300
                          text-gray-400
                        `}
                      />
                      <span className="text-base font-medium">{label}</span>
                    </div>
                  </a>
                );
              }
              const isActive = location.pathname === path;
              return (
                <Link
                  key={label}
                  to={path}
                  className={`
                    group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200
                    ${isActive
                      ? 'bg-[#2d2d44] text-white'
                      : 'text-gray-300 hover:text-white hover:bg-[#232340]'
                    }
                  `}
                  onClick={() => setMobileOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    <IconComponent
                      className={`
                        text-xl transition-all duration-300
                        group-hover:scale-125 group-hover:-translate-y-[2px] group-hover:text-purple-300
                        ${isActive ? 'text-purple-400' : 'text-gray-400'}
                      `}
                    />
                    <span className="text-base font-medium">{label}</span>
                  </div>
                  {/* Active dot */}
                  {isActive && (
                    <span className=""></span>
                  )}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </>
  );
}
