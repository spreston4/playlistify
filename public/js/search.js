
//const searching = async (event) => {
async function searching(event) {

  event.preventDefault();
  //const searchvalue = document.getElementById('song-input').textContent;
  const searchvalue = document.querySelector('#song-input').value.trim();

  
    const response = await fetch(`/api/spotify/search/tracks?q=${searchvalue}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace(`/api/spotify/search/tracks?q=${searchvalue}`);
    } else {
      alert(response.statusText);
    }
    
  };
  
  document.querySelector('#song-search-album').addEventListener('click', searching);

