export default function AboutPage({ profile }) {
  const photoSrc = profile?.photo || '/Taha4.jpg';
  return (
    <section className="max-w-3xl mx-auto py-16 px-6 text-slate-100 space-y-8">
      <div className="flex justify-center mb-8">
        <div className="relative h-40 w-40 sm:h-48 sm:w-48 rounded-full overflow-hidden border-[4px] border-sky-400 shadow-2xl bg-[#0e172a]">
          <img
            src={photoSrc}
            alt="Profile"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <h1 className="text-4xl font-bold text-sky-400 mb-4">Who am I?</h1>
      <p className="text-lg leading-relaxed">
        My name is Taha Essaouir, a passionate engineer in computer science and networks based in Casablanca.
        My journey began with a fascination for how technology connects people and ideas, which led me to pursue
        both network infrastructure and software engineering.
      </p>
      <p className="text-lg leading-relaxed">
        Over the years, I have developed a strong expertise in building robust web applications,
        always striving to blend technical excellence with user-centric design.
        I thrive on solving complex problems and transforming them into simple, elegant solutions.
      </p>
      <p className="text-lg leading-relaxed">
        Outside of coding, I enjoy exploring new technologies, collaborating with creative minds,
        and contributing to projects that make a real impact. My goal is to keep learning, growing,
        and sharing my knowledge with the community.
      </p>
      <div className="mt-8">
        <span className="inline-block bg-blue-500/10 text-blue-300 px-4 py-2 rounded-full font-semibold">
          Let's build something great together!
        </span>
      </div>
    </section>
  );
}
