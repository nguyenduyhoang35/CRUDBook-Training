module.exports = function(request, response, next) {
    if (request.body.title.length > 40)
        return response.status(400).json({ message : 'length must < 40' });
    if (request.body.title.author > 100)
        return response.status(400).json({ message : 'length must < 100' });
    next();
};