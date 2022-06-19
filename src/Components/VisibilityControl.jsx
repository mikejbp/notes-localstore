import React from "react"
import { Button } from "reactstrap"

export const VisibilityControl = ({setShowCompleted, cleanTasks, isChecked}) => {
  const handleDelete = ({}) => {
    if (window.confirm('Are you sure want to delete it?')) {
      cleanTasks();
    }
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setShowCompleted(e.target.checked)}
      />
      <label>Show Tasks Done</label>

      <Button color="danger" onClick={handleDelete}>Clear</Button>
    </div>
  )
}
