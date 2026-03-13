import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 pt-20 overflow-hidden">
      
      {/* Background Neon Lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/20 blur-[150px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 blur-[150px] rounded-full animate-pulse delay-1000" />

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side: Content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-6xl md:text-8xl font-black font-space leading-[0.9] mb-6">
            <span className="text-white">Artificial Intelligence Builder</span> <br />
            <span className="bg-liner-to-r from-sky-400 via-pink-500 to-sky-400 'bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
              AI EXPERT
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl mx-auto lg:mx-0">
            Assalam-o-Alaikum! I'm Ahmad Azam. Designing intelligent solutions with 
            <span className="text-sky-400 font-bold">  </span> precision and 
            <span className="text-pink-500 font-bold">  </span> energy.
          </p>
          
          <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
            <Link href="/projects" className="px-10 py-4 border-2 border-sky-500 text-blue-500 font-black rounded-full hover:bg-blue-500 hover:text-white shadow-[0_0_15px_hotpink] transition-all">
              VIEW PROJECTS <FaArrowRight/>
            </Link>
            <Link href="/contact" className="px-10 py-4 border-2 border-blue-500 text-blue-500 font-black rounded-full hover:bg-blue-500 hover:text-white shadow-[0_0_15px_hotpink] transition-all">
              CONTACT ME
            </Link>
          </div>
        </div>

        {/* Right Side: Big Photo with Glowing Rings */}
        <div className="relative flex justify-center items-center order-1 lg:order-2">
          {/* Animated Rings */}
          <div className="absolute w-64 h-64 'md:w-[450px] 'md:h-[450px] border-2 border-sky-400/30 rounded-full animate-[spin_10s_linear_infinite]" />
          <div className="absolute w-72 h-72 'md:w-[480px] 'md:h-[480px] border-2 border-pink-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          
          {/* Main Photo Container */}
          <div className="relative w-60 h-60 'md:w-[400px] 'md:h-[400px] rounded-full p-2 'bg-gradient-to-tr from-sky-400 to-pink-500 shadow-[0_0_50px_rgba(0,191,255,0.5)]">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-black">
              <img 
                src="/owner.jpeg" // <--- Apni photo yahan lagayein
                alt="Ahmad Azam"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Small Floating Icons */}
            <div className="absolute -top-5 -right-5 w-16 h-16 bg-black border border-sky-400 rounded-2xl flex items-center justify-center shadow-[0_0_15px_skyblue] animate-bounce">
              🤖
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}