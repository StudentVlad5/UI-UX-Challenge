import React from "react";
import { Star } from "lucide-react";

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating, maxRating = 5 }) => {
  return (
    <>
      {Array.from({ length: maxRating }, (_, i) => {
        if (i < Math.floor(rating)) {
          return <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />;
        } else if (i === Math.floor(rating) && rating % 1 !== 0) {
          return (
            <div key={i} className="relative w-5 h-5">
              <Star className="absolute w-5 h-5 text-gray-300" />
              <Star className="absolute w-5 h-5 text-yellow-400 clip-half" />
            </div>
          );
        } else {
          return <Star key={i} className="w-5 h-5 text-gray-300" />;
        }
      })}
    </>
  );
};

export default RatingStars;
