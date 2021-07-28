import { createAction } from 'redux-actions'

export const ADD_NEW_TASK = createAction('ADD_NEW_TASK');
export const DELETE_TASK = createAction('DELETE_TASK')
export const COMPLETE_TASK = createAction('COMPLETE_TASK')
export const EDIT_TASK = createAction('EDIT_TASK')
export const SAVE_EDIT_TASK = createAction('SAVE_EDIT_TASK')
export const CANCEL_EDIT_TASK = createAction('CANCEL_EDIT_TASK')

