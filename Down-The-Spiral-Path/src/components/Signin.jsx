import React from 'react'

export default function Signin() {
  return (
    <div><h3>Sign up, and receive a free tarot reading!</h3>
    <form>
      <label>First name<br/>
        <input type="text" /><br/>
      </label>
      <label>Last name<br/>
        <input type="text" /><br/>
      </label>
      <label>Username<br/>
        <input type="text" /><br/>
      </label>
      <label>Street Address<br/>
        <input type="text" /><br/>
      </label>
      <label>City<br/>
        <input type="text" /><br/>
      </label>
      <label>State<br/>
        <input type="text" /><br/>
      </label>
      <label>Zip<br/>
        <input type="text" /><br/>
      </label>
      <br/>
      <input type='submit'></input>
    </form>
    
    </div>
  )
}
