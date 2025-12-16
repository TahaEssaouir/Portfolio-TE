import Experience from '../components/Experience';
import Education from '../components/Education';

export default function AboutPage({ profile, experiences = [], education = [] }) {
  const photoSrc = profile?.photo || '/Taha4.jpg';
  return (
    <section className="max-w-5xl mx-auto py-16 px-6 text-slate-100 space-y-16">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        {/* About Me Text */}
        <div className="flex-1 text-left w-full md:pr-12">
          <h1 className="text-4xl font-bold text-indigo-500 mb-4">Who am I ?</h1>
          <p className="text-lg sm:text-lg text-gray-500 leading-relaxed">
            "A State Engineer in Computer Science and Networks, a graduate of EMSI Casablanca.
            My profile is distinguished by a dual expertise: a solid mastery of network infrastructures acquired at ISTA, 
            complemented by advanced skills in software engineering (MIAGE).
            <br /><br />
            Passionate about the Java ecosystem (Spring Boot) and modern interfaces (React, Angular), 
            I have put my know-how into practice through concrete projects,
            such as the development of a medical marketplace and HR management applications.
            However, I am not limited to these tools: possessing great intellectual flexibility, 
            I am capable of mastering any new technology to meet the technical requirements of each project."
          </p>
          <div className="mt-8">
            <span className="inline-block bg-blue-500/10 text-blue-300 px-4 py-2 rounded-full font-semibold">
              Let's build something great together!
            </span>
          </div>
        </div>
        {/* Profile Photo */}
        <div className="flex-shrink-0 flex justify-center md:justify-end w-full md:w-auto mb-8 md:mb-0">
          <div
            className="relative rounded-full overflow-hidden border-[4px] border-sky-400 shadow-2xl bg-[#0e172a] animate-profileGlow"
            style={{ width: "310px", height: "310px", minWidth: "200px", minHeight: "200px" }}
          >
            <img
              src={photoSrc}
              alt="Profile"
              className="h-full w-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
              loading="lazy"
            />
            <span className="absolute inset-0 rounded-full pointer-events-none animate-glowPulse"></span>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <Education education={education} />

      {/* Experience Section */}
      <Experience experiences={experiences} />
    </section>
  );
}
