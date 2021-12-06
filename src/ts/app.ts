import Cart from "./Cart";
import Movie from "./Movie";

const myCart = new Cart();

const spiderMan = new Movie(1, 'Человек-паук', 360, 'Spider-man', 'https://URL', true, 2004, 'США', 'Дружелюбный сосед',['action', 'superhero'], '110');
const batman = new Movie(2, 'Бэтмен', 200, 'Batman', 'https://URL2', true, 2000, 'США', 'I am batman',['action', 'superhero'], '100');
const docWho = new Movie(2, 'Доктор кто', 200, 'Doctor Who', 'https://URL2', true, 1990, 'England', 'Who?',['action', 'fantasy'], '1000+');

myCart.add(spiderMan);
myCart.add(batman)
myCart.add(docWho)

console.log(myCart.getSum())
console.log(myCart.getDiscountSum(0.1))
myCart.removeItem(2)
console.log(myCart)

