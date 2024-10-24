'use strict';

let numberOfFilms;

function start() {
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastMovie = prompt('Який фільм ви дивилися останнім?', ''),
            numberOfPoints = prompt('На скільки можете оцінити його?', '');

        if (lastMovie != null && lastMovie != '' && lastMovie.length < 50 &&
            numberOfPoints != null && numberOfPoints != '' && !isNaN(numberOfPoints)) {

            personalMovieDB.movies[lastMovie] = numberOfPoints;
            console.log('Дані успішно збережені');
        } else {
            console.log('Некоректні дані, спробуйте ще раз');
            i--;
        }
    } // 1 спосіб    
}

// rememberMyFilms();

/* let i = 0;
while (i < 2) {
    const lastMovie = prompt('Який фільм ви дивилися останнім?', '').trim(),
          numberOfPoints = prompt('На скільки можете оцінити його?', '');

    if (lastMovie != null && lastMovie != '' && lastMovie.length < 50 &&
    numberOfPoints != null && numberOfPoints != '' && !isNaN(numberOfPoints)) {
    
    personalMovieDB.movies[lastMovie] = numberOfPoints;
    console.log('Дані успішно збережені');
    i++;
    } else {
        console.log('Некоректні дані, спробуйте ще раз');
    }
} */

/*let i = 0;
do {
    const lastMovie = prompt('Який фільм ви дивилися останнім?', ''),
        numberOfPoints = prompt('На скільки можете оцінити його?', '');

    if (lastMovie != null && lastMovie != '' && lastMovie.length < 50 &&
        numberOfPoints != null && numberOfPoints != '' && !isNaN(numberOfPoints)) {

        personalMovieDB.movies[lastMovie] = numberOfPoints;
        console.log('Дані успішно збережені');
        i++;
    } else {
        console.log('Некоректні дані, спробуйте ще раз');
    }
} while (i < 2);*/

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Ви переглянули мало фільмів');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Ви переглянули велику кіл-ть фільмів');
    } else if (personalMovieDB.count >= 30) {
        console.log('Ви кіноман');
    } else {
        console.log('Error');
    }
}

// detectPersonalLevel(); 

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш улюблений жанр під номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGenres();