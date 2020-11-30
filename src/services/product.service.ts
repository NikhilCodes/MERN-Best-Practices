import { Container } from 'typedi'
import { MainApiProtected } from '../apis';

class ProductService {
  protectedApiService: MainApiProtected;
  constructor() {
    this.protectedApiService = Container.get(MainApiProtected);
  }

  getAllProducts = async (): Promise<any> => {
    try {
      console.log('LIKE')
      console.log(await this.protectedApiService.getAllProducts())
      return await this.protectedApiService.getAllProducts();
    } catch (error) {
      throw error;
    }
  }
}

export default ProductService;
