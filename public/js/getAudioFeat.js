const searchValue = '3Qm86XLflmIXVm1wcwkgDK';


const autdioFeatures = async (event) => {
    event.preventDefault();
      const response = await fetch(`/api/spotify/getaudiofeatures?q=${searchValue}`, {
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