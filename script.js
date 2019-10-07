const furnitureApp = {};

// hamburger menu toggle
furnitureApp.hamburgerMenu = () => {
    $('.hamburger').click(function () {
        $('.menu').toggleClass('show');
    });
    $('.exit-responsive').click(function () {
        $('.menu').removeClass('show');
    });

};


// When user clicks on play button,
    // 1) Button will add 'controls' attribute to audio tag
    // 2) Button will disappear
    // 3) Button will trigger audio play

    
furnitureApp.playMusic = () => {
    // caching jQuery selections
    const audioTag = $('#audio');
    const audioSound = $('#audio')[0];
    
    
    // on 'play button' click the audio starts, play button disappears, and default audio display appears
    $('.play-button').on('click', function() {
        audioTag.attr('controls', true);
        audioSound.play();
        $('.play-button-container').addClass('disappear-on-play'); 
    })
}


$(document).ready(function(){
    furnitureApp.hamburgerMenu();
    furnitureApp.playMusic();
})