// function returnFalse() {
//   console.log("False 함수");
//   return false;
// }

// function returnTrue() {
//   console.log("True 함수");
//   return true;
// }

// console.log(returnTrue() || returnFalse());


// function returnFalse() {
//   console.log("False 함수");
//   return undefined;
// }

// function returnTrue() {
//   console.log("True 함수");
//   return 10;
// }

// console.log(returnTrue() || returnFalse());



// 단락 평가 활용 사례


function printName(person) {

    const name = person && person.name;
    

    console.log(person && person.name);
  

}

printName();



