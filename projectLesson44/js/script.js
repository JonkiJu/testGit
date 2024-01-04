/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';


const deleteAdd = document.querySelector('.promo__adv'),
      addImg = deleteAdd.getElementsByTagName('img'),
      promoGenre = document.querySelector('.promo__genre'),
      promoBG = document.querySelector('.promo__bg'),
      promoMovies = document.querySelectorAll('.promo__interactive-item'),
      moviesList = document.querySelector('.promo__interactive-list');
    // TASK 1
    for (let i = 0; i < addImg.length; i++) {
    	addImg[i].style = 'display: none';
    }
    // TASK 2
    promoGenre.textContent = 'Драма';
    // TASK 3
    promoBG.style = 'background-image: url("./img/bg.jpg")';
    // TASK 4
    

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

movieDB.movies.sort();
moviesList.innerHTML = '';


    for (let i = 0; i < movieDB.movies.length; i++) {
        moviesList.innerHTML += `
        <li class="promo__interactive-item">
        ${i+1}. ${movieDB.movies[i]}
        <div class="delete"></div>
        </li>
        `;
    
    };
