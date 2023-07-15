// const dinamikQiymat = prompt("Qanday malumot kerak?")
// const qiymat = 'olma'
// const person = {
//     name:'John',
//     age:30,
//     location:'Termiz',
//     isMarried:true,
//     hobbies:['Fudbol', 'shaxmat'],
//     avatar:null,
//     [qiymat]:10,
// }
// console.log(person[dinamikQiymat]);

// ====== my obj =======

// const person = {
//     name:'Nafisa',
//     age:20,
//     location:'Termiz',
//     isMarried:false,
//     hobbies:['books', 'coding']
// }
// const{name , age , location , isMarried , hobbies} = person
// console.log(name , age , location , isMarried , hobbies);

// const obj = {}

// const names = [
//     'Abdullajon',
//     'Nafisa',
//     'Kamron',
//     'Abdullajon',
//     'Nafisa',
// ]
// for(let i = 0; i < names.length; i++){
//     obj[names[i]] = names[i]
// }


// console.log(obj);

// ditraction usuli
// const mevalar = {
//     olma:"Olma",
//     nok:"Nok",
//     banan:"banan",
//     apilsin:"apilsin",

// }
// const {olma , nok , banan , apilsin} = mevalar
// console.log(olma , nok , banan , apilsin);

// const mahsulotlar = {
//     mevalar: ['olma' , 'nok', 'apelsin'],
//     polizEkinlari:['bodring', 'tarvuz', 'piyoz']
// }
// const {mevalar , polizEkinlari} = mahsulotlar
// console.log(mevalar , polizEkinlari);
// console.log(`Meva: ${mevalar}
// poliz: ${polizEkinlari} `);

// const users = [
//     {
//         name:"Nafisa",
//         userName:"tohiirovna",
//         phoneNumber:90990,
//     },
//      {
//         name:"John",
//         userName:"johnno",
//         phoneNumber:90808,
//     },
//      {
//         name:"Alec",
//         userName:"alice",
//         phoneNumber:9090,
//     }
// ]

// for(let value of users){
//     const {name , userName , phoneNumber} = value;
//     console.log(`ISMI: ${name} 
// USER: ${userName } 
// PHONE: ${phoneNumber}`);
// }

// const obj = {};
// const names = ["Nafisa" , "Nafisa" ,"Nafisa"];
// for(let value of names){
//     obj[value] = value;
// }
// console.log(Object.keys(obj));



// const obj = {}
// const numbers = ['Nafisa', 'Nafisa', 'Guli','Durdona']

// let count = 1;
// for(let value of numbers){
//     // if(obj[value]){
//     //    obj[value]++
//     // }
//     // else{
//     //     obj[value] = 1
//     // }
//     obj[value] ? obj[value]++ : obj[value] = 1

// }
// console.log(obj);


// const news = [
//     {
//         id:1,
//         title:'Salom',
//         date:'12/06/2023',
//         decription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, natus?'
//     },
//     {
//         id:2,
//         title:'Salom1',
//         date:'17/06/2023',
//         description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, natus?'
//     },
//     {
//         id:3,
//         title:'Salom2',
//         date:'12/06/2023',
//         decription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, natus?'
//     },
//     {
//         id:4,
//         title:'Salom3',
//         date:'19/06/2023',
//         decription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, natus?'
//     },
// ]

// const filter = {};

// for(let i = 0; i < news.length ; i++){
//     if(filter[news[i].date] != undefined){
//         filter[news[i].date].push(news[i])
//     }else{
//         filter[news[i].date] = []
//         filter[news[i].date].push[news[i]]
//     }
// }
// console.log(filter);


/*
1.sizga array berilgan. nums = [1,2,3,4]
shu arrayni [1,3,6,10] shu shaklda qaytarib bering
Tushuntirish: [1, 1+2, 1+2+3, 1+2+3+4].

Tushuntirish: nums = [1,1,1,1,1] => [1,2,3,4,5] Sababi: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1]

Tushuntirish: nums = [3,1,2,10,1] => [3,4,6,16,17]

2.Gaplardan iborat array berilgan. shu gaplar orasidan eng uzun gapdagi so'zlar sonini chiqazing 
["alice and bob love google", "i think so too", "this is great thanks very much"]
"alice and bob love google" => 5 ta so'z 
 "i think so too" => 4 ta so'z
"this is great thanks very much" => 6 ta so'z

result 6

3.Parametr sifatida bitta gap va son qabul qiladigan function yarating, gapdagi so'zlar sonini berilgan songa qarab qisqartiring. 
masalan => gap = "Hello how are you Contestant", son = 4, result => "Hello how are you"
masalan => gap = "What is the solution to this problem", son = 4, result => "What is the solution"
masalan => gap = "chopper is not a tanuki", son = 5, result => "chopper is not a tanuki"
*/

