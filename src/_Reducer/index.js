import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import category from './category';
import user from './user';
import places from './place';

const allReducers = combineReducers({
    form: formReducer,
    category ,
    user,
    places,
})

export default allReducers;