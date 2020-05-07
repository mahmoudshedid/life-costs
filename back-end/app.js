const config = require('./common/config/env.config');
const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const CostRoutes = require('./costs/routes.config');
const webPush = require('web-push')

const app = express();

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

webPush.setVapidDetails(process.env.WEB_PUSH_CONTACT, process.env.PUBLIC_VAPID_KEY, process.env.PRIVATE_VAPID_KEY)

app.post('/notifications/subscribe', (req, res) => {
    const subscription = req.body

    console.log(subscription)

    const payload = JSON.stringify({
        title: 'Hello!',
        body: 'It works.',
    })

    webPush.sendNotification(subscription, payload)
        .then(result => console.log(result))
        .catch(e => console.log(e.stack))

    res.status(200).json({ 'success': true })
});

app.listen(config.port, function () {
    console.log('app listening at port %s', config.port);
}); 