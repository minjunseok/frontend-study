// 1. 배열의 구조 분해 할당

let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;

// console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당

let person = {
  name: "석민준",
  age: 30,
  hobby: "운동",
};

let { name, age: myAge, hobby, extra = "hello" } = person;

// console.log(name, myAge, hobby, extra);

// 3. 객체 구조 분해 할당을 이용해서  함수의 매개변수를 받는 방법
// 화살표 함수 활용
// 기존에 점 표기법 등을 사용하지 않고 직접 매개변수로 받으면 간결하게 작성이 가능하다.
// 주의할 점은 반드시 객체를 넘겼을 때에만 구조분해 할당이 가능한 것이다.
// 유효한 객체만 넘겨야한다.

const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);
