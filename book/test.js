const knex                   = require('../databases/mysql-connection');
const BookRepository         = require('./book-repository');
const Book                   = require('./book');
const BookFactory            = require('./book-factory');
const KeywordSearchCondition = require('./../book-searching-service/keyword-search-condition');

let bookRepo = new BookRepository(knex, new BookFactory());
let book     = new Book("One Punch");

book.setId(11);

let keywordSearchCondition = new KeywordSearchCondition("a");
console.log(keywordSearchCondition.describe(knex.select().from('books')).toSQL().sql);

let query = knex.select().from('books');
keywordSearchCondition.describe(query);
console.log(query.toSQL().sql);
