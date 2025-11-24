// Ek hi music player banate hain
var audio = new Audio();

// Sab button ko select kar lo
var buttons = document.querySelectorAll("button");

// Har button par click event lagate hain
buttons.forEach(function (btn) {

    btn.addEventListener("click", function () {

        // Button me data-song attribute se mp3 ka path milega
        var song = btn.getAttribute("data-song");

        // Agar is button me song na ho toh kuch mat karo
        if (!song) return;

        // Pehle audio src set karo
        audio.src = song;

        // Fir play karo
        audio.play();

        console.log("Playing:", song);
    });

});
