import { combineReducers } from "redux";
import { reducer as toastrReducer } from 'react-redux-toastr';
import { usuarios } from "./usuarios.reducers";
import { users } from "./users.reducers";


const rootReducer = combineReducers({
    usuarios,    
    users,    
    toastr: toastrReducer
});

export default rootReducer;