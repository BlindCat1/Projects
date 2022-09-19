
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
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    for (let i = 0; i < data.length; i++){
        result[i] = `$data[length-1]`;
    }
    console.log(result);
    // Не трогаем
    return result;
}