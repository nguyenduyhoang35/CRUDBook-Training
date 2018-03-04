module.exports = function (request, response, next) {
    if (!request.body.price)
        request.body.price = 0;
    next();
};