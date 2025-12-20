import { HiCheckCircle } from "react-icons/hi";
import { HiOutlineDocumentText } from "react-icons/hi2"; // Resume icon
import React, { useRef, useEffect, useState } from "react";

export default function About() {
  // Animation on scroll (comme Skills)
  const aboutRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    const ref = aboutRef.current;
    if (!ref) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, []);

  // Show second paragraph after first animation
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setShowSecond(true), 600); // delay in ms
      return () => clearTimeout(timer);
    }
  }, [visible]);

  return (
    <section
      id="about"
      className=""
      ref={aboutRef}
    >
      <div
        className={`w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        style={{ willChange: "opacity, transform" }}
      >
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center items-start">
          <h2 className="about-title text-4xl font-semibold tracking-widest text-indigo-500 uppercase select-none px-4 py-1 transition-all duration-500 mb-6 leading-tight">
            ✦ About Me ✦
            <div className="w-20 h-1 bg-white rounded-full mt-2" />
          </h2>
          {/* premiére paragraphe */}
          <p
            className={`text-gray-400 text-base sm:text-lg mb-4 leading-relaxed transition-all duration-700
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ willChange: "opacity, transform" }}
          >
            Hi, I'm{" "}
            <mark className="bg-[#232340] px-1 py-0.5 rounded text-white font-semibold">
              Taha Essaouir.
            </mark>
            {" "}I'm a computer and network engineer, specializing in
            <mark className="bg-[#232340] px-1 py-0.5 rounded text-white font-semibold">
              Full-Stack Engineering
            </mark>
            {" "}with a background in
            networking. I create robust and scalable{" "}
            <mark className="bg-[#232340] px-1 py-0.5 rounded text-white font-semibold">
              web applications
            </mark>
            {" "}and enjoy solving real-world problems through clean and efficient design and code.
          </p>
          {/* deuxième paragraphe */}
          <p
            className={`text-gray-400 text-base sm:text-lg mb-4 leading-relaxed transition-all duration-700
              ${showSecond ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ willChange: "opacity, transform" }}
          >
            Passionate about the{" "}
            <mark className="bg-[#232340] px-1 py-0.5 rounded text-white font-semibold">
              Java ecosystem ,Spring Boot
            </mark>
            and modern interfaces{" "}
            <mark className="bg-[#232340] px-1 py-0.5 rounded text-white font-semibold">
              React js, Angular.
            </mark>
            {" "} I am always looking to learn new technologies while delivering value to the teams I work with.
            I have put my know-how into practice through concrete projects, such as the
            development of a Medical Marketplace and HR Management Applications.
          </p>
          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-8">
            {/* My Resume Button */}
            <a
              href="/cv-taha-essaouir.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mb-2 px-6 py-2  rounded-2xl bg-white text-black font-semibold shadow border border-black hover:bg-gray-300 transition"
            >
              <HiOutlineDocumentText className="w-5 h-5" />
              Resume
            </a>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex flex-col justify-center items-center relative md:pl-12">
          <div className="rounded-3xl overflow-hidden max-w-xs w-full aspect-[4/5] flex items-center justify-center">
            {/* Open to work (moved up a bit) */}
            <div className="absolute -right-1 -bottom-6">
              <div className="flex items-center bg-black/80  rounded-2xl px-6 py-4 min-w-[180px]">
                <span className="flex items-center gap-2 text-green-400 font-semibold text-base">
                  <span className="inline-block w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  Open to work
                </span>
              </div>
            </div>
            <img
              src="/Taha4.jpg"
              alt="Taha Essaouir"
              className="object-cover w-full h-full"
              draggable={false}
            />
          </div>
        </div>
      </div>
      {/* Animation style */}
      <style>{`
        #about .transition-all {
          transition-property: opacity, transform;
        }
      `}</style>
    </section>
  );
}
