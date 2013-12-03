//Animate function adapted from http://johncmolyneux.blogspot.com/2011/12/create-animated-png-from-sequence-of.html
//Thanks!
function animateImage(Index) {
    $("img.animated:eq(" + Index + ")").each(function (Index) {
        if (!$(this).is(":visible")) {
            var intervalID = parseInt($(this).attr("intervalid"));
            clearInterval(intervalID);
        } else {
            var max = 20;
            var pattern = "./images/blend-#.png";
            var index = parseInt($(this).attr("index"));
            index++;
            if (index > max) {
                //changed this so it doesn't loop, made it css so it's cross-browser
                $(this).css('display','none');
                $('#liquid').css('display','inherit');
            }
            var src = pattern.replace("#", index);
            $(this).attr("index", index);
            $(this).attr("src", src);
        }
    });
}
function initialiseAnimatedImages() {
    $("img.animated").each(function (Index) {
        var interval = 50;
        $(this).attr("index", "0");
        var intervalID = setInterval(function () { animateImage(Index); }, interval);
        $(this).attr("intervalid", intervalID);
        //added this so the img is visible on blend button click and animation can happen again after clear button is used
        $('#liquid').css('display','inherit');
        $(this).css('display','inherit');
    });
}
//$(document).ready(function () {
//    initialiseAnimatedImages();
//});

