// 15. 객체

// 1. 객체 생성

let obj1 = new Object(); // 객체 생성자

let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성))
// 키(key) : 값(value)
// 키값엔 수치가 와도 된다.
// 띄어쓰기가 포함된 문자열을 사용하려면 예외적으로 " 더블 코테이션으로 감싸야 한다.
let person = {
  name: "석민준",
  age: 30,
  hobby: "운동",
  job: "Developer",
  10: 20,
  "like food": true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)

let name = person.name;

// console.log(name); // 라인이 그어지는 건 타입스크립트의 경고사항이므로 무시할 것

let age = person["age"];

// console.log(age);

// 문자열을 만들어 객체의 프로퍼티를 동적으로 저장도 할 수 있다.

let property = "hobby";

let hobby = person[property];

// console.log(hobby);

// 3.2 새로운 프로퍼티를 추가 또는 수정하는 방법

person.job = "developer";
person["favoriteFood"] = "삼겹살";

// console.log(person);

// 3.3 프로퍼티를 삭제 하는 방법

delete person.job;

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)

let result1 = "name" in person;
let result2 = "cat" in person;

console.log(result1);
console.log(result2);
