import {
    combineReducers
} from 'redux';
import usersReducer from './users_reducer';
import teamsReducer from './teams_reducer';
import projectsReducer from './projects_reducer';
import searchesReducer from './searches/searches_reducer';

export default combineReducers({
    users: usersReducer,
    teams: teamsReducer,
    projects: projectsReducer,
    searches: searchesReducer
});