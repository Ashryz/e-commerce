export const addFavourite = (favourite) =>{
    return {
        type:'ADD_TO_FAVORITE',
        payload:favourite
    }
};
export const removeFavourite = (favourite) =>{
    return {
        type:'REMOVE_FAVORITE',
        payload:favourite
    }
};
