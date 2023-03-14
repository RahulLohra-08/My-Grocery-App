import { combineReducers } from "redux";
import reducers1 from "./reducers";
import reducers2 from "./reducer2";
import addressReducer from "./address";
import orderReducers from "./orderReducers";

const rootReducers = combineReducers({
    cartData: reducers1,
    wishlist: reducers2,
    address: addressReducer,
    order: orderReducers,
})

export default rootReducers;