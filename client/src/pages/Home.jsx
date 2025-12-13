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
      {/* Content */}
      <div className="relative">
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
