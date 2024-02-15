const INITIAL_VALUE ={
    products:[]
}

 const productReducer= ( state =INITIAL_VALUE ,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return{
                ...state,
                products:[...state.products,action.payload] 
            }
        case 'REMOVE_CART':
            return{
                ...state,
                products:state.products.filter((product) => product !== action.payload)
            }
        default :
            return state;

    }
};
export default productReducer;