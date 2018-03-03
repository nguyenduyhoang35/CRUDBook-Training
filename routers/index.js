const SearchConditionMiddleware = require('../middleware/search-condition-middlerware');
const BookController            = require('../controllers/bookcontroller');
const bookRequest               = require('../middleware/bookrequest');
const checkTitleAuthorNull      = require('../middleware/check-title-author-null-');
const checkTitleAuthorLength    = require('../middleware/check-length-title-author');
const putBook                   = require('../middleware/put-book');
const priceNull                 = require('../middleware/price-default-value');
const Router                    = require("express").Router;

let router          = new Router();
let bookController  = new BookController();

router.get('/books', bookController.getAll);

router.get('/book/:id', bookController.searchBook);

router.post("/book", checkTitleAuthorNull, checkTitleAuthorLength, priceNull, bookRequest, bookController.createBook);

router.delete('/book/:id', bookController.deleteBook);

router.put('/book/:id', checkTitleAuthorNull, checkTitleAuthorLength, priceNull, putBook, bookController.editBook);

router.get('/search-basic', SearchConditionMiddleware, bookController.search);

router.get('/search-advance', SearchConditionMiddleware, bookController.search);

module.exports = router;
