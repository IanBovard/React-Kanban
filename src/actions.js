export const ADD_CARD = 'ADD_CARD';


let id = 0;
const STATUS = 'Queue'

export const addCard = function(title='', priority='', createdBy='', assignedTo=''){
  id++;
  return { type: ADD_CARD, payload: { id, title, priority, createdBy, assignedTo, STATUS }};
}

