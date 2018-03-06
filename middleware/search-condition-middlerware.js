const AdvanceSearchCondition   = require('./../book-searching-service/advance-search-condition');
const KeywordSearchCondition   = require('./../book-searching-service/keyword-search-condition');
const IdSeatrchCondition       = require('./../book-searching-service/id-search-condition');
const UndeletedSearchCondition = require('./../book-searching-service/undeleted-search-conditon');

module.exports = (request, response, next) => {
    request.searchCondition = makeSearchCondition(request);
    next();
};

function makeSearchCondition(request) {
    if(request.path === '/search-advance') {
        return new AdvanceSearchCondition(request.query.title, request.query.author, request.query.publisher);
    } else if (request.path === '/search-basic') {
        return new KeywordSearchCondition(request.query.keyword);
    } else if (request.path === '/books') {
        return new UndeletedSearchCondition();
    } else if (request.path.toString().startsWith('/book/')) {
        return new IdSeatrchCondition(request.params.id);
    }
}
