// 5. 객체 타입과 원시 타입의 차이점

// let p1 = 1;

// let p2 = p1;

// p2 = 2;

// let o1 = {name: "석민준" };

// let o2 = o1;

// o2.name = "홍길동";

let o1 = { name: "석민준" };

let o2 = o1;

let o3 = { ...o1 };

// console.log(o1 === o2);

// console.log(o1 === o3);

console.log(JSON.stringify(o1) === JSON.stringify(o3));
