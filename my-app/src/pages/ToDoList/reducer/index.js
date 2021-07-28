import { handleActions } from 'redux-actions'

import * as actions from './../actions/index'

const defaultState = {
    tasks: [],
}

const managerReducer = handleActions({
    [actions.ADD_NEW_TASK]: (state, { payload }) => {
        const updateInputValue = [...state.tasks, { taskText: payload, isCompleted: false, isEditMode: false, editText: '' }];
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
        return {
            ...state,
            tasks: updateInputValue,
        }
    },
    [actions.EDIT_TASK]: (state, { payload }) => {
        const updateInputValue = [...state.tasks];
        updateInputValue[payload].isEditMode = true;
        return {
            ...state,
            tasks: updateInputValue,
        }
    },
    [actions.CANCEL_EDIT_TASK]: (state, { payload }) => {
        const updateInputValue = [...state.tasks];
        updateInputValue[payload].isEditMode = false;
        return {
            ...state,
            tasks: updateInputValue,
        }
    },
    [actions.SAVE_EDIT_TASK]: (state, { payload }) => {
        const updateInputValue = [...state.tasks];
        updateInputValue[payload].isEditMode = false;
        return {
            ...state,
            tasks: updateInputValue,
        }
    },
    

}, defaultState)

export default managerReducer;