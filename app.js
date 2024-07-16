//=========================================== var let const=================================
//#region 1)
// var
// re-initialization (y)
// re-declaration (y)
// block scope (n)
// hoisting (y)

// var ke saath Re-declaration aur Re-initialization
// var a = 1;
// var a = 2; // Allowed
// a = 3; // Allowed
// console.log(a); // Output: 3

// Exaple

// function exampleVar() {
//     if (true) {
//         var x = 5;
//         console.log(x); // Output: 5
//     }
//     console.log(x); // Output: 5, x function scope ke andar hai
// }

// exampleVar();


// let
// re-initialization (n)
// re-declaration (y)
// block scope (y)
// hoisting (n)

// let ke saath Re-declaration aur Re-initialization
// let b = 1;
//  let b = 2; // Error: Identifier 'b' has already been declared
// b = 2; // Allowed
// console.log(b); // Output: 2


// // Example
// function exampleLet() {
//     if (true) {
//         let y = 10;

//         console.log(y); // Output: 10
//     }
//     // console.log(y); // Error: y is not defined, kyunki y block scope ke andar hai
// }

// exampleLet();


// const
// re-initialization (n)
// re-declaration (n)
// block scope (y)
// hoisting (n)

// const ke saath Re-declaration aur Re-initialization
// const c = 1;
// const c = 2; // Error: Identifier 'c' has already been declared
// c = 2; // Error: Assignment to constant variable
// console.log(c); // Output: 1







// function exampleConst() {
//     if (true) {
//         const z = 15;

//         console.log(z); // Output: 15
// z = 20; // Error: Assignment to constant variable
//  }
// console.log(z); // Error: z is not defined, kyunki z block scope ke andar hai
//  }

//  exampleConst();


// hoisting
// if (true){
//     var a = 10
// }
// console.log(a)


// function abc(){
//     var a  = 10;
// }
// abc()

// console.log ()


// In examples se clear hota hai ke var function scope ke saath flexible hai,
//  let aur const block scope ke saath strict hain, aur const constant value maintain karta hai.

//#endregion

//#region 2) ============================Template Literals===============================

// let a = "Saifullah khan"
// let b = ""
// console()

// let a = 7
// let b = `the square root of ${a} is ${a*a}`;

// console.log(b)

//#endregion

//#region 3 ) Ternary operator

// let condition = true;

// if (condition) {
//     console.log("true condition Work")
// } else {
//     console.log("false condition Work")
// }

//  let condition = false;
//  condition ? console.log("true condition work") : console.log("fasle condition work");

// let age = 21;
// let studenCard = true;
// age > 17
// ? console.log("Allow")
// : studenCard
// ? console.log("Allow on student Card")
// : console.log("Not Allow")

// age > 17 || studenCard ? console.log("Allow") : console.log("Not Allow");

//#endregion

//#region 4) circuts
// let condition = 10;
// let a = condition && "ABC";
// console.log(a)
//#endregion

// #region  5) pass by Value Pass by reference
// let a =[1,2,3];
// let b = a;
// b.push("ABC")
// console.log(a)



// let a ={
//     id : 1,
//     name:"ABC",

// };

// let b = a;

// b.inst:"SMIT"
// console.log(a)

//#endregion

//#region 6)  spreate operater
// let a =[1,2,3];
// let b = a;
// b.push("ABC")
// console.log(a)

// let a = [1,2,3];
// let b = ["A","B","C"];
// let c = [...a, ...b];

// console.log(c)


// let a ={
//     id:1,
//     name:"ABC",
// };

// let b = {
//     inst:"ABC",
// };

// let c ={
//     ...a,
//     ...b,
// };
// console.log(c)

//#endregion

//#region 7) Rest operator
// function abc(a,b,c,...abc) {

//     console.log(a,b,c,abc);
// }

// abc(1, 2, 3, 4, 5, 6, 7, 8, 9);

//#endregion

//#region 8) Destructure Arry And Object


// let a = [1, 2, 3, 4];
// let [firstIndex, secondIndex, , fourIndex] = a;
// console.log(fourIndex)

// let b = {
//     id: 1,
//     name: "ABC",
//     age: 18,
// };

// let { id, name } = b;

// console.log(id, name)

//#endregion

//#region  9) object Methods






// let obj = {

//     id: 1,
//     name: "ABC",
//     age: 10,
//     inst: "SMIT"
// }

// let key = Object.keys(obj);
// let val = Object.values(obj);
// let entries = Object.entries(obj);
// Object.freeze(obj);

// obj.name ="XYZ"

// console.log(obj)

//#endregion

//#region 10 ) Function Higher order and call back function


//  jo function apne prameter me koi dosra function call kr rha ho wh higherorder function hota hai.
// jo function ksi ke prameter me call ho rha ho wh callback function hota hai.
// function abc(a){
//     returna;
// }

