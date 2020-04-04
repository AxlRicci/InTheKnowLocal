//import authReducer from './authReducer';
import contactReducer from './contactReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    firestore: firestoreReducer,
    //auth: authReducer,
    contact: contactReducer
});

export default rootReducer;