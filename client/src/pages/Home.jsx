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
  education
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
      <div className="relative w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
        <div className="space-y-10 md:space-y-0 flex flex-col">
          <Hero profile={profile} />
          <About profile={profile} />
          <Skills />
          <Experience experiences={experiences} />
          <Education education={education} />
          <div id="projets" className="scroll-mt-16 sm:scroll-mt-20">
            <Projects projects={projects} />
          </div>
          <div id="contact" className="scroll-mt-16 sm:scroll-mt-20">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}
