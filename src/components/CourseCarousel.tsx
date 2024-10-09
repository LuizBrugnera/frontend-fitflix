import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Course } from "@/services/CourseService";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";

export const CourseCarousel: React.FC<{ title: string; courses: Course[] }> = ({
  title,
  courses,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerPage(4);
      } else if (window.innerWidth >= 768) {
        setSlidesPerPage(3);
      } else if (window.innerWidth >= 640) {
        setSlidesPerPage(2);
      } else {
        setSlidesPerPage(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const lastIndex = Math.ceil(courses.length / slidesPerPage) - 1;
      return prevIndex === lastIndex ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const lastIndex = Math.ceil(courses.length / slidesPerPage) - 1;
      return prevIndex === 0 ? lastIndex : prevIndex - 1;
    });
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / slidesPerPage)
              }%)`,
            }}
          >
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-2`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-gray-800 text-white">
                  <CardHeader className="p-0">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg font-semibold mb-2">
                      {course.title}
                    </CardTitle>
                    <div className="flex justify-between items-center">
                      <Badge variant="secondary">{course.category}</Badge>
                      <span className="text-sm text-gray-400">
                        {course.duration}
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full" variant="secondary">
                      <PlayCircle className="mr-2 h-4 w-4" />
                      Assistir Agora
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Anterior</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Próximo</span>
        </Button>
      </div>
    </div>
  );
};
