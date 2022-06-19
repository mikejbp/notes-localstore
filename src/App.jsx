import React, { useState, useEffect } from "react"
import NewNote from "./Components/NewNote"
import TableNotes from "./Components/TableNotes"
import { VisibilityControl } from "./Components/VisibilityControl"
import ContainerApp from "./Components/Container"

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
      tasksItem.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    )
  }

  useEffect(() => {
    let data = localStorage.getItem("tasks")
    if (data) setTasksItem(JSON.parse(data))
  }, [])

  const cleanTasks = () => {
    setTasksItem(tasksItem.filter((task) => !task.done))
    setShowCompleted(false)
  }

  const handleDelete = (taskID) => {
    const noteRow = [...tasksItem];
    const index = tasksItem.findIndex((item) => item.name === item.name);
    noteRow.splice(index,1);
    setTasksItem(noteRow);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItem))
  }, [tasksItem])

  return (
    <main className="bg-dark vh-100 text-white text-center">
      <ContainerApp>
        <NewNote createNewTask={createNewTask} />
        <TableNotes
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
          <TableNotes
            tasks={tasksItem}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
      </ContainerApp>
    </main>
  )
}

export default App
