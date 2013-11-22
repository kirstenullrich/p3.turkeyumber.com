//Animate functions from http://johncmolyneux.blogspot.com/2011/12/create-animated-png-from-sequence-of.html
//Thanks!
function animateImage(Index) {
    $("img.animated:eq(" + Index + ")").each(function (Index) {
        if (!$(this).is(":visible")) {
            var intervalID = parseInt($(this).attr("intervalid"));
            clearInterval(intervalID);
        } else {
            var max = parseInt($(this).attr("max"));
            var pattern = $(this).attr("pattern");
            var index = parseInt($(this).attr("index"));
            index++;
            if (index > max) {
                index = 1;
            }
            var src = pattern.replace("#", index);
            $(this).attr("index", index);
            $(this).attr("src", src);
        }
    });
}
function initialiseAnimatedImages() {
    $("img.animated").each(function (Index) {
        var interval = $(this).attr("interval");
        $(this).attr("index", "0");
        var intervalID = setInterval(function () { animateImage(Index); }, interval);
        $(this).attr("intervalid", intervalID);
    });
}
//$(document).ready(function () {
//    initialiseAnimatedImages();
//});

