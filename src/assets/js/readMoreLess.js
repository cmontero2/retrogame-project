$(function() {
    $(".descripcion").hide();
    $(".readMore").on("click", function() {
        var txt = $(".descripcion").is(':visible') ? 'Read More' : 'Read Less';
        $(".readMore").text(txt);
        $(this).next(".descripcion").slideToggle(200);
    });
});