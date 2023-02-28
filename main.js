// toggle menu button
$(document).ready(function() {
    $('#toggle-btn').click(function() {
        $(this).toggleClass('active');
        $('.toggle-menu').toggle();
    });
});