// OOP => Object oriented programming

// classni nomlash pascalcase (birinchi harfi katta bilan )\\
// ex

// class tech {
//   constructor(title, createAt, price) {
//     (this.title = title), (this.createAt = createAt), (this.price = price);
//   }
//   showInfo() {
//     console.log(`
// nomi:${this.title}
// yili:${this.creatAt}
// narxi:${this.price}
//         `);
//   }
// }
//=============================================================
// const samsung = {
//   title: "Samsung Galaxy s21",
//   createAt: "2023",
//   price: "1000$",
// };

// const appple = {
//   title: "Iphone 12 pro",
//   createAt: "2023",
//   price: "1400$",
// };

// class Phone {
//   constructor(title, createAt, price) {
//     (this.title = title), (this.createAt = createAt), (this.price = price);
//   }
//   showInfo() {
//     console.log(`
// nomi:${this.title}
// yili:${this.createAt}
// narxi:${this.price}
//         `);
//   }
// }

// class Computer {
//   constructor(title, createAt, price) {
//     (this.title = title), (this.createAt = createAt), (this.price = price);
//   }
//   showInfo() {
//     console.log(`
// nomi:${this.title}
// yili:${this.createAt}
// narxi:${this.price}
//         `);
//   }
// }

// class SmarTv {
//   constructor(title, createAt, price) {
//     (this.title = title), (this.createAt = createAt), (this.price = price);
//   }
//   showInfo() {
//     console.log(`
// nomi:${this.title}
// yili:${this.createAt}
// narxi:${this.price}
//         `);
//   }
// }

// const redmi = new Phone("redmi", "2021", 1000);
// const apple = new Phone("iphone", "2023", 1400);
// const hp = new Computer("Hp", "2023", 500);
// const tv = new SmarTv("Artel", "2023", 300);

// redmi.showInfo();
// apple.showInfo();
// hp.showInfo();
// tv.showInfo();
// =================================================================
// class Phone {
//   constructor(title, createAt, price) {
//     this.name = title;
//     this.createAt = createAt;
//     this.price = price;
//   }
//   showInfo() {
//     console.log(`
// nomi:${this.name}
// yili:${this.createAt}
// narxi:${this.price}
//     `);
//   }
// }

// const redmi = new Phone("redmi", "2021", 1000);
// const apple = new Phone("iphone", "2023", 1400);
// redmi.showInfo()
// apple.showInfo()
//=============================================================
// class Alive {
//   eat() {
//     console.log(this.name + " Eating");
//   }
// }

// class Person extends Alive {
//   constructor() {
//     super();
//     this.name = "Vali";
//   }
// }

// class Dog extends Alive {
//   constructor() {
//     super();
//     this.name = "Bobbi";
//   }
// }

// const vali = new Person();
// const bobbi = new Dog();

// vali.eat();
// bobbi.eat();

//  ========================
// class Bino {
//   showInfo() {
//     console.log(`
// ${this.name + " " + this.etaj} etajli
// Hozilgi etaj ${this.hozirgiEtaj} 
// list turgan joy ${this.lift()}`);
//   }
//   lift() {
//     return this.etaj >= this.hozirgiEtaj ? this.hozirgiEtaj + 1 : 1;
//   }
// }

// class Maktab extends Bino {
//   constructor() {
//     super();
//     this.name = "Maktab";
//     this.etaj = 4;
//     this.hozirgiEtaj = 4;
//   }
// }
// class Kollej extends Bino {
//   constructor() {
//     super();
//     this.name = "Kollej";
//     this.etaj = 4;
//     this.hozirgiEtaj = 2;
//   }
// }
// class Universitet extends Bino {
//   constructor() {
//     super();
//     this.name = "Unversitet";
//     this.etaj = 7;
//     this.hozirgiEtaj = 2;
//   }
// }
// const maktab = new Maktab();
// const kollej = new Kollej();
// const universitet = new Universitet();

// maktab.showInfo();
// kollej.showInfo();
// universitet.showInfo();
// ========================================================================

class Person {
  Fname = "";
  Lname = "";
  constructor(ismi, familyasi) {
    this.Fname = ismi
    this.Lname = familyasi
  }

//   changeName(newName){
//     this.Fname = newName
//   }

  set changeName(newName){
    this.Fname = newName
  }

  get getFullName(){
    return this.Fname + ' ' + this.Lname
  }
}

const person = new Person('John' , 'Doe')
// person.changeName('toshmat')

person.changeName = 'G`ishmat'

console.log(person);
console.log(person.getFullName);