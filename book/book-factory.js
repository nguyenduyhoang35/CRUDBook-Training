const Book = require('./book');
class BookFactory{

    /**
     *
     * @param {object} bookRawData
     * @return {Book}
     */
    make(bookRawData) {
        let book = new Book(bookRawData.title);
        book.setAuthor(bookRawData.author);
        book.setPublisher(bookRawData.publisher);
        book.setPrice(bookRawData.price);
        book.setId(bookRawData.id);
        return book;
    }
}
module.exports = BookFactory;
