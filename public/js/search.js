// const searchvalue = document.getElementById('love').textContent;
const searchValue = 'rock';
const translatedValue = JSON.stringify({search:"TestValue from search.js fetch request"});




const searching = async (event) => {
  event.preventDefault();
    const searchValue = document.querySelector('#song-search-input').value
    console.log("This is the value captured by searchValue" + searchValue);
    const response = await fetch(`/api/spotify/search/tracks?q=${searchValue}`, {
      method: 'GET',
      // body: translatedValue,
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      // document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#search-song').addEventListener('click', searching);


  // ROB CODE BELOW //
  // Jason Ma - Combined rob code with Sam's on 8/20/21//





