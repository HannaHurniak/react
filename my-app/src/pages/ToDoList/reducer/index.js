import { handleActions } from 'redux-actions'

import * as actions from './../actions/index'

const defaultState = {
    tasks: []
}

const managerReducer = handleActions({
    [actions.ADD_NEW_TASK]: (state, { payload }) => {
        const updateInputValue = [...state.tasks, { taskText: payload, isCompleted: false }];
        // console.log(updateInputValue);
        return {
            ...state,
            tasks: updateInputValue,
        }
    },
    [actions.DELETE_TASK]: (state, { payload }) => {
        const updateInputValue = [...state.tasks];
        updateInputValue.splice(payload, 1);
        return {
            ...state,
            tasks: updateInputValue,
        }
    },
    [actions.COMPLETE_TASK]: (state, { payload }) => {
        const updateInputValue = [...state.tasks];
        updateInputValue[payload].isCompleted = true;
        console.log(updateInputValue);
        return {
            ...state,
            tasks: updateInputValue,
        }
    },

}, defaultState)

export default managerReducer;