const Condition = require('../book-searching-service/keyword-search-condition');

module.exports = function (request,response,next) {
    request.condition = new Condition({id:request.params.id});
    next();
};