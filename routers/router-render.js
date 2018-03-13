const SearchConditionMiddleware = require('../middleware/search-condition-middlerware');
const BookController            = require('../controllers/book/book-controller');
const Router                    = require('express').Router;
const postBookRequest           = require('../middleware/post-book-request');
const checkTitleAuthorNull      = require('../middleware/check-title-author-null');
const checkTitleAuthorLength    = require('../middleware/check-length-title-author');
const priceDefaultValue         = require('../middleware/price-default-value');

let router              = new Router();
let bookController      = new BookController();
let middlewareOfPost = [checkTitleAuthorNull, checkTitleAuthorLength, priceDefaultValue, postBookRequest];

router.get('/books', SearchConditionMiddleware, bookController.search);

router.get('/book/:id', SearchConditionMiddleware, bookController.detail);

router.get('/add', bookController.renderAddBook);

router.post('/book', middlewareOfPost, bookController.createBook);

router.get('/', bookController.renderHomeBook);

router.get('/search-basic', SearchConditionMiddleware, bookController.search);

router.get('/search-advance', SearchConditionMiddleware, bookController.search);

router.get('/detail/:id', bookController.renderDetailBook);

module.exports = router;
