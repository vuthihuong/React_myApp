import Food from './Food.js';
import User from './User.js';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    foods: Food,
    users: User
});

export default allReducers;