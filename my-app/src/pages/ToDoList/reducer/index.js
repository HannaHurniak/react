import { handleActions } from 'redux-actions'

import * as actions from './../actions/index'

const defaultState = {
    inputValue: []
}

const managerReducer = handleActions({
    [actions.ADD_NEW_TASK]: (state) => {
        const updateInputValue = [...state.inputValue, { inputValue: 'hi' }];
        return {
            ...state,
            inputValue: updateInputValue,
        }
    },

}, defaultState)

export default managerReducer;