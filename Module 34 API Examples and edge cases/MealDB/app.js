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