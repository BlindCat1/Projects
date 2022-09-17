"use strict";

const numberOfFilms = +prompt("How many filmf you waching?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    private: false
};


const a = prompt("last film what you wachin?", ''),
      b = prompt("What you think about it?", ''),
      c = prompt("last film what you wachin?", ''),
      d = prompt("What you think about it?", '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);