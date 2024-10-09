"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle, Search, Bell, User } from "lucide-react";
import { CourseCarousel } from "@/components/CourseCarousel";
import { Course, CourseService } from "@/services/CourseService";

export default function HomePage() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    CourseService.getAllCourses().then((courses) => setCourses(courses));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="container chflex items-center justify-between p-4 bg-black bg-opacity-90 mx-auto">
        <div className="flex items-center">
          <h1 className="text-red-600 text-2xl font-bold mr-10">FitFlix</h1>
          <a href="#" className="mx-4 hover:text-gray-300">
            Home
          </a>
          <a href="#" className="mx-4 hover:text-gray-300">
            Cursos
          </a>
          <a href="#" className="mx-4 hover:text-gray-300">
            Minha Lista
          </a>
        </div>
        <div className="flex items-center">
          <Search className="w-5 h-5 mr-6 cursor-pointer" />
          <Bell className="w-5 h-5 mr-6 cursor-pointer" />
          <User className="w-5 h-5 cursor-pointer" />
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4">
        {/* Featured Course Banner */}
        <div className="relative h-96 mb-12">
          <img
            src="/placeholder.svg?height=400&width=800"
            alt="Curso em Destaque"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black to-transparent w-full">
            <h2 className="text-4xl font-bold mb-2">
              Treinamento Funcional Completo
            </h2>
            <p className="mb-4">
              Transforme seu corpo e melhore sua saúde com nosso curso completo
              de treinamento funcional.
            </p>
            <Button className="bg-red-600 hover:bg-red-700">
              <PlayCircle className="mr-2 h-5 w-5" />
              Começar Agora
            </Button>
          </div>
        </div>

        {/* Course Carousels */}
        <CourseCarousel title="Populares na FitFlix" courses={courses} />
        <CourseCarousel
          title="Recém Adicionados"
          courses={courses.slice().reverse()}
        />
        <CourseCarousel
          title="Treinos Rápidos"
          courses={courses.filter((course) => parseInt(course.duration) <= 30)}
        />
      </main>
    </div>
  );
}
