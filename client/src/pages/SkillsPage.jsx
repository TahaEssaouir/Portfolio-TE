import Skills from '../components/Skills';

export default function SkillsPage({ skills, languages, certifications, interests }) {
  return (
    <section>
      <Skills
        skills={skills}
        languages={languages}
        certifications={certifications}
        interests={interests}
      />
    </section>
  );
}
