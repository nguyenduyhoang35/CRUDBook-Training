module.exports = function (request, response, next) {
    request.app.get('bookFactory').makeFromRequest(request.body)
        .then(function (book) {
        request.book = book;
        next();
    });
};