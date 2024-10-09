"use client";

import React from "react";
import { Dumbbell, Play, CheckCircle, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { PublicNavbar } from "@/components/PublicNavbar";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  const router = useRouter();

  const goToCoursesPage = () => {
    router.push("/courses");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <PublicNavbar />
      <main>
        <section className="pt-[190px] pb-[150px] px-4 ">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transforme seu corpo e mente com o FitFlix
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Acesso ilimitado a centenas de aulas de fitness, nutrição e
              bem-estar. Treine em qualquer lugar, a qualquer hora.
            </p>
            <button
              className="bg-red-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300 flex items-center mx-auto"
              onClick={goToCoursesPage}
            >
              Comece agora <ArrowRight className="ml-2" />
            </button>
          </div>
        </section>

        <section id="features" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12">
              Por que escolher o FitFlix?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Play className="w-16 h-16 text-red-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">
                  Aulas sob demanda
                </h4>
                <p>
                  Acesse centenas de aulas de alta qualidade a qualquer momento,
                  em qualquer dispositivo.
                </p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-red-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">
                  Programas personalizados
                </h4>
                <p>
                  Receba planos de treino e nutrição adaptados às suas metas e
                  preferências.
                </p>
              </div>
              <div className="text-center">
                <Dumbbell className="w-16 h-16 text-red-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">
                  Variedade de modalidades
                </h4>
                <p>
                  De HIIT a yoga, de musculação a dança, temos algo para todos
                  os gostos e níveis.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12">
              Planos que cabem no seu bolso
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-lg p-8 text-center">
                <h4 className="text-xl font-semibold mb-4">Plano Básico</h4>
                <p className="text-4xl font-bold mb-4">
                  R$29,90<span className="text-sm font-normal">/mês</span>
                </p>
                <ul className="mb-6 space-y-2">
                  <li>Acesso a todas as aulas</li>
                  <li>1 programa personalizado</li>
                  <li>Suporte por email</li>
                </ul>
                <button className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition duration-300">
                  Assinar
                </button>
              </div>
              <div className="bg-red-600 rounded-lg p-8 text-center transform scale-105 shadow-xl">
                <h4 className="text-xl font-semibold mb-4">Plano Premium</h4>
                <p className="text-4xl font-bold mb-4">
                  R$49,90<span className="text-sm font-normal">/mês</span>
                </p>
                <ul className="mb-6 space-y-2">
                  <li>Tudo do Plano Básico</li>
                  <li>3 programas personalizados</li>
                  <li>Acompanhamento nutricional</li>
                  <li>Suporte prioritário</li>
                </ul>
                <button className="bg-white text-red-600 py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
                  Assinar
                </button>
              </div>
              <div className="bg-gray-800 rounded-lg p-8 text-center">
                <h4 className="text-xl font-semibold mb-4">Plano Família</h4>
                <p className="text-4xl font-bold mb-4">
                  R$79,90<span className="text-sm font-normal">/mês</span>
                </p>
                <ul className="mb-6 space-y-2">
                  <li>Até 5 perfis</li>
                  <li>Tudo do Plano Premium</li>
                  <li>Conteúdo infantil</li>
                  <li>Desconto em acessórios fitness</li>
                </ul>
                <button className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition duration-300">
                  Assinar
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12">
              O que nossos usuários dizem
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-700 rounded-lg p-6">
                  <p className="mb-4">
                    "O FitFlix mudou minha vida! Perdi 10kg em 3 meses e me
                    sinto mais disposta do que nunca."
                  </p>
                  <div className="flex items-center">
                    <img
                      src={`/placeholder.svg?height=50&width=50&text=User${i}`}
                      alt={`Usuário ${i}`}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold">Maria Silva</p>
                      <p className="text-sm text-gray-400">
                        Usuária há 6 meses
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-6">
              Pronto para transformar sua vida?
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de pessoas que já estão melhorando sua saúde e
              bem-estar com o FitFlix.
            </p>
            <button className="bg-red-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300 flex items-center mx-auto">
              Experimente grátis por 7 dias <ArrowRight className="ml-2" />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
