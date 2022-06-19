import React, { useState } from "react"
import { Button } from "reactstrap"

const NewNote = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    createNewTask(newTaskName)
    setNewTaskName("")
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="my-2 row">
        <div className="col-9">
          <input
            type="text"
            placeholder="Enter a new task"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className='col-3' >
          <Button className="btn-md" color="primary">
            Save Note
          </Button>
        </div>
      </form>
    </>
  )
}

export default NewNote
