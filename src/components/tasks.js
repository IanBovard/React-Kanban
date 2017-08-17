import React from 'react';

const Tasks = ({title, priority, createdBy, assignedTo, status}) => (
  <div className={status}>
    <div className="tasks">
      <h2>Task: {title}</h2>
      <h3>Priority: {priority}</h3>
      <small>Created By: {createdBy}</small><br />
      <small>Assigned To: {assignedTo}</small>
    </div>
  </div>
  )

export default Tasks;