// components/MovieCard.tsx

import Image from "next/image";

interface MovieCardProps {
  imageUrl: string;
  title: string;
  year: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ imageUrl, title, year }) => {
  return (
    <div className=" md:h-[504px] bg-[#092c39] rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-[246px] md:h-[400px] ">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="md:p-2 rounded-t-2xl md:rounded-2xl w-[180px] h-[246px] md:w-[266px] md:h-[400px]"
        />
      </div>

      <div className="p-4 text-white">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm pt-4">{year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
