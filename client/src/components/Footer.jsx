export default function Footer() {
  return (
    <footer className="py-4 border-t border-slate-800 mt-8">
      <div className="max-w-5xl mx-auto px-4 flex justify-between text-xs text-slate-400">
        <span>© {new Date().getFullYear()} Taha Essaouir</span>
        <span>Portfolio développé avec React, Tailwind, Node.js & PostgreSQL</span>
      </div>
    </footer>
  );
}
