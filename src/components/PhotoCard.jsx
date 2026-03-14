import React from 'react';

const PhotoCard = ({ photo, isFavourite, onToggleFavourite }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-64 w-full bg-gray-200">
        <img
          src={photo.download_url}
          alt={`Photo by ${photo.author}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        <button
          onClick={() => onToggleFavourite(photo)}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
          aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill={isFavourite ? "red" : "none"} 
            stroke={isFavourite ? "red" : "currentColor"} 
            strokeWidth="2" 
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 truncate">
          {photo.author}
        </h3>
      </div>
    </div>
  );
};

export default PhotoCard;