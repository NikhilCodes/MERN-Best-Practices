export default interface IReduxAction {
  type: string;
  payload?: any;
  errorMsg?: any;
}
