import { combineReducers } from 'redux'
import managerReducer from './../pages/ToDoList/reducer/index'

const rootReducer = combineReducers({managerReducer});

export default rootReducer;