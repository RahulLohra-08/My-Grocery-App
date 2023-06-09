import { ADD_TO_CART, ADD_TO_WISHLIST, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST } from "../ActionTypes";

const reducers1 = (state=[], action) => {
    
    switch(action.type) {
        case ADD_TO_CART : 
            return [...state, action.payload]

        case REMOVE_FROM_CART: 
            const deleteArray1 = state.filter((item, index) => {
                return index !== action.payload
            })
        return deleteArray1;

        default: 
            return state;
    }

}

// const reducers2 = (state=[], action) => {
    
//     switch(action.type) {
//         case ADD_TO_WISHLIST : 
//             return [...state, action.payload]

//         case REMOVE_FROM_WISHLIST: 
//             const deleteArray2 = state.filter((item, index) => {
//                 return index !== action.payload
//             })
//         return deleteArray2;

//         default: 
//             return state;
//     }

// }

export default reducers1;