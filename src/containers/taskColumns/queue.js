import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tasks from '../../components/tasks.js';

class QueueColumn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'Queue'
    }
  }
  fetchTasks(url) {
    fetch(url)
      .then(tasks => tasks.json())
      .then(tasks => {
        console.log('response',tasks);
        return tasks.json;
      });
  }
  componentDidMount(){
    this.fetchTasks('/api/tasks');
  }
  render() {
    return (
      <div>
        <div>
        {this.props.tasks.filter(queued => (
        queued.status === 'Queue'
        )).map(task => (
        <Tasks key={task.id}{...task}/>
        ))}
        </div>
      </div>
        )
  }
}


const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    palceholder: {}
  }
}

QueueColumn = connect(
  mapStateToProps,
  mapDispatchToProps
  )(QueueColumn)

  export default QueueColumn