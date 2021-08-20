
const getPlaylist = async (event) => {
    event.preventDefault();
      const response = await fetch(`/api/spotify/userplaylist`, {
        method: 'GET',
        // body: translatedValue,
        headers: { 'Content-Type': 'application/json' },
      });
    
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
};
