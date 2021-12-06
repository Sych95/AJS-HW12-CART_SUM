import Cart from '../ts/Cart';
import Movie from '../ts/Movie'

test('new cart should be empty', () => {
    const cart = new Cart();
    const expected = {
        items: []
    }
    expect(cart).toEqual(expected);
});

test('Add & getting items to new cart movie', ()=> {
    const avengers = new Movie(123, '///23123', 359, 'Мстители', 'Avengers', true, 2012, 'США', 'Avengers assemble!', ['action', 'superheroes'], '137')
    const cart = new Cart();
    cart.add(avengers);
    const result = cart.getAll()

    const expected = [
        {
            id: 123,
            name: "///23123",
            price: 359,
            movieNameEng: "Мстители",
            imgURL: "Avengers",
            isIMAX: true,
            date: 2012,
            country: "США",
            tagline: "Avengers assemble!",
            category: [
                "action",
                "superheroes"
            ],
            duration: "137"
        }
    ]

    expect(result).toEqual(expected)
})

test('Testing counting sum by Cart.getSum()', ()=> {
    const spiderMan = new Movie(1, 'Человек-паук', 360, 'Spider-man', 'https://URL', true, 2004, 'США', 'Дружелюбный сосед',['action', 'superhero'], '110');
    const batman = new Movie(2, 'Бэтмен', 200, 'Batman', 'https://URL2', true, 2000, 'США', 'I am batman',['action', 'superhero'], '100');
    const myCart = new Cart();
    myCart.add(spiderMan);
    myCart.add(batman)

    const result = myCart.getSum();

    expect(result).toBe(560)
})

test('Testing counting sum (with discount) by Cart.getSum()', ()=> {
    const spiderMan = new Movie(1, 'Человек-паук', 360, 'Spider-man', 'https://URL', true, 2004, 'США', 'Дружелюбный сосед',['action', 'superhero'], '110');
    const batman = new Movie(2, 'Бэтмен', 200, 'Batman', 'https://URL2', true, 2000, 'США', 'I am batman',['action', 'superhero'], '100');
    const myCart = new Cart();
    myCart.add(spiderMan);
    myCart.add(batman)

    const result = myCart.getDiscountSum(0.1);

    expect(result).toBe(504)
})

test('Testing removing item from cart', ()=> {
    const spiderMan = new Movie(1, 'Человек-паук', 360, 'Spider-man', 'https://URL', true, 2004, 'США', 'Дружелюбный сосед',['action', 'superhero'], '110');
    const batman = new Movie(2, 'Бэтмен', 200, 'Batman', 'https://URL2', true, 2000, 'США', 'I am batman',['action', 'superhero'], '100');
    const myCart = new Cart();
    myCart.add(spiderMan);
    myCart.add(batman)
    myCart.removeItem(1);
    const result = myCart;
    const expected = {
        items: [
            {
                id: 2,
                name: "Бэтмен",
                price: 200,
                movieNameEng: "Batman",
                imgURL: "https://URL2",
                isIMAX: true,
                date: 2000,
                country: "США",
                tagline: "I am batman",
                category: [
                    "action",
                    "superhero"
                ],
                duration: "100"
            }
        ]
    }
    
    expect(result).toEqual(expected)

})