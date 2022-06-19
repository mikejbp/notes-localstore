import { Button } from "reactstrap"

export const NoteRow = ({ task, toggleTask }) => {
  return (
    <tr>
      <td className="d-flex justify-content-between px-4">
        {task.name}
        <div style={{display: 'flex', gap: '5vw', alignItems: 'center'}}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => toggleTask(task)}
          />
          <Button color="success">Edit</Button>
          <Button color="danger" onClick={''} >Delete</Button>
        </div>
      </td>
    </tr>
  )
}
