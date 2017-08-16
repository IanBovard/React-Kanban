import React, { Component } from 'react';
import addCard from '../../actions'

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newCard: {
        title: '',
        priority:'',
        createdBy:'',
        assignedTo:''
      }
    };
  }
  handleFormTitle(e) {
    this.setState({ newCard.title: e.target.value });
  }
  handleFormPriority(e) {
    this.setState({ newCard.priority: e.target.value})
  }
  handleFormCreatedBy(e) {
    this.setState({ newCard.createdBy: e.target.value })
  }
  handleFormAssignedTo(e) {
    this.setState({ newCard.assignedTo: e.target.value })
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.newCardAdd(this.state.newCard)
  }
  render(){
    return(
      <div>
      <form>
      <input id="inputTitle" value={this.state.newCard.title} onChange={this.handleFormTitle.bind(this)}/>
      <input id="inputPriority" value={this.state.newCard.priority} onChange={this.handleFormPriority.bind(this)}/>
      <input id="inputCreatedBy" value={this.state.newCard.createdBy} onChange={this.handleFormCreatedBy.bind(this)}/>
      <input id="inputAssignedTo" value={this.state.newCard.assignedTo} onChange={this.handleFormAssignedTo.bind(this)}/>
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
      dispatch(addCard(title, priorit, createdBy, assignedTo))
    }
  }
}

NewCardForm = connect(
  mapStatetoProps,
  mapDispatchToProps
  )(NewCardForm);

  export default NewCardForm;