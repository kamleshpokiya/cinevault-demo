// pages/index.tsx

import SubmitButton from "@/Components/Button";
import MovieCard from "@/Components/card";
import { CirclePlus } from "lucide-react";
import Link from "next/link";

const Home: React.FC = () => {
  const movies = [
    {
      imageUrl: "/path-to-image1.jpg",
      title: "Movie 1",
      year: "2021",
    },
    {
      imageUrl: "/path-to-image2.jpg",
      title: "Movie 2",
      year: "2022",
    },
    {
      imageUrl: "/path-to-image2.jpg",
      title: "Movie 2",
      year: "2022",
    },
    {
      imageUrl: "/path-to-image2.jpg",
      title: "Movie 2",
      year: "2022",
    },
    {
      imageUrl: "/path-to-image2.jpg",
      title: "Movie 2",
      year: "2022",
    },
    {
      imageUrl: "/path-to-image2.jpg",
      title: "Movie 2",
      year: "2022",
    },
    {
      imageUrl: "/path-to-image2.jpg",
      title: "Movie 2",
      year: "2022",
    },
    {
      imageUrl: "/path-to-image2.jpg",
      title: "Movie 2",
      year: "2022",
    },
    // Add more movies as needed
  ];

  return (
    <div className="p-[120px] bg-gray-900 min-h-screen">
      {movies.length < 0 ? (
        <div>
          <div className="flex justify-between text-white">
            <div className="flex items-center gap-4">
              <span>My movies</span>
              <CirclePlus />
            </div>
            <div>Logout</div>
          </div>
          <div className=" py-[120px] grid grid-cols-12 gap-6 ">
            {movies.map((movie, index) => (
              <div key={index} className="max-w-[282px] col-span-3">
                <MovieCard
                  imageUrl={movie.imageUrl}
                  title={movie.title}
                  year={movie.year}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center h-screen justify-center text-center text-white">
          <p className="text-2xl font-semibold mb-4">
            Your movie list is empty
          </p>
          <div>
            <SubmitButton
              label="Submit"
              variant="primary"
            />
            <SubmitButton
              label="Submit"
              variant="secondary"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
