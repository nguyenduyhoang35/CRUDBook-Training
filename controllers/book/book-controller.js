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

    deleteBook(request, response, next) {
        let repo = request.app.get('books');
        repo.remove(request.params.id).then(function () {
           response.redirect('/books');
        }).catch(function (err) {
            next(err);
        });
    }

    editBook(request, response, next) {
        let repo = request.app.get('books');
        repo.edit(request.book).then(function () {
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
            .then(books => response.render('list-book.njk', {books : books}))
            .catch(next)
    }

    detail(request, response, next) {
        request.app.get('book.searcher').search(request.searchCondition)
            .then(books => response.render('detail.njk', {book : books[0]}))
            .catch(next)
    }

    renderAddBook(request, response, next) {
        request.app.get('publisherProvider').provideAll()
            .then(publishers => response.render('create-book.njk', {publishers : publishers}))
            .catch(next)
    }

    renderHomeBook(request, response) {
        response.render('home.njk');
    }

    renderEditBook(request, response, next) {
        let publishersPromise = request.app.get('publisherProvider').provideAll();
        let bookPromise       = request.app.get('book.searcher').search(request.condition);
        Promise.all([publishersPromise,bookPromise]).then(function (values) {
            response.render('edit-book.njk',{publishers : values[0], book : values[1][0]});
        }).catch(next);
    }

    renderDetailBook(request, response) {
        response.render('detail.njk');
    }
}

module.exports = BookController;
