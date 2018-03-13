class BookController {

    constructor() {

    }

    createBook(request, response, next) {
        let repo = request.app.get('books');
        repo.add(request.book).then(function (result) {
            response.status(201).json(result.toJson());
        }).catch(function (err) {
            next(err);
        });
    }

    /***
     *
     * @param request
     * @param response
     */
    deleteBook(request, response) {
        let repo = request.app.get('books');
        repo.remove(request.params.id).then(function () {
            response.status(200).json({message:'Success'});
        });
    }

    /***
     *
     * @param request
     * @param response
     */
    editBook(request, response) {
        let repo = request.app.get('books');
        repo.edit(request.book).then(function () {
            response.status(200).json({message:'Success'});
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
            .then((books) =>response.status(200).json(books.map(function (book) {
                return book.toJson();
            })))
            .catch(next)
    }
}

module.exports = BookController;
