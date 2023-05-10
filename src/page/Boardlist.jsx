import React, { useState } from 'react'
import BoardCard from '../page/BoardCard'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';


export default function Boardlist({boardlist}) {

  const navigate = useNavigate();
  const [list, setList] = useState(boardlist);
  const merryList = boardlist.filter((m)=>m.name==="Merrybone");
  const edselList = boardlist.filter((m)=>m.name==="Edsel");


  const showList = (name) => {
    if (name==="all") {
      return setList(boardlist);
    }
    else if (name==="merrybone") {
      return setList(merryList);
    }
    else if (name==="edsel") {
      return setList(edselList);
    }
    else {
      return setList(boardlist);
    }
  }


  return (
    <div>
      <h1>게시판</h1>
      <Button variant="success"
        onClick={()=>{navigate('/boardform')}}
      >게시글 작성</Button>
      <div style={{display:'flex', justifyContent:'center'}}>
        <Button variant="outline-success" name="all"
          onClick={(e)=>{showList(e.target.name)}}
        >ALL</Button>
        <Button variant="outline-success" name="merrybone"
          onClick={(e)=>{showList(e.target.name)}}
        >Merrybone</Button>
        <Button variant="outline-success" name="edsel"
          onClick={(e)=>{showList(e.target.name)}}
        >Edsel</Button>
      </div>
      { // 배열을 이용하여 화면에 출력할 수 있다
        // map() : return 값을 배열로 전달
        // {} 안에서 return 값은 화면에 바로 출력된다
      }
      {
        list.map((board)=>(
          <BoardCard board={board} key={board.id}/>
        ))
      }
    </div>
  )
}
