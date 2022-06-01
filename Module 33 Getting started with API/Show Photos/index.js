function loadPhotos(){
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then(res => res.json())
    .then(data => displayPhoto(data))
}

function displayPhoto(data){
    // console.log(data);

    const section = document.getElementById('section');
    section.classList.add('sectionStyle');

    for(const element of data){
        console.log(element);
        const div = document.createElement('div');
        div.classList.add('divStyle');
        div.style.width = '600px'

        div.innerHTML= `
        <p>${element.id}</p>
        <h4>${element.title}</h4>
        <img src=${element.url} alt="image" width="300px">
        `;

        section.appendChild(div);

    }
}