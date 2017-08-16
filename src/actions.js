export const ADD_CARD = 'ADD_CARD';
export default function addCard(title, priority, createdBy, AssignedTo) {
  return { type: ADD_CARD, title, priority, createdBy, AssignedTo};
}

