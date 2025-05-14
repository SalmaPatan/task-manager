import { ADD_TASK, APPLY_FILTER, DELETE_TASK, UPDATE_TASK } from "./actions";

const initialState = {
    tasks: []
}
export function taskReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] };
        case UPDATE_TASK:
            const { id } = action.payload
            const allTasks = JSON.parse(JSON.stringify(state.tasks))
            const task = allTasks.find(ele => ele?.id === id)
            task["completed"] = !task.completed
            return {
                ...state,
                tasks: [...allTasks]
            };
        case DELETE_TASK:
            const { id: taskId } = action.payload
            const tasks = JSON.parse(JSON.stringify(state.tasks))
            const filteredResults = tasks.filter(ele => ele?.id !== taskId)
            return {
                ...state,
                tasks: [...filteredResults]
            }
        case APPLY_FILTER:
            const { type } = action.payload
            console.log('action', type)
            const list = JSON.parse(JSON.stringify(state.tasks))
            const filteredList = list.filter(ele => type === "completed" ? ele?.completed == true : type === "pending" ? !ele?.completed : ele)
            return {
                ...state,
                filteredTasks: [...filteredList],
                filterType: type
            }
        default:
            return state



    }
}