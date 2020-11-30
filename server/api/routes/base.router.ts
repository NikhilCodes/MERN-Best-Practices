import { Service } from 'typedi';
import { IRoute } from '../interfaces/IRoute';
import { Router } from 'express';

@Service('base.router')
class BaseRouter {
  get middlewares(): Array<any> {
    return [];
  }

  get routes(): Array<IRoute> {
    return [];
  }

  constructor(public router: Router) {
    this.router = router;

    // middleware should be registered before routes as they are executed in order of declaration
    // similarly you should make sure things like bodyParser are configured before your router(s)
    this.register(this.middlewares);
    this.register(this.routes);
  }

  register(routes: IRoute[]) {
    for (let { httpVerb, path, handlers } of routes) {
      // express.Router uses the lower-cased HTTP verb, might as well allow the semantic GET etc.
      httpVerb = httpVerb.toLowerCase();

      // register child instance methods as route handlers based on middleware definitions overloaded in get middlewares()
      if (httpVerb === "use") {
        this.router[httpVerb](...handlers);
      } else {
        // @ts-ignore
        this.router[httpVerb](path, ...handlers);
      }
    }
  }
}

export default BaseRouter;
