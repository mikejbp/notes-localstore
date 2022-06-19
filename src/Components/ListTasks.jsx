import React, { useState } from "react"
import { Table } from "reactstrap"
import { TaskRow } from "./TaskRow"

const ListTasks = ({ tasks, toggleTask, showCompleted }) => {
  const taskTableRows = (doneValue) => {
    return (
      tasks
      .filter((task) => task.done === doneValue)
      .map(task => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
      ))
    )
  }

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>{taskTableRows(showCompleted)}</tbody>
      </Table>
    </>
  )
}

export default ListTasks
