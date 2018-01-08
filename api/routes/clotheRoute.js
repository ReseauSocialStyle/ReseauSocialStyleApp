'use strict';
module.exports = function (app)
{
    var clothes = require ('../controllers/clotheController');

    app.route('clothes')
    .get (clothes.GetAllClothes)
    .post (clothes.CreateClothe);

    app.route('clothes/:clotheId')
    .get (clothes.GetClothe)
    .put (clothes.UpdateClothe)
    .delete(clothes.DeleteClothe);
}