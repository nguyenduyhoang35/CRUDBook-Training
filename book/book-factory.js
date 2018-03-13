const Book              = require('./book');
const Publisher         = require('../publisher/publisher');
const PublisherProvider = require('../publisher/publisher-provider');
const knexConnection    = require('../databases/mysql-connection');

let publisherProvider   = new PublisherProvider(knexConnection);

class BookFactory {

    /**
     *
     * @param {object} bookRawData
     * @return {Book}
     */
    makeFromRowData(bookRawData) {
        let book = new Book(bookRawData.title);
        book.setAuthor(bookRawData.author);
        book.setPrice(bookRawData.price);
        book.setId(bookRawData.id);
        let publisher = new Publisher(bookRawData.name);
        publisher.setId(bookRawData.publisher_id);
        book.setPublisher(publisher);
        return book;
    }

    /**
     *
     * @param {object}requestBody
     * @return {Book}
     */
    makeFromRequest(requestBody) {
        let book = new Book(requestBody.title);
        book.setPrice(requestBody.price);
        book.setAuthor(requestBody.author);
        return publisherProvider.provide(requestBody.publisher_id)
            .then((publisher) => {
                book.setPublisher(publisher);
                return book;
            });
    }
}

module.exports = BookFactory;
