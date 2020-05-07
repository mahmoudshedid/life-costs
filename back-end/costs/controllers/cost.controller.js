const CostModel = require('../models/costs.model');

exports.insert = (req, res) => {
    CostModel.createCost(req.body)
        .then((result) => {
            res.status(201).send({ id: result._id });
        });
};

exports.list = (req, res) => {
    let limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 10;
    let page = 0;
    if (req.query) {
        if (req.query.page) {
            req.query.page = parseInt(req.query.page);
            page = Number.isInteger(req.query.page) ? req.query.page : 0;
        }
    }
    CostModel.list(limit, page)
        .then((result) => {
            res.status(200).send(result);
        })
};

exports.getById = (req, res) => {
    CostModel.findById(req.params.costId)
        .then((result) => {
            res.status(200).send(result);
        });
};

exports.statistic = (req, res) => {
    CostModel.statistic()
        .then((result) => {
            res.status(200).send(result);
        });
};

exports.patchById = (req, res) => {
    CostModel.patchCost(req.params.costId, req.body)
        .then((result) => {
            res.status(204).send({});
        });

};

exports.removeById = (req, res) => {
    CostModel.removeById(req.params.costId)
        .then((result) => {
            res.status(204).send({});
        });
};