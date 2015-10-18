$(document).ready(function() {
    $('#list').on('click', function(e) {
        e.preventDefault();
        $('#products .item').addClass('list-group-item');
    });

    $('#grid').on('click', function(e) {
        e.preventDefault();
        $('#products .item').removeClass('list-group-item');
        $('#products .item').addClass('grid-group-item');
    });
});