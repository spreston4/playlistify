

// Create a new playlist from the newplaylist page
const newPlaylistHandler = async(event) => {
    console.log("newPlaylistHandler.js has been triggered");

    event.preventDefault();
// Retrieve values for each output generated from songresults view - JASON MA//
    const output1 = document.getQuerySelector("output1").textValue
    const output2 = document.getQuerySelector("output2").textValue
    const output3 = document.getQuerySelector("output3").textValue
    const output4 = document.getQuerySelector("output4").textValue
    const output5 = document.getQuerySelector("output5").textValue


    if (output1) {

        const response = await fetch('/api/song/', {
            method: 'POST',
            body: JSON.stringify(output1),
            headers: {'Content-Type': 'application/json' },
        });
    } else if (output2) {
    
        const response = await fetch('/api/song/', {
            method: 'POST',
            body: JSON.stringify(output2),
            headers: {'Content-Type': 'application/json' },
        });
    } else if (output3) {
        const response = await fetch('/api/song/', {
            method: 'POST',
            body: JSON.stringify(output3),
            headers: {'Content-Type': 'application/json' },
        });
    } else if (output4) {
        const response = await fetch('/api/song/', {
            method: 'POST',
            body: JSON.stringify(output4),
            headers: {'Content-Type': 'application/json' },
        });
    } else if (output5) {
        const response = await fetch('/api/song/', {
            method: 'POST',
            body: JSON.stringify(output5),
            headers: {'Content-Type': 'application/json' },
        });
    }
        if (response.ok) {
            document.location.replace('/djbooth');
        } else {
            alert('Failed to create playlist.');
        }
    };


document    
    .querySelector('#add1')
    .addEventListener('submit', newPlaylistHandler);
    document    
    .querySelector('#add2')
    .addEventListener('submit', newPlaylistHandler);
    document    
    .querySelector('#add3')
    .addEventListener('submit', newPlaylistHandler);
    document    
    .querySelector('#add4')
    .addEventListener('submit', newPlaylistHandler);
    document    
    .querySelector('#add5')
    .addEventListener('submit', newPlaylistHandler);