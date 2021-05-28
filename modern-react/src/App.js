import Counter from "./component/start/2021-05-27/Counter";
import InputSample from "./component/start/2021-05-27/InputSample";
import InputSampleCopy from "./component/start/2021-05-28/InputSampleCopy";
import UserList from "./component/start/2021-05-28/UserList";
import users from "./component/start/2021-05-28/sample";
import { useRef } from "react";

function App() {

  const nextId=useRef(4);

  const onCreate=()=>{
    console.log(nextId.current);
  }

  return (
    <div className="App">
      <UserList />
    </div>
  );
}

export default App;

/*
<Wrapper>
    //컴포넌트가 props가 됨(children:태그와 태그 사이에 넣는 내용) 
  <Hello name="react" color="red" isSpecial={true}/>
  <Hello color="pink"/>
  </Wrapper> 
*/

/*
  <Counter/>
*/

/*
  <InputSample/>
*/


