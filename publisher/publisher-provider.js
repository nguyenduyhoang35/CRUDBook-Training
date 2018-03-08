const Publisher      = require('./publisher');

class PublisherProvider {

     constructor(connection) {
         this.connection = connection;
     }

    /**
     *
     * @param {int} publisher_id
     * @return {Publisher} publisher
     */
    provide(publisher_id) {
        return this.connection.select().from('publishers').where({id : publisher_id})
            .then(function (publisherRowData) {
                if (publisherRowData.length === 0) {
                    return new Publisher('');
                }
                let publisher = new Publisher(publisherRowData[0].name);
                publisher.setAddress(publisherRowData[0].address);
                publisher.setPhone(publisherRowData[0].phone_number);
                publisher.setId(publisherRowData[0].id);
                return publisher;
            });
    }
}

module.exports = PublisherProvider;
