// 13. Promise 객체

// const promise = new Promise((resolve, reject) => {

// 비동기 작업을 실행하는 함수
// executor

//   setTimeout(() => {

//     console.log("안녕");
//     reject("왜 실패했는지 이유...");

//   }, 2000);

// });

// 3초가 지난 이후에 promise 객체를 다시 출력해보자

// setTimeout(() => {

//   console.log(promise);

// }, 3000);

// 예제 - Promise 를 또다른 Promise의 결과값으로 이용하는 법

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업을 실행하는 함수
    // executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다");
      }
    }, 2000);
  });

  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);

    return add10(result);
  })
  .then((result) => {
    console.log(result);

    return add10(result);
  })
  .then((result) => {
    console.log(result);

    return add10(undefined);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// Promise로 관리하는 비동기 작업의 결과값을 사용해보자

// then 메서드
// -> 그 후에

// promise.then((value)=>{

//   console.log(value);

// });

// catch 메서드

// promise.catch((error) => {

//   console.log(error);

// })
//   .catch((error) => {

//   console.log(error);
//   });
