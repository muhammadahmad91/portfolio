"use client";
import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation'; // useRouter add kiya
import { HiMenuAlt3, HiX } from 'react-icons/hi';

interface NavLink {
  name: string;
  path: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter(); // Router initialize kiya

  const navLinks: NavLink[] = [
    { name: 'Home', path: '/' }, 
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full 'z-[100] bg-black/60 backdrop-blur-2xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Logo - Isay Link rehne dein kyunke ye hamesha '/' par jata hai */}
        <div 
          onClick={() => router.push('/')} 
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
            <img 
              src="/owner.jpeg" 
              alt="Ahmad Azam"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <span className="font-space text-xl font-black tracking-tighter text-white">
            Muhammad Ahmad Azam <span className="text-sky-400 hidden sm:inline">.AI Developer</span>
          </span>
        </div>

        {/* Desktop Links - Button navigation for fast response */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = link.path === '/' 
              ? pathname === '/' 
              : pathname.startsWith(link.path);

            return (
              <button 
                key={link.name} 
                onClick={() => router.push(link.path)}
                className={`text-sm font-bold transition-all uppercase tracking-[0.2em] relative group ${
                  isActive ? 'text-sky-400 drop-shadow-[0_0_8px_skyblue]' : 'text-gray-300 hover:text-sky-400'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-pink-500 transition-all duration-300 shadow-[0_0_10px_hotpink] ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-3xl text-sky-400" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-3xl fixed top-20 left-0 w-full h-screen p-6 border-t border-white/10 'z-[101]">
           {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => {
                router.push(link.path);
                setIsOpen(false);
              }}
              className="block w-full text-left py-6 text-gray-300 text-xl font-bold tracking-widest uppercase hover:text-sky-400 border-b border-white/5"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
