import React from 'react'
import '../css/practice.css'

export default function PracticePage() {
  return (
    <div>
        <h1> PracticePage </h1>

        <div className="wrapper">
            <img src={`${process.env.PUBLIC_URL}/logo192.png`} className="box"></img>
        </div>
    </div>
  )
}
