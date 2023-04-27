import React from 'react'
import { Link } from 'react-router-dom'

import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/esm/Container';
import Navbar from "react-bootstrap/Navbar";

// 라우터의 Link와 부트스트랩을 이용해서 작성
//  >> 예시를 그대로 사용하거나 수정하여 사용

// 리액트 부트스트랩에서 확인한 css 디자인
// 클래스 이름 >> 컴포넌트 이름과 비슷하게 작성
//            >> 그 컴포넌트의 디자인을 쓰고 싶을 때 참고해 이름을 css에 검색
// 마진, 패딩에 대한 클래스 이름
// m: 전체 마진, my:위아래 마진, mx:좌우 마진, mt/mb/me/ms 상하좌우
// 패딩은 m 대신 p 사용

// props 값을 받아올 때 NavHeader (props)로 전체 받아올 수 있다
// 필요에 따라서 구조분해를 통해서 객체의 값을 바로 받아올 수도 있다
export default function NavHeader({user}) {
  return (
    <div>
      <Navbar bg='primary' variant='dark'>
        <Container>
          <Link className='navbar-brand'>블로그</Link>
          <Nav className='me-auto'>
            <Link to="/" className='nav-link'>홈</Link>
            <Link to="/boardlist" className='nav-link'>게시판</Link>
            <Link to="/boardform" className='nav-link'>글쓰기</Link>

            {/** user의 값이 있을 때 user.name을 출력 */}
            {
              user ? <Navbar.Text>{user.name}</Navbar.Text> :
              <Link to="/loginform" className='nav-link'>로그인</Link>
            }
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
