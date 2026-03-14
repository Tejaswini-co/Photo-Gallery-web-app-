import { saveFavouritesToStorage } from '../utils/localStorage';

export const favouritesReducer = (state, action) => {
  let newState;
  
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const isAlreadyFavourite = state.some(photo => photo.id === action.payload.id);
      
      if (isAlreadyFavourite) {
        newState = state.filter(photo => photo.id !== action.payload.id);
      } else {
        newState = [...state, action.payload];
      }
      break;
      
    default:
      return state;
  }

  saveFavouritesToStorage(newState);
  return newState;
};