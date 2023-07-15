// const arr = [3 ,57 , 390 , 4 , 5 , 22 , 145]

// const sorteArr = arr.sort(callBack);
// console.log(sorteArr);

// function callBack(a , b){
//     return a - b;
// }
// bitta funksiyaga ikkinchi funksiyaga chaqirib ishlatish - CallBack function deyiladi

//========================= CALL BACK FUNCTION =======================

// function greeting(name) {
//   alert(`Hello, ${name}`);
// }

// function processUserInput(callback) {
//   const name = prompt("Please enter your name.");
//   callback(name);
// }

// processUserInput(greeting);

// ============= SORTLASH ============================================

// const arr = [3 ,57 , 390 , 4 , 5 , 22 , 145]
// const newArr = [...arr].sort(callBack)

// const sorteArr = arr.sort(callBack);
// console.log(sorteArr);

// function callBack(a , b){
//     return a - b;
// // }
// console.log(`eski: ${arr}`);
// console.log(`yangi: ${newArr}`);

// ================ FILTERLASH ========================================

// const arr = [1,2,3,4,5,6,7,8,9,10,0];

// const filteredArr = arr.filter(function(value , index , arr){
//     return value > 3
// })

// console.log(filteredArr);

// const contacts = [
//   {
//     name: "Ravshan kursdosh",
//     phoneNumber: "910718903",
//     avatar: ["https://qanadir image manzili", "https://ikkinchi usuli"],
//     lastActive: "10:23",
//     userName: "@ kotta_bola",
//     bio: "San o'qigan kitobni man yozganman sakrama, auf",
//     isHidePhoneNumber: false,
//     isBlocked: false,
//   },
//   {
//     name: "Abduhakim bratishka",
//     phoneNumber: "997570788",
//     avatar: ["https://qanadir image manzili", "https://ikkinchi usuli"],
//     lastActive: "Yaqinda online edi",
//     userName: "@ vorzakon",
//     bio: "2008 larni sindirish bandasiga emas",
//     isHidePhoneNumber: true,
//     isBlocked: true,
//   },
//   {
//     name: "O`ktam googler",
//     phoneNumber: "930425848",
//     avatar: ["https://qanadir image manzili", "https://ikkinchi usuli"],
//     lastActive: "10:56",
//     userName: "@ oktam_vines",
//     bio: "Dasturlashni o`rgansang hayotni tushunib yeta olasan",
//     isHidePhoneNumber: false,
//     isBlocked: true,
//   },
// ];

// // contact bloklanganlarni filter qilish
// const filterContact = [...contacts].filter((contact) => !contact.isBlocked);
// console.log(filterContact);

// // contact ismi bo'yicha sort qilish
// const filterName = [...contacts].sort((birinchi, ikkinchi) => birinchi.name.localeCompare(ikkinchi.name));
// console.log(filterName);

// // contact activlgi bo'yicha sort qilish
// const filterActive = [...contacts].sort(
//   (birinchi, ikkinchi) => {
//     return birinchi.lastActive.localeCompare(ikkinchi.lastActive)
// });
// console.log(filterActive);

// ================================================================

// const students = [
//     {
//         name:'Ravshan',
//         isTaskFinish:true,
//         price:20
//     },
//     {
//         name:'Asqar',
//         isTaskFinish:false,
//         price:40
//     }
// ]

// const bugunDarsUtamizmiEvery = students.every((item) => item.isTaskFinish)
// const bugunDarsUtamizmiSome = students.some((item) => item.isTaskFinish)
// const bugunDarsUtamizmiMap = students.map((student , indeks , massiv) =>{
//  return { ...student , price: student.price + 20}
// });

// console.log(bugunDarsUtamizmiMap);

// ======================= Find va findIndex =================

// const students = [
//     {
//         name: "Rovshan",
//         age: 16,
//     },
//     {
//         name: "Nafisa",
//         age: 18,
//     },
// ];
// const student = students.find((item) => item.name === 'Rovshan')
// const studentIndex = students.findIndex((item) => item.name === "Rovshan");

// console.log(student);
// console.log(studentIndex);

// ===========================================================

