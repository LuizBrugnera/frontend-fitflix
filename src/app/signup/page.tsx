"use client";

import React, { useState } from "react";
import { Dumbbell, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]">
      <div className="max-w-md w-full space-y-8 bg-gray-900 bg-opacity-80 p-8 rounded-xl shadow-2xl backdrop-blur-sm">
        <div className="text-center">
          <Link href="/" className="flex items-center justify-center">
            <Dumbbell className="text-red-600 w-12 h-12 mr-2" />
            <h1 className="text-red-600 text-4xl font-bold">FitFlix</h1>
          </Link>
          <h2 className="mt-6 text-3xl font-extrabold text-white">
            Crie sua conta
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Nome completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-t-md relative block w-full px-3 py-3 border border-gray-700 placeholder-gray-400 text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent focus:z-10 sm:text-sm transition duration-300 ease-in-out"
                placeholder="Nome completo"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Endereço de e-mail
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-3 border border-gray-700 placeholder-gray-400 text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent focus:z-10 sm:text-sm transition duration-300 ease-in-out"
                placeholder="Endereço de e-mail"
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Senha
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                required
                className="appearance-none relative block w-full px-3 py-3 border border-gray-700 placeholder-gray-400 text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent focus:z-10 sm:text-sm transition duration-300 ease-in-out"
                placeholder="Senha"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white transition duration-300 ease-in-out"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            <div className="relative">
              <label htmlFor="confirm-password" className="sr-only">
                Confirmar senha
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                autoComplete="new-password"
                required
                className="appearance-none rounded-b-md relative block w-full px-3 py-3 border border-gray-700 placeholder-gray-400 text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent focus:z-10 sm:text-sm transition duration-300 ease-in-out"
                placeholder="Confirmar senha"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white transition duration-300 ease-in-out"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300 ease-in-out"
            >
              Criar conta
            </button>
          </div>
        </form>
        <p className="mt-2 text-center text-sm text-gray-400">
          Já tem uma conta?{" "}
          <Link
            href="/login"
            className="font-medium text-red-500 hover:text-red-400 transition duration-300 ease-in-out"
          >
            Faça login
          </Link>
        </p>
      </div>
    </div>
  );
}
