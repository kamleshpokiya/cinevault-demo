import React from "react";
import AddMovieData from "@/Components/AddMovieData";
import { updateMovie } from "@/actions/movies";
const data = {
  movies: [
    {
      id: "1",
      title: "Inception",
      year: "2010",
      imagePath: "/images/inception.jpg",
    },
    {
      id: "2",
      title: "Interstellar",
      year: "2014",
      imagePath: "/images/interstellar.jpg",
    },
    {
      id: "2",
      title: "Interstellar",
      year: "2014",
      imagePath: "/images/interstellar.jpg",
    },
  ],
};

const page = async ({ params }: { params: { id: string } }) => {
  // console.log("dadafssdf", params);
  // const resposnse = await updateMovie(params);
  return <AddMovieData data={data} id={data.movies[0].id} />;
};

export default page;
