import React from "react";
import AddMovieData from "@/Components/AddMovieData";
import { getMovieById, updateMovie } from "@/actions/movies";

const page = async ({ params }: { params: { id: string } }) => {
  // console.log("dadafssdf", params);
  const resposnse = await getMovieById(params.id);

  if (!resposnse.status) {
    return <div>{resposnse.error}</div>;
  }

  console.log("dadafssdf", resposnse.movie);
  
  return <AddMovieData data={resposnse.movie} />;
};

export default page;
