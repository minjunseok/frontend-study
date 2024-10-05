
// 11 . 함수


// let width1 = 10;

// let height1 = 20;

// let area1 = width1 * height1;



// let width2 = 100;

// let height2 = 200;

// let area2 = width2 * height2;

// console.log("면적: " , area1);

// console.log("면적: " , area2);




// 함수 getArea

let width1 = 10;

let height1 = 20;

// let area1 = width1 * height1;




// getArea(10, 20);


// getArea(100, 200);

// console.log("면적: ", area1);

// console.log("면적: ", area2);



// 함수 선언 = 함수를 새롭게 만들다 = 어떤 코드가 실행될지 미리 준비해둔다.

// function greeting () {

//   console.log("안녕하세요!");

// }

// // 선언한 함수 호출시 반드시 소괄호를 붙여줘야한다.



// console.log("호출 전");

// greeting();

// console.log("호출 후");





// 실습 - 직사각형의 넓이를 구하는 함수




let area1 = getArea(30, 50);

console.log(area1);

let area2 = getArea(70, 100);
console.log(area2);





// JavaScript 내에선 호출보다 선언이 아래에 있어도 전혀 문제되어지지 않는다! 

function getArea(width, height) {

  function another() {

    console.log("another");

  }
  
  another();

  let area = width * height;

  return area; // 반환값

}


