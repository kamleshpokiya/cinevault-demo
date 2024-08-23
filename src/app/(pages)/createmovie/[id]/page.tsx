import AddMovieData from "@/Components/AddMovieData";
import React from "react";

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
  // const resposnse = await getData(params.id);
  return <AddMovieData data={data} id={params.id} />;
};

export default page;
