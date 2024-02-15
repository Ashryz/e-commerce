import { combineReducers } from 'redux';
import ThemesReducer from './ThemesReducer';
import FavouritesReducer from './FavouritesReducer';
import CartReducer from './CartReducer'


export default combineReducers({
    // Add your reducers here.
    combineTheme: ThemesReducer,
    combineFavourites: FavouritesReducer,
    combineCart:CartReducer
    
})