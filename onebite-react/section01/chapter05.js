// 1. Number Type

let num1 = 27;

let num2 = 1.5;

let num3 = -20;

//양의 무한대

let inf = Infinity;

//음의 무한대

let mInf = -Infinity;

//Not a number이란 뜻으로 수치 연산에 실패했을 때 결과값

let nan = NaN;

//계산할 수 없는 수치들을 계산하려고 하면 NaN을 띄우게 된다.
// console.log(1 * "hello");

// 2. String Type
//자바스크립트에서 문자열은 무조건 싱글 코테이션 ' ' , 더블 코테이션 " "로 감싸야 한다.

let myName = "석민준";
let myLocation = "성남";
let introduce =
  "제 이름은 " + myName + "입니다. " + myLocation + "에 거주합니다.";

// console.log(introduce);

//한/영 키를 눌러 영문 상태에서 ~을 누르게되면 ` 백틱이 나오고
//` 이 백틱 안에 기존에 넣어져 있던 문자열 변수값을 동적으로 넣어 사용할 수 있다.
//이런 문법을 "템플릿 리터럴 문법" 이라고 부른다

let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;
// console.log(introduceText);

// 3. Boolean Type
// 참,거짓 등 현재의 상태를 의미하는 타입

let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 들어있지 않다.)
// null은 개발자가 필요에 의해 직접 할당해야 한다.

let empty = null;

// 5. Undefined Type
// Null과 비슷하나
// 변수를 선언하고 아무것도 집어넣지 않았을 때 자동으로 할당이 된다.
// undefined는 존재하지 않는 값을 불러오려고 하면 할당이 되는 값이다.

let none;

console.log(none);
