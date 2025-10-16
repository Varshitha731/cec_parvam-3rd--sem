import React from 'react'

export default function UnOrderedList({value}) {
  return (
    <div>
        <h1>Things i do randomly</h1>
        <p>{value}</p>
        <ul>
            <li>Jump </li>
            <li>Sports</li>
            <li>Try new things</li>
        </ul>
    </div>
  )
}
