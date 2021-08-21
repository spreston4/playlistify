// const searchvalue = document.getElementById('love').textContent;

const translatedValue = JSON.stringify({search:"TestValue from search.js fetch request"});





const searching = async (event) => {
  event.preventDefault();
  const searchValue = document.querySelector('#song-search-input').value
    const response = await fetch(`/api/spotify/searchsong?q=${searchValue}`, {
      method: 'GET',
      // body: translatedValue,
      headers: { 'Content-Type': 'application/json' },
    })
  
    if (response.ok) {
      // document.location.replace('/');
      // put in for loop
      // document.create element, put in song title and artist (maybe) album, if we can put in an add playlist button
   
    } else {
      alert(response.statusText);
    }
  };

 
  
  document.querySelector('#song-search').addEventListener('click', searching);