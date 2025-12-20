import { useMemo } from "react";
import { HiCheckCircle } from "react-icons/hi";

export default function About() {
  // Stats (à adapter selon ton profil)
  const stats = useMemo(
    () => [
      { value: "10+", label: "Projects Built" },
      { value: "8+", label: "Months Experience" },
    ],
    []
  );

  return (
    <section
      id="about"
      className=""
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center items-start">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            About Me
            <div className="w-20 h-1 bg-indigo-500 rounded-full mt-2" />
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mb-4 leading-relaxed">
           Hi, I'm {" "}
            <mark className="bg-[#232340] px-1 py-0.5 rounded text-white font-semibold">
              Taha Essaouir.
            </mark>
            {" "}I'm a computer and network engineer, specializing in
            <mark className="bg-[#232340] px-1 py-0.5 rounded text-white font-semibold">
               Full-Stack Engineering
            </mark>
            {" "}with a background in
            
             networking. I create robust and scalable{" "}
            <mark className="bg-[#232340] px-1 py-0.5 rounded text-white font-semibold">
              web applications
            </mark>
            {" "}and enjoy solving real-world problems through clean and efficient design and code.
          
          </p>
          <p className="text-gray-300 text-base sm:text-lg mb-4 leading-relaxed">
             Passionate about the{" "}
            <mark className="bg-[#232340] px-1 py-0.5 rounded text-white font-semibold">
              Java ecosystem ,Spring Boot
            </mark>
            and modern interfaces{" "}
            <mark className="bg-[#232340] px-1 py-0.5 rounded text-white font-semibold">
              React js, Angular.
            </mark>
            {" "} I am always looking to learn new technologies while delivering value to the teams I work with.
            I have put my know-how into practice through concrete projects, such as the
             development of a Medical Marketplace and HR Management Applications.
          </p>
          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center bg-black/60 border border-[#232340] rounded-2xl px-8 py-4 min-w-[120px]"
              >
                <span className="text-3xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-gray-400 text-sm mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
            <div className="flex items-center bg-black/80 border border-[#232340] rounded-2xl px-6 py-4 min-w-[180px] mt-4 md:mt-0">
              <span className="flex items-center gap-2 text-green-400 font-semibold text-base">
                <span className="inline-block w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                Available for new projects
              </span>
            </div>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-center">
          <div className="rounded-3xl overflow-hidden max-w-xs w-full aspect-[4/5] flex items-center justify-center">
            <img
              src="/Taha4.jpg"
              alt="Taha Essaouir"
              className="object-cover w-full h-full"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
