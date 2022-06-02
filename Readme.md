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

```javascript
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


```javascript
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
        // class add kora hoise dom e, divStyle class ta likha ase html er style er vitore
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



### PUT vs PATCH

- `PUT` :  Put use korle previous data + new data shob send korte hoy. Tarmane Eita shob guli field ek sathe update kore, kono field faka thakle null set korbe.

- Suppose, ekta object ase. Tar dui ta property.

```javascript
{name: "a", myAge: 10}
```

Kintu ami chai, shudu ei object er myAge(property) ta update kore, sekhane myAge ta 12 dite. kintu amk myAge er sathe name property te thaka ager value tao abar send korte hobe.

example: 
```javascript
{name: "a", myAge: 12}
```
 shob send korte holo.



- `PATCH` : Patch is mainly in network utilization by sending less data to the server and by consuming less bandwidth. 

- If we are using any aws or any cloud plaform, we can see that we are even charged for network utilization like how much data went through.

- shudu matro jei field ta update kora dorkar seita update korbe baki field guli ager value thakbe.

- example: 

```javascript
{name: "b"}
```
sudu ekta field update kora jacce, ager value send korte hocce na.



### Get and Post method code 

#### Get

```javascript


// get data 
function getData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))
}


```


#### Post

```javascript



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

```




### `HTTP Request Methods`

- https://www.w3schools.com/tags/ref_httpmethods.asp

- in this link, get answer: `Compare GET vs. POST`



### `HTTP response status codes`

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status



### Load Album from jsonplaceholder

- code 

```javascript
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
```






### Load images in DOM

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Photos</title>
</head>

<style>
    .sectionStyle {
        background-color: aquamarine;
        display: grid;
        grid-template-columns: repeat(3, 300px);


    }

    .divStyle {
        padding: 10px;
        margin: 10px;
        background-color: bisque;
        border-radius: 10px;
    }
</style>

<body>

    <h3 style="text-align: center;">Photos</h3>
    <button onclick="loadPhotos()"
        style="width: 150px; color: aqua; background-color: blueviolet; border-radius: 10px;">Show All
        Photo</button>


    <section id="section">

    </section>


    <script src="index.js"></script>
</body>

</html>

 
```


```javascript
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
```







### `Random User` https://randomuser.me/

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Friend List</title>

    <style>
        #friendList {
            display: flex;
            flex-wrap: wrap;
            background-color: DodgerBlue;

        }

        .header{
            text-align: center;
        }
    </style>
</head>

<body>

    <div class="header">
        <h2 class="text-center">Friend List</h2>
        <button style="margin-bottom: 50px;" onclick="loadFriend()">Show List</button>

    </div>


    <div id="friendList">

    </div>

    <script src="app.js"></script>
</body>

</html>

 
```


```javascript
const loadFriend = () => {
    fetch('https://randomuser.me/api/?results=25')
    .then(res => res.json())
    .then(data => displayFriend(data))
}


const displayFriend = (data) => {
    // console.log(data);
    const friendList = document.getElementById('friendList') 
    
    const myData = data.results;

    
        // for(const element of myData){
        
        // }

    myData.forEach((element) => {
        // console.log(element);
        const div = document.createElement('div');
        div.style.margin= '10px';
        div.style.padding= '10px';
        div.style.borderRadius= '5px';
        div.style.backgroundColor = 'lightblue'
        div.innerHTML = `
       <img src=${element.picture.large} /> 
       <br />
       Name: ${element.name.title} ${element.name.first} ${element.name.last}
       <br />
       Email: ${element.email}
       <br />
       Location: ${element.location.country}
        `;

        friendList.appendChild(div);
    })
}
```











### `Call dynamic API, load dynamic data to display` https://randomuser.me/ and https://restcountries.com/

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Friend List</title>

    <style>
        #friendList {
            display: flex;
            flex-wrap: wrap;
            background-color: DodgerBlue;

        }

        .header{
            text-align: center;
        }
    </style>
