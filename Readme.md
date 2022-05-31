# Milestone 6:

## Module 33: Getting started with API

### API
- API means application programming interface.
- API hosse - Server theke data load kore website e dekhay.


### What is JSON?
- JSON stands for JavaScript Object Notation
- JSON is a lightweight data-interchange format
- JSON is plain text written in JavaScript object notation
- JSON is used to send data between computers
- JSON is language independent 

```
const shopStringified = JSON.stringify(shop);
console.log(shopStringified)
// stringify mane string, string theke object er moton kore property access kora jay na. Tokhon undefined asbe.
console.log(shopStringified.brand); // undefined
```


### Load posts and display on the website with CSS in DOM

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Display Posts</title>
    <style>
        .divStyle{
            background-color: cyan;
            padding: 10px;
            margin: 10px;
            border: 2px solid greenyellow;
            border-radius:5px;
            width: 500px;
        }
        .divStyle:hover {
            background-color: rosybrown;
            
        }
    </style>
</head>
<body>
    <h2>Display Posts</h2>
   
    <section id="section">

    </section>
    

    <script src="js/app.js"></script>
</body>
</html>

 
```


```
function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

function displayPost(data){
    const section = document.getElementById('section');

    for(const post of data){
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
```

