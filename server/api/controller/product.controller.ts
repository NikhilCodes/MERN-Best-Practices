import "reflect-metadata";
import { Inject, Service } from 'typedi';
import ProductService from '../services/product.service';
import { Request, Response, NextFunction } from 'express';
import { IProductDTO } from '../interfaces/IProduct';
import HttpException from '../exceptions/http.exception';

@Service('product.controller')
class ProductController {
  @Inject('product.service')
  productService: ProductService;

  getAll = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    try {
      const productsData = await this.productService.getAll();
      response.status(200).send(productsData);
    } catch (error) {
      console.log(error);
      next(new HttpException(error));
    }
  }

  create = async (request: Request, response: Response, next: NextFunction) => {
    const productDTO: IProductDTO = request.body;
    const productsData = await this.productService.create(productDTO);
    response.status(201).send(productsData);
  }
}

export default ProductController;
