import React from 'react';
import NewCardForm from '../../components/newCardForm';
import CardColumns from '../cardColumns/index';

const App = () => (
  <div className="app-container">
  <div className="queue">
  <CardColumns />
  </div>
  <div className="in-progress">
  <CardColumns />
  </div>
  <div className="done">
  <CardColumns />
  </div>
  <div>
  <NewCardForm />
  </div>
  </div>
  )
export default App;
