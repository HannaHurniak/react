import { handleActions } from 'redux-actions'

import * as actions from './../actions/index'

const defaultState = {
    tasks: []
}

const managerReducer = handleActions({
    [actions.ADD_NEW_TASK]: (state, { payload }) => {
        const updateInputValue = [...state.tasks, { taskText: payload }];
        console.log(updateInputValue);
        return {
            ...state,
            tasks: updateInputValue,
        }
    },

}, defaultState)

export default managerReducer;