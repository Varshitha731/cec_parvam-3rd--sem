import React from 'react'

export default function FormComponent() {
  return (
    <div><form action="">
        <label htmlFor="">Name : </label>
        <input type="text" name="name" id="name" placeholder="Enter your name"/>
        </form>
        <form action="">
        <label htmlFor="">Email : </label>
        <input type="email" name="email" id="email" placeholder="Enter your E-mail id "/>
        </form>
        <form action="">
        <label htmlFor="">Phone Number : </label>
        <input type="number" name="number" id="number" placeholder="Enter your phone number "/>
        </form>
        </div>
        
  )
}

