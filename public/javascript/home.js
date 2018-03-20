$(document).ready(function () {
    $('#popover-search').popover({
        container:'body',
        html:true,
        content : function () {
            return $('#popover-search-advance').html();
        }
    });
    $('#popover-new').popover({
        container: 'body',
        html : true,
        content : function () {
            return $('#popover-create').html();
        }
    });
    $('[data-toggle="popover"]').popover({
        container:'body',
        html:true,
        content : function () {
            return $('#popover-update').html();
        }
    });
    $('#get-all-books').click(function () {
        $.get("/books",function (data, status) {
        });
    })
});