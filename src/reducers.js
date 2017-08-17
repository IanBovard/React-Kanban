import { ADD_CARD } from './actions';

let initialState = {
  tasks: []
};

const cardAppReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
    return add(state, action);
    default:
    return state;
  }
}

function add(state, action) {
  console.log('state',state);
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

export default cardAppReducers;