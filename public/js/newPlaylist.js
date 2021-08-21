// Create a new playlist from the newplaylist page
const newPlaylistHandler = async(event) => {
    console.log("newPlaylistHandler.js has been triggered");

    event.preventDefault();

    const name = document.querySelector('#new-playlist-name').value.trim();
    const description = document.querySelector('#new-playlist-description').value.trim();

    if (name && description) {

        const response = await fetch('/api/playlist/', {
            method: 'POST',
            body: JSON.stringify({ name, description }),
            headers: {'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/djbooth');
        } else {
            alert('Failed to create playlist.');
        }
    }
};

document    
    .querySelector('#new-playlist-form')
    .addEventListener('submit', newPlaylistHandler);