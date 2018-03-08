module.exports = function(request, response, next) {
    //message ngu nhu bo`
    if (request.body.title.length > 40)
        return response.status(400).json({ message : 'title must < 40 character' });
    if (request.body.title.author > 100)
        return response.status(400).json({ message : 'author must < 100 character'});
    next();
};