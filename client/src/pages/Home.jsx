import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

export default function Home({
  profile,
  experiences,
  projects,
  education,
  skills,
  languages,
  certifications,
  interests
}) {
  return (
    <div className="relative">
      {/* left info - animated example 3 */}
     {/* <div className="absolute -top-8 sm:-top-10 left-8 sm:left-10 z-20 flex items-center gap-2 text-sm text-cyan-500 font-semibold">
        <span className="relative inline-flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60 motion-safe:animate-ping" />
          <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 blur-sm opacity-70 motion-safe:animate-pulse" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-white shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
        </span>
        <span className="motion-safe:animate-[pulse_2s_ease-in-out_infinite]">Open to new opportunities</span>
      </div> */}
      
      {/* Content */}
      <div className="relative">
        <Hero profile={profile} />

        {/* Animated Marquee Section */}
        <div className="w-full border-y border-gray-800 bg-[#18181b] overflow-hidden">
          <div className="relative w-full h-16 flex items-center">
            <div className="animate-marquee whitespace-nowrap flex items-center w-max mx-auto text-gray-500 text-2xl font-semibold opacity-70 select-none gap-8">
              <span>FULL-STACK ENGINEER</span>
              <span className="mx-4 text-xl text-gray-600">✦</span>
              <span>JAVA / SPRING BOOT</span>
              <span className="mx-4 text-xl text-gray-600">✦</span>
              <span>ANGULAR</span>
              <span className="mx-4 text-xl text-gray-600">✦</span>
              <span>INTEGRATION</span>
              <span className="mx-4 text-xl text-gray-600">✦</span>
              {/* Repeat for smooth loop */}
              <span>FULL-STACK ENGINEER</span>
              <span className="mx-4 text-xl text-gray-600">✦</span>
              <span>JAVA / SPRING BOOT</span>
              <span className="mx-4 text-xl text-gray-600">✦</span>
              <span>ANGULAR</span>
              <span className="mx-4 text-xl text-gray-600">✦</span>
              <span>INTEGRATION</span>
            </div>
          </div>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 18s linear infinite;
            }
          `}</style>
        </div>

        <About profile={profile} />
        <Experience experiences={experiences} />
        <Projects projects={projects} />
        <Education education={education} />
        <Skills
          skills={skills}
          languages={languages}
          certifications={certifications}
          interests={interests}
        />
        <Contact />
      </div>
    </div>
  );
}
