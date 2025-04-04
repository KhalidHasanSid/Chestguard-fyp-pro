import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-white border border-black py-3 px-6 rounded-full w-3/4 mx-auto mt-7 flex items-center justify-between">
      {/* Logo */}
      <NavLink to="/dashboard" className="flex items-center">
        <img 
          src="https://img.freepik.com/premium-vector/winged-sword-with-caduceus-cross_837966-1224.jpg?semt=ais_hybrid" 
          alt="Logo"
          className="w-14 h-10 object-cover rounded-full"
        />
      </NavLink>

      {/* Navigation Links */}
      <ul className="flex space-x-6 justify-center text-lg"> 
      <li>
          <NavLink to="/detection" className="text-black font-semibold hover:text-slate-600 transition">
            Detection
          </NavLink>
        </li>
      <li>
          <NavLink to="/newPatient" className="text-black font-semibold hover:text-slate-600 transition">
            New Patient 
          </NavLink>
        </li>
        <li>
          <NavLink to="/sendEmail" className="text-black font-semibold hover:text-slate-600 transition">
             Find and send mail
          </NavLink>
        </li>
        <li>
          <NavLink to="/checkquestion" className="text-black font-semibold hover:text-slate-600 transition">
            Check new Question
          </NavLink>
        </li>
        <li>
          <NavLink to="/askQuestion" className="text-black font-semibold hover:text-slate-600 transition">
            Awareness Update 
          </NavLink>
        </li>
        
      </ul>
    </nav>
  );
}