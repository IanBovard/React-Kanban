import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tasks from '../../components/tasks.js';

class DoneColumn extends Component {
  render() {
    return (
      <div>
      {this.props.tasks.tasks.filter(queued => (
        queued.status === 'Done'
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

DoneColumn = connect(
  mapStateToProps,
  mapDispatchToProps
  )(DoneColumn)

  export default DoneColumn

/*   {this.props.cards.tasks.map(card => (<Cards key={card.id}{...card}/>))}*/