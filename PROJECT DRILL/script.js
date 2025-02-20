const container = document.getElementById('data-container');

fetch('http://localhost:8080/data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        container.innerHTML = '<h2>Data Fetched Successfully!</h2>';
        container.innerHTML += `<p>${JSON.stringify(data, null, 2)}</p>`;
    })
    .catch(error => {
        container.innerHTML = '<h2>Error Fetching Data!</h2>';
        console.error('Fetch error:', error);
    });
