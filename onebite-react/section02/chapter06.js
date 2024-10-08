// 배열 순회

let numbers = [1, 2, 3];


// 객체 순회

// let person = {

//   name: "석민준",

//   age: 30,

//   hobby: "운동",

// };



// 1. 배열 순회

let arr = [1, 2, 3];


// 1. 배열 인덱스

// for(let i = 0; i < arr.length; i++) {

//   console.log(arr[i])

// }


// let arr2 = [4, 5, 6, 7, 8];

// for(let i = 0; i < arr2.length; i++) {

//   console.log(arr2[i]);
  
// }


// 1.2 for of 반복문

for (let item of arr) {

  // console.log(item);

} 



// 2. 객체 순회

let person = {
  
  name: "석민준",
  age: 30,
  hobby: "운동",

};



// 2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환

let keys = Object.keys(person);


for (let key of keys) {


  // 괄호표기법으로 value을 별도 변수에 저장한다.
  // const value = person[key];

  // console.log(key, value);


  //또는
  //그냥 출력해도 (key, value) 순으로 반복문을 통해 확인할 수 있다.
  // console.log(key, person[key]);

  
  

}


// 2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환

let values = Object.values(person);

// console.log(values);

for(let value of values) {

  // console.log(value);

}


// 2.3 for in - key 값만 확인

for(let key in person) {


  console.log(key);


  //만약 value값도 확인이 필요하다면 이렇게 추가적으로 변수를 만들어 value 값을 저장하면 된다.

  // const value = person[key];
  // console.log(key, value);

}

