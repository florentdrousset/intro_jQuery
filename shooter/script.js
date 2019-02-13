var moveLoop = setInterval(movingOtter(), 4000);

function movingOtter() {
$(document).ready(function() {
        $( "img" ).animate({
            left: "+=500"
        }, 1000);
        $( "img" ).animate({
            top: "+=500"
        }, 1000);
        $( "img" ).animate({
            left: "-=500"
        }, 1000);
        $( "img" ).animate({
            top: "-=500"
        }, 1000);
    });
}

movingOtter();
startCountdown();
var countdown = 40;
var billboard = document.getElementById("countdown");

    $("img" ).click(function() {
        $( "img" ).attr('src', 'img/explosion.gif');
    });


function startCountdown() {
    var countEvent;
    countEvent = setInterval(desincremente, 1000);
    function desincremente() {
        countdown--;
        billboard.innerHTML = countdown;
        if (countdown == 0) {
            stopCountdown();
        } else {

        }
    }

    function stopCountdown() {
        clearInterval(countEvent);
    }
}