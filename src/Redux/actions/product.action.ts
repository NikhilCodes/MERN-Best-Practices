import { Dispatch } from 'redux';
import { Container } from 'typedi';
import { ProductService } from '../../services';
import { ProductTypes } from '../types';

export const getAllProduct = () => async (dispatch: Dispatch) => {
  const productService = Container.get(ProductService);

  try {
    dispatch({ type: ProductTypes.GET_PRODUCTS_REQUEST });
    const res = await productService.getAllProducts();
    dispatch({
      type: ProductTypes.GET_PRODUCTS_SUCCESS,
      payload: res
    });
  } catch (error) {
    dispatch({
      type: ProductTypes.GET_PRODUCTS_ERROR,
      errorMsg: `GetProductError: ${error}`
    });
  }
}
