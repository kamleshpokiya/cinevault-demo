import { getMovies } from "@/actions/movies";
import SubmitButton from "@/Components/Button";
import MovieCard from "@/Components/card";
import LogoutButton from "@/Components/LogoutButton";
import {
  NextPageButton,
  PaginationButtons,
  PrevPageButton,
} from "@/Components/PaginationButtons";
import { CirclePlus, LogOut } from "lucide-react";
import Link from "next/link";

const Home = async ({ searchParams }: { searchParams: { page?: string } }) => {
  // Fetch movies whenever currentPage changes

  const allmovies = await getMovies({
    page: Number(searchParams?.page || 1),
    limit: 10,
  });
  console.log("allmovies", allmovies);

  return (
    <div className="max-w-[1440px] mx-auto p-4 md:p-8 min-h-screen">
      {allmovies.status && allmovies.movies.length > 0 ? (
        <div className="pt-8 pb-16 md:pt-16 md:pb-24 relative">
          <div className="flex justify-between items-center text-white mb-8">
            {/* "My movies" and "+" button */}
            <div className="flex items-center gap-2 md:gap-4 font-extrabold text-3xl md:text-5xl">
              <span>My movies</span>
              <Link href="/add">
                <CirclePlus size={32} />
              </Link>
            </div>

            {/* Logout and Icon */}
            <LogoutButton />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {allmovies.movies.map((movie, index) => (
              <div key={index} className="w-full h-full sm:h-auto">
                <MovieCard
                  imageUrl={movie.image}
                  title={movie.title}
                  year={movie.year}
                  id={movie.id}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex items-center text-white space-x-2">
              <PrevPageButton pagination={allmovies.pagination} />

              {Array.from({ length: allmovies.pagination.totalPages }).map(
                (_, page) => (
                  <PaginationButtons
                    currentPage={allmovies.pagination.currentPage}
                    label={(page + 1).toString()}
                  />
                )
              )}

              <NextPageButton pagination={allmovies.pagination} />
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
