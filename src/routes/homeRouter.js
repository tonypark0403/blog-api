import router from 'koa-router';
import routes from ".";
const api = new router();

api.get(routes.HOME, (ctx) => {
    ctx.body = 'Home';
})

api.get(`${routes.ABOUT}/:name?`, (ctx) => {
    const { name } = ctx.params;
    ctx.body = name ? `${name}'s About` : 'About';
})

api.get(`${routes.POST}`, (ctx) => {
    const { id } = ctx.query;
    ctx.body = id ? `POST #${id}` : 'No ID';
})

export default api;