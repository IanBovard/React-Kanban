import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cards from '../../components/card.js';

class CardColumns extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      {this.props.cards.tasks.map(card => (<Cards key={card.id}{...card}/>))}
      </div>
      )
  }
}


const mapStateToProps = (state) => {
  return {
    cards: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTaskClick: []
  }
}

CardColumns = connect(
  mapStateToProps,
  mapDispatchToProps
  )(CardColumns)

  export default CardColumns