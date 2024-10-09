import { Dumbbell, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const PublicNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const goToHomePage = () => {
    router.push("/");
  };

  return (
    <header className="bg-black bg-opacity-50 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div
          className="flex items-center cursor-pointer"
          onClick={goToHomePage}
        >
          <Dumbbell className="text-red-600 w-8 h-8 mr-2" />
          <h1 className="text-red-600 text-2xl font-bold">FitFlix</h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a href="#features" className="hover:text-red-600 text-white">
                Recursos
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-red-600 text-white">
                Preços
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-red-600 text-white">
                Depoimentos
              </a>
            </li>
          </ul>
        </nav>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 absolute top-full left-0 right-0">
          <ul className="flex flex-col items-center py-4">
            <li className="py-2">
              <a
                href="#features"
                className="hover:text-red-600"
                onClick={toggleMenu}
              >
                Recursos
              </a>
            </li>
            <li className="py-2">
              <a
                href="#pricing"
                className="hover:text-red-600"
                onClick={toggleMenu}
              >
                Preços
              </a>
            </li>
            <li className="py-2">
              <a
                href="#testimonials"
                className="hover:text-red-600"
                onClick={toggleMenu}
              >
                Depoimentos
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
