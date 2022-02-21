import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";
import likeReducer from "./likeReducer"
import { combineReducers } from "redux";


const allMyreducers = combineReducers({
    loginReducer,
    registerReducer,
    likeReducer
})

export default allMyreducers;