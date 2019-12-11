import { combineReducers } from 'redux';
import {registration} from './register.reducer';
import {loginReducer} from './login.reducer';
import {alert} from './alert.reducer';
import 'react-toastify/dist/ReactToastify.css';
const rootReducer = combineReducers({
    registration,
    loginReducer,
    alert
})
export default rootReducer;