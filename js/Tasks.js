"use strict";
//Место для первой задачи
// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     // Пишем решение вот тут
//     for ( let i = 0; i < arr.length; i++){
//         result[i] = arr[i];
//     }
//     console.log('result = ' + result);
//     // Не трогаем
//     return result;
// }

//Место для второй задачи
// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     // Пишем решение вот тут
//     for(let i = 0; i < data.length; i++){
//         let typeDateI = typeof data[i];
//         if (typeDateI == "number"){
//             typeDateI * 2;
//             data[i] = typeDateI;
//         } else if (typeDateI == "string"){
//             typeDateI + " - done";
//             data[i] = typeDateI;
//         }
//     }
//     console.log(data);
//     // Не трогаем
//     return data;
// }

// Место для третьей задачи
// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 0; i < data.length; i++){
        
//         result[i] = data[data.length-i-1];
//     }
//     console.log(result);
//     // Не трогаем
//     return result;
// }

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);

//=============================================================================================


// Место для первой задачи
// function sayHello(name) {
//     return ('Hello ' + name);

// }

// console.log(sayHello("Max"));

// Место для второй задачи
// function returnNeighboringNumbers(number) {
//     return[number - 1 , number, number +1];

// }

// console.log(returnNeighboringNumbers(10));

// Место для третьей задачи
// function getMathResult(num, howMuch) {
//     if (typeof(howMuch) !== "number" || howMuch <= 0){
//         return(num);
//     }

//     let result = '';

//     for(let i = 1; i <= howMuch ; i++){  
//         if(i === howMuch){
//             result += `${num * i}`;
//          } else {
//             result = result + num * i + "---";

//         }
//     }    
//     console.log(result);
//     return result;
// }
// getMathResult(3,3);

//=============================================================================================

// Место для первой задачи
// function calculateVolumeAndArea(length) {
//     if(typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)){
//         console.log('При вычислении произошла ошибка');
//         return'При вычислении произошла ошибка';
//     }

//     let volume = 0,
//         area = 0;

//     volume = length * length * length;
//     area = (length * length) * 6;
    
//     console.log(`Объем куба: ${volume}, площадь всей поверхности: ${area}`);
//     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }

// calculateVolumeAndArea(7);

// Место для второй задачи
// function getCoupeNumber(numberOfTicket) {
//     if (typeof (numberOfTicket) !== 'number' || numberOfTicket < 0 || !Number.isInteger(numberOfTicket)) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     }

//     if (numberOfTicket === 0 || numberOfTicket > 36) {
//         return "Таких мест в вагоне не существует";
//     }
    
//     console.log(Math.ceil(numberOfTicket / 4)); //Округление в большую сторону
//     return Math.ceil(numberOfTicket / 4);
    
// }

// getCoupeNumber(33);

//=============================================================================================

// Место для первой задачи
// function getTimeFromMinutes(number) {
//     if(typeof (number) !== 'number' || number < 0 || !Number.isInteger(number)){
//         console.log("Ошибка, проверьте данные");
//         return "Ошибка, проверьте данные";
//     }

//     let hour = Math.floor(number / 60); //Округление в меньшую сторону
//     let minute = number % 60;
//     let word = '';

//     if(hour == 1){
//         word = " час";
//     } else if (hour == 2 || hour == 3 || hour == 4 ){
//         word = ' часа';
//     } else if (hour > 4 || hour ==0){
//         word = ' часов';
//     }

//     console.log(`Это ${hour}${word} и ${minute} минут`);
//     return `Это ${hour}${word} и ${minute} минут`;

// }
// getTimeFromMinutes(745);

// Место для второй задачи
// function findMaxNumber(first, second, third, forty) {
//     if(typeof(first) !== 'number' ||
//     typeof(second) !== 'number' ||
//     typeof(third) !== 'number' ||
//     typeof(forty) !== 'number') {
//         console.log(0);
//         return 0;
//     } else{   
//         console.log(Math.max(first,second,third,forty));
//         return Math.max(first,second,third,forty);}
// }

// findMaxNumber(1, 5, 6.6, 10.5);
// findMaxNumber(1, 5, '6', '10');

//=============================================================================================

// function fib(num) {
//     if(typeof(num)!= 'number' || num <= 0 || !Number.isInteger(num)){
//         console.log('');
//         return '';
//     }

//     let result = '';
//     let first = 0;
//     let second = 1;

//     for(let i = 0; i < num; i++){
//         if (i + 1 === num) {
//             result += `${first}`;
//         } else {
//             result += `${first} `;
//         }

//         let third = first + second;
//         first = second;
//         second = third;
//     }
//     console.log(result)
//     return result;
// }

// fib(7);