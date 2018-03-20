const SearchConditionMiddleware = require('../middleware/search-condition-middlerware');
const BookController            = require('../controllers/api/book-controller');
const postBookRequest           = require('../middleware/post-book-request');
const checkTitleAuthorNull      = require('../middleware/check-title-author-null');
const checkTitleAuthorLength    = require('../middleware/check-length-title-author');
const putBookRequest            = require('../middleware/put-book-request');
const priceDefaultValue         = require('../middleware/price-default-value');
const Router                    = require('express').Router;

let router          = new Router();
let bookController  = new BookController();

let middlewareOfPost = [checkTitleAuthorNull, checkTitleAuthorLength, priceDefaultValue, postBookRequest];
let middlewareOfPut  = [checkTitleAuthorNull, checkTitleAuthorLength, priceDefaultValue, putBookRequest];

router.get('/books', SearchConditionMiddleware, bookController.search);

router.get('/book/:id', SearchConditionMiddleware, bookController.search);

router.post('/book', middlewareOfPost, bookController.createBook);

router.delete('/book/:id', bookController.deleteBook);

router.put('/book/:id', middlewareOfPut, bookController.editBook);

router.get('/search-basic', SearchConditionMiddleware, bookController.search);

router.get('/search-advance', SearchConditionMiddleware, bookController.search);

router.get('/add', bookController.renderAddBook);

module.exports = router;
