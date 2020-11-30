import { Container } from 'typedi'
import { MainApiProtected } from '../apis';

class ProductService {
  protectedApiService: MainApiProtected;

  constructor() {
    this.protectedApiService = Container.get(MainApiProtected);
  }

  getAllProducts = (): Promise<any> => {
    try {
      return this.protectedApiService.getAllProducts();
    } catch (error) {
      throw error;
    }
  }
}

export default ProductService;
