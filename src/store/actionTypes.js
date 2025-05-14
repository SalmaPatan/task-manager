import { ADD_TASK, APPLY_FILTER, DELETE_TASK, UPDATE_TASK } from "./actions";

export const addTask = (payload) => ({
    type: ADD_TASK,
    payload
})
export const updateTask = (payload) => ({
    type: UPDATE_TASK,
    payload
})
export const deleteTask = (payload) => ({
    type: DELETE_TASK,
    payload
})
export const applyFilter = (payload) => ({
    type: APPLY_FILTER,
    payload
})
