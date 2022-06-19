import React, { useState, useEffect } from "react"
import "./CSS/globalStyles.css"
import "bootstrap/dist/css/bootstrap.min.css"
import NewTask from "./Components/NewTask"
import ListTasks from "./Components/ListTasks"
import { VisibilityControl } from "./Components/VisibilityControl"

function App() {
  const [tasksItem, setTasksItem] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)

  const createNewTask = (taskName) => {
    if (!tasksItem.find((task) => task.name === taskName)) {
      setTasksItem([...tasksItem, { name: taskName, done: false }])
    }
  }

  const toggleTask = (task) => {
    setTasksItem(
      tasksItem.map((t) => (t.name == task.name ? { ...t, done: !t.done } : t))
    )
  }

  useEffect(() => {
    let data = localStorage.getItem("tasks")
    if (data) setTasksItem(JSON.parse(data))
  }, [])

  const cleanTasks = () => {
    setTasksItem(tasksItem.filter((task) => !task.done));
    setShowCompleted(false);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItem))
  }, [tasksItem])

  return (
    <div className="App">
      <NewTask createNewTask={createNewTask} />
      <ListTasks
        tasks={tasksItem}
        toggleTask={toggleTask}
        showCompleted={false}
      />

      <VisibilityControl
        isChecked={showCompleted}
        setShowCompleted={(checked) => setShowCompleted(checked)}
        cleanTasks={cleanTasks}
      />

      {showCompleted && (
        <ListTasks
          tasks={tasksItem}
          toggleTask={toggleTask}
          showCompleted={showCompleted}
        />
      )}
    </div>
  )
}

export default App
