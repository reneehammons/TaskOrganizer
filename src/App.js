import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 'task1',
        text: 'Code React Project',
        day: 'April 11th, 2021',
        time: '11:59pm',
        highlight: false,
    },
    {
        id: 'task2',
        text: 'Learn SASS',
        day: 'April 14th, 2021',
        time: '11:58pm',
        highlight: false,
    },
    {
        id: 'task3',
        text: 'Learn Bootstrap',
        day: 'April 17th, 2021',
        time: '11:57pm',
        highlight: false,
    }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const highlightTask = (id, highlight) => {
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, highlight: !task.highlight } : task)
    )
  }

  return (
    <div className="main-container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} onHighlight={highlightTask} />
    </div>
  );
}

export default App
