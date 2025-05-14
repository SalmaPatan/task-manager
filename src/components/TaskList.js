import { useDispatch, useSelector } from "react-redux"
import { deleteTask, updateTask } from "../store/actionTypes";

const TaskList = () => {
    const tasks = useSelector(state => state.tasks)
    const filteredList = useSelector(state => state.filteredTasks)
    const filterType = useSelector(state => state.filterType)

    const dispatch = useDispatch();

    const handleToggle = (taskId) => {
        dispatch(updateTask({ id: taskId }))
    }

    const handleDeleteTask = (taskId) => {
        dispatch(deleteTask({ id: taskId }))
    }
    return (
        <div className="task-list">
            {(filterType ? filteredList : tasks).map((task, index) => (
                <div key={task?.id} className="task">
                    <input type="checkbox" checked={task.completed} onChange={() => handleToggle(task?.id)} />
                    <p>{task.title}</p>
                    <button onClick={() => handleDeleteTask(task.id)}>X</button>
                </div>
            ))}
        </div>
    )
}
export default TaskList;