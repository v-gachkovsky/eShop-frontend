import React, { Component } from 'react';
import { connect } from 'react-redux';

import API from '../apiv1';
import Showcase from './Showcase';
import Cart from './Cart';

class App extends Component {
  componentWillMount () {
    API.getGoods().then(response => {
      const goods = response.data;
      this.props.onLoadGoods(goods);
    });
  }

  render() {
    return (
      <div className="App">
        <Showcase goods={this.props.store.showcase}/>
        <Cart cart={this.props.store.cart}/>
      </div>
    );
  }
}

export default connect(
  state => ({
    store: state
  }),

  dispatch => ({
    onLoadGoods: goods => {
      dispatch({ type: 'LOAD_GOODS', payload: goods });
    }
  })
)(App);
