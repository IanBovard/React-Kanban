/* jshint esversion:6*/
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3333;

app.use(bodyParser.json());

app.get('/api/tasks', (req, res) => {
  res.json([
  {
    title: 'Assign Variables!',
    priority: 'High',
    createdBy: 'Steppenwolf',
    assignedTo: 'the first person to say yes',
    status: 'InProgress'
  },
  {
    title: 'Stop calling them Var!',
    priority: 'High',
    createdBy: 'Beowulf',
    assignedTo: 'the first person to say yes',
    status: 'InQueue'
  },
  {
    title: 'Hoist Everything!',
    priority: 'High',
    createdBy: 'Direwolf',
    assignedTo: 'the first person to say yes',
    status: 'InProgress'
  },
  {
    title: 'Use fat arrows!',
    priority: 'High',
    createdBy: 'Bigbadwolf',
    assignedTo: 'the first person to say yes',
    status: 'Done'
  }
  ]);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
