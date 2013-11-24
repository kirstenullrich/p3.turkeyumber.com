// Preload script from this thread: http://stackoverflow.com/questions/476679/preloading-images-with-jquery
// answered Jun 30 '12 at 12:41 by Gajus Kuizinas

var preload_pictures    = function(picture_urls, callback)
{
    var loaded  = 0;

    for(var i = 0, j = picture_urls.length; i < j; i++)
    {
        var img     = new Image();

        img.onload  = function()
        {                               
            if(++loaded == picture_urls.length && callback)
            {
                callback();
            }
        }

        img.src = picture_urls[i];
        //console.log(picture_urls[i]);
    }
};

preload_pictures(['images/blend-1.png', 
    'images/blend-2.png', 'images/blend-3.png', 'images/blend-4.png',
    'images/blend-5.png', 'images/blend-6.png', 'images/blend-7.png',
    'images/blend-8.png', 'images/blend-9.png', 'images/blend-10.png',
    'images/blend-11.png', 'images/blend-12.png', 'images/blend-13.png',
    'images/blend-14.png', 'images/blend-15.png', 'images/blend-16.png',
    'images/blend-17.png', 'images/blend-18.png', 'images/blend-19.png',
    'images/blend-20.png'], 
    function(){
        console.log("Hi mom!");
});
