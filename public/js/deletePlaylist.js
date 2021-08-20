// Delete a playlist. Called from the 'Delete Playlist' button on the viewplaylist page
const deletePlaylistHandler = async (event) => {

    event.preventDefault();
    console.log('delete attempted');

    const playlist_id = document.querySelector('#delete-playlist-button').dataset.playlist_id;

    const response = await fetch(`/api/playlist/${playlist_id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/djbooth');
    } else {
        alert('Failed to delete playlist.');
    }
};

document
    .querySelector('#playlist-actions')
    .addEventListener('submit', deletePlaylistHandler);