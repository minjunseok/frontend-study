

// 5가지 요소 순회 및 탐색 메서드

// 1. forEach

// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드

let arr1 = [1, 2, 3];

// 사용법

// (현재 요소의 값, 반복 카운트(인덱스값)), 현재 배열) 순으로 전달

arr1.forEach(function (item, idx, arr) {

  // console.log(idx, item);

});


// 응용 예제 위 배열의 값에 두배씩 곱하여 

// 각 값을 배열에 push한다.

let doubledArr = [];

arr1.forEach((item)=> {

  doubledArr.push(item * 2);

});


// console.log(doubledArr);





// 2. includes 

// 배열에 특정 요소가 있는지 확인하는 그런 메서드

let arr2 = [1, 2, 3];

let isInclude = arr2.includes(3);

// console.log(isInclude);



// 3. indexOf

// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드

let arr3 = [1, 2, 3];

let index = arr3.indexOf(2);

// console.log(index);


let arr4 = [2, 2, 2];

let index2 = arr4.indexOf(20);

// console.log(index2);



// 4. findIndex


// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드 

let arr5 = [1, 2, 3];


const findedIndex = arr5.findIndex((item) => {
  if (item === 2) return true;
});


// console.log(findedIndex);


//응용 예제 - 배열 내에 홀수가 있는지 확인하고 해당 인덱스를 반환해보자


const findedIndex2 = arr5.findIndex((item) => {
  if (item % 2 !== 0) return true;

});

// console.log(findedIndex2);



// 객체에서 이용 가능한 메서드

let objectArr = [

  {name : "석민준" },
  {name : "홍길동" },

];

// console.log(
  
//   objectArr.indexOf({ name: "석민준"})

// );

// console.log(
  
//   objectArr.findIndex(
//     (item) => item.name === "홍길동"

//   )

// );

// 5. find 

// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데,

// 요소를 그대로 반환한다.

let arr6 = [

  { name: "석민준" },
  { name: "홍길동" },

];

const finded = arr6.find(
  (item) => item.name === "석민준"
);

console.log(finded);

