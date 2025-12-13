import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiHome, HiUser, HiCollection, HiLightningBolt, HiMail } from 'react-icons/hi';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
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

  const navLinks = [
    { label: 'Home', path: '/', icon: HiHome },
    { label: 'About', path: '/about', icon: HiUser },
    { label: 'Projets', path: '/projects', icon: HiCollection },
    { label: 'Skills', path: '/skills', icon: HiLightningBolt },
    { label: 'Contact', path: '/contact', icon: HiMail }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-700 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${isScrolled ? 'pt-4' : 'pt-6'}`}>
      <div className={`transition-all duration-600 flex items-center ${
        isScrolled 
          ? 'bg-[#1a1d2e]/80 backdrop-blur-lg border border-white/10 rounded-full px-3 py-2 shadow-lg gap-4' 
          : 'bg-[#1a1d2e]/80 backdrop-blur-lg border border-white/10 rounded-full px-3 py-2 shadow-lg gap-4'
      }`}>
        {/* Logo */}
        <Link to="/" className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-white text-black font-bold text-lg hover:scale-125 hover:rotate-[360deg] hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all duration-700">
          <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-500 transition-all duration-500">TE</span>
        </Link>

        {/* Navigation Links - Center */}
        <div className="flex items-center gap-6">
          {navLinks.map(({ label, path, icon }) => {
            const IconComponent = icon;
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
      </div>
    </nav>
  );
}
