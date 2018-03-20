class BookController {

    constructor() {

    }

    /***
     *
     * @param request
     * @param response
     * @param next
     */
    createBook(request, response, next) {
        let repo = request.app.get('books');
        repo.add(request.book).then(function () {
            response.redirect('/');
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
    deleteBook(request, response, next) {
        let repo = request.app.get('books');
        repo.remove(request.params.id).then(function () {
           response.redirect('/');
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
    editBook(request, response, next) {
        let repo = request.app.get('books');
        repo.edit(request.book).then(function () {
            response.redirect('/');
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
            .then(books => response.json(books))
            .catch(next);
    }

    searchSuggest(request, response, next) {
        request.app.get('book.searcher').search(request.searchCondition)
            .then(books => response.json(books))
            .catch(next);
    }

    validTitle(request, response, next) {
        request.app.get('book.searcher').search(request.searchCondition)
            .then(books =>{
                if (books.length > 0) {
                    response.json({message : true});
                } else {
                    response.json({message : false});
                }
            })
            .catch(next)
    }

    /***
     *
     * @param request
     * @param response
     * @param next
     */
    detail(request, response, next) {
        request.app.get('book.searcher').search(request.searchCondition)
            .then(books => response.render('detail.njk', {book : books[0]}))
            .catch(next)
    }

    /***
     *
     * @param request
     * @param response
     * @param next
     */
    renderAddBook(request, response, next) {
        request.app.get('publisherProvider').provideAll()
            .then(publishers => response.render('create-book.njk', {publishers : publishers}))
            .catch(next)
    }

    /***
     *
     * @param request
     * @param response
     * @render home view
     */
    renderHomeBook(request, response) {
        response.render('list-book.njk');
    }

    /***
     *
     * @param request
     * @param response
     * @param next
     */
    renderEditBook(request, response, next) {
        let publishersPromise = request.app.get('publisherProvider').provideAll();
        let bookPromise       = request.app.get('book.searcher').search(request.condition);
        Promise.all([publishersPromise,bookPromise]).then(function (values) {
            response.render('edit-book.njk',{publishers : values[0], book : values[1][0]});
        }).catch(next);
    }

    /***
     *
     * @param request
     * @param response
     */
    renderDetailBook(request, response) {
        response.render('detail.njk');
    }

    renderTest(request, response) {
        response.render('ajax-test.njk');
    }
}

module.exports = BookController;
