import React from "react"
import { Button } from "reactstrap"

export const VisibilityControl = ({
  setShowCompleted,
  cleanTasks,
  isChecked,
}) => {
  const handleDelete = ({}) => {
    if (window.confirm("Are you sure want to delete it?")) {
      cleanTasks()
    }
  }

  return (
    <div className="px-4 d-flex align-items-center justify-content-between bg-secondary text-white text-cente p-2 border-secondary">
      <div className='form-check form-switch' >
        <input
          className="form-check-input"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />
        <label className='mx-3' >Show Archived Notes</label>
      </div>

      <Button color="danger" onClick={handleDelete}>
        Clear All
      </Button>
    </div>
  )
}
