// 12. 함수 표현식과 화살표 함수

function funcA() {
  console.log("funcA");
}

let varA = funcA;
// console.log(varA);

// varA();

// varB();

let varB = function () {
  console.log("funcB");
};

// 2. 화살표 함수

//이전보다 더 빠르고 간결하게 생성하도록 도와주는 JavaScript 문법

// let varC = () => 1;

// console.log(varC());

// 3. 화살표 함수 -  인수,매개변수 사용이 가능하다.

let varC = (value) => {
  console.log(value);

  return value + 1;
};

console.log(varC(10));
