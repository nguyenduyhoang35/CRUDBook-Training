const Publisher        = require('../publisher/publisher');
const PublisherFactory = require('../publisher/publisher-factory');
const knex             = require('../databases/mysql-connection');

module.exports = function (req, res, next) {
    getPublisherRowData(knex, req.body.publisher_id).then(function (publisher) {
        req.publisher = publisher;
        next();
    });
};

function getPublisherRowData(knex, publisher_id) {
    return knex.select().from('publishers').where({ id : publisher_id})
        .then(function (results) {
            if (results.length === 0) {
                return new Publisher('');
            }

            let publisher = new PublisherFactory();
            return publisher.makePublisherFromData(results[0]);
        });
}

/*getPublisherRowData(knex, 1).then(function (result) {
    console.log(result);
});*/
