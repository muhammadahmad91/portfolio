import { FaGithub, FaFacebook, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/20 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <p className="font-space font-bold text-xl">Ahmad Azam<span className="text-electric-blue">.</span>AI</p>
          <p className="text-gray-500 text-sm mt-2">© 2026 All Rights Reserved.</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-2xl text-gray-400 hover:text-white transition-colors"><FaGithub /></a>
          <a href="#" className="text-2xl text-gray-400 hover:text-[#1877F2] transition-colors"><FaFacebook /></a>
          <a href="#" className="text-2xl text-gray-400 hover:text-[#ff0050] transition-colors"><FaTiktok /></a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;