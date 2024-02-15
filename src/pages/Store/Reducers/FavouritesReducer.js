const INITIAL_VALUE ={
    favourites:[],
}

 const FavouritesReducer= ( state =INITIAL_VALUE ,action)=>{
    switch(action.type){
        case 'ADD_TO_FAVORITE':
            return{
                ...state,
                favourites:[...state.favourites,action.payload] 
            }
        case 'REMOVE_FAVORITE':
            return{
                ...state,
                favourites:state.favourites.filter((favourite) => favourite !== action.payload)
            }
        default :
            return state;

    }
};
export default FavouritesReducer;