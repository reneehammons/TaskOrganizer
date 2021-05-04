import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [dropdown, setDropdown] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 'task1',
      text: 'Code React Project',
      date: 'April 11th, 2021',
      time: '11:59pm',
      highlight: false,
    },
    {
      id: 'task2',
      text: 'Learn SASS',
      date: 'April 14th, 2021',
      time: '11:58pm',
      highlight: false,
    },
    {
      id: 'task3',
      text: 'Learn Bootstrap',
      date: 'April 17th, 2021',
      time: '11:57pm',
      highlight: false,
    }
  ])

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
  const deleteTask = (id) => {
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
