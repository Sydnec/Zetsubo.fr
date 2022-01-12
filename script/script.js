function shuffleArray() {
    self.sort(() => Math.random() - 0.5);
}

function PlayMusic() {
    document.getElementById("music-bar").play();
    document.getElementById("play-button").style.display = "none";
    document.getElementById("pause-button").style.display = "inline-block";
}

function PauseMusic() {
    document.getElementById("music-bar").pause();
    document.getElementById("pause-button").style.display = "none";
    document.getElementById("play-button").style.display = "inline-block";
}
function NextMusic() {
    let player = console.log(document.getElementById("music-bar"));
    let actual = player.getAttribute("src");
}
