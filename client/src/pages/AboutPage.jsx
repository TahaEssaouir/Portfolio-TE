import About from '../components/About';
import Education from '../components/Education';

export default function AboutPage({ profile, education }) {
  return (
    <section className="space-y-16">
      <About profile={profile} />
      <Education education={education} />
    </section>
  );
}
