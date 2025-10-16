import React from 'react'

export default function OrderedList( {text}) {
  return (
    <div>
        <h1>My favorite hobbies</h1>
        <h2>{text}</h2>
       <ol>
        <li>Dancing</li>
        <li>Singing</li>
        <li>Drawing</li>
        <li>Cooking</li>
        <li>Trips</li>
       </ol>
    </div>
  )
}
