import { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [dropdown, setDropdown] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    var taskList = fetchTasks()
    setTasks(taskList)
  }, [])

  useEffect(() => {
    if (window.performance) {
      if (PerformanceNavigationTiming.type === "nagivate" || "reload") {
        sessionStorage.clear();
      }
    }
  }, [])

  //Fetch Tasks
  const fetchTasks = () => {
    var taskList = [];
    for (var i = 0; i < sessionStorage.length; i++) {
      // set iteration key name
      var key = sessionStorage.key(i)
      // use key name to retrieve the corresponding value
      var value = JSON.parse(JSON.stringify(sessionStorage.getItem(key)))

      taskList.push(value)
    }
    return taskList
  }

  //addTaskDropdown sets the dropdown state to a boolean
  const addTaskDropdown = () => {
    setDropdown(!dropdown)
  }

  //addTask adds the inputed task to the tasks state
  const addTask = (task) => {
    sessionStorage.setItem(task.id, JSON.stringify(task))
    
    setTasks([...tasks, task])
  }

  //deleteTask removes the task from the tasks state
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    sessionStorage.removeItem(id)
  }

  //line 91 is conditional rendering, (true && expression) will evaluate the expression
  //(false && expression) expression will be ignored
  return (
    <div className="main-container">
      <Header onClick={addTaskDropdown} dropdown={dropdown}/>
      {dropdown && <AddTask onAdd={addTask}/>}
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  )
}

export default App;