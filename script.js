const audio =
    document.getElementById("audio");


const audioPlayer =
    document.getElementById("audioPlayer");


const playingTitle =
    document.getElementById("playingTitle");


const progress =
    document.getElementById("progress");


const closePlayer =
    document.getElementById("closePlayer");



/* ========================= */
/* ALL AUDIO BUTTONS */
/* ========================= */

const buttons =
    document.querySelectorAll(
        ".audio-card"
    );



buttons.forEach(button => {

    button.addEventListener(
        "click",
        function () {


            /*
            Get the audio filename
            */

            const file =
                this.dataset.audio;


            /*
            Get the title
            */

            const title =
                this.dataset.title;


            /*
            Stop anything currently playing
            */

            audio.pause();

            audio.currentTime = 0;


            /*
            Load the new recording
            */

            audio.src =
                "audio/" + file;


            /*
            Change player text
            */

            playingTitle.textContent =
                "Playing: " + title;


            /*
            Show player
            */

            audioPlayer.classList.remove(
                "hidden"
            );


            /*
            Start audio
            */

            audio.play();

        }
    );

});



/* ========================= */
/* PROGRESS BAR */
/* ========================= */

audio.addEventListener(
    "timeupdate",
    function () {


        if (!audio.duration) {

            return;

        }


        const percentage =

            (
                audio.currentTime /
                audio.duration
            ) * 100;


        progress.style.width =
            percentage + "%";

    }
);



/* ========================= */
/* WHEN AUDIO FINISHES */
/* ========================= */

audio.addEventListener(
    "ended",
    function () {

        progress.style.width =
            "100%";

    }
);



/* ========================= */
/* CLOSE PLAYER */
/* ========================= */

closePlayer.addEventListener(
    "click",
    function () {


        audio.pause();


        audio.currentTime = 0;


        audioPlayer.classList.add(
            "hidden"
        );


        progress.style.width =
            "0%";

    }
);