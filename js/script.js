"use strict";

const numberOfFilms = +prompt("How many films you watch?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

const a = prompt('один из последних просмотренных фильмов', ''),
      b = prompt('оценка', ''),
      c = prompt('один из последних просмотренных фильмов', ''),
      d = prompt('оценка', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);