const students = [
  {
    id: 1,
    name: "Nafisa",
    course: "Javascript",
    balance: 0,
    tasks: [
      {
        date: "1",
        isFinited: true,
      },
      {
        date: "2",
        isFinited: true,
      },
      {
        date: "3",
        isFinited: true,
      },
      {
        date: "4",
        isFinited: true,
      },
      {
        date: "5",
        isFinited: true,
      },
      {
        date: "6",
        isFinited: true,
      },
      {
        date: "7",
        isFinited: false,
      },
      {
        date: "8",
        isFinited: true,
      },
      {
        date: "9",
        isFinited: true,
      },
      {
        date: "10",
        isFinited: true,
      },
    ],
    isOurStudent: true,
  },
  {
    id: 2,
    name: "Fozila",
    course: "Javascript",
    balance: 100,
    tasks: [
      {
        date: "1",
        isFinited: true,
      },
      {
        date: "2",
        isFinited: true,
      },
      {
        date: "3",
        isFinited: true,
      },
      {
        date: "4",
        isFinited: true,
      },
      {
        date: "5",
        isFinited: true,
      },
      {
        date: "6",
        isFinited: true,
      },
      {
        date: "7",
        isFinited: true,
      },
      {
        date: "8",
        isFinited: true,
      },
      {
        date: "9",
        isFinited: true,
      },
      {
        date: "10",
        isFinited: true,
      },
    ],
    isOurStudent: true,
  },
  {
    id: 3,
    name: "Rayhon",
    course: "Javascript",
    balance: 100,
    tasks: [
      {
        date: "1",
        isFinited: false,
      },
      {
        date: "2",
        isFinited: false,
      },
      {
        date: "3",
        isFinited: false,
      },
      {
        date: "4",
        isFinited: true,
      },
      {
        date: "5",
        isFinited: true,
      },
      {
        date: "6",
        isFinited: true,
      },
      {
        date: "7",
        isFinited: true,
      },
      {
        date: "8",
        isFinited: true,
      },
      {
        date: "9",
        isFinited: true,
      },
      {
        date: "10",
        isFinited: true,
      },
    ],
    isOurStudent: true,
  },
];


// 1.10 kunda 3 tadan kop dars qoldirgan bo'lsa chopish kerak
// 2.addStudent(ismi familyasi course balance) yangi student qo'shish kerak
// 3.admin uchun studentlarini balance tugagan bolsa tepaga chiqarish kk
// 4.Ismlari bo'yicha qidirish
// 5.faqatgina chetlatilgan studentlarni chiqarib bersin
// 6.admin bitta functionni chaqirsin  shunga userning idsini berib yuborsin va statusini tahrir qilish
// 7.userning ismi , familyasi , balansini chiqarib berish
// 8.Yangi balans yaratish

// 1.10 kunda 3 tadan kop dars qoldirgan bo'lsa chopish kerak

  // const filteredStudents = students.filter(student => {
  //   const missedTasksCount = student.tasks.filter(task => !task.isFinited).length;
  //   return missedTasksCount >= 3;
  // });

  // filteredStudents.forEach(student => {
  //   console.log(student);
  // });

// // 2. addStudent(ismi familyasi course balance) yangi student qo'shish kerak
// function addStudent(name, course, balance) {
//   const newStudent = {
//     id: students.length + 1,
//     name,
//     course,
//     balance,
//     tasks: [],
//     isOurStudent: true
//   };

//   students.push(newStudent);
// }

// // 3. admin uchun studentlarini balance tugagan bolsa tepaga chiqarish
//   const filteredStudents = students.filter(student => student.balance === 0);

//   filteredStudents.forEach(student => {
//     console.log(student.name);
//   });

// // 4. Ismlari bo'yicha qidirish
// function searchStudentsByName(name) {
//   const filteredStudents = students.filter(
//     (student) => student.name.toLowerCase() === name.toLowerCase()
//   );

//   filteredStudents.forEach((student) => {
//     if (student.name) console.log(student.name);
//     else console.log("Bunday o'quvchi yo'q");
//   });
// }
// searchStudentsByName("Lola");
// // 5. faqatgina chetlatilgan studentlarni chiqarib bersin
// function printSuspendedStudents() {
//   const filteredStudents = students.filter(student => !student.isOurStudent);

//   filteredStudents.forEach(student => {
//     console.log(student.name);
//   });
// }

// // 6. admin bitta functionni chaqirsin, shunga userning idsini berib yuborsin va statusini tahrir qilish
// function updateStudentStatusById(id, isOurStudent) {
//   const student = students.find(student => student.id === id);

//   if (student) {
//     student.isOurStudent = isOurStudent;
//     console.log("Student status updated successfully.");
//   } else {
//     console.log("Student not found.");
//   }
// }

// // 7. userning ismi, familyasi, balansini chiqarib berish
// function printStudentDetails(id) {
//   const student = students.find(student => student.id === id);

//   if (student) {
//     console.log("Name:", student.name);
//     console.log("Balance:", student.balance);
//   } else {
//     console.log("Student not found.");
//   }
// }
