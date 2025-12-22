import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="min-h-screen">





      <section className="bg-linear-to-br from-[#EEF2FF] via-[#F8F5FF] to-[#FDF2F8] py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-purple-700">
              Hi, I’m <span className="text-pink-500">Tsuki</span>
            </h2>
            <p className="mt-6 text-gray-600 max-w-md">
        
            </p>

           <Link href="https://team2-r77x.vercel.app/">
            <button className="mt-8 bg-purple-500 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-purple-600 hover:scale-105 transition">
              View My Work
            </button></Link>
          </div>

          <div className="flex justify-center">
            <img
              src="/picture/me.jpg"
              alt="me"
              className="w-64 h-64 rounded-3xl object-cover shadow-2xl hover:scale-105 transition"
            />
          </div>

        </div>
      </section>


      <section id="about" className="py-20 px-6">
  <div className="max-w-4xl mx-auto">

    <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-8 text-center">
      About Me 🎀
    </h2>

    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border-2 border-pink-200">

      <p className="text-gray-700 leading-relaxed text-base md:text-lg">
        <span className="font-semibold text-purple-600">
          Hello, my name is Nandin, but I like to be called Tsuki.
        </span>
        I’m 14 years old.
        I don’t really have much to say about myself, and my hobbies are simple —
        I like drawing, doing cosplays, and sleeping.
        <br></br>
        I’m still learning and studying web development and English.
        Thank you for your understanding
        <span className="text-pink-400">🎀</span>
      </p>

    </div>

  </div>
</section>

      </div>
  )
}