import React from 'react';
import ToggleTask from './toggleTaskStatus';

const Tasks = ({id, title, priority, createdBy, assignedTo, status}) => (
  <div className={priority}>
    <div className="tasks">
      <p>Task: {title}</p>
      <p>Priority: {priority}</p>
      <small>Created By: {createdBy}</small><br />
      <small>Assigned To: {assignedTo}</small><br />
      <ToggleTask id={id} status={status}/>
    </div>
  </div>
  )
export default Tasks;