import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tasks from '../../components/tasks.js';
import { toggleTask } from '../../actions';

class QueueColumn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'InProgress'
    }
  }
  render() {
    return (
      <div>
        <div>
        {this.props.tasks.tasks.filter(queued => (
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
    tasks: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTaskChange: (id, status) => {
      dispatch(toggleTask(id, status))
    }
  }
}

QueueColumn = connect(
  mapStateToProps,
  mapDispatchToProps
  )(QueueColumn)

  export default QueueColumn