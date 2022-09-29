"use strict";

let numberOfFilms;

function start (){
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    private: false
};

function remeberMyFilms(){
    for (let i = 0; i < 2; i++){
        const a = prompt("Последний просмотренный фильм?", ''),
              b = prompt("На сколько вы его оцените?", '');
        
              if (a != null && b != null && a != '' && b != '' && a.length < 50 ){
                personalMovieDB.movies [a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
        }
    }
}

remeberMyFilms();

function detectPersonalLvl(){
       
    if (personalMovieDB.count <10 && personalMovieDB.count !=0){
        console.log('Малоф ильмов');
        }else if (personalMovieDB.count < 30 && personalMovieDB.count > 10){
       console.log('Норм фильмов');
        }else if (personalMovieDB>30){
       console.log('Вы киноман');
        }else {
       console.log('Произошла ошибка');
    }
}

detectPersonalLvl();

function showMyDB(){
    if(personalMovieDB.private == false){
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGeners(){
    for(let i = 1; i < 4; i++){
        const a = prompt('Ваш любимый жанр под номером' + i + '?', '');
        personalMovieDB.geners[i-1] = a;
    }
}

writeYourGeners();



