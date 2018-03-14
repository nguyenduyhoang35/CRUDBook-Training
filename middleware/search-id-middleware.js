const IdSearchCondition = require('../book-searching-service/id-search-condition');

module.exports = function (req, res, next) {
    req.condition = new IdSearchCondition(req.params.id);
    next();
};