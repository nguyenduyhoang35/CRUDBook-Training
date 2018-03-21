const searchConditionMiddleware = require('../middleware/search-condition-middlerware');
const BookController            = require('../controllers/book/book-controller');
const Router                    = require('express').Router;
const putBookRequest            = require('../middleware/put-book-request');
const postBookRequest           = require('../middleware/post-book-request');
const checkTitleAuthorNull      = require('../middleware/check-title-author-null');
const checkTitleAuthorLength    = require('../middleware/check-length-title-author');
const priceDefaultValue         = require('../middleware/price-default-value');
const idSearchCondition         = require('../middleware/search-id-middleware');

let router              = new Router();
let bookController      = new BookController();
let middlewareOfPost = [checkTitleAuthorNull, checkTitleAuthorLength, priceDefaultValue, postBookRequest];
let middlewareOfPut  = [checkTitleAuthorNull, checkTitleAuthorLength, priceDefaultValue, putBookRequest];

router.get('/books', searchConditionMiddleware, bookController.search);

//router.get('/book/:id', searchConditionMiddleware, bookController.renderEditBook);
router.get('/delete/:id', bookController.deleteBook);

router.get('/edit/:id', idSearchCondition, bookController.renderEditBook);

router.post('/edit/:id', middlewareOfPut, bookController.editBook);

router.get('/add', bookController.renderAddBook);

router.post('/book', middlewareOfPost, bookController.createBook);

router.get('/', bookController.renderHomeBook);

router.get('/search-basic', searchConditionMiddleware, bookController.searchSuggest);

router.get('/search-advance', searchConditionMiddleware, bookController.search);

router.get('/detail/:id', bookController.renderDetailBook);

router.get('/test', bookController.renderTest);

router.get('/title', searchConditionMiddleware, bookController.validTitle);

router.get('/pages', bookController.pageNumber);

module.exports = router;
