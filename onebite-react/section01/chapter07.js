// 1. 대입 연산자

let var1 = 1;

// 2. 산술 연산자

let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = (1 + 2) * 10;

// console.log(num6);

// 3. 복합 대입 연산자

let num7 = 10;

// 이런 식으로 사용하도 되지만

num7 = num7 + 20;

// 더 간결하게 이렇게 사용하면 된다.
// 원래 num7에 값에 20을 추가로 더하라는 뜻

num7 += 20;

// 당연한 것이지만 다른 연산도 가능하다

num7 -= 20;

num7 *= 20;

num7 /= 20;

num7 %= 20;

// console.log(num7);

// 4. 증감 연산자

let num8 = 10;

// 이런 식으로 증감연산자를 바로 출력하게 되면
// 10에서 증감한 11이란 값이 나오지 않는다 이 출력 라인이 지나고 나서야
// 실질적인 증감이 이루어지기 때문

// console.log(num8++);

// 증감 연산자를 변수 뒤가 아닌 앞에 붙여주면 바로 출력이 가능하다.

// console.log(++num8);

// 5. 논리 연산자

let or = true || false;

let and = true && false;

let not = !true;

// console.log(or, and , not);

// 6. 비교 연산자

let comp1 = 1 === 2;
let comp2 = 1 !== 2;

// console.log(comp1,comp2);

// 초과

let comp3 = 2 > 1;

// 미만

let comp4 = 2 < 1;

// 이상

let comp5 = 2 >= 2;

// 이하

let comp6 = 2 <= 2;

console.log(comp3, comp4, comp5, comp6);
