import { combineReducers } from 'redux';
import homeReducer from './Home/home.reducer';

const rootReducer = combineReducers({
    home: homeReducer
});

export default rootReducer;