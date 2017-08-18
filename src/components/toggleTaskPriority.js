

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTask } from '../actions'

class ToggleTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
    }
  }
  handleTaskToggle(e){
    this.props.toggleTaskPriority(this.state.id, e.target.value)
  }
  render(){
    return(
      <div>
      <select onChange={this.handleTaskToggle.bind(this)}>
      <option disabled="disabled">Change Status of Task</option>
      <option value="Queue">In Queue</option>
      <option value="InProgress">In Progress</option>
      <option value="Done">Done</option>
      </select>
      </div>
      )
  }
}

const mapStateToProps = () => {
  return {};
}
const mapDispatchToProps = (dispatch) => {
  return {
    toggleTaskPriority: (id, status) => {
      dispatch(toggleTask(id, status))
    }
  }
}

ToggleTask = connect(
  mapStateToProps,
  mapDispatchToProps
  )(ToggleTask);

  export default ToggleTask;