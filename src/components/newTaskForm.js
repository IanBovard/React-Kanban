import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';

class NewTaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      priority: 'Low',
      createdBy:'',
      assignedTo:''
    };
  }

  handleFormTitle(e) {
    this.setState({title: e.target.value});
  }
  handleFormPriority(e) {
    this.setState({priority: e.target.value})
  }
  handleFormCreatedBy(e) {
    this.setState({createdBy: e.target.value})
  }
  handleFormAssignedTo(e) {
    this.setState({assignedTo: e.target.value})
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.newTaskAdd(this.state.title, this.state.priority, this.state.createdBy, this.state.assignedTo)
    this.setState({title:'', priority:'Low', createdBy:'', assignedTo:''})
  }
  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
      <input type="text" value={this.state.title} placeholder="title" onChange={this.handleFormTitle.bind(this)}/>
      <input type="text" value={this.state.createdBy} placeholder="created by" onChange={this.handleFormCreatedBy.bind(this)}/>
      <input type="text" value={this.state.assignedTo} placeholder="assigned to" onChange={this.handleFormAssignedTo.bind(this)}/>
      <select onChange={this.handleFormPriority.bind(this)}>
      <option disabled="disabled">Select a Priority</option>
      <option value="Low">Low</option>
      <option value="Medium">Medium</option>
      <option value="High">High</option>
      <option value="Blocker">Blocker</option>
      </select><br />
      <button type="submit">Add Task</button>
      </form>
      </div>
      );
  }
}

const mapStatetoProps = () => {
  return {};
}
const mapDispatchToProps = (dispatch) => {
  return {
    newTaskAdd: (title, priority, createdBy, assignedTo) => {
      dispatch(addTask(title, priority, createdBy, assignedTo))
    }
  }
}

NewTaskForm = connect(
  mapStatetoProps,
  mapDispatchToProps
  )(NewTaskForm);

  export default NewTaskForm;