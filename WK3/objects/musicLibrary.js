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
  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks



const printPlaylists = function(data) {
  const playlists = data.playlists;

  for (const p in playlists) {
    console.log(`${playlists[p].id}: ${playlists[p].name} - ${playlists[p].tracks.length} tracks`);
  }
};

printPlaylists(library);



// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)



const printTracks = function(data) {
  const tracks = data.tracks;

  for (const t in tracks) {
    console.log(`${tracks[t].id}: ${tracks[t].name} by ${tracks[t].artist} (${tracks[t].album})`);
  }
};

printTracks(library);




// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)


const printPlaylist = function(data, playlistId) {
  const playlist = data.playlists[playlistId];
  const tracksArr = playlist.tracks;
  const tracks = data.tracks;

  console.log(`${playlistId}: ${playlist.name} - ${tracksArr.length} tracks`);

  for (const t of tracksArr) {
    console.log(`${tracks[t].id}: ${tracks[t].name} by ${tracks[t].artist} (${tracks[t].album})`);
  }
};

printPlaylist(library, "p01");


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(data, trackId, playlistId) {
  const tracks = data.playlists[playlistId].tracks;
  tracks.push(trackId);
};

addTrackToPlaylist(library, "t02", "p02");



// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
// const generateUid = function() {
//   return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
// };


const generateIdNum = function(data, type) {
  const list = data[type];
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

};



// adds a track to the library
const addTrack = function(data, name, artist, album) {
  const trackNum = generateIdNum(data, "tracks");

  data.tracks[trackNum] = {
    id: trackNum,
    name: name,
    artist: artist,
    album: album
  };

};

addTrack(library, "Video Killed the Radio Star", "Bruce Woolley", "English Garden");
addTrack(library, "Song Title", "Good Singer", "Tracks'A'Plenty");
addTrack(library, "Title of Songs", "Okay Singer III", "Shiny Disc");
 

// adds a playlist to the library
const addPlaylist = function(data, name) {
  const playlistNum = generateIdNum(data, "playlists");

  data.playlists[playlistNum] = {
    id: playlistNum,
    name: name,
    tracks: []
  };
};

addPlaylist(library, "Trial and Error");
addPlaylist(library, "What a playlist");

addTrackToPlaylist(library, "t04", "p03");
addTrackToPlaylist(library, "t05", "p03");
addTrackToPlaylist(library, "t06", "p04");



// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {
  const queryLC = query.toLowerCase();
  console.log(queryLC);
};

printSearchResults("DISFOSDJF Ssfjsi ");