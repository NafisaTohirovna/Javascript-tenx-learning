// const obj = Object.create(
//   {},
//   {
//     name: {
//       value: "John",
//       enumrable: true, //ko'rinmasligi
//       writable: false, //edit qilish
//       configurable: false, //delete qilish
//     },
//   }
// );
// console.log(obj);

//YANGI ELEMENTNI DISTRAKCHER QILISH
// let name = "John doe";

// const person = {
//   name: "Anvarbek",
//   age: 20,
//   lastActive: {
//     date: 12,
//     task: "Uyga vazifa masalalari",
//   },
// };
// const { name: newName, age, lastActive:{ date, task }  } = person;

// // const { date, task }  = lastActive;
// console.log(name, newName, age, date, task);

// const person = {
//     name:'Nafisa',
//     age:30,
// }

// const json = JSON.stringify(person , ['name' , 'age'])

// const obj = JSON.parse(json)

// console.log(json);

//  ================== DATA =============================

// const date = new Date();

// // console.log(date.getDate());
// // console.log(date.getDay());
// // console.log(date.getFullYear());
// // console.log(date.getHours());

// console.log(
//   `${date.getDate()}-${
//     date.getMonth() + 1 < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1
//   }-${date.getFullYear()}`
// );





// ======================================================================

// function moment() {
//   (month = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "Jule",
//     "August",
//     "september",
//     "december",
//   ]),   
//     (day = [
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//       "Sunday",
//     ]);
//   const date = new Date();
//   return {
//     locale() {
//       return "en";
//     },
//     format(param) {
//       if (param == "LT") return `${date.getHours()}:${date.getMinutes()} `;
//       if (param == "LTS")
//         return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `;
//       if (param == "L")
//         return `${
//           date.getMonth() + 1 < 10
//             ? "0" + (date.getMonth() + 1)
//             : date.getMonth() + 1
//         }/${date.getDate()}/${date.getFullYear()} `;
//       if (param == "l")
//         return `${
//           date.getMonth() + 1
//         }/${date.getDate()}/${date.getFullYear()} `;
//       if (param == "LL")
//         return `${
//           month[date.getMonth()]
//         } ${date.getDate()} ,${date.getFullYear()}`;
//       if (param == "ll")
//         return `${month[date.getMonth()].slice(
//           0,
//           3
//         )} ${date.getDate()}, ${date.getFullYear()}`;
//       if (param == "LLL")
//         return `${
//           month[date.getMonth()]
//         } ${date.getDate()} ,${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
//       if (param == "lll")
//         return `${day[date.getDay() - 1]}, ${
//           month[date.getMonth()]
//         } ${date.getDate()} ,${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
//       if (param == "llll")
//         return `${day[date.getDay() - 1].slice(0, 3)} ,${month[
//           date.getMonth()
//         ].slice(
//           0,
//           3
//         )} ${date.getDate()} , ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
//     },
//   };
// }

// console.log(moment().format("llll"));
// setInterval(() => {
//   document.getElementById("LT").innerHTML = moment().format("LT");
//   document.getElementById("LTS").innerHTML = moment().format("LTS");
//   document.getElementById("L").innerHTML = moment().format("L");
//   document.getElementById("l").innerHTML = moment().format("l");
//   document.getElementById("LL").innerHTML = moment().format("LL");
//   document.getElementById("ll").innerHTML = moment().format("ll");
//   document.getElementById("LLL").innerHTML = moment().format("LLL");
//   document.getElementById("lll").innerHTML = moment().format("lll");
// }, 1000);

// ====================================================================

// const date = new Date();

function foo(date1, date2) {
  let BirinchiVaqt = new Date(date1);
  let Ikkinchivaqt = new Date(date2);
  console.log(BirinchiVaqt - Ikkinchivaqt);
}

foo('04/02/2014', '11/04/2014');
