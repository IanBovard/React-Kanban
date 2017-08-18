import React from 'react';
import NewTaskForm from '../../components/newTaskForm';
import QueueColumn from '../taskColumns/queue';
import InProgressColumn from '../taskColumns/inProgress';
import DoneColumn from '../taskColumns/done';

const App = () => (
  <div className="app-container">
    <div className="newTaskForm">
      <NewTaskForm />
    </div>
    <div className="taskColumns">
      <div className="queueColumn">
        <h2>In Queue</h2>
        <QueueColumn />
      </div>
      <div className="inProgressColumn">
        <h2>In Progress</h2>
        <InProgressColumn />
      </div>
      <div className="doneColumn">
        <h2>Done</h2>
        <DoneColumn />
      </div>
    </div>
  </div>
  )
export default App;
