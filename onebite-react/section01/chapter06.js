// 1. 묵시적 형 변환
// 자바스크립트 엔진이 내 의지와는 관계없이 알아서 형 변환 해주는 것

let num = 10;
let str = "20";

const result = num + str;

// console.log(result);

// 2. 명시적 형 변환
// 프로그래머가 내장 함수를 이용해 직접 사용하는 형 변환

let str1 = "10";
let strToNum1 = Number(str1);

// console.log(10 + strToNum1);

let str2 = "10개";
let strToNum2 = parseInt(str2);

// console.log(strToNum2);


// -> 숫자 -> 문자열

let num1 = 20;

let numToStr1 = String(num1);

console.log(numToStr1 + "입니다");

