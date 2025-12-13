export default function Skills({ skills, languages, certifications, interests }) {
  const grouped = skills.reduce((acc, skill) => {
    acc[skill.category] = acc[skill.category] || [];
    acc[skill.category].push(skill.name);
    return acc;
  }, {});

  return (
    <section id="compétences" className="py-10 text-slate-100">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Compétences techniques</h2>
          <div className="space-y-3">
            {Object.entries(grouped).map(([cat, items]) => (
              <div key={cat}>
                <h3 className="font-semibold text-sm">{cat}</h3>
                <p className="text-sm text-slate-300">{items.join(' | ')}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Langues</h3>
            <ul className="text-sm text-slate-300 space-y-1">
              {languages.map(lang => (
                <li key={lang.id}>{lang.name} – {lang.level}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Certifications</h3>
            <ul className="text-sm text-slate-300 space-y-1">
              {certifications.map(c => (
                <li key={c.id}>{c.name} ({c.provider})</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Centres d&apos;intérêt</h3>
            <p className="text-sm text-slate-300">
              {interests.map(i => i.name).join(' · ')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
