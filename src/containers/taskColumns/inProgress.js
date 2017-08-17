import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tasks from '../../components/tasks.js';

class InProgressColumn extends Component {
  render() {
    return (
      <div>
      {this.props.tasks.tasks.filter(queued => (
        queued.status === 'InProgress'
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

InProgressColumn = connect(
  mapStateToProps,
  mapDispatchToProps
  )(InProgressColumn)

  export default InProgressColumn

/*   {this.props.cards.tasks.map(card => (<Cards key={card.id}{...card}/>))}*/