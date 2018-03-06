const Book = require('./book');
const Publisher = require('../publisher/publisher');

class BookFactory {

    /**
     *
     * @param {object} bookRawData
     * @return {Book}
     */
    make(bookRawData) {
        let book = new Book(bookRawData.title);
        let publisher = new Publisher(bookRawData.name);
        publisher.setId(bookRawData.publisher_id);
        book.setAuthor(bookRawData.author);
        book.setPublisher(publisher);
        book.setPrice(bookRawData.price);
        book.setId(bookRawData.id);
        return book;
    }
}

module.exports = BookFactory;
