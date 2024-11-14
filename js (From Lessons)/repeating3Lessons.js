'use strict'

const numberOfFilms = prompt('Скільки фільмів ви вже переглянули?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
}

// for (let i = 0; i < 2; i++) {
//     const lastMovie = prompt('Який фільм ви дивилися останнім?');
//     const points = prompt('На скільки можете оцінити його?');
//     if (lastMovie != null && lastMovie != '', lastMovie.length < 50 && points != null && points != '' && !isNaN(points)) {
//         personalMovieDB.movies[lastMovie] = points;
//         console.log('Дані успішно збережені!')
//     } else {
//         console.log('Некоректні дані. Спробуйте ще раз!')
//         i--;
//     }
// } // 1 

// let i = 0;
// while (i < 2) {
//     const lastMovie = prompt('Який фільм ви дивилися останнім?');
//     const points = prompt('На скільки можете оцінити його?');
//     if (lastMovie != null && lastMovie != '', lastMovie.length < 50 && points != null && points != '' && !isNaN(points)) {
//         personalMovieDB.movies[lastMovie] = points;
//         console.log('Дані успішно збережені!')
//         i++
//     } else {
//         console.log('Некоректні дані. Спробуйте ще раз!')
//     }
// } // 2

// let i = 0;
// do {
//     const lastMovie = prompt('Який фільм ви дивилися останнім?'),
//         points = prompt('На скільки можете оцінити його?');
//     if (lastMovie != null && lastMovie != '', lastMovie.length < 50 && points != null && points != '' && !isNaN(points)) {
//         personalMovieDB.movies[lastMovie] = points;
//         console.log('Дані успішно збережені!')
//         i++
//     } else {
//         console.log('Некоректні дані. Спробуйте ще раз!')
//     }
// } while (i < 2) // 3

// if (personalMovieDB.count < 10) {
//     console.log('Ви переглянули мало фільмів.');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Ви переглянули нормальну кількість фільмів.');
// } else if (personalMovieDB.count >= 30) {
//     console.log('Ви кіноман!');
// } else {
//     console.log('Error!');
// }

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat); // work

// function showMyDB() {
//     if (personalMovieDB.privat === false) {
//         console.log(personalMovieDB);
//     } else {
//         console.log('Private!')
//     }
// }

// showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const favouriteGenre = prompt(`Ваш улюблений жанр під номером ${i}?`);
        personalMovieDB.genres[i - 1] = favouriteGenre;
    }
}
writeYourGenres();

console.log(personalMovieDB);

function getFirstValue(arr) {
    arr = [1, 2, 3];
    return arr[0];
}

getFirstValue();
console.log(getFirstValue)