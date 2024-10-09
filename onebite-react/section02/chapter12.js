// 12. 비동기 작업 처리하기 - 콜백함수

// 예제 1 - 콜백함수 이용 - 3초 뒤 안녕하세요 출력하기

// function task(){

//   setTimeout(() => {

//     console.log("안녕하세요. 개발자 석민준입니다.");
//   }, 3000);

// }

// task();

// 예제 2 - 콜백함수 이용 - 3초 뒤 덧셈결과 출력하기

// function add(a, b, callback){

//   setTimeout(() => {

//     const sum = a + b;
//     callback(sum);

//   }, 3000);

// }

// add(2 ,1 ,(value)=>{

//   console.log(value);
// });

// 예제 3 - 음식을 주문하는 상황

function orderFood(callback) {
  setTimeout(() => {
    const food = "삼겹살";

    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(food, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
