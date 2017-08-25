import { combineReducers } from 'redux'

import cart from './cart';
import showcase from './showcase';

const eshopApp = combineReducers({
  cart, showcase
});

export default eshopApp;