import React, { Component } from 'react';

const Card = ({title, priority, createdBy, assignedTo}) => (
  <div>
  <h2>Task: { title }</h2>
  <h3>Priority: { priority }</h3>
  <small>Created By:{ createdBy }</small><br />
  <small>assigned To: { assignedTo }</small><br />
  </div>
  )

export default Card
