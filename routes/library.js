exports.getLibrary = function(req, res) {
    res.status(200);
    res.type('json');
    res.render('library');
}

exports.getArtists = function(req, res) {
    res.status(200);
    res.type('json');
    res.render('artistsList');
}

exports.getArtistData = function(req, res) {
    res.status(200);
    res.type('json');
    res.render('artistData');
}

exports.getAlbumsForArtist = function(req, res) {
    res.status(200);
    res.type('json');
    res.render('albumsListArtist');
}

exports.getSongsForArtist = function(req, res) {
    res.status(200);
    res.type('json');
    res.render('songsListArtist');
}

exports.getAlbums = function(req, res) {
    res.status(200);
    res.type('json');
    res.render('albumsList');
}

exports.getAlbumData = function(req, res) {
    res.status(200);
    res.type('json');
    res.render('albumData');
}

exports.getSongsForAlbum = function(req, res) {
    res.status(200);
    res.type('json');
    res.render('songsListAlbum');
}

exports.getSongs = function(req, res) {
    res.status(200);
    res.type('json');
    res.render('songsList');
}

exports.uploadSong = function(req, res) {
    res.status(200);
    res.type('json');
    res.render('uploadSong');
}

exports.getSongData = function(req, res) {
    res.status(200);
    res.type('json');
    res.render('songInfo');
}

exports.updateSongData = function(req, res) {
    res.status(200);
    res.type('json');
    res.render('uploadSong');
}

exports.deleteSong = function(req, res) {
    res.status(200);
    res.type('json');
    res.render('deleteSong');
}

exports.getPlaylists = function(req, res) {
    res.status(200);
    res.type('json');
    res.render('playlistsList');
}

exports.createPlaylist = function(req, res) {
    res.status(200);
    res.type('json');
    res.render('createPlaylist');
}

exports.getPlaylistInfo = function(req, res) {
    res.status(200);
    res.type('json');
    res.render('playlistInfo');
}

exports.updatePlaylistInfo = function(req, res) {
    res.status(200);
    res.type('json');
    res.render('createPlaylist');
}

exports.deletePlaylist = function(req, res) {
    res.status(200);
    res.type('json');
    res.render('createPlaylist');
}

exports.getPlaylistSongs = function(req, res) {
    res.status(200);
    res.type('json');
    res.render('playlistSonglist');
}

exports.addSongToPlaylist = function(req, res) {
    res.status(200);
    res.type('json');
    res.render('addSongPlaylist');
}

exports.removeSongFromPlaylist = function(req, res) {
    res.status(200);
    res.type('json');
    res.render('removeSongPlaylist');
}

