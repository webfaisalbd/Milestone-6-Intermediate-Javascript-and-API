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
        `;

        friendList.appendChild(div);


    }
}