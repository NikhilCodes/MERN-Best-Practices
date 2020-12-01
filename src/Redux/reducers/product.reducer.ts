import { ProductTypes } from '../types';
import { IProductStore, IReduxAction } from '../../interfaces';

const initialState: IProductStore = {
  isLoading: false,
  data: [],
  hasError: false,
  errorMsg: ''
};

export default function productReducer(state = initialState, action: IReduxAction) {
  switch (action.type) {
    case ProductTypes.GET_PRODUCTS_REQUEST:
      return { ...state, isLoading: true, hasError: false, errorMsg: '' };
    case ProductTypes.GET_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, hasError: false, data: action.payload };
    case ProductTypes.GET_PRODUCTS_ERROR:
      return { ...state, isLoading: false, hasError: true, errorMsg: action.errorMsg };
    default:
      return { ...state };
  }
}
