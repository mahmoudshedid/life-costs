const mongoose = require('../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const costSchema = new Schema({
    date: Date,
    category: String,
    description: String,
    value: Number
});

costSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
costSchema.set('toJSON', {
    virtuals: true
});

costSchema.findById = function (cb) {
    return this.model('costs').find({ id: this.id }, cb);
};

const Cost = mongoose.model('costs', costSchema);

exports.findById = (id) => {
    return Cost.findById(id)
        .then((result) => {
            result = result.toJSON();
            delete result._id;
            delete result.__v;
            return result;
        });
};

exports.createCost = (costData) => {
    const cost = new Cost(costData);
    return cost.save();
};

exports.list = (perPage, page) => {
    return new Promise((resolve, reject) => {
        Cost.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec(function (err, costs) {
                if (err) reject(err);
                else resolve(costs);
            })
    });
};

exports.patchCost = (id, costData) => {
    return new Promise((resolve, reject) => {
        Cost.findById(id, function (err, cost) {
            if (err) reject(err);
            for (let i in costData) {
                cost[i] = costData[i];
            }
            cost.save(function (err, updatedCost) {
                if (err) return reject(err);
                resolve(updatedCost);
            });
        });
    })

};

exports.removeById = (costId) => {
    return new Promise((resolve, reject) => {
        Cost.remove({ _id: costId }, (err) => {
            if (err) reject(err);
            else resolve(err);
        });
    });
};