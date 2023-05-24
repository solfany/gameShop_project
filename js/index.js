window.onscroll = function(){
    var scroll = window.scrollY;

    $('#video-background').css({
        'top' : 60 + (scroll / 200 ) +'%'
    })
};