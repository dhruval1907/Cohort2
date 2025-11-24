var audio = new Audio();

var buttons = document.querySelectorAll("button");

buttons.forEach(function (btn) {

    btn.addEventListener("click", function () {

        var song = btn.getAttribute("data-song");

        if (!song) return;

        audio.src = song;

        audio.play();

        console.log("Playing:", song);
    });

});
