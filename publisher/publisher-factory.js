const Publisher = require('./publisher');

class PublisherFactory {

    makePublisherFromData(publisherRowData) {
        let publisher = new Publisher(publisherRowData.name);
        publisher.setId(publisherRowData.id);
        publisher.setPhone(publisherRowData.phone_number);
        publisher.setAddress(publisherRowData.address);
        return publisher;
    }
}

module.exports = PublisherFactory;
