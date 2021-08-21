
const editPlaylistHandler = async (event) => {

    event.preventDefault();

    const name = document.querySelector('#edit-playlist-name').value.trim();
    const description = document.querySelector('#edit-playlist-description').value.trim();
    const id = document.querySelector('#edit-playlist-form').dataset.playlist_id;

    if (name && description) {
        const response = await fetch(`/api/playlist/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ name, description }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log("edit response ok");
            document.location.replace(`/viewplaylist/${id}`);
        } else {
            alert('Failed to update playlist!');
        }
    }
};

document
    .querySelector('#edit-playlist-form')
    ,addEventListener('submit', editPlaylistHandler);