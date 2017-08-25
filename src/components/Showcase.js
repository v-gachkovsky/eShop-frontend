import React, { Component } from 'react';
import { connect } from 'react-redux';

class Showcase extends Component {
  render () {
    let showcase = this.props.store.showcase.map((item, index) => {
      return <li key={index}>
        {item.Name} - ${item.Price}
        &nbsp;
        <button onClick={this.props.onAddToCart.bind(null, item)}>Add to Cart</button>
      </li>;
    });

    return (

      <div className="showcase">
        <ul>
          {showcase}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({
    onAddToCart: item => {
      dispatch({ type: 'ADD_TO_CART', payload: item });
    }
  })
)(Showcase);