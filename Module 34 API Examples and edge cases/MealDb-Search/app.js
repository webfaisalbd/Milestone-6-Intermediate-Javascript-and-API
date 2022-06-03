const searchMeal = () => {
    const searchText = document.getElementById('search-field').value;
    // display spinner
    toggleSpinner('block');
    toggleSearchResult('none')
    loadMeals(searchText);
    document.getElementById('search-field').value= '';

}

// spinner 
const toggleSpinner = (displayStyle) => {
    document.getElementById('spinner').style.display= displayStyle;
}

// toggleSearchResult 
const toggleSearchResult = (displayResult) => {
    document.getElementById('meals').style.display= displayResult;
}

const loadMeals = searchText => {
const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = (meals) => {
    console.log(meals);
    const mealsContainer = document.getElementById('meals');
    mealsContainer.textContent= '';

    // when you search data that not found in api then occur forEach problem
    // using optional chaining for avoiding forEach problem
    meals?.forEach(meal => {
        
    const div = document.createElement('div');
    div.innerHTML = `
         <h2>${meal.strMeal}</h2>
         <h5>${meal.strIngredient18 ? meal.strIngredient18 : 'Not Found'}</h5>
         <p>${meal.strArea}</p>
         <button>Order Now</button>
    `;

    mealsContainer.appendChild(div);
    })

    toggleSpinner('none');
    toggleSearchResult('block')

}