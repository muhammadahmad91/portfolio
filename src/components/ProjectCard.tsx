import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const ProjectCard = ({ title, description, tags, image }: ProjectProps) => {
  return (
    <div className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#0EA5E9]/50 transition-all duration-500">
      {/* Image Container with Overlay */}
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-[#0EA5E9]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-[#0EA5E9] transition-colors">
            {title}
          </h3>
          <div className="flex gap-3 text-gray-400">
            <FaGithub className="hover:text-white cursor-pointer" />
            <FaExternalLinkAlt className="hover:text-white cursor-pointer text-sm" />
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard