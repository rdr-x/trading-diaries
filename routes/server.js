const express = require('express');
const app = express();
const viewsRouter = require('./viewsRouter');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');
const tradeRouter = require('./trade.router');
const traderRouter = require('./trader.router');
const PORT = process.env.PORT || 8000;
const IP = "192.168.43.231";

//define router function
function routerApi(app) {
    const router = express.Router();
    //views
    app.use('/', viewsRouter);
    //api
    app.use('/api/v1', router);
    router.use('/users', usersRouter);
    router.use('/categories', categoriesRouter);
    router.use('/trades', tradeRouter);
    router.use('/traders', traderRouter);
};


routerApi(app)

app.listen(PORT, IP, (err) => {
    if (err) console.log(err);
    console.log("Listening on http://" + IP + ":" + PORT + "/");
});
