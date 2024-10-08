import type { CoreApi } from '@strapi/types'
import { factories } from '@strapi/strapi'

const coreRouter = factories.createCoreRouter('api::criminal-proceeding.criminal-proceeding');

const customRouter = (innerRouter: CoreApi.Router.Router, extraRoutes = []) => {
  let routes;
  return {
    get prefix() {
      return innerRouter.prefix;
    },
    get routes() {
      if (!routes) routes = extraRoutes.concat(extraRoutes);
      return routes;
    },
  };
};

const myExtraRoutes = [
  {
    method: 'GET',
    path: '/criminal-proceedings/:id/next-prev',
    handler: 'api::criminal-proceeding.criminal-proceeding.nextPrev',
    config: {
      auth: false,
    },
  },
  {
    method: 'POST',
    path: '/criminal-proceedings/:id/increment-views',
    handler: 'api::criminal-proceeding.criminal-proceeding.incrementViews',
    config: {
      auth: false,
    },
  },
];

export default customRouter(coreRouter, myExtraRoutes)