/*
1.sizga array berilgan. nums = [1,2,3,4]
shu arrayni [1,3,6,10] shu shaklda qaytarib bering
Tushuntirish: [1, 1+2, 1+2+3, 1+2+3+4].

Tushuntirish: nums = [1,1,1,1,1] => [1,2,3,4,5] Sababi: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1]

Tushuntirish: nums = [3,1,2,10,1] => [3,4,6,16,17]
*/
// const nums = [1,2,3,4];
// let newNums = [];

// for(let i = 0; i < nums.length ; i++){
//     if(i == 0){
//         newNums[i] = newNums.push(nums[i] )
//     }
//     else{
//         newNums[i] = newNums.push(nums[i] )+ newNums[i-1];
//     }
// }
// console.log(newNums);


// 2.Gaplardan iborat array berilgan. shu gaplar orasidan eng uzun gapdagi so'zlar sonini chiqazing 
// ["alice and bob love google", "i think so too", "this is great thanks very much"]
// "alice and bob love google" => 5 ta so'z 
//  "i think so too" => 4 ta so'z
// "this is great thanks very much" => 6 ta so'z

// result 6

// const text = ["alice and bob love google", "i think so too", "this is great thanks very much"];

// let count = 0;
// for(let i = 0; i < text.length ; i++){
//    let suz = text[i].split(" ");
//    let suzCount = suz.length;
  
//   if (suzCount > count) {
//     count = suzCount;
//   }
// }

// console.log(count);


// 3.Parametr sifatida bitta gap va son qabul qiladigan function yarating, gapdagi so'zlar sonini berilgan songa qarab qisqartiring. 
// masalan => gap = "Hello how are you Contestant", son = 4, result => "Hello how are you"
// masalan => gap = "What is the solution to this problem", son = 4, result => "What is the solution"
// masalan => gap = "chopper is not a tanuki", son = 5, result => "chopper is not a tanuki"

// function qisqartirish(gap, son) {
//   let sozlar = gap.split(" ");
  
//   if (sozlar.length <= son) {
//     return gap;
//   } else {
//     return sozlar.slice(0, son).join(" ");
//   }
// }
// console.log(qisqartirish("Hello how are you Contestant", 4)); // "Hello how are you"
// console.log(qisqartirish("What is the solution to this problem", 4)); // "What is the solution"
// console.log(qisqartirish("chopper is not a tanuki", 5)); // "chopper is not a tanuki"

// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]

// function openOrSenior(data){
//   let newData = [];
//   for(let value of data){
//     for(let i = 0 ; i < 1 ; i++){
//       if(value[i] > 55 && value[i+1] > 7){
//         newData.push("Senior")
//       }else{
//         newData.push("Open")
//       }
//     }
//   }
//   return newData;
// }
// openOrSenior(input)

// let input = [2, 4, 0, 100, 4, 11, 2602, 36]
// function findOutlier(integers){
//   let countT = 0 , countJ = 0;
//   for(let value of integers){
//     if(value%2 == 0){
//       countT++
//     }else{
//       countJ++
//     }
//   }
//   if(countT > countJ){
//     for(let juft of integers){
//       if(juft%2 == 1 || juft%2 == -1){
//         return juft;
//       }
//     }
//   }else{
//     for(let toq of integers){
//       if(toq%2 == 0){
//         return toq;
//       }
//     }
//   }
// }
// console.log(findOutlier(input));

// massivdagi eng kirchik 2 ta elementni topib yig'indisini chiqarish
// let input = [19, 5, 42, 2, 77]
// function sumTwoSmallestNumbers(numbers) {  
//   let test = {};
//   for(let i in numbers){
//     test[numbers[i]] = numbers[i];
//   }
//   let newNum =  Object.values(test);
//   return newNum[0]+newNum[1]
// }
//  console.log(sumTwoSmallestNumbers(input));

let person = {
  name1:"Nafia",
  age: 12
}
console.log(person[name1]);