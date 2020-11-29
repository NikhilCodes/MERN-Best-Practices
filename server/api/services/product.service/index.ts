import { Service } from 'typedi';
import { ProductModel } from '../../model/product.model';
import { ReturnModelType } from '@typegoose/typegoose';
import PropertyRequiredException from '../../exceptions/propertyRequired.exception';

@Service('product.service')
class ProductService {
  private productModel: ReturnModelType<typeof ProductModel>;

  constructor() {
    this.productModel = ProductModel;
  }

  async getProductById(id: string) {
    if (!id)
      throw new PropertyRequiredException("Product Id");

    return this.productModel.findById(id);
  }
}

export default ProductService;
