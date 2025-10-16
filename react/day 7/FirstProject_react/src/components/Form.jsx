import React from 'react'

export default function Form({text,value, arr}) {
  return (
    <div>
      <h1>{text}</h1>
        <form action="">
            <label htmlFor="Name">Name </label>
            <input type="name " class="name" id="name" 
            placeholder="Enter your name : " />
        </form>
        <form action="">
            <label htmlFor="password">Password </label>
            <input type="password " class="password" id="password" 
            placeholder="Enter your password : " />
        </form>
        <form action="">
            <label htmlFor="c-password">C-Password</label>
            <input type="c-password " class="c-password" id="c-password" 
            placeholder="Plese confirm your password : " />
        </form>
         <p>{value}</p>
         <p>{arr}</p>

    </div>
  )
}
