import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { findRenderedDOMComponentWithTag } from 'react-dom/test-utils'

function App() {
  const [dropdown, setDropdown] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks= async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  //Fetch Tasks
  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5000/tasks')
    const data = await response.json()

    return data
  }

  //addTaskDropdown sets the dropdown state to a boolean
  const addTaskDropdown = () => {
    setDropdown(!dropdown)
  }

  //addTask adds the inputed task to the tasks state
  const addTask = (task) => {
    //id generates a random number for the task id
    const id = Math.floor(Math.random()*10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //deleteTask removes the task from the tasks state
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  //highlightTask 
  const highlightTask = (id, highlight) => {
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, highlight: !task.highlight } : task)
    )
  }

  return (
    <div className="main-container">
      <Header onClick={addTaskDropdown} dropdown={dropdown}/>
      {dropdown && <AddTask onAdd={addTask}/>}
      <Tasks tasks={tasks} onDelete={deleteTask} onHighlight={highlightTask} />
    </div>
  )
}

export default App
