// 리액트 클래스형 함수 학습

import React, { Component } from 'react'
import BoxClass from './BoxClass';


export default class chapter01 extends Component {


  // 클래스 생성자 
  // 기존 클래스 컴포넌트에서는 state를 이런 방식으로 생성하였다.

  constructor(props) {

    super(props)
    this.state = {
       counter2: 0,
       num:1,
       value:0

    };
  }


  // state를 증감시키려면 setState 함수를 만들어줬어야 하였다.

  increase = () => {
    this.setState({counter2:this.state.counter2 + 1, value:this.state.value + 1});
  }



  // 실행할 때에도 클래스 내부에 있으므로 this 를 항상 붙였어야 하였다.
  render() {
    return (
      <div>
        <div>state:{this.state.counter2}</div>
        <button onClick={this.increase}>클릭!</button>
        <BoxClass num={this.state.value} />
      </div>
    )
  }
}
