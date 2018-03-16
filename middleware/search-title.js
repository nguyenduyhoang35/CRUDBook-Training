const knex = require('../databases/mysql-connection');
module.exports = function (req, res, next) {
    validTitle(req).then(function (bookRawData) {
       req.title = bookRawData[0].title;
       next();
    });
};

function validTitle(req) {
    return knex('books').where('title', req.query.keyword);
}