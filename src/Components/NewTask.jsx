import React, { useState } from "react"
import { Button } from "reactstrap"

const NewTask = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    createNewTask(newTaskName)
    setNewTaskName("")
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <Button color="primary">Save Task</Button>
      </form>
    </>
  )
}

export default NewTask
