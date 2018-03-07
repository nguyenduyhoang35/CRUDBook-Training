const Book        = require('./book');

class BookRepository {

    /**
     *
     * @param connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    /**
     *
     * @param {Book} book
     * @return {promise <void>}
     */
    add(book) {
        return this.connection('books')
            .insert({
                      title        : book.getTitle(),
                      author       : book.getAuthor(),
                      publisher_id : book.getPublisher().getId(),
                      price        : book.getPrice()
            })
            .then(insertedIds =>{
                book.setId(insertedIds[0]);
                return book;
            });
    }

    /**
     *
     * @param {Book} book
     * @return {promise <void>}
     */
    edit(book) {
        return this.connection('books')
            .update({title:book.getTitle(),author:book.getAuthor(),publisher_id:book.getPublisher().getId(),price:book.getPrice()})
            .where({id:book.getId()});
    }

    /**
     *
     * @param {int} id
     * @return {promise <void>}
     */
    remove(id) {
        return this.connection('books').update({deleted_at:Date().toString()}).where({id:id});
    }
}

module.exports = BookRepository;
