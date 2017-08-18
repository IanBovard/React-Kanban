import React from 'react';
import ToggleTask from './toggleTaskPriority';

const Tasks = ({id, title, priority, createdBy, assignedTo, status, taskChange}) => (
  <div className={status}>
    <div className="tasks">
      <h2>Task: {title}</h2>
      <h3>Priority: {priority}</h3>
      <small>Created By: {createdBy}</small><br />
      <small>Assigned To: {assignedTo}</small><br />
      <ToggleTask id={id}/>
    </div>
  </div>
  )
export default Tasks;