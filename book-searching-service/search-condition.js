const AdvanceSearchCondition   = require('./../book-searching-service/advance-search-condition');
const KeywordSearchCondition   = require('./../book-searching-service/keyword-search-condition');
const IdSeatrchCondition       = require('./../book-searching-service/id-search-condition');
const UndeletedSearchCondition = require('./../book-searching-service/undeleted-search-conditon');
const TitleSearchCondition     = require('./../book-searching-service/title-search-condition');

class SearchCondition {

    makeSearchCondition(request) {
        if(request.path === '/search-advance') {
            return new AdvanceSearchCondition(request.query.title, request.query.author, request.query.publisher);
        } else if (request.path === '/search-basic') {
            return new KeywordSearchCondition(request.query.keyword);
        } else if (request.path === '/books') {
            return new UndeletedSearchCondition();
        } else if (request.path.toString().startsWith('/book/')) {
            return new IdSeatrchCondition(request.params.id);
        } else if (request.path === '/title') {
            return new TitleSearchCondition(request.query.keyword);
        }
    }
}

module.exports = SearchCondition;
