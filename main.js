// hello world sandbox
var api = require("./routes/api.js");

Sandbox.define('/api/helloWorld', 'GET', api.helloWorld);

var library = require("./routes/library.js");

Sandbox.define('/library', 'GET', library.getLibrary);

Sandbox.define('/artists', 'GET', library.getArtists);
Sandbox.define('/artists/{artistId}', 'GET', library.getArtistData);
Sandbox.define('/artists/{artistId}/albums', 'GET', library.getAlbumsForArtist);
Sandbox.define('/artists/{artistId}/songs', 'GET', library.getSongsForArtist);

Sandbox.define('/albums', 'GET', library.getAlbums);
Sandbox.define('/albums/{albumId}', 'GET', library.getAlbumData);
Sandbox.define('/albums/{albumId}/songs', 'GET', library.getSongsForAlbum);

Sandbox.define('/songs', 'GET', library.getSongs);
Sandbox.define('/songs', 'POST', library.uploadSong);
Sandbox.define('/songs/{songId}', 'GET', library.getSongData);
Sandbox.define('/songs/{songId}', 'PATCH', library.updateSongData);
Sandbox.define('/songs/{songId}', 'DELETE', library.deleteSong);

Sandbox.define('/playlists', 'GET', library.getPlaylists);
Sandbox.define('/playlists', 'POST', library.createPlaylist);
Sandbox.define('/playlists/{playlistId}', 'GET', library.getPlaylistInfo);
Sandbox.define('/playlists/{playlistId}', 'PATCH', library.updatePlaylistInfo);
Sandbox.define('/playlists/{playlistId}', 'DELETE', library.deletePlaylist);

Sandbox.define('/playlists/{playlistId}/songs', 'GET', library.getPlaylistSongs);
Sandbox.define('/playlists/{playlistId}/songs', 'POST', library.addSongToPlaylist);
Sandbox.define('/playlists/{playlistId}/songs/{position}', 'DELETE', library.removeSongFromPlaylist);