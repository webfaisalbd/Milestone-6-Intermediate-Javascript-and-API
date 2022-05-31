const user = {
    id : 101,
    name: 'Faisal',
    job: 'Bekar',
    status: 'Gorib'
};
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);


const shop = {
    name: 'Alia store',
    address: 'Ranbir Road',
    products: ['laptop','desktop','tab','smartphone'],
    isExpensive: false,
    brand: {
        name: 'samsung',
        brandValue: 90000
    }
}

// console.log(shop);

const shopStringified = JSON.stringify(shop);
console.log(shopStringified)
// stringify mane string, string theke object er moton kore property access kora jay na. Tokhon undefined asbe.
console.log(shopStringified.brand); // undefined

const shopParse = JSON.parse(shopStringified);
console.log(shopParse);
console.log(shopParse.brand);
