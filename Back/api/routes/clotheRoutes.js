'use strict';

module.exports = function(app) {
    var clothe = require('../controllers/clotheController');

    // clothe Routes
    app.route('/clothes')
        .get(clothe.list_all_clothes)
        .post(clothe.create_a_clothe);

    app.route('/clothes/search/:text')
        .get(clothe.search_clothes);

//     app.route('/tasks/:taskId')
//         .get(clothe.read_a_task)
//         .put(clothe.update_a_task)
//         .delete(clothe.delete_a_task);
};