import { ADD_TASK } from './actions';

let initialState = {
  tasks: []
};

const taskReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return addTask(state, action);
    default:
    return state;
  }
}

function addTask(state, action) {
  console.log('payload',action.payload);
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