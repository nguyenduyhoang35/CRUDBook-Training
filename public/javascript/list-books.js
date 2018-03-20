$(document).ready(function () {
    $.get('/books').then(renderBook);

    function renderBook(books) {
        let template = $('#bookTemplate').html();
        let resultHtml = books.map( (book) => {
            return template.replace(':bookName:', book.title).replace(':id:', book.id);
        }).join('');
        $('#list-books').html(resultHtml);
    }

    $('#search-basic').change(function () {
        let $this = $(this);
        $.get('/search-basic',{
            keyword : $this.val()
        }).then(renderBook);
    });
});