function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}

function displayPost(data) {
    const section = document.getElementById('section');

    for (const post of data) {
        console.log(post);
        const div = document.createElement('div');
        div.classList.add('divStyle');
        div.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        `;
        section.appendChild(div);
    }

}

loadPost();



// get data 
function getData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))
}


// post data
function getPost(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
            title: 'MY Title',
            description: 'This is my post',
            id: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
}
