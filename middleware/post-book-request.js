const Book = require('../book/book');

module.exports = function (request, response, next) {
    let book = new Book(request.body.title);
    book.setAuthor(request.body.author);
    book.setPublisher(request.publisher);
    book.setPrice(request.body.price);
    request.book = book;
    next();
};