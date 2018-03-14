const searchConditionMiddleware = require('../middleware/search-condition-middlerware');
const BookController            = require('../controllers/book/book-controller');
const Router                    = require('express').Router;
const postBookRequest           = require('../middleware/post-book-request');
const checkTitleAuthorNull      = require('../middleware/check-title-author-null');
const checkTitleAuthorLength    = require('../middleware/check-length-title-author');
const priceDefaultValue         = require('../middleware/price-default-value');
const idSearchCondition         = require('../middleware/search-id-middleware');

let router              = new Router();
let bookController      = new BookController();
let middlewareOfPost = [checkTitleAuthorNull, checkTitleAuthorLength, priceDefaultValue, postBookRequest];

router.get('/books', searchConditionMiddleware, bookController.search);

router.get('/book/:id', searchConditionMiddleware, bookController.renderEditBook);

router.get('/edit/:id', idSearchCondition, bookController.renderEditBook);

router.get('/add', bookController.renderAddBook);

router.post('/edit', );

//router.get('/edit/:id', bookController.renderEditBook);

router.post('/book', middlewareOfPost, bookController.createBook);

router.get('/', bookController.renderHomeBook);

router.get('/search-basic', searchConditionMiddleware, bookController.search);

router.get('/search-advance', searchConditionMiddleware, bookController.search);

router.get('/detail/:id', bookController.renderDetailBook);

module.exports = router;
