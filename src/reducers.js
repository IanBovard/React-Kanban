import ADD_CARD from './actions';
let id = 0;
let queue = false;

const cardAppReducers = (state = [], action) => {
  switch (action.type) {
    case ADD_CARD:
    return add(state, action);
    default:
    return state;
  }
}

function add(state, action) {
  id = ++id;
  return [
  ...state,
  {
    id:id,
    title: action.title,
    createdBy: action.createdBy,
    AssignedTo: action.AssignedTo,
    status: queue
  }
  ]
}

export default cardAppReducers;