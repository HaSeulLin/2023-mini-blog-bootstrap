import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';


// 리액트 부트스트랩에서 제공해주는 컴포넌트에서는
// 바로 이벤트를 넣어도 그 이벤트가 실행된다
// 내가 직접 만든 컴포넌트는 이벤트/클래스네임은
// 전부 props 값으로 전달된다
export default function LoginForm({setUser}) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate('');

  const loginUser = (e) => {
    e.preventDefault();
    setUser({name:name});
    navigate('/');
  };

  return (
    <div>
      <Form
        className='pt-5' style={{width:"500px", margin:"auto"}}
        onSubmit={loginUser}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>아이디</Form.Label>
          <Form.Control
            type="text" placeholder="아이디를 입력해 주세요."
            onChange={(e)=>{setName(e.target.value);}}  
          />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="비밀번호를 입력해 주세요." />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}
