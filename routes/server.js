const express = require('express');
const app = express();
const viewsRouter = require('../routes/viewsRouter');
const PORT = process.env.PORT || 8000;
const IP = "192.168.100.9";

//define router function
function routerApi(app) {
    //views
    app.use('/', viewsRouter);
}


routerApi(app)

app.listen(PORT, IP, (err) => {
    if (err) console.log(err);
    console.log("Listening on http://" + IP + ":" + PORT + "/");
});