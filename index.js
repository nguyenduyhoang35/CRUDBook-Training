const express        = require('express');
const bodyParser     = require('body-parser');
const BookRepository = require('./book/book-repository');
const knex           = require('./databases/mysql-connection');
const router         = require('./routers');
const app            = express();
const Factory        = require('./book/book-factory');
const Searcher       = require('./book-searching-service/searcher');
const BookFactory    = require('./book/book-factory');

let bookFactory = new Factory();

app.set('books', new BookRepository(knex));

app.set('bookFactory', new BookFactory());

app.set('book.searcher', new Searcher(knex, bookFactory));

app.use(bodyParser.json());

app.use('/', router);

app.listen(8080, function () {
   console.log('Server running in port 8080!');
});
