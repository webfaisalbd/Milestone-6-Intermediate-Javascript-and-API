const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
}

const displayQuote = (data) => {
    const quote = document.getElementById('quote');

    quote.innerText = data.quote;

}