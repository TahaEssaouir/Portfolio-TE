import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 bg-black">
      <div className="mb-12 flex flex-col items-center justify-center">
        {/* title */}
        <h2 className="about-title text-4xl font-semibold tracking-widest text-indigo-500 uppercase select-none px-4 py-1 transition-all duration-500">
         ✦ Get In Touch ✦
        </h2>
        {/* description */}
        <p className="text-center max-w-2xl text-lg text-gray-400 mb-0 mt-4">
          Do you have a technical challenge to overcome or an innovative project in mind?
          I am always ready to collaborate on new ideas.
        </p>
      </div>
      {/* Contact Cards Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-16">
        {/* Email Card */}
        <a
          href="mailto:tessaouir@gmail.com"
          className="group relative bg-[#111113] rounded-2xl p-8 w-full max-w-xs flex flex-col items-start shadow-lg border border-[#232323] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-pink-500 cursor-pointer focus:outline-none"
        >
          <div className="mb-6">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl border-2 border-transparent bg-black text-white text-3xl transition-all duration-300 group-hover:border-none group-hover:bg-black group-hover:text-white email-gradient-border">
              <HiOutlineMail />
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">Email</h3>
          <p className="text-gray-300 mb-2">Send me an email</p>
          {/* Tag */}
          <span
            className="text-[16px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 transition-all duration-200 hover:underline select-all"
            style={{ userSelect: "all" }}
          >
            tessaouir@gmail.com
          </span>
        </a>
        {/* LinkedIn Card */}
        <a
          href="https://www.linkedin.com/in/taha-essaouir-26228a168/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-[#111113] rounded-2xl p-8 w-full max-w-xs flex flex-col items-start shadow-lg border border-[#232323] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-500 cursor-pointer focus:outline-none"
        >
          <div className="mb-6">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl border-2 border-blue-500 bg-black text-white text-3xl transition-all duration-300">
              <FaLinkedinIn />
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">LinkedIn</h3>
          <p className="text-gray-300 mb-2">Let's connect</p>
          {/* Tag */}
          <span className="text-blue-400 font-medium hover:underline select-all" style={{ userSelect: "all" }}>
            Taha Essaouir
          </span>
        </a>
        {/* GitHub Card */}
        <a
          href="https://github.com/TahaEssaouir?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-[#111113] rounded-2xl p-8 w-full max-w-xs flex flex-col items-start shadow-lg border border-[#232323] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-purple-500 cursor-pointer focus:outline-none"
        >
          <div className="mb-6">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl border-2 border-purple-500 bg-black text-white text-3xl transition-all duration-300">
              <FaGithub />
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">GitHub</h3>
          <p className="text-gray-300 mb-2">Check my code</p>
          {/* Tag */}
          <span className="text-purple-400 font-medium hover:underline select-all" style={{ userSelect: "all" }}>
            TahaEssaouir
          </span>
        </a>
      </div>
      <style>{`
        .email-gradient-border {
          border: 2px solid transparent;
          background: linear-gradient(#111113, #111113) padding-box, linear-gradient(135deg, #a21caf 0%, #ec4899 100%) border-box;
        }
        .group:hover .email-gradient-border {
          border: 2px solid transparent;
          background: linear-gradient(#111113, #111113) padding-box, linear-gradient(135deg, #a21caf 0%, #ec4899 100%) border-box;
          box-shadow: 0 0 0 2px #a21caf, 0 0 16px 2px #ec489933;
        }
      `}</style>
    </section>
  );
}
