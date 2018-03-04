module.exports = function (request, response, next) {
    if (!request.body.title)
        return response.status(400).json({ message : 'title must not null' });
    if (!request.body.author)
        return response.status(400).json({ message : 'author must not null' });
    next();
};