



// async function getData() {

//   return {

//     name: "석민준",
//     id: "minjunseok",

//   };

// }

// console.log(getData());






  // 기존의 Promise , then 을 이어서 사용하는 방식

  // function printData(){

  //   getData().then(() => {
  //     console.log(result);

  //   });
  // }

  // printData();





  // async

// 함수 앞에 붙이는 키워드

// 어떤 함수를 비동기 함수로 만들어주는 키워드

// 함수가 Promise를 반환하도록 변환해주는 그런 키워드

 

  async function getData() {

    return new Promise((resolve, reject) => {
  
        setTimeout(() => {
  
          resolve({
  
            name: "석민준",
            id: "minjunseok",
  
          });
  
        }, 3000);
      });
    }
  
    console.log(getData());



     // await
  // async 함수가 내부에서만 사용이 가능 한 키워드
  // 비동기 함수가 다 처리되기를 기다리는 역할


   function printData() {

    const data = await getData(); // 이 부분에서 getData()가 반환하는 Promise가 종료될 때까지 기다려준다.
    console.log(data);
  }

  printData();