</head>

<body>

    <div class="header">
        <h2 class="text-center">Friend List</h2>
        <button style="margin-bottom: 50px;" onclick="loadFriend()">Show List</button>

    </div>

    <div id="countryDetails">
        
    </div>


    <div id="friendList">

    </div>

    <script src="app.js"></script>
</body>

</html>
 
```


```javascript
const loadFriend = () => {
    fetch('https://randomuser.me/api/?results=25')
    .then(res => res.json())
    .then(data => displayFriend(data))
}


const displayFriend = (data) => {
    // console.log(data);
    const friendList = document.getElementById('friendList') 
    
    const myData = data.results;

    
    for(const element of myData){
        // console.log(element);
        const div = document.createElement('div');
        div.style.margin= '10px';
        div.style.padding= '10px';
        div.style.borderRadius= '5px';
        div.style.backgroundColor = 'lightblue'
        div.innerHTML = `
       <img src=${element.picture.large} /> 
       <br />
       Name: ${element.name.title} ${element.name.first} ${element.name.last}
       <br />
       Email: ${element.email}
       <br />
       Location: ${element.location.country}
       <br />
       <button onClick="loadCountryByName('${element.location.country}')">Details</button>
        `;

        friendList.appendChild(div);

  }

}

const loadCountryByName = (name) => {
    // console.log(name);

    const url = `https://restcountries.com/v3.1/name/${name}`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountries(data[0]))

}

const displayCountries = (data) => {
    // console.log(data);
    const countryDetails = document.getElementById('countryDetails');

    const div = document.createElement('div');
    div.innerHTML= `
    <p>${data.name.common}</p>
    <img width="200px" src="${data.flags.png}" />
    `;

    countryDetails.appendChild(div);
}
```











### `Meal DB, load dynamic data to display Also Implement Async Await` www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata and www.themealdb.com/api/json/v1/1/lookup.php?i=52772

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meal DB</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">
</head>

<body>
    <h2 class="text-center">Search Your Meal</h2>


    <!-- search field and button  -->
    <div class="input-group mb-3 w-50 mx-auto">
        <input id="search-field" type="text" class="form-control" placeholder="Search Your Meal"
            aria-label="Recipient's username" aria-describedby="button-addon2">

        <button onclick="searchFood()" id="search-button" class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
    </div>


    <!-- single card details  -->

    <div id="single-card-details" class="container">
        <!-- <div class="card" style="width: 18rem;">
            
          </div> -->
    </div>

    


    <!-- card  -->
    <div id="search-result" class="row row-cols-1 row-cols-md-3 g-4 container">
        
        

      </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="app.js"></script>
</body>

</html>
 
```


```javascript
const searchFood = async () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);

    searchField.value = '';

    if (searchText == '') {
        alert('Search Your desired food');
    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        // console.log(url);
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => displayMeals(data.meals))
        const res = await fetch(url);
        const data = await res.json();
        displayMeals(data.meals)

    }

}

const displayMeals = (meals) => {
    const searchResult = document.getElementById('search-result');

    // clear search result 
    searchResult.textContent = '';

    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0, 200)}.....</p>
            </div>
          </div>
        `;
        searchResult.appendChild(div);
    })
}

const loadMealDetail = async (meal) => {
    // console.log(meal);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`;

    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displayMealDetails(data.meals[0]))

    const res = await fetch(url);
    const data = await res.json();
    displayMealDetails(data.meals[0])
}

const displayMealDetails = meal => {
    // console.log(meal);

    const singleCardDetails = document.getElementById('single-card-details');
    // clear search result 
    singleCardDetails.textContent = '';

    const div = document.createElement('div');
    div.classList.add('card');
    div.style.width = '48rem';
    div.style.marginBottom = '20px';

    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions}</p>
      <a href="${meal.strYoutube}" target="_blank" class="btn btn-info">Go Youtube</a>
    </div>

    `;
    singleCardDetails.appendChild(div);
}
```