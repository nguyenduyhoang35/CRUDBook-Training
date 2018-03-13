class BookController {

    constructor() {

    }

    createBook(request, response, next) {
        let repo = request.app.get('books');
        repo.add(request.book).then(function () {
            response.redirect('/books');
        }).catch(function (err) {
            next(err);
        });
    }

    /***
     *
     * @param request
     * @param response
     * @param next
     */
    search(request, response, next) {
        request.app.get('book.searcher').search(request.searchCondition)
            .then(books => response.render('listbook.njk', {books:books}))
            .catch(next)
    }

    detail(request, response, next) {
        request.app.get('book.searcher').search(request.searchCondition)
            .then(books => response.render('detail.njk', {book:books[0]}))
            .catch(next)
    }

    renderAddBook(request, response, next) {
        request.app.get('publisherProvider').provideAll()
            .then(publishers => response.render('create-book.njk', {publishers:publishers}))
            .catch(next)
    }
}

module.exports = BookController;
