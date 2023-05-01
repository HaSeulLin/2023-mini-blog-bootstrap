import React from 'react'
import BoardCard from '../page/BoardCard'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';


export default function Boardlist({boardlist}) {

  const navigate = useNavigate();

  return (
    <div>
      <h1>게시판</h1>
      <Button variant="outline-success"
        onClick={()=>{navigate('/boardform')}}
      >게시글 작성</Button>
      { // 배열을 이용하여 화면에 출력할 수 있다
        // map() : return 값을 배열로 전달
        // {} 안에서 return 값은 화면에 바로 출력된다
      }
      {
        boardlist.map((board)=>(
          <BoardCard board={board} key={board.id}/>
        ))
      }
    </div>
  )
}
