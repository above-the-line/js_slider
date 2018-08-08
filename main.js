//define variables array, arrow objects, current position 
let theArrayOfSlides = document.querySelectorAll(".slide");
let arrowLeftObject = document.querySelector("#left-arrow");
let arrowRightObject = document.querySelector("#right-arrow");
let currentlyDisplayedSlide = 0;


// hide every single slide, we start page with them showing, but we want to hide them all and only call a slide on click
function hideEverySlide() {
    for (let i=0; i < theArrayOfSlides.length; i++)
    {
    theArrayOfSlides[i].style.display = "none";
    }
}


//TEST HIDE FUNCTION 
//hideEverySlide();


// show first slide or initialise the slider
function initialiseCarousel(){
    hideEverySlide();
    theArrayOfSlides[currentlyDisplayedSlide].style.display = "table";
}

//TEST INITIALISER
//showFirstSlide();


//change position left, this will be called on click or keystroke 
function moveSlideLeft(){
    hideEverySlide();
    theArrayOfSlides[currentlyDisplayedSlide -1].style.display = "table";
    currentlyDisplayedSlide--;
}

//TEST SLIDE LEFT
//moveSlideLeft();

//change position right, this will be called on click or keystroke 
function moveSlideRight(){
    hideEverySlide();
    theArrayOfSlides[currentlyDisplayedSlide +1].style.display = "table";
    currentlyDisplayedSlide++;
}




//TEST SLIDE RIGHT
//moveSlideRight();

//assign event listener to left arrow object and define execution condition
arrowLeftObject.addEventListener("click", moveLeftFunction);

function moveLeftFunction(){
    if (currentlyDisplayedSlide === 0){
    currentlyDisplayedSlide = theArrayOfSlides.length;
    }
    moveSlideLeft();
};

/*
function leftArrowKeyPressFunction(){
    moveSlideLeft();
};
*/


//listen for mouse click on right arrow and execute function when it happens
arrowRightObject.addEventListener("click", moveRightFunction);

function moveRightFunction(){
    if (currentlyDisplayedSlide === theArrayOfSlides.length - 1){
    currentlyDisplayedSlide = -1;
    }
    moveSlideRight();
}


initialiseCarousel();

 
// loads IFrame Player API code asynchronously
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
console.log(firstScriptTag);

// This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'tv5vjBNvy3o',
    height: '100%',
    width: '100%',
    wmode: "opaque",
    playerVars: {
        autoplay: 1,        // Auto-play the video on load
        controls: 0,        // Hide pause/play buttons in player
        rel: 0,             // Hide related videos ribbon on pause
        showinfo: 0,        // Hide the video title
        modestbranding: 1,  // Hide the Youtube Logo
        fs: 0,              // Hide the full screen button
        cc_load_policy: 0,  // Hide closed captions
        iv_load_policy: 3,  // Hide the Video Annotations
        autohide: 0         // Hide video controls when playing
      },
    events: {
    'onReady': onPlayerReady, 
    'onStateChange': onStateChange
    } 
  });
}
function onPlayerReady(event) {
    player.mute(event);
    event.target.playVideo();
    player.setPlaybackQuality(auto);
    
}
function onStateChange(event) {
        if (event.data === YT.PlayerState.ENDED) {
            player.playVideo(); 
        }   
}

/*




    //On click left arrow run function cycle back

    //Fnct: if current position = less than 0 then set next position to array length
             else next position = current pos --

    //Fnct: listen for mouse click on right arrow

    //on click of right arrow run function cycle forward

    //next position = current position ++
    if next position = array length + 1 then set next position to 0
    
    
    getelementbyid

*/


/*
var util = { };

window.addEventListener('keydown', function(e){

    var key = util.key[e.which];
    if( key ){
        e.preventDefault();
    }

    if( key === 'left' ){        
      console.log("you pressed left");
    }
})

util.key = { 
  9: "tab",
  13: "enter",
  16: "shift",
  18: "alt",
  27: "esc",
  33: "rePag",
  34: "avPag",
  35: "end",
  36: "home",
  37: "left",
  38: "up",
  39: "right",
  40: "down",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12"
}

*/