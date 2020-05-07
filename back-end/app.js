const config = require('./common/config/env.config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const CostRoutes = require('./costs/routes.config');

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
        return res.send(200);
    } else {
        return next();
    }
});

app.use(bodyParser.json());
CostRoutes.routesConfig(app);

app.listen(config.port, function () {
    console.log('app listening at port %s', config.port);
}); 