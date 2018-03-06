const knex                   = require('../databases/mysql-connection');
const BookRepository         = require('./book-repository');
const Book                   = require('./book');
const BookFactory            = require('./book-factory');
const Publisher              = require('../publisher/publisher');
const KeywordSearchCondition = require('./../book-searching-service/keyword-search-condition');

let bookRepo  = new BookRepository(knex, new BookFactory());
let publisher = new Publisher('tori ya');
publisher.setId(1);
publisher.setAddress('VP');
publisher.setPhone('0988735492');
let book      = new Book("One Punch");
book.setAuthor('Tori ');
book.setPublisher(publisher);
book.setPrice(8.3);

/*bookRepo.add(book).then(function (result) {
    console.log(result);
});*/

bookRepo.get(1).then(function (results) {
    let book = results.map(function (result) {
        return result;
    });
    console.log(book);
});

//
// let keywordSearchCondition = new KeywordSearchCondition("a");
// console.log(keywordSearchCondition.describe(knex.select().from('books')).toSQL().sql);
//
// let query = knex.select().from('books');
// keywordSearchCondition.describe(query);
// console.log(query.toSQL().sql);
