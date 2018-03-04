class BookController {

    constructor() {

    }

    getAll(request, response) {
        let bookRepo = request.app.get('books');
        bookRepo.all().then(function (books) {
            let results = books.map(function (element) {
                return element.toJson();
            });
            response.status(200).send(results);
        });
    }

    createBook(request, response, next) {
        let repo = request.app.get('books');
        repo.add(request.book).then(function (result) {
            response.status(201).json(result.toJson());
        }).catch(function (err) {
            next(err);
        });
    }

    deleteBook(request, response) {
        let repo = request.app.get('books');
        repo.remove(request.params.id).then(function () {
            response.status(200).json({message:'Success'});
        });
    }

    editBook(request, response) {
        let repo = request.app.get('books');
        repo.edit(request.book).then(function () {
            response.status(200).json({message:'Success'});
        });
    }

    searchBook(request, response) {
        let repo = request.app.get('books');
        repo.get(request.params.id).then(function (result) {
            response.status(200).send(result.toJson());
        });
    }

    search(request, response, next) {
        request.app.get('book.searcher').search(request.searchCondition)
            .then((results) => response.status(200).send(results.map(result => result.toJson())))
            .catch(next)
    }
}

module.exports = BookController;
