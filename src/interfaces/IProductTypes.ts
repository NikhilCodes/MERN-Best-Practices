export interface IProductStore {
  isLoading: boolean,
  data: Array<any>;
  hasError: boolean;
  errorMsg: string;
}

export interface IProduct {
  name: string;
  description: string;
  imageUrl: string;
  [prop: string]: any;  // Unknown attribute usage allowed
}
