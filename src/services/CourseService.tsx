export interface Course {
  id: number;
  title: string;
  image: string;
  category: string;
  duration: string;
}

export const CourseService = {
  getAllCourses: async () => {
    return [
      {
        id: 1,
        title: "Yoga para Iniciantes",
        image: "/placeholder.svg?height=200&width=300",
        category: "Yoga",
        duration: "30 min",
      },
      {
        id: 2,
        title: "Treino HIIT Intenso",
        image: "/placeholder.svg?height=200&width=300",
        category: "HIIT",
        duration: "20 min",
      },
      {
        id: 3,
        title: "Pilates Avançado",
        image: "/placeholder.svg?height=200&width=300",
        category: "Pilates",
        duration: "45 min",
      },
      {
        id: 4,
        title: "Nutrição Esportiva",
        image: "/placeholder.svg?height=200&width=300",
        category: "Nutrição",
        duration: "60 min",
      },
      {
        id: 5,
        title: "Meditação Guiada",
        image: "/placeholder.svg?height=200&width=300",
        category: "Meditação",
        duration: "15 min",
      },
      {
        id: 6,
        title: "Treino de Força",
        image: "/placeholder.svg?height=200&width=300",
        category: "Musculação",
        duration: "50 min",
      },
    ] as Course[];
  },
};
