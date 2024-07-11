import { apiCall } from "./api.js";
async function loadSong() {
  const URL = " https://itunes.apple.com/search?term=arijit";
  try {
    const response = await apiCall(URL);
    const obj = await response.json();
    console.log(obj);
    printSongs(obj.results);
    console.log("code run");
  } catch (err) {
    console.log("error in fetch call", err);
  }
}
loadSong();

function printSongs(songs) {
  for (var i = 0; i < songs.length; i++) {
    printSong(songs[i]);
  }
}

function printSong(song) {
  console.log(song);
  const card = `<div class="col-4 card" style="width: 18rem;">
     <img src="${song.artworkUrl100}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">${song.trackCensoredName}</h5>
       <p class="card-text">${song.artistName} ${song.collectionName}</p>
       <a href="#" class="btn btn-primary">Add To My Playlist</a>
       <a href="#" class="btn btn-primary">Play</a>
     </div>
   </div>`;
  const div = document.getElementById("songs");
  div.innerHTML = div.innerHTML + card;
}