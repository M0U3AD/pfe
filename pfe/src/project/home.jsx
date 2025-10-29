import { useState } from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import logo from "./elements/logo.png";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-[#F4F7ED] text-white min-h-16 flex items-center justify-between pr-4 shadow-lg shadow-slate-400/50">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="logo" className="w-22 h-16 object-contain ml-0" />
        <span className="font-bold text-2xl font-serrif text-black">.MA</span>
      </div>
      <ul className="hidden md:flex space-x-8 font-semibold">
        <li className="transition-colors hover:bg-[#3F7D58] hover:text-white rounded-full w-20  text-center p-3 cursor-pointer text-black">Accueil</li>
        <li className="transition-colors hover:bg-[#3F7D58] hover:text-white rounded-full w-28  text-center p-3 cursor-pointer text-black">Synthétique</li>
        <li className="transition-colors hover:bg-[#3F7D58] hover:text-white rounded-full w-28  text-center p-3 cursor-pointer text-black">Demandes</li>
        <li className="transition-colors hover:bg-[#3F7D58] hover:text-white rounded-full w-20  text-center p-3 cursor-pointer text-black">Contact</li>
      </ul>
      <RiAccountCircleFill className="text-3xl hidden md:block text-black" />

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-3xl focus:outline-none"
      >
        ☰
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-slate-500 flex flex-col items-center space-y-4 py-4 md:hidden">
          <a href="#" className="hover:text-blue-200">Accueil</a>
          <a href="#" className="hover:text-blue-200">Synthétique</a>
          <a href="#" className="hover:text-blue-200">Demandes</a>
          <a href="#" className="hover:text-blue-200">Contact</a>
          <RiAccountCircleFill className="text-3xl" />
        </div>
      )}
    </nav>
  );
}
