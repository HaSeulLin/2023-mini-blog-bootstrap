// 리액트 부트스트랩 사용하기 위해 css import 필요
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// 리액트 슬릭
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// 라우터 사용할 때는 BrowserRouter를 들고와서 사용
import {BrowserRouter, Route, Routes} from 'react-router-dom'

// 각각의 페이지 import
import Home from './page/Home';
import Boardlist from './page/Boardlist';
import Board from './page/Board';
import BoardForm from './page/BoardForm';
import LoginForm from './page/LoginForm';
import NavHeader from './components/NavHeader';
import PracticePage from './page/PracticePage';

import { useState } from 'react';

// 이 값이 바뀌었을 때 화면에 출력할 필요가 없으므로
// 컴포넌트 밖에 작성을 하여 값이 바뀔 수 있도록 하낟
// 컴포넌트 안에서 작성하면 업데이트 할 때마다 값이 고정됨
// 값이 바뀔 때마다 화면을 바꾸고 싶으면 useState() 사용
let id = 3;

function App() {
  // 데이터를 하위 컴포넌트에 전달하기 위해서
  // 상위 컴포넌트에서 데이터를 작성하고 props값을 전달한다
  // 상위 데이터값을 하위에서 공유하기 때문에 동일한 값이 출력

  // 유저 데이터
  // 처음 값 null, "", [], 더미데이터로 내용 확인 후 선택
  // 처음 값을 null로 두었을 때 주의점
  // null과 undefined는 속성을 가질 수 없기 때문에 속성에 접근하면 오류가 난다
  // ** 확실하게 처음에는 속성에 접근하지 않을 때 사용 **
  // [] 배열값을 사용할 때 초기값을 null이나 ""로 두면
  // map() 메소드를 쓸 수 없으므로 주의 
  const [user, setUser] = useState(null);
  const [boardlist, setBoardlist] = useState(
    [
      {
        id : 1,
        title : "첫번째 게시물",
        content : "게시물의 내용을 작성합니다",
        name : "Merrybone",
        date : "2023-04-27"
      },
      {
        id : 2,
        title : "두번째 게시물",
        content : "게시물의 내용을 작성합니다",
        name : "Edsel",
        date : "2023-04-27"
      }
    ]
  )

  // id 값을 1씩 증가하는 함수
  const addId = () => {
    id = id + 1;
  }

  // 주소와 페이지 (컴포넌트 연결)
  return (
    <div className="App">
      <BrowserRouter>
      {/** NavHeader의 Link 사용하기 위해 BrowserRouter 안에 사용 */}
      <NavHeader user={user}/>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/boardlist' element={<Boardlist boardlist={boardlist}/>} />
            <Route path='/boardlist/:id' element={<Board boardlist={boardlist} />} />
            <Route path='/boardform'
              element={<BoardForm
                setBoardlist={setBoardlist} id={id}
                boardlist={boardlist} user={user} addId={addId}
              />} />

            <Route path='/loginform' element={<LoginForm setUser={setUser}/>} />
            <Route path='/practice' element={<PracticePage />} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
