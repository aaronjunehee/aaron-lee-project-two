// hamburger menu toggle
$(function () {
    $('.hamburger').click(function () {
        $('.menu').toggleClass('show');
    });
    $('.exit-responsive').click(function () {
        $('.menu').removeClass('show');
    });

});


// When user clicks on play button,
    // 1) Button will disappear
    // 2) Button will trigger audio play
    // 3) Button will add 'controls' attribute to audio tag

const audio = $('#audio');

playMusic = () => {
    $('.play-button').on('click', function() {
        audio.attr('controls', true);
        $('#audio')[0].play();
        $('.play-button-container').addClass('disappear-on-play'); 
    })
}


$(document).ready(function(){
    playMusic();
    
})