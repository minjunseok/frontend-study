// 1. 콜백함수

// function main(value) {
//   console.log(1);
//   console.log(2);
//   value();
//   console.log("end");
// }

// function sub() {
//   console.log("i am sub");
// }

// main(sub);

// main(() => {
//   console.log("i am sub");
// });

// 2. 콜백함수의 활용

function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, function (idx) {
  console.log(idx);
});

repeat(5, function (idx) {
  console.log(idx * 2);
});

repeat(5, function (idx) {
  console.log(idx * 3);
});
