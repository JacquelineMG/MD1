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


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search


const printSearchResults = function(data, query) {
  const tracks = data.tracks;

  for (const t in tracks) {

    let obj = tracks[t];
    let objArr = Object.values(obj);
    let objStr = "";

    for (let i of objArr) {
      objStr += ` ${i} `;
      console.log(objStr);
    }

    let search = objStr[objStr.search(query)];

    console.log(search);

  }
};

printSearchResults(library, "Woodstock 1952");