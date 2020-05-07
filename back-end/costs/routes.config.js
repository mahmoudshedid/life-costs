const CostsController = require('./controllers/cost.controller');

exports.routesConfig = function (app) {
    app.post('/costs', [CostsController.insert]);
    app.get('/costs', [CostsController.list]);
    app.get('/costs/statistic', [CostsController.statistic]);
    app.get('/costs/:costId', [CostsController.getById]);
    app.patch('/costs/:costId', [CostsController.patchById]);
    app.delete('/costs/:costId', [CostsController.removeById]);
};