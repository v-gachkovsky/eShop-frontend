import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
  render () {
    let totalPrice = 0;
    let orders = this.props.store.cart.map((item, index) => {
      totalPrice += item.Price;
      return <li key={index}>
        {item.Name} - ${item.Price}
        &nbsp;
        <button onClick={this.props.onRemoveFromCart.bind(null, index)}>Remove from Cart</button>
      </li>
    });

    return (
      <div className="cart">
        <ol>
          {orders}
        </ol>
        <p>Total Price: ${totalPrice}</p>
      </div>
    );
  }
}

export default connect(
  state => ({
    store: state
  }),

  dispatch => ({
    onRemoveFromCart: index => {
      dispatch({ type: 'REMOVE_FROM_CART', payload: index });
    }
  })
)(Cart);