export default interface IProduct {
  isLoading: boolean,
  data: Array<object>;
  hasError: boolean;
  errorMsg: string;
}
