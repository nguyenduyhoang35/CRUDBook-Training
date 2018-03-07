
module.exports = function (request, response, next) {
    request.app.get('bookFactory').makeFromRequest(request.body)
        .then(function (book) {
            book.setId(request.params.id);
            request.book = book;
            next();
        });
    //the deo nao lai co rac trong code the nay????
};