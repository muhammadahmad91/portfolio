import React from 'react'
import ProjectCard from '@/components/ProjectCard'

const ProjectsPage = () => {
  const allProjects = [
    { id: 1, title: "AI Content Engine", desc: "Automated blog writing using GPT-4 and Next.js.", tags: ["Next.js", "AI", "Tailwind"], img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" },
    { id: 2, title: "Modern E-Commerce", desc: "A sleek shopping experience with dark mode.", tags: ["React", "Stripe", "Next.js"], img: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800" },
    { id: 3, title: "n8n Automation Hub", desc: "Complex workflows connecting Discord and Google Sheets.", tags: ["n8n", "Webhooks", "API"], img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
    { id: 4, title: "Crypto Portfolio", desc: "Track live coin prices with beautiful charts.", tags: ["TypeScript", "Recharts", "API"], img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800" },
    { id: 5, title: "SaaS Dashboard", desc: "Internal tool for managing user subscriptions.", tags: ["Next.js", "Prisma", "PostgreSQL"], img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" },
    { id: 6, title: "Task Master Pro", desc: "Drag and drop kanban board for developers.", tags: ["Dnd-Kit", "React", "Zustand"], img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800" },
    { id: 7, title: "Real Estate Portal", desc: "Map-based search for luxury apartments.", tags: ["Google Maps", "React", "Node"], img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" },
    { id: 8, title: "Fitness Tracker", desc: "Mobile-first app to log daily workouts.", tags: ["Tailwind", "Firebase", "Auth"], img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800" },
    { id: 9, title: "Music Streaming UI", desc: "Spotify-inspired glassmorphism design.", tags: ["Framer Motion", "UI/UX", "React"], img: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=800" },
    { id: 10, title: "AI Image Gen", desc: "Generate images from text prompts using DALL-E.", tags: ["OpenAI", "Next.js", "AWS"], img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black mb-4 font-space italic">Selected <span className="text-[#0EA5E9]">Works</span></h2>
        <p className="text-gray-500 max-w-lg mx-auto uppercase tracking-widest text-sm">Explore my latest web and automation builds</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allProjects.map((p) => (
          <ProjectCard 
            key={p.id}
            title={p.title}
            description={p.desc}
            tags={p.tags}
            image={p.img}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage