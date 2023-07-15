
//  foo = () => {
//     return 0;
// }
// console.log(typeof foo());


// function foo(){
//     var a = 10;
// }
// foo()
// console.log(a);


// const phoneNumber = ['99090' , '09080' , '90809'];
// for(let i = 0; i < phoneNumber.length ; i++){
//     console.log(phoneNumber[i]);
// }

// const nestedArrays = [
//    0, [
//         1,[
//             2,[
//                 3 , 4
//             ]
//         ]
//     ]
// ]
// for(let i = 0 ; i < nestedArrays.length ; i++){
//     for(let j = 0 ; j < nestedArrays.length; j++){
//         console.log(nestedArrays[i][j]);
//     }
// }

// const nestedd = [[[[[[[[[[[[[2,3 ,4 ]]]], 44,443]]]]]]]]]
// let newArr = []

// nested(nestedd)

// function nested(array){
//    for(let i of array){
//      const result = Array.isArray(i);
//      if(result){
//        nested(i)
//      }
//      else{
//        newArr.push(i)
//      }
//    }
// }
// console.log(newArr);

// function foo(...numbers){
//     let newnum = 0;
//     for(let i = 0 ; i < numbers.length; i++){
//         newnum += numbers[i];
//     }
//     console.log(newnum);
// }
// foo(1 , 2 , 3, 4);


// funksiyaning nechi marta chaqirilganini ko'rsatib berish;

//  let counter = 0;
// let counterFunction = (function() {
//   return function() {
//     console.log(++counter);
//   };
// })();



// counterFunction();
// counterFunction();
// counterFunction();
// counterFunction();
// counterFunction();
// counterFunction();

// const countTimesCalled = (count => () => ++count)(0);
  
  
// console.log(countTimesCalled());
// console.log(countTimesCalled());
// console.log(countTimesCalled());
// console.log(countTimesCalled());
// console.log(countTimesCalled());


// function foo() {
//   if (!foo.count) {
//     foo.count = 0;
//   }

//   return ++foo.count;
// };

// foo();
// foo();
// foo();
// foo();
// foo();

// console.log(foo.count);

// function countFunctionCalls() {
//   let count = 0;

//   return function () {
//     count++;
//     // console.log("Funksiyani", count, "marta chaqirdingiz");
//   };
// }
 
// console.log(countFunctionCalls.count);

// const foo = countFunctionCalls();

// foo()
// foo()
// foo()
// foo()
// foo()