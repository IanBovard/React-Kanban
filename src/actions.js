export const ADD_TASK = 'ADD_TASK';

let id = 0;
const STATUS = 'Queue';
export const addTask = function(title='', priority='', createdBy='', assignedTo='', status=STATUS){
  id++;
  return { type: ADD_TASK, payload: { id, title, priority, createdBy, assignedTo, status}};
}

