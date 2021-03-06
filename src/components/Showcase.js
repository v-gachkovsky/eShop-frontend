import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../actions';

class Showcase extends Component {
  render () {
    let showcase = this.props.showcase.map((item, index) => {
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
    showcase: state.showcase
  }),
  dispatch => ({
    onAddToCart: item => {
      dispatch(addToCart(item));
    }
  })
)(Showcase);