import { useState } from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import logo from "./elements/logo.png";
import App from './App'

export default function Home({onSign}) {
  const [isOpen, setIsOpen] = useState(false);
  const [affich,setaff] = useState(false)
   if (affich) return <App />;
  return (
    <nav className="bg-[#F4F7ED] text-white min-h-16 flex items-center justify-between pr-4 shadow-lg shadow-slate-400/50 " id="loc">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="logo" className="w-22 h-16 object-contain ml-0" />
        <span className="font-bold text-2xl  text-black cursor-pointer">.MA</span>
      </div>
      <ul className="hidden md:flex space-x-8 font-semibold">
        <li className="transition-colors hover:bg-[#3f7d58] hover:text-white rounded-full w-20  text-center p-3 cursor-pointer text-black"><a href="#">Accueil</a></li>
        <li className="transition-colors hover:bg-[#3F7D58] hover:text-white rounded-full w-28  text-center p-3 cursor-pointer text-black"><a href="#">Synthétique</a></li>
        <li className="transition-colors hover:bg-[#3F7D58] hover:text-white rounded-full w-28  text-center p-3 cursor-pointer text-black"><a href="#">Demandes</a></li>
        <li className="transition-colors hover:bg-[#3F7D58] hover:text-white rounded-full w-20  text-center p-3 cursor-pointer text-black"><a href="#">Contact</a></li>
      </ul>
      <button className=" bg-[#3F7D58] p-2 rounded-full font-medium ml-[40%] hover:bg-[#005020] hover:text-white active:scale-[0.98]" onClick={onSign}>Sign In</button>
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
