var playlist = new Object({ artistName: 'songTitle' });

function updatePlaylist('Slowdive', 'Phil Ochs', 'My Bloody Valentine') {
   return Object.assign({}, playlist, { [artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
  return playlist
}
