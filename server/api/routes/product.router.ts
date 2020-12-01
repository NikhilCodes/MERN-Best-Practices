import { Container, Inject, Service } from 'typedi';
import BaseRouter from './base.router';
import { IRoute } from '../interfaces/IRoute';
import ProductController from '../controller/product.controller';
import { routes } from './constants'
import { HttpVerb } from './constants';
import { Router } from 'express';
import { AuthMiddleware, CorsMiddleware, ErrorMiddleware } from '../middlewares';

const { ProductRoutes } = routes;

@Service('product.router')
class ProductRouter extends BaseRouter {
  constructor(public router: Router) {
    super(router);
  }

  get routes(): Array<IRoute> {
    const productController = Container.get<ProductController>(ProductController);
    const routes: Array<IRoute> = [];

    // Using middlewares
    routes.push({
      httpVerb: HttpVerb.USE,
      handlers: [CorsMiddleware, AuthMiddleware]
    });

    routes.push({
      httpVerb: HttpVerb.GET,
      path: ProductRoutes.ROOT,
      handlers: [productController.getAll]
    });

    routes.push({
      httpVerb: HttpVerb.PUT,
      path: ProductRoutes.ROOT,
      handlers: [productController.create]
    });

    // Error Handler for Http Exceptions
    routes.push({
      httpVerb: HttpVerb.USE,
      handlers: [ErrorMiddleware],
    });

    return routes;
  }
}

export default ProductRouter;
