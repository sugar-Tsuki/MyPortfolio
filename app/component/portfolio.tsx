import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="min-h-screen">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-purple-600">MyPortfolio</h1>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-purple-500">About</a>
            <a href="#projects" className="hover:text-purple-500">Projects</a>
            <a href="#contact" className="hover:text-purple-500">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#EEF2FF] via-[#F8F5FF] to-[#FDF2F8] py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-purple-700">
              Hi, I’m <span className="text-pink-500">Your Name</span>
            </h2>
            <p className="mt-6 text-gray-600 max-w-md">
              A student & beginner web developer who loves soft UI, clean design,
              and building beautiful websites.
            </p>

            <button className="mt-8 bg-purple-500 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-purple-600 hover:scale-105 transition">
              View My Work
            </button>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src="/me.jpg"
              alt="me"
              className="w-64 h-64 rounded-3xl object-cover shadow-2xl hover:scale-105 transition"
            />
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-purple-700 mb-6">About Me</h3>
          <p className="text-gray-600 leading-relaxed">
            I’m learning web development and English.  
            I enjoy designing soft, aesthetic websites with TailwindCSS,
            responsive layouts, and smooth hover effects.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-[#FDF2F8] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-purple-700 mb-12">
            My Projects
          </h3>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            
            {/* PROJECT CARD */}
            {[
              "English Training Website",
              "Portfolio Website",
              "Study Planner App"
            ].map((title, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition"
              >
                <img
                  src={`/project${i + 1}.jpg`}
                  className="rounded-xl mb-4 h-40 w-full object-cover"
                />
                <h4 className="font-semibold text-lg text-purple-600">{title}</h4>
                <p className="text-sm text-gray-600 mt-2">
                  A clean and responsive project built using TailwindCSS.
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-purple-700 mb-6">Contact Me</h3>

          <div className="flex justify-center gap-6 mt-6 text-lg">
            <a className="bg-purple-100 px-5 py-3 rounded-xl shadow hover:bg-purple-200 transition">
              📧 Email
            </a>
            <a className="bg-pink-100 px-5 py-3 rounded-xl shadow hover:bg-pink-200 transition">
              📷 Instagram
            </a>
            <a className="bg-indigo-100 px-5 py-3 rounded-xl shadow hover:bg-indigo-200 transition">
              💬 Telegram
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-purple-900 text-purple-100 py-6 text-center">
        © 2025 • Made with 💜 by Your Name
      </footer>

      </div>
    );
  }
    