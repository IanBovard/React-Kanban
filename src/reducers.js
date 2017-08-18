import { ADD_TASK } from './actions';
import { TOGGLE_TASK } from './actions';
let initialState = {
  tasks: []
};

const taskReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return addTask(state, action);
    case TOGGLE_TASK:
      return state.tasks.map(task => {
        console.log(action.payload)
        console.log(state)
        if (task.id === action.payload.id) {
          task.status === action.payload.status
        }
        return task;
      })
    default:
    return state;
  }
}

function addTask(state, action) {
  return {
    tasks:
    [
    ...state.tasks,
    {
      id: action.payload.id,
      title: action.payload.title,
      priority: action.payload.priority,
      createdBy:action.payload.createdBy,
      assignedTo: action.payload.assignedTo,
      status: action.payload.status
    }
    ]
  }
}

export default taskReducers;