const searchvalue = document.getElementById('').textContent;
const translatedValue = JSON.stringify({search:"TestValue from search.js fetch request"});




const searching = async (event) => {
  event.preventDefault();
    const response = await fetch('/api/spotify/search/tracks?q=love', {
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
  
  document.querySelector('#Searching').addEventListener('click', searching());