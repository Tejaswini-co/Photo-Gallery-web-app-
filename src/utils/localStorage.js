export const getFavouritesFromStorage = () => {
    try {
      const item = window.localStorage.getItem('favouritePhotos');
      return item ? JSON.parse(item) : [];
    } catch (error) {
      console.error('Error reading localStorage:', error);
      return [];
    }
  };
  
export const saveFavouritesToStorage = (favourites) => {
    try {
        window.localStorage.setItem('favouritePhotos', JSON.stringify(favourites));
    } catch (error) {
        console.error('Error setting localStorage:', error);
    }
};