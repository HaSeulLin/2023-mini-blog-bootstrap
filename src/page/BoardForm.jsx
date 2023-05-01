import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';

// 게시물을 작성하고
// 작성완료 버튼을 누르면 게시물 추가하기
export default function BoardForm({setBoardlist, id, boardlist, user, addId}) {

  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addBoard = (e) => {
    // submit 기본 새로고침 막기
    e.preventDefault();

    // 1. 새로운 값 작성
    const newBoard = {
      id : id,
      title : title,
      content : content,
      name : user ? user.name : "익명",
      date : "2023-04-28"
    }
    // props로 가져온 값(변수)는 원본 값을 바꿀 수 없다
    // 원본값을 바꿔주려면 부모에서 값을 바꾸는 메소드를 
    // 들고 와서 실행해야 한다
    addId();

    // 2. 새로운 값이 추가된 새 배열 작성 (원본 배열 이용)
    const newBoardlist = boardlist.concat(newBoard);

    // 3. 새 배열을 set메소드를 이용하여 값 수정
    setBoardlist(newBoardlist);
    navigate('/boardlist');
  }

  return (
    <div>
      <Form className='mx-5'
        onSubmit={addBoard}
      >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>제목</Form.Label>
          <Form.Control type="text" placeholder="제목은 비워둘 수 없습니다."
            onChange={(e)=>{setTitle(e.target.value)}}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={3}
            onChange={(e)=>{setContent(e.target.value)}}
          />
        </Form.Group>
        <Button variant="outline-success" type='submit'
        >작성 완료</Button>
      </Form>
    </div>
  )
}
