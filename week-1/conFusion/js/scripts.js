$(document).ready(function () {
    $("#mycarousel").carousel({ interval: 1000 });
    $("#carouselButton").click(function () {
        if ($(this).children('span').hasClass("fa-pause")) {
            $("#mycarousel").carousel('pause');
            $(this).children('span').removeClass("fa-pause");
            $(this).children('span').addClass("fa-play");
        } else {
            $("#mycarousel").carousel('cycle');
            $(this).children('span').removeClass("fa-play");
            $(this).children('span').addClass("fa-pause");
        }
    });
    $("#loginButton").click(function () {
        $("#loginModal").modal('show');
    });
    $("#reserveButton").click(function () {
        $("#reserveModal").modal('show');
    });
});