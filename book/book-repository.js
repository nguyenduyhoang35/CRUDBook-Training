const BookFactory = require('./book-factory');
const Book        = require('./book');

class BookRepository {

    /**
     *
     * @param {BookFactory} factory
     * @param connection
     */
    constructor(connection, factory) {
        this.connection = connection;
        this.factory    = factory;
    }

    /**
     *
     * @param {Book} book
     * @return {promise <void>}
     */
    add(book) {
        return this.connection('books')
            .insert({title:book.getTitle(),author:book.getAuthor(),publisher:book.getPublisher(),price:book.getPrice()})
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
            .update({title:book.getTitle(),author:book.getAuthor(),publisher:book.getPublisher(),price:book.getPrice()})
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

    /**
     * @return {promise <void>}
     */
    all() {
        let factory = this.factory;
        return this.connection.column(['id','title','author','publisher','price'])
                    .select().from('books').where({deleted_at:null})
                    .then(results =>{return results.map(function (element) {
                        return factory.make(element);
                    })});
    }

    get(bookid) {
        let factory = this.factory;
        return this.connection.column(['id','title','author','publisher','price'])
            .select().from('books').where({deleted_at:null, id : bookid}).then(function (result) {
                return factory.make(result);
            });
    }
}

module.exports = BookRepository;
