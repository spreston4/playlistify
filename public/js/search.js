// const searchvalue = document.getElementById('love').textContent;
// const searchValue = 'rock';


const translatedValue = JSON.stringify({search:"TestValue from search.js fetch request"});


const searching = async (event) => {
  event.preventDefault();
  console.log("search.js has loaded");
  const searchvalue = document.getElementById('song-input').textContent;
  console.log('We are searching the keyword providede');
  console.log("The keyword is" + searchvalue);

    const response = await fetch(`/api/spotify/search/keyword`, {
      method: 'POST',
      body: searchvalue,
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#song-search-album').addEventListener('click', searching());

