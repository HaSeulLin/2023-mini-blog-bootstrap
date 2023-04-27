import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'

export default function Board({boardlist}) {
  // params 값으로 전달할 수 있는

  const params = useParams();
  const navigate = useNavigate();

  // boardlist는 전체 배열의 값
  // 지금 필요한 값
  // : 배열 중에서 id의 값이 params.id와 동일한 객체
  // find() 메소드를 이용하여 값 가져옴
  // board.id는 num, params.id는 string
  // === 사용하려면 parseInt(params.id)로 숫자 변환
  const board = boardlist.find((board)=> board.id == params.id);

  //  if (board===undefined) { navigate('/board'); } 
  // react 컴포넌트의 실행 순서
  // 1. 컴포넌트 안에 있는 순서대로 자바스크립트 실행
  // 2. return을 통해서 화면 출력
  // 3. useEffect() 마운트 할 때 자바스크립트 실행

  // 마운트할 때 실행하기 위해 빈 배열로 작성
  useEffect(()=>{
    if (board==undefined) { navigate('/') }
  },[]);

  return (
    <div>
      {
        board && (
        <>
          <h1>{ board.title }</h1>
          <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <span>id: { board.id }</span>
            <span>작성일: { board.date }</span>
            <span>작성자: { board.name }</span>
          </div>
          <p>{ board.content }</p>
        </>
        )
      }
    </div>
  )
}
