// pages/index.tsx

import SubmitButton from "@/Components/Button";
import MovieCard from "@/Components/card";
import { CirclePlus, LogOut } from "lucide-react";
import Link from "next/link";

const Home: React.FC = () => {
  const movies = [
    {
      imageUrl: "/demo.jpg",
      title: "Movie 1",
      year: "2021",
    },
    {
      imageUrl: "/demo.jpg",
      title: "Movie 2",
      year: "2022",
    },
    {
      imageUrl: "/demo.jpg",
      title: "Movie 2",
      year: "2022",
    },
    {
      imageUrl: "/demo.jpg",
      title: "Movie 2",
      year: "2022",
    },
    {
      imageUrl: "/demo.jpg",
      title: "Movie 2",
      year: "2022",
    },
    {
      imageUrl: "/demo.jpg",
      title: "Movie 2",
      year: "2022",
    },
    {
      imageUrl: "/demo.jpg",
      title: "Movie 2",
      year: "2022",
    },
    {
      imageUrl: "/demo.jpg",
      title: "Movie 2",
      year: "2022",
    },
    // Add more movies as needed
  ];

  return (
    <div className="p-[120px] max-w-[1440px] mx-auto  ">
      {movies.length < 0 ? (
        <div>
          <div className="flex items-center justify-between text-white ">
            <div className="flex items-center gap-4 font-extrabold   text-5xl">
              <span className="">My movies</span>
              <CirclePlus size={32}/>
            </div>
            <div className="flex items-center gap-4 ">Logout  <LogOut size={24}/></div>
          </div>
          <div className=" py-[120px]  grid grid-cols-4 gap-x-6 gap-y-6">
            {movies.map((movie, index) => (
              <div key={index} className="justify-between ">
                <MovieCard
                  imageUrl={movie.imageUrl}
                  title={movie.title}
                  year={movie.year}
                />
              </div>
            ))}
          </div>
          <div>
            <div className="text-white flex items-center justify-center">
              <span>Prev</span>
              <SubmitButton
                label="1"
                variant="primary"
                classbtn="w-[32px] px-[0px] py-[0px] rounded-sm h-[32px] mr-2 ml-2 "
              />
              <SubmitButton
                label="2"
                variant="primary"
                classbtn="w-[32px] px-[0px] py-[0px] rounded-sm h-[32px] mr-2 bg-[#0f2c39]"
              />
              <span>Next</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center h-screen justify-center text-center text-white">
          <p className="text-2xl font-semibold mb-4">
            Your movie list is empty
          </p>
          <div>
            <SubmitButton label="Submit" variant="primary" />
            <SubmitButton label="Submit" variant="secondary" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
