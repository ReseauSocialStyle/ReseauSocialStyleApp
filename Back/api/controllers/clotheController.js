'use strict';

var mongoose = require('mongoose'),
Clothe = mongoose.model('Clothes');

exports.list_all_clothes = function(req, res) {
    Clothe.find({}, function(err, clothe) {
        if (err)
            res.send(err);
        res.json(clothe);
    });
};

exports.create_a_clothe = function(req, res) {
    var new_clothe = new Clothe(req.body);
    new_clothe.save(function(err, clothe) {
        if (err)
            res.send(err);
        res.json(clothe);
    });
};

exports.search_clothes = function(req, res) {
    let text = req.params.text;
    Clothe.find(
        { "name": { "$regex": text, "$options": "i" } }, 
        function(err, clothes) { 
            if (err)
                res.send(err);
            res.json(clothes);
        }
    );
}