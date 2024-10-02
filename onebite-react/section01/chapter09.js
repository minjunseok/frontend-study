// 1. if 조건문 (if문)

let num = 10;

// 변수와 특정 조건을 소괄호() 안에 작성하고

// 조건에 부합할 시 실행될 코드를 {} 중괄호 안에 작성한다.

if (num >= 10) {
  // console.log("num은 10 이상입니다");
  // console.log("조건이 참 입니다!");
} else if (num >= 5) {
  // console.log("num은 5 이상입니다.");
} else if (num >= 3) {
  // console.log("num은 3 이상입니다.");
  // 그렇지 않으면 실행되어지는 코드는 else{} 안에 추가적으로 작성한다.
} else {
  // console.log("조건이 거짓입니다!");
}

// 2. Switch 문

// -> if문과 기능 자체는 동일하다.

// -> 다수의 조건을 처리할 때 if보다 직관적이다.

let animal = "owl";

switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }

  case "dog": {
    console.log("강아지");
    break;
  }

  case "bear": {
    console.log("곰");
    break;
  }

  case "tiger": {
    console.log("호랑이");
    break;
  }
  default: {
    console.log("그런 동물은 전 모릅니다.");
  }
}
