// pages/index.tsx

import SubmitButton from "@/Components/Button";
import MovieCard from "@/Components/card";
import { CirclePlus, LogOut } from "lucide-react";

const Home: React.FC = () => {
  const movies = [
    {
      imageUrl: "/demo.jpg",
      title: "Movie 1",
      year: "2021",
    },
    {
      imageUrl: "/demo.jpg",
      title: "Movie 1",
      year: "2022",
    },
    {
      imageUrl: "/demo.jpg",
      title: "Movie 1",
      year: "2023",
    },
    {
      imageUrl: "/demo.jpg",
      title: "Movie 1",
      year: "2024",
    },
    {
      imageUrl: "/demo.jpg",
      title: "Movie 1",
      year: "2025",
    },
    {
      imageUrl: "/demo.jpg",
      title: "Movie 1",
      year: "2026",
    },
    {
      imageUrl: "/demo.jpg",
      title: "Movie 1",
      year: "2021",
    },
    {
      imageUrl: "/demo.jpg",
      title: "Movie 1",
      year: "2021",
    },
    {
      imageUrl: "/demo.jpg",
      title: "Movie 1",
      year: "2021",
    },
    {
      imageUrl: "/demo.jpg",
      title: "Movie 1",
      year: "2021",
    },
    {
      imageUrl: "/demo.jpg",
      title: "Movie 1",
      year: "2021",
    },
    {
      imageUrl: "/demo.jpg",
      title: "Movie 1",
      year: "2021",
    },
    {
      imageUrl: "/demo.jpg",
      title: "Movie 1",
      year: "2021",
    },
    {
      imageUrl: "/demo.jpg",
      title: "Movie 1",
      year: "2021",
    },
    {
      imageUrl: "/demo.jpg",
      title: "Movie 1",
      year: "2021",
    },
    {
      imageUrl: "/demo.jpg",
      title: "Movie 1",
      year: "2021",
    },
    {
      imageUrl: "/demo.jpg",
      title: "Movie 1",
      year: "2021",
    },
    {
      imageUrl: "/demo.jpg",
      title: "Movie 1",
      year: "2021",
    },
    {
      imageUrl: "/demo.jpg",
      title: "Movie 1",
      year: "2021",
    },
    {
      imageUrl: "/demo.jpg",
      title: "Movie 1",
      year: "2021",
    },
    {
      imageUrl: "/demo.jpg",
      title: "Movie 1",
      year: "2021",
    },
    {
      imageUrl: "/demo.jpg",
      title: "Movie 1",
      year: "2021",
    },
    // Add more movies as needed
  ];

  return (
    <div className="max-w-[1440px] mx-auto p-4 md:p-8  min-h-screen">
      {movies.length > 0 ? (
        <div className="pt-8 pb-16 md:pt-16 md:pb-24 relative">
          <div className="flex justify-between items-center text-white mb-8">
            {/* "My movies" and "+" button */}
            <div className="flex items-center gap-2 md:gap-4 font-extrabold text-3xl md:text-5xl">
              <span>My movies</span>
              <CirclePlus size={32} />
            </div>

            {/* Logout and Icon */}
            <div className="flex items-center gap-2 md:gap-4 text-xl md:text-2xl">
              <span className="hidden md:inline">Logout</span>
              <LogOut size={24} />
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {movies.map((movie, index) => (
              <div
                key={index}
                className="w-full h-full sm:h-auto"
              >
                <MovieCard
                  imageUrl={movie.imageUrl}
                  title={movie.title}
                  year={movie.year}
                  // className="h-[200px] sm:h-[280px] md:h-[320px] w-full sm:w-auto" // Responsive height adjustments
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <div className="flex items-center text-white space-x-2">
              <span>Prev</span>
              <SubmitButton
                label="1"
                variant="primary"
                classbtn="w-[32px] px-3 py-0 rounded-sm h-[32px] "
              />
              <SubmitButton
                label="2"
                variant="secondary"
                classbtn="w-[32px] px-3 py-0 rounded-sm h-[32px] bg-[#0f2c39] !border-transparent"
              />
              <span>Next</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen text-center text-white">
          <p className="text-2xl md:text-4xl font-semibold mb-4">
            Your movie list is empty
          </p>
          <div>
            <SubmitButton label="Add a new movie" variant="primary" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
