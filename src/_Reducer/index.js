import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import category from './category';
import user from './user';

const allReducers = combineReducers({
    form: formReducer,
    category ,
    user
})

export default allReducers;