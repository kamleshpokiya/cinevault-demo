// components/MovieCard.tsx

import Image from 'next/image';

interface MovieCardProps {
  imageUrl: string;
  title: string;
  year: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ imageUrl, title, year }) => {
  return (
    <div className="max-w-xs bg-[rgba(9,44,57,1)] rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-64">
        <Image 
          src={imageUrl} 
          alt={title} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-t-lg" 
        />
      </div>
      <div className="p-4 text-white">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm">{year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
