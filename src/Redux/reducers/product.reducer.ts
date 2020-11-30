import IReduxAction from '../../interfaces/IReduxAction';

const initialState = {
  isLoading: false,
  data: [],
  hasError: false,
  errorMessage: ''
};

export default function productReducer(state = initialState, action: IReduxAction) {
  switch (action.type) {
    default:
      return { ...state };
  }
}
