import './App.css';

import React from "react"
import ToDo from "./ToDo"
// import Sample from "./Sample"

import {Paper, List, Container} from "@material-ui/core"
import AddToDo from "./AddToDo"



class App extends React.Component {
  constructor(props) {
    //App.js 에서 넘겨준 속성들을 자신의 props에 저장
    //this.props.item 이라는 속성에 앞에서 전달한 데이터를 저장
    super(props);
    this.state = {items:[{id:0, 'title':'Hello React', "done":false},
    {id :1, 'title':'Bye React', 'done':true},
    {id :2, 'title': 'Comeback React', 'done':false}]
                  }

  }
  //이게 없으면 브라우저에 아무것도 보이지 않아요
  render() {
    //배열을 순회하면서 출력할 내용을 생성
    let display = this.state.items.map((item, idx) => (
      <ToDo item = {item} key={item.id} />
    ))
    return ( 
      <div className='App'>
        <Container maxWidth ="md">
          <AddToDo add = {this.add} />
          {display}
        </Container>
      </div>
    )
  }  
  add = (item) => {
    //react는 props는 수정할 수 없고
    //state는 수정이 가능하지만 원본을 직접 수정하는 것은 안되고
    //setState 메서드를 이용해서만 수정이 가능합니다.
    const thisItems = this.state.items ;
    
    //item의 id와 done 값을 설정 - title 만 입력하기 때문
    item.id = 'ID_' + thisItems.length;
    item.done = false

    //복사한 데이터에 데이터를 추가
    thisItems.push(item)
    //복사한 데이터를 다시 state에 적용, 결론! 직접은 안된당
    this.setState({items:thisItems}) ;
  }
} 


export default App;
