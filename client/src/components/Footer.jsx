export default function Footer() {
  return (
    <footer className="w-full border-t border-[#232323] bg-[#111113] py-6 mt-16">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center px-4">
        <span className="text-sm text-gray-400 mb-1">
          © {new Date().getFullYear()} Taha Essaouir. All rights reserved.
        </span>
        <span className="text-xs text-gray-600">
          Made with <span className="text-pink-500">♥</span> using React & TailwindCSS
        </span>
      </div>
    </footer>
  );
}
