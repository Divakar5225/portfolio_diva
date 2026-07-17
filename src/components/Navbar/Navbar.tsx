import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">

        <h1 className="text-2xl font-bold text-cyan-400">
          Divakar Guru
        </h1>

        <ul className="hidden md:flex items-center gap-8 text-slate-300">
          <li className="hover:text-cyan-400 cursor-pointer transition-colors">About</li>
          <li className="hover:text-cyan-400 cursor-pointer transition-colors">Skills</li>
          <li className="hover:text-cyan-400 cursor-pointer transition-colors">Projects</li>
          <li className="hover:text-cyan-400 cursor-pointer transition-colors">Research</li>
          <li className="hover:text-cyan-400 cursor-pointer transition-colors">Contact</li>
        </ul>

        <button className="hidden md:block rounded-lg bg-cyan-500 px-5 py-2 font-semibold hover:bg-cyan-600 transition">
          Resume
        </button>

        <button className="md:hidden">
          <Menu size={28} />
        </button>

      </div>
    </nav>
  );
};

export default Navbar;