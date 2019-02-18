import Koa from 'koa';
import Router from 'koa-router';

import routes from './routes';
import homeRouter from './routes/homeRouter';

const app = new Koa();
const router = new Router();

router.use(routes.HOME, homeRouter.routes());
app.use(router.routes()).use(router.allowedMethods());

export default app;