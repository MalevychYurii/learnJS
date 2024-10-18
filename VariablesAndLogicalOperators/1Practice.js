'use strict';

// 1 задача
const numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');

// 2 задача 
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// 3 задача
const lastMovie = prompt('Який фільм ви дивилися останнім?', ''),
      numberOfPoints = prompt('На скільки можете оцінити його?', '');

personalMovieDB.movies[lastMovie] = numberOfPoints;

console.log(personalMovieDB);