const AdvanceSearchCondition = require('./../book-searching-service/advance-search-condition');
const KeywordSearchCondition = require('./../book-searching-service/keyword-search-condition');

module.exports = (request, response, next) => {
    request.searchCondition = makeSearchCondition(request);
    next();
};

function makeSearchCondition(request) {
    if(request.path === '/search-advance') {
        return new AdvanceSearchCondition(request.query.title, request.query.author, request.query.publisher);
    } else if (request.path === '/search-basic'){
        return new KeywordSearchCondition(request.query.keyword);
    }
}
