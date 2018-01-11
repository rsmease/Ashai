import {
    combineReducers
} from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors/errors_reducer';
import entitiesReducer from './entities/entities_reducer';

export default combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer
});