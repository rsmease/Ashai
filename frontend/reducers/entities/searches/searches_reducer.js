import {
    combineReducers
} from 'redux';
import userSearchesReducer from './user_searches_reducer';
import projectSearchesReducer from './project_searches_reducer';
import teamSearchesReducer from './team_searches_reducer';
import taskSearchesReducer from './task_searches_reducer';

export default combineReducers({
    users: userSearchesReducer,
    projects: projectSearchesReducer,
    teams: teamSearchesReducer,
    tasks: taskSearchesReducer
});