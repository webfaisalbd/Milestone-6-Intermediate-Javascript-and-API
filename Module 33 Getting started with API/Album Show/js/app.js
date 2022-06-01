function loadAlbum() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => displayAlbums(data))
}

function displayAlbums(data) {

    console.log(data);

    const albumContainer = document.getElementById('albums');

    for (const element of data) {
        const div = document.createElement('div');
        div.innerHTML = `
                        <p>${element.id}</p> 
                        <h3>${element.title}</h3> `;
        div.style.textAlign = 'center';
        div.style.backgroundColor = 'skyblue';
        div.style.width = '550px';

        albumContainer.appendChild(div);
    }
}

loadAlbum();