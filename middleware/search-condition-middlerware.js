const AdvanceSearchCondition = require('./../book-searching-service/advance-search-condition');
const KeywordSearchCondition = require('./../book-searching-service/keyword-search-condition');

module.exports = (req, res, next) => {
    req.searchCondition = makeSearchCondition(req);
    next();
};

function makeSearchCondition(req) {
    if(req.path === '/search-advance') {
        return new AdvanceSearchCondition(req.query.title, req.query.author, req.query.publisher);
    } else if (req.path === '/search-basic'){
        return new KeywordSearchCondition(req.query.keyword);
    }
}