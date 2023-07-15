//===== 1-misol array ichida berilgan son topilsa turgan indexsi consolega chiqsin aks holda -1;

// const arr  = [1 , 2 , 3];
// function foo(arr , n){
//     for(let i = 0; i <= arr.length; i++ ){
//         if(arr[i] === n){
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(foo(arr,3));

// =========================== prototype yaratish massiv uchun
// Array.prototype.abcde = function() {
//   for (let i = 0; i < this.length; i++) {
//     this[i] = this[i].toUpperCase();
//   }
// };

// var arr = [];
// arr.abcde();

// ===========================
// let arrPush = [1 , 2 , 3 , 4 , 5];
// arrPush.unshift(1);
// console.log(arrPush);


// ===========

// const arrayColumn = (arr, n) => arr.map(x => x[n]);

// const arrays = [[1,2,3,4], 
//                 [2,2,3,4],
//                 [3,2,3,4], 
//                 [4,2,3,4],];

// let row = 0 , countRow = 0;
// let col = 0, countCol = 0;


// for(let i = 0; i < arrays.length-1; i++){
//     for(let j = 0; j < arrays.length; j++){
//         if(arrays[i][j] == arrays[i+1][j]){
//             row++;
//             // console.log(row);
//             // console.log(arrays[i][j] , arrays[i+1][j]);
//         }
       
//     }
//      console.log(arrayColumn(arrays , i+1));
// }
// console.log(countRow);
// console.log(countCol);

// 3 larni kesish

// const numbers = [3, 123, 3, 13, 3 , 23 , 3 , 3 , 3];
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] === 3){
//         numbers.splice(i, 1);
//         --i;
//     }
// }
// console.log(numbers);






// for (const value of numbers) {
//     console.log(value);
// }


// console.log(null == 0);
// console.log(undefined == 0);
// console.log(undefined == '');

// const arr = [1,2,3,4 ,NaN , null , [1, 2]]
//  console.log(arr.indexOf([1,2]));

// ============= SPREAD OPERATORS ===============
// const arr = [1, 2, 3, 4];
// const arr1 = [...arr];
// arr1[1] = 50;
// console.log(arr);
// console.log(arr1);


// =====Misol===== 
// Iki juft yigindi , toq kopaytma

// const arr1 = [1 , 2, 3 ]
// const arr2 = [1 , 6, 4 , 4]

// const newArr = [...arr1 , ...arr2];

// let kopaytma = 1; yigindi = 0;

// // console.log(newArr);
// for (const value of newArr) {
//     if(value%2 == 0){
//         yigindi += value
//     }else{
//         kopaytma *= value;
//     }
// }
// console.log("YIGINDISI: " , yigindi , "KOPAYTMA: " , kopaytma);

// ==== Misol ====
const arr1 = [1 , 2, 3 , 4 , 5 , 4]
const arr2 = [1 , 6, 4 , 4]
const newArr = [...arr1 , ...arr2];