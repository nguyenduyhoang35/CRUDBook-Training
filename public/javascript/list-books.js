$(document).ready(function () {
    $.get('/books').then(renderBook);

    function renderBook(books) {
        let template = $('#bookTemplate').html();
        let resultHtml = books.map( (book) => {
            return template.replace(':bookName:', book.title).replace(':id:', book.id).replace(':id', book.id);
        }).join('');
        $('#list-books').html(resultHtml);
    }

    $('#search-basic').change(function () {
        let $this = $(this);
        $.get('/search-basic',{
            keyword : $this.val()
        }).then(renderBook);
    });

    $('#search-advance-click').click(function () {
       $('#search-advance').toggle();
    });

    $('#advance-click').click(function () {
       $.get('/search-advance', {
           title : $('#title').val(),
           author : $('#author').val(),
           publisher : $('#publisher').val()
       }).then(renderBook);
    });
});