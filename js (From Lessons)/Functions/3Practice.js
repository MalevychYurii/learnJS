'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Скільки фільмів ви вже переглянули?', '');

        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Скільки фільмів ви вже переглянули?', '');
        }
    },
    rememberMyFilms: function () {
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
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Ви переглянули мало фільмів');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Ви переглянули велику кіл-ть фільмів');
        } else if (personalMovieDB.count >= 30) {
            console.log('Ви кіноман');
        } else {
            console.log('Error');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            // let genres = prompt(`Ваш улюблений жанр під номером ${i}`);

            // if (genres === '' || genres == null) {
            //     console.log('Ви ввели некоректні данні!');
            //     i--
            // } else {
            //     personalMovieDB.genres[i - 1] = genres;
            // }

            let genres = prompt(`Введіть ваші улюблені жанри через кому.`);

            if (genres === '' || genres == null) {
                console.log('Ви ввели некоректні данні!');
                i--
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Улюблений жанр ${i + 1} - це ${item}`)
        });
    }
};
