import Link from "next/link";
import React from "react";
import { Code, Palette, Globe } from "lucide-react";

export default function Portfolio() {
  

  const images = ["/me1.png", "/me2.jpg", "/me3.png"];

  return (
    
<div>

     <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 bg-linear-to-br from-purple-600 to-pink-500 text-white text-center px-6"
    >
      <div>
        <h2 className="text-5xl font-bold mb-4">Tsuki 🎀</h2>
        <p className="text-lg">
          Beginner Web Developer • Artist • Cosplayer
        </p>
      </div>
    </section><section id="about" className="p-30 h-150 border-b-2 border-b-gray-200 p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10 ">
          <h3 className="text-3xl font-bold mb-6">About Me 💜</h3>
          <p className="text-gray-700 leading-relaxed">
            Hello, my name is Nandin, but I like to be called Tsuki.
            I’m 14 years old. I don’t really have much to say about myself,
            and my hobbies are simple — I like drawing, doing cosplays, and sleeping.
            <br /><br />
            I’m still learning and studying web development and English.
            Thank you for your understanding 🎀
          </p>
        </div>
      </section><section id="hobbies" className="py-20 px-6 bg-white h-150 border-b-2 border-b-gray-200 p-4">
        <h3 className="text-3xl font-bold text-center mb-10">Hobbies 🎨</h3>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-pink-100 p-6 rounded-2xl shadow">
            ✏️ <strong>Drawing</strong>
            <p className="text-sm mt-2">
              I like drawing characters and ideas when I feel inspired.
            </p>
          </div>

          <div className="bg-purple-100 p-6 rounded-2xl shadow">
            🎭 <strong>Cosplay</strong>
            <p className="text-sm mt-2">
              Cosplay means dressing up as characters from anime, games,
              or movies. It helps me express creativity and imagination.
            </p>
          </div>

          <div className="bg-pink-100 p-6 rounded-2xl shadow">
            😴 <strong>Sleeping</strong>
            <p className="text-sm mt-2">
              Sleeping helps me rest and recharge.
            </p>
          </div>
        </div>
        </section>
   <section id="skills" className="py-28 px-6 bg-pink-50 h-screen">
  <div className="max-w-6xl mx-auto ">

    <h3 className="text-4xl md:text-5xl font-bold text-center text-purple-700 mb-14 h-20">
      What I’m Learning 📚
    </h3>

    <div className="grid gap-10 md:grid-cols-3">

   
      <div className="bg-white rounded-3xl shadow-xl p-10 text-center hover:scale-105 transition">
        <Code className="mx-auto mb-6 text-purple-600" size={48} />
        <h4 className="text-2xl font-semibold mb-3">Web Development</h4>
        <p className="text-gray-600 text-lg">
          Learning HTML, Tailwind CSS, and how websites are built.
        </p>
      </div>

   
      <div className="bg-white rounded-3xl shadow-xl p-10 text-center hover:scale-105 transition">
        <Palette className="mx-auto mb-6 text-pink-500" size={48} />
        <h4 className="text-2xl font-semibold mb-3">Design & Creativity</h4>
        <p className="text-gray-600 text-lg">
          Improving my design sense, colors, layouts, and creativity.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-10 text-center hover:scale-105 transition">
        <Globe className="mx-auto mb-6 text-purple-600" size={48} />
        <h4 className="text-2xl font-semibold mb-3">English Language</h4>
        <p className="text-gray-600 text-lg">
          Studying English to communicate better and understand more.
        </p>
      </div>

    </div>
  </div>
</section><section id="gallery" className="py-20 px-6 bg-white h-screen border-b-2 border-b-gray-200 p-4">
        <h3 className="text-3xl font-bold text-center mb-10">Gallery 🖼️</h3>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, i) => (
            <div
              key={i}
              className="h-40 bg-linear-to-br from-pink-300 to-purple-300 rounded-xl flex items-center justify-center"
            >
              <img src={image} alt="me" className="w-full object-cover h-36" />

            </div>
          ))}
        </div>
      </section><section
        id="contact"
        className="py-20 px-6 bg-linear-to-r from-pink-500 to-purple-600 text-white text-center h-80"
      >
        <h3 className="text-3xl font-bold mb-4">Contact Me 💌</h3>
        <p>Email: Tsuki@email.com</p>
          <p>Instagram: @tsuki.cosplay</p>
          <p>Discord: tsuki#1234</p>
      </section>

 
 

    </div>
  );
}