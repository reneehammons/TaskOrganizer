import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

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

  //Fetch Task
  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await response.json()

    return data
  }

  //addTaskDropdown sets the dropdown state to a boolean
  const addTaskDropdown = () => {
    setDropdown(!dropdown)
  }

  //addTask adds the inputed task to the tasks state
  const addTask = async (task) => {
    
    const response = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await response.json()

    setTasks([...tasks, data])
  }

  //deleteTask removes the task from the tasks state
  const deleteTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })

    response.status === 200 
      ? setTasks(tasks.filter((task) => task.id !== id)) 
      : alert('Error Deleting Task')
  }

  //highlightTask 
  const highlightTask = async (id) => {
    const taskToHighlight = await fetchTask(id)
    const updatedTask = {...taskToHighlight, highlight: !taskToHighlight.highlight}

    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await response.json()

    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, highlight: data.highlight } : task)
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
