export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const GET_TASK = 'GET_TASK';

let id = 0;
const STATUS = 'Queue';
export const addTask = function(title='', priority='', createdBy='', assignedTo='', status=STATUS){
  id++;
  return { type: ADD_TASK, payload: { id, title, priority, createdBy, assignedTo, status}};
}

export const toggleTask = function(id, status){
  return { type: TOGGLE_TASK, payload: { id, status }}
}

export const getTasks = () => {
  return ( dispatch ) => {
    fetch('/api/tasks')
    .then(tasks => tasks.json())
    .then(tasks => {
      dispatch({
        type: GET_TASK,
        payload: { tasks }
      })
    })
  }
}
