
// 승패를 가리기 위한 함수

export const judgement = (user, computer) =>{

  console.log("user", user, "computer", computer );
  console.log(user.name, computer.name);

  if(user.name === computer.name) {

    return "draw";

  } else if(user.name === "rock") return computer.name === "scissors" ? "win" : "lose";
    else if(user.name === "paper") return computer.name === "rock" ? "win" : "lose";
    else if(user.name === "scissors") return computer.name === "paper" ? "win" : "lose";
  
};






