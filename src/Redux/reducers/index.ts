import { combineReducers } from 'redux';
import productReducer from './product.reducer';

const rootReducer = combineReducers({
  product: productReducer
});

export default rootReducer;
