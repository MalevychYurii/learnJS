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
        movieList.innerHTML = '';
        movieDB.movies.forEach((newFilm, i) => {
            movieList.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${newFilm}
                    <div class="delete"></div>
                </li>
                `;
        });
    }
}; // 1 Lesson 48

// movieList.innerHTML += `
//             <li class="promo__interactive-item">${i++}. ${newFilm}
//                 <div class="delete"></div>
//             </li>`;