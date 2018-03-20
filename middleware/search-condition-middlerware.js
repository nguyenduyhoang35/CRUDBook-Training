module.exports = (request, response, next) => {
    let searchCondition = request.app.get('searchCondition');
    request.searchCondition = searchCondition.makeSearchCondition(request);
    next();
};
