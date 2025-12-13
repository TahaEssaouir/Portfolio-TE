export default function Contact() {
  return (
    <section id="contact" className="py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="text-slate-300 mb-4">
          Intéressé par mon profil ? N&apos;hésitez pas à me contacter pour un stage, un poste junior ou un projet freelance.
        </p>
        <a
          href="mailto:tahaessaouir19@gmail.com"
          className="inline-block px-5 py-2 rounded-lg bg-accent text-slate-900 font-semibold hover:opacity-90 transition"
        >
          M&apos;écrire un email
        </a>
      </div>
    </section>
  );
}
