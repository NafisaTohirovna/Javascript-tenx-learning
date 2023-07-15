// const users = [
//     { 
//         'name': 'Alex',
//         'address': '15th Park Avenue',
//         'age': 43
//     },
//     { 
//         'name': 'Bob',
//         'address': 'Canada',
//         'age': 53
//     },
//     { 
//         'name': 'Carl',
//         'address': 'Bangalore',
//         'age': 26
//     }
// ];

// for(let { name, age } of users) {
//     console.log(`${name} is ${age} years old!`);
// }

// let arr = ['olma' , 'anor' , 'banan']

// for(let i = arr.length - 1 ; i > 0  ; i--){
//     arr[i+1] = arr[i];
//     arr[0] = 'behi'
// }
// console.log(arr);


// let vazn = [120 , 90 , 80 , 50 , 70  , 40 , 40]
// let ism = ['yuz yigirma' , 'toqson' , 'sakson' , 'ellik' , 'yetmish ' , 'qirq' , 'qirq']
// let obj = {} , newObj = []


// for(let i = 0; i < vazn.length; i++){
//     obj[vazn[i]] = ism[i];
// }

// for(let i in obj){
//     newObj.push(obj[i])
// }
// console.log(newObj);


// let tanlov = 'C'
// let harorat = 1

// switch(tanlov){
//     case 'F':
//         console.log((harorat - 32)*(5/9));
//         break;
//     case 'C':
//         console.log((harorat *(9/5)) + 32);
// }





// arr = [1, 7 ,8 ,8 , 6]

// function firstLast6(arr){
//     for(let i = 0; i < arr.length; i++){
//     if(arr[0] == 6 || arr[arr.length - 1] == 6){
//         return true;
//     }
// }
// return false;
// }
// console.log(firstLast6(arr));

// arr = [1, 1, 4]

// function sameFirstLast(arr){
//     if(arr.length >= 1){
//         for(let i = 0; i < arr.length; i++){
//             if(arr[0] == arr[arr.length - 1]){
//                 return true;
//             }
//         }
//         return false;
//     }else{
//         return false;
//     }

// }
// console.log(sameFirstLast(arr));

// const marks = [80 , 80 , 50];
// let average = 0 , total = 0;

// for(let value of marks){
//     total += value;
// }
// average = total/(marks.length);
// if(average >= 1 && average < 60 ){
//     console.log('F');
// }else if(average >= 60 && average < 70){
//     console.log('D');
// }else if(average >= 70 && average < 80){
//     console.log('C');
// }else if(average >= 80 && average < 90){
//     console.log('B');
// }else if(average >=90 && average <= 100){
//     console.log('A');
// }else{
//     console.log("Bunday baho mavjud emas");
// }

// ==================================================================
// let library = [
//     {
//         author:'Bill Gates',
//         title:'The Road Ahed',
//         readingStatus:true
//     },
//     {
//         author:'Steve Jobs',
//         title:'Walter Isaacson',
//         readingStatus:true
//     },
//     {
//         author:'Bill Gates',
//         title:'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus:false
//     }
// ]

// for(let {author , title , readingStatus} of library){
// console.log(`
// Yozuvchi: ${author}
// Kitob nomi: ${title} 
// O'qilganmi: ${readingStatus ? 'ha' : "yo'q"}
                 
// `);
// }
// ===============================================================
// const arr = [1,2,6,4,5];
// let k = 3 , bigNum = {};


// for(let value of arr){
//     if(k < value){
//         bigNum[value] = value
//     }
// }
// console.log(Object.keys(bigNum)[0]);

// const array = ['apple' , 'banana' , 'watermelon' , 'pineapple'];
// let searchElement = 'watermelon';

// function includes(array , searchElement){
//     for(let value of array){
//         if(value == searchElement){
//             return true;
//         }
//     }
//     return false;
// }
// console.log(includes(array , searchElement));



// Bankamat

// console.log([] == {});



// const person1 = {
//     firstName: 'Nafisa',
//     lastName:'Yuldasheva',
//     showInfo : function(){
//         console.log(
//             `User ismi: ${this.firstName} , User familyasi: ${this.lastName}`
//         );
//     }
// }
// const person2 = {
//     firstName: 'Lola',
//     lastName:'Egamberdiyeva',
//     showInfo : function(){
//         console.log(
//             `User ismi: ${this.firstName} , User familyasi: ${this.lastName}`
//         );
//     }
// }
// const person3 = {
//     firstName: 'Durdona',
//     lastName:'Sattarova',
//     showInfo : function(){
//         console.log(
//             `User ismi: ${this.firstName} , User familyasi: ${this.lastName}`
//         );
//     }
// }

// // console.log(person1.showInfo());

// =============== Function constructor===========

// function funkPerson(firstName , lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.showInfo = function (){
//         console.log( 
//             `userning ismi : ${this.firstName} , userning familyasi: ${this.lastName}`
//         );
//     }
// }

// const person = new funkPerson('nafisa' , 'yuldasheva')
// const person1 = new funkPerson('Oktam' , 'qulsatov')

// person.showInfo()
// person1.showInfo()


const contacts = [
    {
        name:'Ravshan kursdush',
        phoneNumber:'910719090',
        avatar:['https//qanadir image'],
        lastActive:'10:54'
    }
]