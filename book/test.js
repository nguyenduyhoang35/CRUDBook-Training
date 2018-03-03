const knex = require('../databases/mysqlConnection');
const BookRepository = require('./book-repository');
const Book = require('./book');
const BookFactory = require('./book-factory');
const KeywordSearchCondition = require('./../book-searching-service/keyword-search-condition');
let bookRepo = new BookRepository(knex, new BookFactory());
let book = new Book("One Punch");
book.setId(11);


let keywordSearchCondition = new KeywordSearchCondition("a");
console.log(keywordSearchCondition.describe(knex.select().from('books')).toSQL().sql);
console.log(keywordSearchCondition.describe1(knex.select().from('books')).toSQL().sql);

let query = knex.select().from('books');
keywordSearchCondition.describe(query);
console.log(query.toSQL().sql);
/*bookRepo.searchAdvance("D", "a", "s").then(function (result) {
   console.log(result);
});*/


// bookRepo.search(condition2).then(function (result) {
//     console.log(result);
// });

// bookRepo.edit(book).then(function () {
//     console.log('ok');
// });


/*
bookRepo.add(book).then(function () {
    console.log(book);
});
*/
