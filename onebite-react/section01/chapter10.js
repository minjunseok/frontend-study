
// 10. 반복문

// idx = index의 줄임말

// 조건식이 참일 때에만 동작을 하게 한다.

for (let idx = 0; idx < 10; idx++) {

  if(idx % 2 === 0) {

    continue;

  }

  console.log(idx);


  if (idx >= 5) {

    break;

  }
}

