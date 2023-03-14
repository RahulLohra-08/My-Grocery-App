import { ADD_ADDRESS, ADD_ORDER, DELETE_ORDER, REMOVE_ADDRESS, } from "../ActionTypes";

const orderReducers = (state=[], action) => {
    
    switch(action.type) {
        case ADD_ORDER : 
            return [...state, action.payload]

        case DELETE_ORDER: 
            const deleteArray1 = state.filter((item, index) => {
                return index !== action.payload
            })
        return deleteArray1;

        default: 
            return state;
    }

}

export default orderReducers;