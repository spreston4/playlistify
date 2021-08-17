const searchvalue = document.getElementById('').textContent;
const translatedValue = searchvalue;




const searching = async () => {
    const response = await fetch('/api/spotify/search/tracks', {
      method: 'POST',
      body: translatedValue,
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#Searching').addEventListener('click', searching);