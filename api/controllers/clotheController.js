'use strict';

var mongoose = require('mongoose');
var Clothes = mongoose.model('Clothes')

exports.GetAllClothes = function (req, res) {
    Clothes.find({}, function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
};

exports.CreateClothe = function (req, res) {
    var newClothe = new Clothes(req.body);
    newClothe.save(function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    })
}

exports.GetClothe = function (req, res) {
    Clothes.findById(req.params.clotheId, function (err, task) {
        if (err)
            req.send(err);
        req.json(task);
    })

    exports.UpdateClothe = function (req, res) {

        Clothes.findOnAndUpdate({ _id: rq.params.clotheId }, )
    }
}