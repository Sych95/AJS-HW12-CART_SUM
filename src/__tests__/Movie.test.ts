import Movie from "../ts/Movie";

test('Creating Movie class', ()=> {
    const result = new Movie(123, '///23123', 359, 'Мстители', 'Avengers', true, 2012, 'США', 'Avengers assemble!', ['action', 'superheroes'], '137');
    const expected = {
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
    expect(result).toEqual(expected)
})

