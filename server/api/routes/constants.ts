export enum HttpVerb {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
  USE = "USE",
}

export const routes = {
  ProductRoutes: {
    ROOT: '/',
    INFO: '/:id',
    PURCHASE: '/:id/purchase'
  },
};
