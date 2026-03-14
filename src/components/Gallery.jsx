import React, { useState, useReducer, useMemo, useCallback } from 'react';
import useFetchPhotos from '../hooks/useFetchPhotos';
import { favouritesReducer } from '../reducers/favouritesReducer';
import { getFavouritesFromStorage } from '../utils/localStorage';
import PhotoCard from './PhotoCard';
import SearchBar from './SearchBar';
import Loader from './Loader';

const Gallery = () => {
  const { photos, loading, error } = useFetchPhotos(30);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [favourites, dispatch] = useReducer(favouritesReducer, [], getFavouritesFromStorage);

  const handleSearch = useCallback((e) => {
    setSearchQuery(e.target.value.toLowerCase());
  }, []);

  const filteredPhotos = useMemo(() => {
    if (!searchQuery) return photos;
    
    return photos.filter((photo) => 
      photo.author.toLowerCase().includes(searchQuery)
    );
  }, [photos, searchQuery]);

  const handleToggleFavourite = (photo) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: photo });
  };

  if (loading) return <Loader />;
  if (error) return <div className="text-center text-red-500 text-xl font-bold py-10">Error: {error}</div>;

  return (
    <div className="w-full">
      <SearchBar onSearch={handleSearch} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredPhotos.length > 0 ? (
          filteredPhotos.map((photo) => (
            <PhotoCard 
              key={photo.id} 
              photo={photo} 
              isFavourite={favourites.some((fav) => fav.id === photo.id)}
              onToggleFavourite={handleToggleFavourite} 
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg py-12">
            No photos found for "{searchQuery}"
          </p>
        )}
      </div>
    </div>
  );
};

export default Gallery;