import React, { useState } from "react"
import { Table } from "reactstrap"
import { NoteRow } from "./NoteRow"

const TableNotes = ({ tasks, toggleTask, showCompleted, }) => {
  const taskTableRows = (doneValue) => {
    return (
      tasks
      .filter((task) => task.done === doneValue)
      .map(task => (
        <NoteRow task={task} key={task.name} toggleTask={toggleTask} />
      ))
    )
  }

  return (
    <>
      <Table className='text-white table-dark table-striped table-bordered border-secondary ' style={{width: '60vw'}}>
        <thead>
          <tr className='table-secondary'>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>{taskTableRows(showCompleted)}</tbody>
      </Table>
    </>
  )
}

export default TableNotes
