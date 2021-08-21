// const searchvalue = document.getElementById('love').textContent;
// const searchValue = 'rock';
console.log("search.js has loaded");
 const searchvalue = document.getElementById('song-input').textContent;

const translatedValue = JSON.stringify({search:"TestValue from search.js fetch request"});




const searching = async (event) => {
  event.preventDefault();
  console.log('searching function has initiated');
  console.log("searching function has been clicked via button");
    const response = await fetch(`/api/spotify/search/tracks?q=${searchvalue}`, {
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
  
  document.querySelector('#song-search-album').addEventListener('click', searching());

