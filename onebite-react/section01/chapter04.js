// 1. 변수

let age = 30;

//변수를 선언 및 초기화한다.

console.log(age);

//초기화된 변수를 출력해본다.

age = 32;

//이미 초기화된 변수 값은 언제든지 변경할 수 있다.
//그러므로 변수 선언시 꼭 초기화를 시켜주지 않아도 된다.

console.log(age);

//변경된 변수 값을 출력해본다.



// 2. 상수

const birth = "1995.05.26";
birth = "123";


// 3. 변수 명명 규칙(네이밍 규칙)

// 3-1. $, _ 제외한 기호는 사용할 수 없다.

let #name


let $_name


// 3-2. 숫자로 시작할 수 없다.

let name1;

let na1me;

let 1name;

let $2name;

let _2name;

// 3-3. 예약어를 사용할 수 없다.

let const;

let if;

const const;


// 4. 변수 명명 가이드


//혼자만 알 수 있는 변수명을 사용하는 건 매우 위험한 행위이다.

let a = 1;

let b = 1;

let c = a - b;

//누가봐도 알아 볼 수 있고

//프로젝트 맥락과 연관되어있는 변수명을 사용하는 것이 바람직하다.

let salesCount = 1;

let refundCount = 1;

let totalSalesCount = salesCount - refundCount;

