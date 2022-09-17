"use strict";

const numberOfFilms = prompt("How many filmf you waching?", '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    private: false
};


let a = prompt("last film what you wachin?", '');
let b = prompt("What you think about it?", '');
let c = prompt("last film what you wachin?", '');
let d = prompt("What you think about it?", '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);