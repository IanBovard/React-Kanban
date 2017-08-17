import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tasks from '../../components/tasks.js';

class QueueColumn extends Component {
  render() {
    return (
      <div>
      {this.props.tasks.tasks.filter(queued => (
        queued.status === 'Queue'
        )).map(task => (
        <Tasks key={task.id}{...task}/>
        ))}
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
    onTaskClick: []
  }
}

QueueColumn = connect(
  mapStateToProps,
  mapDispatchToProps
  )(QueueColumn)

  export default QueueColumn

/*   {this.props.cards.tasks.map(card => (<Cards key={card.id}{...card}/>))}*/