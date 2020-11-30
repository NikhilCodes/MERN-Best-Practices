import { Container, Inject, Service } from 'typedi';
import BaseRouter from './base.router';
import { IRoute } from '../interfaces/IRoute';
import ProductController from '../controller/product.controller';
import { routes } from './constants'
import corsMiddleware from '../middlewares/cors.middleware';
import { HttpVerb } from './constants';
import { Router } from 'express';

const { ProductRoutes } = routes;

@Service('product.router')
class ProductRouter extends BaseRouter {
  constructor(public router: Router) {
    super(router);
  }

  get routes(): IRoute[] {
    const productController = Container.get<ProductController>(ProductController);
    const routes: Array<IRoute> = [];

    routes.push({
      httpVerb: HttpVerb.USE,
      handlers: [corsMiddleware]
    });

    routes.push({
      httpVerb: HttpVerb.GET,
      path: ProductRoutes.ROOT,
      handlers: [corsMiddleware, productController.getAll]
    });

    routes.push({
      httpVerb: HttpVerb.PUT,
      path: ProductRoutes.ROOT,
      handlers: [corsMiddleware, productController.create]
    });

    return routes;
  }
}

export default ProductRouter;
