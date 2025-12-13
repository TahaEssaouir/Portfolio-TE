import Contact from '../components/Contact';

export default function ContactPage({ profile }) {
  return (
    <section>
      <Contact profile={profile} />
    </section>
  );
}
