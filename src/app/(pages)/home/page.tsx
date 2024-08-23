"use client";
import { useState, useEffect } from "react";
import { logout } from "@/actions/auth";
import { getMovies } from "@/actions/movies";
import SubmitButton from "@/Components/Button";
import MovieCard from "@/Components/card";
import LogoutButton from "@/Components/LogoutButton";
import { CirclePlus, LogOut } from "lucide-react";
import Link from "next/link";

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [allmovies, setAllMovies] = useState({
    movies: [],
    pagination: { currentPage: 1, totalCount: 0, totalPages: 1 },
  });

  // Fetch movies whenever currentPage changes
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await getMovies({ page: currentPage, limit: 10 });
      setAllMovies(response);
      setTotalPages(response.pagination.totalPages);
    };

    fetchMovies();
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  console.log("fasdf", allmovies);
  return (
    <div className="max-w-[1440px] mx-auto p-4 md:p-8 min-h-screen">
      {allmovies.movies.length > 0 ? (
        <div className="pt-8 pb-16 md:pt-16 md:pb-24 relative">
          <div className="flex justify-between items-center text-white mb-8">
            {/* "My movies" and "+" button */}
            <div className="flex items-center gap-2 md:gap-4 font-extrabold text-3xl md:text-5xl">
              <span>My movies</span>
              <Link href="/createmovie/create">
                <CirclePlus size={32} />
              </Link>
            </div>

            {/* Logout and Icon */}
            <LogoutButton />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {allmovies.movies.map((movie, index) => (
              <div key={index} className="w-full h-full sm:h-auto">
                {/* <MovieCard
                  imageUrl={movie.image}
                  title={movie.title}
                  year={movie.year}
                  id={movie.id}
                /> */}
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex items-center text-white space-x-2">
              <span onClick={handlePrevPage} className="cursor-pointer">
                Prev
              </span>

              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <SubmitButton
                    key={page}
                    label={page.toString()}
                    variant={page === currentPage ? "primary" : "secondary"}
                    classbtn={`w-[32px] px-[10px] !py-[0px] rounded-sm !h-[32px] mr-2 ${
                      page === currentPage ? "ml-2" : ""
                    }`}
                    onClick={() => setCurrentPage(page)}
                  />
                )
              )}

              <span onClick={handleNextPage} className="cursor-pointer">
                Next
              </span>
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
