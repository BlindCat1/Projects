"use strict";

const numberOfFilms = +prompt("How many filmf you waching?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    private: false
};

request: for (let i = 0; i < 2; i++){
    const a = prompt("Last film what you wachin?", ''),
          b = prompt("What you think about it?", '');
    
          if (a != null && b != null && a != '' && b != '' && a.length < 50 ){
            personalMovieDB.movies [a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
            continue request;
    }
}
    
if (personalMovieDB.count <10 && personalMovieDB.count !=0){
     console.log('малоф ильмов');
    }else if (personalMovieDB.count < 30 && personalMovieDB.count > 10){
        console.log('Норм фильмов');
    }else if (personalMovieDB>30){
        console.log('Вы киноман');
    }else {
        console.log('Произошла ошибка');
     }
    
console.log(personalMovieDB);


