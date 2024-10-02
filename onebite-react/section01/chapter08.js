// 1. null 병합 연산자
// 무슨 기능을 하는가?
// 존재하는 갑을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

// 이렇게 작성하면 양쪽 값 중에 null,undefined이 아닌 값을 저장한다.

let var4 = var1 ?? var2;

// console.log(var4);

let var5 = var1 ?? var3;

// console.log(var5);

// 만약 두 값 모두 초기화가 되어져 있는 값이라면 먼저 적힌 var2의 값이 저장이 된다.

let var6 = var2 ?? var3;

// console.log(var6);



// 이 방식은 실무에서도 많이 사용되어지는 방식이다.

let userName = "석민준";
let userNickName = "minjunseok";

let displayName = userName ?? userNickName;
// console.log(displayName);


// 2. typeof 연산자
// - > 값의 타입을 문자열로 반환하는 기능을 하는 연산자


let var7 = 1;
var7 = "hello";
var7 = 20;


// 뒤에 나오는 변수나 값의 타입을 문자열로 반환한다.
// ex) 문자열이면 String 수치면 Number 


let t1 = typeof var7;

// console.log(t1);


// 3. 삼항 연산자

// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환

let var8 = 10;

// 요구사항 :  변수 res에 var8의 값이 짝수 -> "짝" , 홀수 -> "홀"

let res = var8 % 2 === 0? "짝수" : "홀수";

// 조건식 참 : 거짓 순으로 적으면 된다.
// 참일 때는 : 앞의 반환값 , 거짓일 때는 뒤의 반환값으로 저장한다.

console.log(res);

