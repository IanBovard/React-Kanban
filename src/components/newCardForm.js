import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../actions';

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      priority:'',
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
    this.props.newCardAdd(this.state.title, this.state.priority, this.state.createdBy, this.state.assignedTo)
    this.setState({title:'', priority:'', createdBy:'', assignedTo:''})
  }
  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
      <input id="inputTitle" type="text" value={this.state.title} placeholder="title" onChange={this.handleFormTitle.bind(this)}/><br />
      <input id="inputPriority" type="text" value={this.state.priority} placeholder="priority" onChange={this.handleFormPriority.bind(this)}/><br />
      <input id="inputCreatedBy" type="text" value={this.state.createdBy} placeholder="created by" onChange={this.handleFormCreatedBy.bind(this)}/><br />
      <input id="inputAssignedTo" type="text" value={this.state.assignedTo} placeholder="assigned to" onChange={this.handleFormAssignedTo.bind(this)}/><br />
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
    newCardAdd: (title, priority, createdBy, assignedTo) => {
      dispatch(addCard(title, priority, createdBy, assignedTo))
    }
  }
}

NewCardForm = connect(
  mapStatetoProps,
  mapDispatchToProps
  )(NewCardForm);

  export default NewCardForm;