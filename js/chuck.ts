fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
        document.getElementById('chucksays').innerHTML = JSON.stringify(data);
    })
    