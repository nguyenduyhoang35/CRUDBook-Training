$(document).ready(function () {
    $.get('/books').then(renderBook);

    $.get('/pages').then(renderPageNumber);

    function renderPageNumber(pages) {
        let template = $('#pageNumber').html();
        let resultHtml = pages.map( (page) => {
            return template.replace(':pageNumber:',page);
        }).join('');
        $('#page').html(resultHtml);

    }

    function renderBook(books) {
        let template = $('#bookTemplate').html();
        let resultHtml = books.map( (book) => {
            return template.replace(':bookName:', book.title)
                .replace(':id:', book.id)
                .replace(':book:id', book.id)
                .replace(':author:', book.author);
        }).join('');
        $('#list-books').html(resultHtml);
    }

    $('#form-search-basic').submit(function (event) {
        event.preventDefault();
    });

    $('#search-basic-click').click(function () {

        $('#form-search-basic').toggle();
    });

    $('#search-basic').change(function () {
        let $this = $(this);
        $.get('/search-basic',{
            keyword : $this.val()
        }).then(renderBook);
    });

    $('#search-advance-click').click(function () {
       $('#search-advance').toggle();
    });

    $('#search-advance').submit(function (event) {
        event.preventDefault();
       $.get('/search-advance', {
           title : $('#title').val(),
           author : $('#author').val(),
           publisher : $('#publisher').val()
       }).then(renderBook);
    });

});