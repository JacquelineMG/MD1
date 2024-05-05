const library = {

  tracks:
  { t01: { id: "t01",
    name: "Code Monkey",
    artist: "Jonathan Coulton",
    album: "Thing a Week Three" },
  t02: { id: "t02",
    name: "Model View Controller",
    artist: "James Dempsey",
    album: "WWDC 2003"},
  t03: { id: "t03",
    name: "Four Thirty-Three",
    artist: "John Cage",
    album: "Woodstock 1952"}
  },

  playlists:
  { p01: { id: "p01",
    name: "Coding Music",
    tracks: ["t01", "t02"]
  },
  p02: { id: "p02",
    name: "Other Playlist",
    tracks: ["t03"]
  }
  },

  printPlaylists: function() {
    const playlists = this.playlists;
    for (const p in playlists) {
      console.log(`${playlists[p].id}: ${playlists[p].name} - ${playlists[p].tracks.length} tracks`);
    }
  },

  printTracks: function() {
    const tracks = this.tracks;
    for (const t in tracks) {
      console.log(`${tracks[t].id}: ${tracks[t].name} by ${tracks[t].artist} (${tracks[t].album})`);
    }
  },

  printPlaylist: function(playlistId) {
    const playlist = this.playlists[playlistId];
    const tracksArr = playlist.tracks;
    const tracks = this.tracks;

    console.log(`${playlistId}: ${playlist.name} - ${tracksArr.length} tracks`);
    
    for (const t of tracksArr) {
      console.log(`${tracks[t].id}: ${tracks[t].name} by ${tracks[t].artist} (${tracks[t].album})`);
    }
  },

  addTrackToPlaylist: function(trackId, playlistId) {
    const tracks = this.playlists[playlistId].tracks;
    tracks.push(trackId);
  },

  generateIdNum: function(type) {
    const list = this[type];
    let count = 1;
    let prefix = "";
  
    if (type === "tracks") {
      prefix = "t";
    }
    if (type === "playlists") {
      prefix = "p";
    }
    for (const l in list) {
      count ++;
    }
    if (count < 10) {
      return `${prefix}0${count}`;
    }
    if (count >= 10) {
      return `${prefix}${count}`;
    }
  },

  addTrack: function(name, artist, album) {
    const trackNum = this.generateIdNum("tracks");
    this.tracks[trackNum] = {
      id: trackNum,
      name: name,
      artist: artist,
      album: album
    };
  },

  addPlaylist: function(name) {
    const playlistNum = this.generateIdNum("playlists");
    this.playlists[playlistNum] = {
      id: playlistNum,
      name: name,
      tracks: []
    };
  },

  printSearchResults: function(query) {
    const tracks = this.tracks;
    const querySearch = new RegExp(query, "i");
  
    for (const t in tracks) {
      const track = tracks[t];
      
      if (querySearch.test(track.name) || querySearch.test(track.artist) || querySearch.test(track.album)) {
        console.log(`${tracks[t].id}: ${tracks[t].name} by ${tracks[t].artist} (${tracks[t].album})`);
      }
    }
  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

console.log("------------------------");
console.log("printPlaylists:");

library.printPlaylists();


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

console.log("------------------------");
console.log("printTracks:");

library.printTracks();


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

console.log("------------------------");
console.log("printPlaylist:");
library.printPlaylist("p01");


// adds an existing track to an existing playlist

library.addTrackToPlaylist("t02", "p02");


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
// const generateUid = function() {
//   return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
// };

// adds a track to the library

library.addTrack("Video Killed the Radio Star", "Bruce Woolley", "English Garden");
library.addTrack("Song Title", "Good Singer", "Tracks'A'Plenty");
library.addTrack("Title of Songs", "Okay Singer III", "Shiny Disc");


// adds a playlist to the library

library.addPlaylist("Trial and Error");
library.addPlaylist("What a playlist");

library.addTrackToPlaylist("t04", "p03");
library.addTrackToPlaylist("t05", "p03");
library.addTrackToPlaylist("t06", "p04");


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

console.log("------------------------");
console.log("printSearchResult:");

library.printSearchResults("singer");