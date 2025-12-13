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
      {/* Background animé uniquement pour Home */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.06]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.75" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Gradient mesh blobs */}
        <div className="absolute inset-0">
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-tr from-purple-500/35 to-fuchsia-500/25 blur-3xl animate-pulse" />
          <div className="absolute top-1/3 -right-20 w-64 h-64 rounded-full bg-gradient-to-tr from-cyan-500/30 to-sky-500/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-[-6rem] left-1/3 w-80 h-80 rounded-full bg-gradient-to-tr from-indigo-500/30 to-purple-500/20 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
        </div>

        {/* Center glow ring */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vmin] h-[70vmin] rounded-full bg-gradient-to-r from-purple-500/10 via-fuchsia-500/10 to-cyan-500/10 blur-2xl" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#0b0e1a_100%)]" />
      </div>

      {/* Content avec z-index pour être au-dessus du background */}
      <div className="relative z-10">
        <Hero profile={profile} />
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
