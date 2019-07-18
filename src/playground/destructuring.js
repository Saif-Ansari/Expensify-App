    //Object Detructuring

// const person = {
//     name: 'Saif',
//     age:24,
//     location: {
//         city: 'Nagpur',
//         temp: 48
//     }
// }

// const {name ,age,location} = person;
// const{city,temp}= location

// console.log(`${name} is ${age}`)
// console.log(`${city} temp  is ${temp}`)

// const book = {
//     title: 'ego ',
//     author: 'ryan',
//     publisher: {
//         name:'penguin'
//     }
// }
// const {title,author,publisher} = book;
// const {name} = publisher;

// const publisherName = name ? name: 'self-published';

// console.log(publisherName)


     //Array Destructuring

const address = ['215 stayvel pg','bohmanalli','bangalore','560068']

const [street,area,city,zip] = address;

console.log(`you r in ${street} ${area}`)

const item = ['coffee','50','100','150']
const [cof,,c] = item
console.log(`A Medium ${cof} costs ${c}`)