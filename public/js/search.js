// const searchvalue = document.getElementById('love').textContent;
const searchValue = document.querySelector('#song-search-input');
const translatedValue = JSON.stringify({search:"TestValue from search.js fetch request"});





const searching = async (event) => {
  event.preventDefault();
    const searchValueInput = searchValue.val();
    const response = await fetch(`/api/spotify/searchsong?q=${searchValueInput}`, {
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
  
  document.querySelector('#song-search').addEventListener('click', searching());