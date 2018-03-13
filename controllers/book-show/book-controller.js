class BookController {

    constructor() {

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
}

module.exports = BookController;
