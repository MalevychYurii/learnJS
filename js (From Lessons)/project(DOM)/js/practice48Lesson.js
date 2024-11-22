'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const deleteAdd = document.querySelectorAll('.promo__adv img'),
    newBackground = document.querySelector('.promo__bg'),
    newGenre = newBackground.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list'),
    inputFilm = document.querySelector('.adding__input'),
    checkboxVerify = document.querySelector('.checkbox'),
    buttomAddFilfFromInput = document.querySelector('.button');

deleteAdd.forEach((img) => {
    img.remove();
}); // 1 Lesson 44

newGenre.textContent = "Drama"; // 2 Lesson 44

newBackground.style.backgroundImage = "url('img/bg.jpg')"; // 3 Lesson 44

movieDB.movies.sort();
movieList.innerHTML = "";
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${film}
            <div class="delete"></div>
        </li>
    `;
}); // 4 + 5 Lesson 44

buttomAddFilfFromInput.addEventListener('click', clickFunction);

function clickFunction(newFilm) {
    newFilm = inputFilm.value;
    if (newFilm != '') {
        movieDB.movies.push(newFilm);
        movieDB.movies.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())); // 5
        movieList.innerHTML = '';
        if (checkboxVerify.checked) {
            console.log('Добавлено улюблений фільм'); // 4
        }
        console.log(movieDB.movies);
        movieDB.movies.forEach((newFilm, i) => {
            if (newFilm.length >= 21) {
                newFilm = newFilm.slice(0, 21) + '...';
            }
            movieList.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${newFilm}
                    <div class="delete"></div>
                </li>
                `;
        });
    }
}; // 1+2 Lesson 48
