const Publisher      = require('./publisher');

class PublisherProvider {

     constructor(connection) {
         this.connection = connection;
     }

    /**
     *
     * @param {int} publisher_id
     */
    provide(publisher_id) {
        return this.connection.select().from('publishers').where({id : publisher_id}).then(function (publisherRowData) {
            let publisher = new Publisher(publisherRowData[0].name);
            publisher.setAddress(publisherRowData[0].address);
            publisher.setPhone(publisherRowData.phone_number);
            publisher.setId(publisher.id);
            return publisher;
        });
    }
}

module.exports = PublisherProvider;
