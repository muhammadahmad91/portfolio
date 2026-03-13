import React from 'react'
import { FaRobot, FaRocket, FaGear } from 'react-icons/fa6'

const AboutPage = () => {
  const expertise = [
    {
      title: "AI Development",
      desc: "Architecting intelligent agents and LLM-powered applications that learn and adapt.",
      icon: <FaRobot />,
      color: "border-sky-400 text-sky-400"
    },
    {
      title: "Next.js Mastery",
      desc: "Building blazing-fast, SEO-optimized web architectures using the latest Next.js 15 features.",
      icon: <FaRocket />,
      color: "border-pink-500 text-pink-500"
    },
    {
      title: "Automation",
      desc: "Designing sophisticated workflows to eliminate repetitive tasks and maximize efficiency.",
      icon: <FaGear />,
      color: "border-sky-400 text-sky-400"
    }
  ]

  return (
    <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-screen">
      {/* Bio Section */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-black font-space mb-6">
          Who is <span className="text-sky-400">Ahmad</span> <span className="text-pink-500">Azam?</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-inter">
          I am a forward-thinking <span className="text-white font-bold">AI Developer</span>, 
          <span className="text-white font-bold"> Next.js Expert</span>, and 
          <span className="text-white font-bold"> Automation Strategist</span>. 
          I specialize in bridging the gap between complex artificial intelligence and seamless user experiences.
        </p>
      </div>

      {/* Expertise Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {expertise.map((item, index) => (
          <div key={index} className={`p-8 bg-white/5 border-2 ${item.color.split(' ')[0]} rounded-3xl hover:bg-white/10 transition-all group relative overflow-hidden`}>
            <div className={`text-4xl mb-6 ${item.color.split(' ')[1]}`}>{item.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">{item.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            {/* Subtle background glow for cards */}
            <div className={`absolute -bottom-10 -right-10 w-32 h-32 blur-[50px] opacity-20 rounded-full bg-current ${item.color.split(' ')[1]}`} />
          </div>
        ))}
      </div>

      {/* Skills Bar Section */}
      <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 md:p-16">
        <h3 className="text-2xl font-black uppercase tracking-[0.3em] text-center mb-12">Technical Arsenal</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {['Python', 'TypeScript', 'LangChain', 'OpenAI', 'n8n', 'Tailwind CSS', 'PostgreSQL', 'Docker'].map((skill) => (
            <span key={skill} className="px-6 py-2 border border-sky-400/30 text-sky-400 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-sky-400 hover:text-black transition-all cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutPage