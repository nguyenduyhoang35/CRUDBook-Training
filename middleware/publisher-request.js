const Publisher = require('../publisher/publisher');
const knex      = require('../databases/mysql-connection');
module.exports = function (req, res, next) {
    getPublisherRowData(knex, req.body.publisher).then(function (publisher) {
        console.log(publisher);
        req.publisher = publisher;
        console.log(req.publisher);
        next();
    });
};

function getPublisherRowData(knex, publisher_id) {
    return knex.select().from('publishers').where({ id : publisher_id})
        .then(function (results) {
                let publisher = new Publisher(results[0].name);
                publisher.setId(results[0].id);
                publisher.setAddress(results[0].address);
                publisher.setPhone(results[0].phone_number);
                return publisher;
            });
}

/*getPublisherRowData(knex, 1).then(function (result) {
    console.log(result);
});*/
