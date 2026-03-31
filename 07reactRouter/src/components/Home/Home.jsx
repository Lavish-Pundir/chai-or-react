import React from 'react'
import { Link } from 'react-router-dom'
import { FaDownload } from "react-icons/fa"

export default function Home() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white py-20">
        
        <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
          
          {/* TEXT */}
          <div className="max-w-xl text-center md:text-left mt-10 md:mt-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Download Your App
              <span className="block text-orange-400 mt-2">Fast & Secure</span>
            </h1>

            <p className="mt-4 text-gray-300">
              Build modern web apps with clean UI and fast performance.
              Start your journey today 🚀
            </p>

            {/* BUTTON */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded-lg font-medium transition"
            >
              <FaDownload />
              Download Now
            </Link>
          </div>

          {/* IMAGE */}
          <div>
            <img
              className="w-80 md:w-96"
              src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5"
              alt="hero"
            />
          </div>
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="py-16 bg-gray-100 text-center">
        <img
          className="mx-auto w-60 md:w-80"
          src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0"
          alt="app"
        />

        <h2 className="mt-6 text-2xl md:text-4xl font-semibold text-gray-800">
          Simple. Powerful. Modern.
        </h2>

        <p className="mt-2 text-gray-600">
          Experience smooth performance and clean UI with our app.
        </p>
      </section>

    </div>
  )
}