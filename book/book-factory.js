const Book      = require('./book');
const Publisher = require('../publisher/publisher');

class BookFactory {

    /**
     *
     * @param {object} bookRawData
     * @return {Book}
     */
    make(bookRawData) {
        let book = new Book(bookRawData.title);
        book.setAuthor(bookRawData.author);
        book.setPrice(bookRawData.price);
        book.setId(bookRawData.id);
        let publisher = new Publisher(bookRawData.name);
        publisher.setId(bookRawData.publisher_id);
        book.setPublisher(publisher);
        return book;
    }
}

module.exports = BookFactory;
