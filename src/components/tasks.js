import React from 'react';

const Tasks = ({title, priority, createdBy, assignedTo, status, taskChange}) => (
  <div className={status}>
    <div className="tasks">
      <h2>Task: {title}</h2>
      <h3>Priority: {priority}</h3>
      <small>Created By: {createdBy}</small><br />
      <small>Assigned To: {assignedTo}</small><br />
      <select onChange={taskChange}>
        <option disabled="disabled">Change Status of Task</option>
        <option value="Queue">In Queue</option>
        <option value="InProgress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
  </div>
  )
export default Tasks;