// function xyz (b){
//     console.log(b);
// }

// xyz(abc("Hello :"))

// function abc() {
//     console.log("ABC");

//     return function () {
//         console.log("Retrun hone wala functiom")
//     };
// }
// abc()();

// let a =abc();
// a();


// b)Arrow
// function abc(){

//     console.log("ABC")
// }
// abc()

// let abc = () => {
//     console.log("ABC")
// }
// abc();

// let abc = a=>{
//     console.log(a)
// }
// abc("ABC");

// let abc = (a,b) => "Return hone wala function"
// let a = abc()
// console.log(a)

// let a = _ => _
// let abc = a("this is Arrow function")
// console.log(abc)


// c)closuser
// d)lexical scoping

// let a ="xyz";
// function abc(){
//     let a="abc";
//     console.log(a)

// }
// abc()

// e)defult perameter

// function abc(b =1){
//     let a = 420;
//     console.log(b*a)
// }
// abc()
//#endregion

//#region  11) Arry function
//a === map

// let a = ["A", "B", "C", "D", "E"];
// a.map((x, y, z) => {

//     console.log(x)
//     console.log(y)
//     console.log(z)
// });

// let a = [
//     {
//         id: 5,
//         name: "saif",
//         category: "A",
//         fee: 500,
//         taxpercentag: 3,
//         isPass: true
//     },
//     {
//         id: 5,
//         name: "saif",
//         category: "A",
//         fee: 500,
//         taxpercentag: 3,
//         ispass: true
//     },
//     {
//         id: 5,
//         name: "saif",
//         category: "A",
//         fee: 500,
//         taxpercentag: 3,
//         ispass: true
//     },

//     {
//         id: 5,
//         name: "wahab",
//         category: "B",
//         fee: 300,
//         taxpercentag: 2,
//         ispass: true
//     },
//     {
//         id: 5,
//         name: "wasiq",
//         category: "B",
//         fee: 300,
//         taxpercentag: 2,
//         ispass: true
//     },
//     {
//         id: 3,
//         name: "Bilal",
//         category: "B",
//         fee: 300,
//         taxpercentag: 2,
//         ispass: true
//     },
// ];

// let b = a.map((x, i, z) => {
//     return x.name;
// })
// console.log(b);

//b) == filter

// let b = a.filter((x,i,a)=>{

//     if (x.category == "B"){
//         return x;
//     }
// })
// console.log(b)

//c) == forEach

// let count =0;
// let taxpercentag =0;
// a.forEach((x, i, list) => {
//     x.inst = "SMIT";
//     let per = x.fee/ 100;
//     // x.textpercentag
//     count += x.fee + per * x.taxpercentag; //after adding tax
// });

// console.log(a,count);

//d) == reduce

// let b = a.reduce((x,y)=> {
//     console.log(x,y.fee)
//     return y.fee
// },0)
// console.log(b)


// let b = a.reduce((x, y) => {
//     if (x.category) {
//         x[y.category].push(y)
//     } else {
//         x[y.category] = []
//     }
//     return x
// }, {})



//e) == some

// let b = a.some((x) => {
//     if (!x.isPass) {
//         return x;
//     }
// });
// console.log(b)

//f) == every

// let b = a.every((x)=> x.isPass);
// console.log(b);

//g) == find
// find pura object utha kar dedeta hai jis mai id jo hu wo dega jsy id:3 ya id:

// let b = a.find((x) => x.id == 3)
// console.log(b)

// i) ==findindex
// y index ka number laker dega matlb jsy konci line per hai apka 3 oject
// let b= a.findIndex ((x) => x.id === 3);
// console.log(b)

//j) ==flat
// flat ke under number daty hain jitna arry ko marg krna hai agr sub ko krna hai tw infinity dengy
// let arr = ["a", "b", "c", [1, 2, 3,["xa", "xb", "xc"]]];
// let b = arr.flat(2);
// console.log(b)



//#endregion

//#region 12) promise
//  syncronous 
// let a
// console.log("A")
// console.log(a)
// console.log("C")


// let zingerKaPromise = () => {
//     return new Promise((resovle, reject) => {
//         let koiKaamNiKalwanaHai = true;
//         // dost sch rha hai
//         setTimeout(() => {
//             if (koiKaamNiKalwanaHai) {
//                 resovle("han khila dunga");
//             } else {
//                 reject("Topi");
//             }
//         }, 5000);
//     });
// };
// console.log("promis Start")

// zingerKaPromise()
// .then((res) => {
//     console.log(res, "Then Response")
// })
// .catch((err) => {
//     console.log(err, "catch Response")
// }); 

// Asyncronous

// let asynFunc = async()=>{
//     console.log("Async");
//     let res = await zingerKaPromise();
//     console.log(res, "res")
// };

// asynFunc();
//#endregion



