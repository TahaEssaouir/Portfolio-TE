export default function About({ profile }) {
  const avatar = profile?.avatar || profile?.avatar_url || profile?.photo;
  const resumeLink = profile?.resume_url || profile?.cv_url || profile?.resume || profile?.cv;
  const initials = (profile?.full_name || 'Full Name')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(word => word[0])
    .join('') || 'ME';

  const stats = [
    { value: '2+', label: 'Years of experience', sub: 'in front-end' },
    { value: '10+', label: 'Successful', sub: 'projects delivered' },
    { value: '99%', label: 'Client', sub: 'satisfaction rate' }
  ];

  return (
    <section id="profil" className="py-16 text-slate-100">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-10">
        {/* Heading */}
        <div className="flex items-center gap-3 text-2xl font-semibold text-white">
          <span className="text-3xl">✴</span>
          <span>About me</span>
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col gap-6">
           {/* <h3 className="text-4xl font-bold leading-tight text-white">
              Hi, I'm {profile?.full_name || 'Taha Essaouir'}
            </h3>*/}

            <div className="flex items-center gap-4">
              <div className="w-28 h-28 rounded-full overflow-hidden bg-slate-800 flex items-center justify-center text-2xl font-bold text-slate-200 border border-slate-700">
                {avatar ? (
                  <img src={avatar} alt={profile?.full_name || 'Avatar'} className="w-full h-full object-cover" />
                ) : (
                  <span>{initials}</span>
                )}
              </div>

              {resumeLink ? (
                <a
                  href={resumeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-lime-400 text-slate-900 px-6 py-3 rounded-full font-semibold shadow hover:bg-lime-300 transition"
                >
                  <span className="text-lg">⬇</span> Download CV
                </a>
              ) : (
                <button
                  type="button"
                  className="inline-flex items-center gap-2 bg-slate-800 text-slate-200 px-6 py-3 rounded-full font-semibold border border-slate-700 cursor-not-allowed"
                  title="CV indisponible pour le moment"
                  disabled
                >
                  <span className="text-lg">⬇</span> CV bientôt
                </button>
              )}
            </div>
          </div>

          <div className="space-y-4 text-lg text-slate-200 leading-relaxed">
            <p>
              Engineer in Computer Science and Networks graduated from EMSI Casablanca.
               My career is marked by a double skill: a solid foundation in network infrastructure acquired at ISTA, 
               enriched by advanced expertise in software engineering.
            </p>
            <p>
              Passionate about the Java/Spring Boot ecosystem and modern interfaces (React, Angular),
              I put my knowledge into practice through business projects, notably the development of 
              a medical marketplace and HR management tools.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 text-white">
          {stats.map(stat => (
            <div key={stat.label} className="flex items-start gap-3">
              <div className="text-4xl font-extrabold">{stat.value}</div>
              <div className="leading-snug text-slate-200">
                <div className="font-semibold">{stat.label}</div>
                <div className="text-slate-300">{stat.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
