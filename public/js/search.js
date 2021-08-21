


//const searching = async (event) => {
async function searching(event) {
  event.preventDefault();
  console.log("search.js has loaded");
  //const searchvalue = document.getElementById('song-input').textContent;
  const searchvalue = document.querySelector('#song-input').value.trim();
  console.log('We are searching the keyword providede');
  console.log("The keyword is" + searchvalue);

  
    const response = await fetch(`/api/spotify/search/tracks?q=${searchvalue}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
    
  };
  
  document.querySelector('#song-search-album').addEventListener('click', searching);

