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