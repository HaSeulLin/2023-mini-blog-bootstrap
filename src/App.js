// 리액트 부트스트랩 사용하기 위해 css import 필요
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// 라우터 사용할 때는 BrowserRouter를 들고와서 사용
import {BrowserRouter, Route, Routes} from 'react-router-dom'

// 각각의 페이지 import
import Home from './page/Home';
import Boardlist from './page/Boardlist';
import Board from './page/Board';
import BoardForm from './page/BoardForm';
import LoginForm from './page/LoginForm';
import NavHeader from './components/NavHeader';

function App() {
  // 주소와 페이지 (컴포넌트 연결)
  return (
    <div className="App">
      <BrowserRouter>
      {/** NavHeader의 Link 사용하기 위해 BrowserRouter 안에 사용 */}
      <NavHeader />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/boardlist' element={<Boardlist />} />
            <Route path='/board' element={<Board />} />
            <Route path='/boardform' element={<BoardForm />} />

            <Route path='/loginform' element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
