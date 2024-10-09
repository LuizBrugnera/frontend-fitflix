"use client";
import React, { useState } from "react";
import { Dumbbell, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { PublicNavbar } from "@/components/PublicNavbar";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]">
      <PublicNavbar />
      <div className="max-w-md w-full space-y-8 bg-gray-900 bg-opacity-80 p-8 rounded-xl shadow-2xl backdrop-blur-sm">
        <div className="text-center">
          <Link href="/" className="flex items-center justify-center">
            <Dumbbell className="text-red-600 w-12 h-12 mr-2" />
            <h1 className="text-red-600 text-4xl font-bold">FitFlix</h1>
          </Link>
          <h2 className="mt-6 text-3xl font-extrabold text-white">
            Faça login na sua conta
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
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
                className="appearance-none rounded-t-md relative block w-full px-3 py-3 border border-gray-700 placeholder-gray-400 text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent focus:z-10 sm:text-sm transition duration-300 ease-in-out"
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
                autoComplete="current-password"
                required
                className="appearance-none rounded-b-md relative block w-full px-3 py-3 border border-gray-700 placeholder-gray-400 text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent focus:z-10 sm:text-sm transition duration-300 ease-in-out"
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
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-700 rounded bg-gray-800"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-300"
              >
                Lembrar-me
              </label>
            </div>

            <div className="text-sm">
              <Link
                href="/forgot-password"
                className="font-medium text-red-500 hover:text-red-400 transition duration-300 ease-in-out"
              >
                Esqueceu sua senha?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300 ease-in-out"
            >
              Entrar
            </button>
          </div>
        </form>
        <p className="mt-2 text-center text-sm text-gray-400">
          Não tem uma conta?{" "}
          <Link
            href="/signup"
            className="font-medium text-red-500 hover:text-red-400 transition duration-300 ease-in-out"
          >
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
}
