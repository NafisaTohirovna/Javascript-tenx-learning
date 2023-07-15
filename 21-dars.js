// function foo(){
//     var a = 10
//     boo()
//     function boo(){
//         console.log( a);
//     }
// }
// foo()

// lexical environment

// ==================================================
// function showInfo() {
//   console.log(`
//         kitob nomi:${this.bookName}
//         kitob mualifi:${this.author}
//         `);
// }

// const book = {
//   author: "Abdulla Qodiriy",
//   bookName: "O`tgan kunlar",
// };

// showInfo.apply(book)
// showInfo.call(book)
// const newShowInfo =  showInfo.bind(book)
// newShowInfo()
// =================================================

// for(let i = 0; i < 1000 ; i++){}
// console.log('Hello world');

// let count = 0

// // 1 sekunddan keyin chiqadi
// setTimeout( () => {
//     console.log('Hello world');
// } , 1000)

// // har bir sekundda yangilandadi
// setInterval(() => {
//   console.log("Hello world");
// }, 1000);

// ==============================
// const hour = document.getElementById("hour");
// const minute = document.getElementById("minute");
// const second = document.getElementById("second");

// setInterval(() => {
//   const date = new Date();
//   hour.innerHTML = `<pre>${date.getHours()} :  </pre> `;
//   minute.innerHTML = `<pre>${date.getMinutes()} : </pre>`;
//   second.innerHTML = `<pre>${date.getSeconds()}</pre>`;
// }, 1000);
// ====================================

// const minute = document.getElementById("minute");
// const second = document.getElementById("second");

// let mins = 5;
// let seconds = 0;

// minute.innerHTML = `${mins < 10 ? "0" + mins : mins}`;
// second.innerHTML = `${seconds < 10 ? "0" + seconds : seconds}`;

// const interval = setInterval(() => {
//   if (seconds === 0 && mins - 1 >= 0) {
//     mins = mins - 1;
//     seconds = 60;
//   }
//   if (seconds === 0 && mins === 0) {
//     clearInterval(interval);
//     return;
//   }

//   minute.innerHTML = `${mins < 10 ? "0" + mins : mins}`;
//   seconds -= 1;
//   second.innerHTML = `${seconds < 10 ? "0" + seconds : seconds}`;
// }, 100);

// const audio = document.getElementById("audio");
// function play() {
//   audio.play();
// }
// function stop() {
//   audio.pause();
// }

// console.log(0);
// setTimeout(() => {
//     console.log(1);
// } , 0)
// console.log(2);

// ====================================

// let str = "daabcbaabcbc";
// const part = "abc";

// function rep(str, part) {
//   if (!str.includes(part)) {
//     return str;
//   }
//   return rep(str.replace(part, ""), part);
// }
// console.log(rep(str, part));

// =======================================

// const text = "a1b1";

// res: ['a1b1','A1b1' , 'a1B1', 'A1B1']
