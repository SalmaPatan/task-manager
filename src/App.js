import react, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, applyFilter } from './store/actionTypes';
import TaskList from './components/TaskList';


function App() {
  const [task, setTask] = useState("")
  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch();
  const [filterType, setFilterType] = useState("")
  const [error, setError] = useState("")
  console.log(tasks)
  const handleAddTask = () => {
    const taskNameExists = tasks.map(ele => ele?.title).includes(task.trim())
    if (taskNameExists) {
      setError("Task with same name already exists")
    }
    else if (task.trim() !== "") {
      const id = tasks.length + 1
      dispatch(addTask({ id: id, title: task, completed: false }))
      setTask("")
      setError("")
    }



  }
  const handleFilter = (e) => {
    setFilterType(e.target.checked ? e.target.name : null)
    const filterType = e.target.checked ? e.target.name : null
    console.log('filter', filterType)
    dispatch(applyFilter({ type: filterType }))


  }
  return (
    <div className="App">
      <div className='task-input'>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)}
          placeholder='Enter the task title here'

        />
        <button className='task-button' onClick={handleAddTask}>Add Task</button>
      </div>
      {error && <p>{error}</p>}
      <div className='filter-container'>
        <label className='filter-type'>
          <input type="checkbox" name="all" onChange={handleFilter}

            checked={filterType === "all"}

          />
          show all
        </label>
        <label>
          <input type="checkbox" name="pending"
            onChange={handleFilter}
            checked={filterType === "pending"}
          />
          only pending
        </label>
        <label>
          <input type="checkbox"
            name="completed"
            onChange={handleFilter}
            checked={filterType === "completed"}
          />
          only completed
        </label>
      </div>

      <TaskList />
    </div>
  );
}

export default App;
