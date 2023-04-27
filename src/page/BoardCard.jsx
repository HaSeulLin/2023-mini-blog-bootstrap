import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export default function Boardlist({board}) {
  return (
    <div>
        <Card key={board.id} style={{ width: '18rem', margin:'auto'}}>
            <Card.Body>
                <Link to={`/boardlist/${board.id}`} style={{borderBottom:'1px dotted blue'}}>{board.title}</Link>
                <Card.Text>
                    {board.date}
                </Card.Text>
            </Card.Body>
          </Card>
    </div>
  )
}
