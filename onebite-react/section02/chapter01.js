// 1. Falsy한 값

let f1 = undefined;

let f2 = null;

let f3 = 0;

let f4 = -0;

let f5 = NaN;

let f6 = "";

let f7 = 0n;



// 2. Truthy 한 값

// -> 7가지 Falsy 한 값들 제외한 나머지 모든 값

let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};


// if(t1) {

//   console.log("Truthy");
// }



// if(!f2) {

//   console.log("falsy");
// }



// 3. 활용 사례

function printName(person) {

    if(!person) {

      console.log("person의 값이 없음");

      return;


    }


  console.log(person.name);

}

let person = { name: "석민준"};
printName(person);




