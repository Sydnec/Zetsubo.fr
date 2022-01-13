// function shuffleArray() {
//     self.sort(() => Math.random() - 0.5);
// }

// function PlayMusic() {
//     document.getElementById("music-bar").play();
//     document.getElementById("play-button").style.display = "none";
//     document.getElementById("pause-button").style.display = "inline-block";
// }

// function PauseMusic() {
//     document.getElementById("music-bar").pause();
//     document.getElementById("pause-button").style.display = "none";
//     document.getElementById("play-button").style.display = "inline-block";
// }
// function NextMusic() {
//     let player = console.log(document.getElementById("music-bar"));
//     let actual = player.getAttribute("src");
// }

//    <div class="music-bloc">
//         <img
//             class="music-buttons"
//             id="play-button"
//             src="/image/play.png"
//             alt="play button"
//             height="16px"
//             width="16px"
//             onclick="PlayMusic()"
//         />
//         <img
//             class="music-buttons"
//             id="pause-button"
//             src="/image/pause.png"
//             alt="pause button"
//             height="16px"
//             width="16px"
//             onclick="PauseMusic()"
//         />
//         <p class="music-player" id="song-name">Zetsubo - song_name.mp4</p>
//         <audio
//             id="music-bar"
//             class="music-player"
//             src="music\Trei Degete - Time Time.mp3"
//             onended="NextMusic()"
//         ></audio>
//     </div>