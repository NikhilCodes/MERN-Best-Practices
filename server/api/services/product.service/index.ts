import { Service } from 'typedi';
import { ProductModel } from '../../model/product.model';
import { ReturnModelType } from '@typegoose/typegoose';
import PropertyRequiredException from '../../exceptions/propertyRequired.exception';
import { IProductDTO } from '../../interfaces/IProduct';

@Service('product.service')
class ProductService {
  private productModel: ReturnModelType<typeof ProductModel>;

  constructor() {
    this.productModel = ProductModel;
  }

  async getAll() {
    return this.productModel.find();
  }

  getProductById = async (id: string) => {
    if (!id)
      throw new PropertyRequiredException("Product Id");

    return this.productModel.findById(id);
  }

  create = async (productDTO: IProductDTO) => {
    return this.productModel.create(productDTO);
  }
}

export default ProductService;
